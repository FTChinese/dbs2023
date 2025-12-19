//
// Version: 1.0.2
// Author:	JM
// Date:	15 December 2025
//
//

(function () {
	// Ensure dataLayer exists (won’t throw if GTM not present)
	window.dataLayer = window.dataLayer || [];

	const intervalTime = [1, 2, 3, 5, 10, 15, 25, 50, 75];

	// Collect media elements
	const mediaElements = [
		...document.querySelectorAll("video"),
		...document.querySelectorAll("audio"),
	];

	console.log("TVN: videoTrackingHtml.js - init");
	console.log("mediaElements: " + mediaElements);

	// Per-element state
	const stateByEl = new Map();

	function getState(el) {
		if (!stateByEl.has(el)) {
			stateByEl.set(el, {
				intervalRef: null,
				firedPercents: [],
			});
		}
		return stateByEl.get(el);
	}

	function safeTrackEvent(action, category, label, value) {
		try {
			if (typeof AM_TrackEvent === "function") {
				AM_TrackEvent(action, category, label, value || "");
			}
		} catch (err) {
			// Don’t break playback if tracking fails
			console.warn("TVN: AM_TrackEvent failed", err);
		}
	}

	function safePermutive(duration, currentTime) {
		try {
			if (typeof permutiveTrackVideo === "function") {
				permutiveTrackVideo(duration, currentTime);
			}
		} catch (err) {
			console.warn("TVN: permutiveTrackVideo failed", err);
		}
	}

	function buildLabel(media) {
		const name = (media.dataset && media.dataset.name) ? String(media.dataset.name).trim() : "";
		return name ? (document.title + " - " + name) : document.title;
	}

	function getType(media) {
		// Prefer actual tag name (video/audio)
		const t = (media && media.tagName) ? media.tagName.toLowerCase() : "";
		return (t === "audio") ? "audio" : "video";
	}

	function stopTimer(media) {
		const st = getState(media);
		if (st.intervalRef) {
			clearInterval(st.intervalRef);
			st.intervalRef = null;
		}
	}

	function startTimer(media) {
		const st = getState(media);

		// Clear any existing timer for THIS element
		stopTimer(media);

		st.intervalRef = setInterval(function () {
			const duration = media.duration;

			// Guard against streams / unknown duration / divide by zero
			if (!Number.isFinite(duration) || duration <= 0) {
				return;
			}

			// If paused, don’t keep burning CPU (extra safety)
			if (media.paused && !media.ended) {
				return;
			}

			const currentPercent = Math.round((media.currentTime / duration) * 100);
			const type = getType(media);

			const thisEventLabel = buildLabel(media);
			const thisEventCategory = (type === "video") ? "Video" : "Audio";
			const thisEventValue = ""; // populate if you actually have a numeric value to send

			if (intervalTime.includes(currentPercent) && !st.firedPercents.includes(currentPercent)) {
				st.firedPercents.push(currentPercent);

				const thisEventAction = String(currentPercent) + "% watched";

				// Push to dataLayer (safe, because we created it above)
				window.dataLayer.push({
					event: "media_progress",
					mediaTitle: thisEventLabel,
					mediaType: thisEventCategory, // or `type` if you want "video"/"audio"
					mediaProgress: currentPercent + "%",
				});

				safeTrackEvent(thisEventAction, thisEventCategory, thisEventLabel, thisEventValue);
				safePermutive(duration, currentPercent);
			}

			if (media.ended) {
				// Finished
				console.log("TVN: Finished");

				st.firedPercents = [];

				safeTrackEvent("100% watched", thisEventCategory, thisEventLabel, thisEventValue);
				safePermutive(duration, 100);

				stopTimer(media);
			}
		}, 500);
	}

	mediaElements.forEach(function (el) {
		// PLAY
		el.addEventListener("play", function () {
			const type = getType(el);
			const category = (type === "video") ? "Video" : "Audio";
			const label = buildLabel(el);

			console.log("TVN: playing");
			safeTrackEvent("playing", category, label, "");

			startTimer(el);
		});

		// PAUSE
		el.addEventListener("pause", function () {
			// Only treat as a "pause" if it hasn’t ended
			if (el.ended) return;

			const type = getType(el);
			const category = (type === "video") ? "Video" : "Audio";
			const label = buildLabel(el);

			console.log("TVN: paused");
			safeTrackEvent("pause", category, label, "");

			// Stop timer on pause (prevents repeated % checks while paused)
			stopTimer(el);
		});

		// ENDED (extra safety; also catches cases where interval doesn’t run)
		el.addEventListener("ended", function () {
			stopTimer(el);
		});
	});
})();