/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://pif.ftmailbox.cn/pif/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/lottie-2030 copy.json";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/lottie-2030.json";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/lottie-432m copy.json";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/lottie-432m.json";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/lottie-195.json";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/lottie-2030.json";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return GSCache; });
/* unused harmony export Animation */
/* unused harmony export Timeline */
/* unused harmony export Tween */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return PropTween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gsap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Power0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Power1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Power2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Power3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Power4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Quad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Cubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Quart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Quint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return Strong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return Elastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SteppedEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Sine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return Expo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return Circ; });
/* unused harmony export TweenMax */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Timeline; });
/* unused harmony export default */
/* unused harmony export wrap */
/* unused harmony export wrapYoyo */
/* unused harmony export distribute */
/* unused harmony export random */
/* unused harmony export snap */
/* unused harmony export normalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return getUnit; });
/* unused harmony export clamp */
/* unused harmony export splitColor */
/* unused harmony export toArray */
/* unused harmony export selector */
/* unused harmony export mapRange */
/* unused harmony export pipe */
/* unused harmony export unitize */
/* unused harmony export interpolate */
/* unused harmony export shuffle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _numExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return _numWithUnitExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return _isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return _isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return _renderComplexString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return _relExp; });
/* unused harmony export _setDefaults */
/* unused harmony export _removeLinkedListItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return _forEachName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return _sortPropTweensByPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return _colorStringFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return _replaceRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return _checkPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return _plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return _ticker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return _config; });
/* unused harmony export _roundModifier */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return _round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return _missingPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return _getSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return _getCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _colorExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return _parseRelative; });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt < l && wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (!config) return;
  config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  if (_windowExists() || config.headless) {
    // edge case: some build tools may pass in a null/undefined value
    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _registerPluginQueue.forEach(_createPlugin);
        }

        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;

    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function () {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c, function (func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self, function (func) {
      return self.add(null, func);
    }) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      (function () {
        var tweens = _this4.getTweens(),
            i = _this4.data.length,
            t;

        while (i--) {
          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
          t = _this4.data[i];

          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort


        tweens.map(function (t) {
          return {
            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function (o) {
          return o.t.revert(revert);
        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

        i = _this4.data.length;

        while (i--) {
          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
          t = _this4.data[i];

          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }

        _this4._r.forEach(function (f) {
          return f(revert, _this4);
        });

        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context, function (f) {
      return context.add(null, f);
    });
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;

    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.12.5";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var _jquery = __webpack_require__(65);

var _jquery2 = _interopRequireDefault(_jquery);

var _gsap = __webpack_require__(60);

var _ScrollTrigger = __webpack_require__(59);

__webpack_require__(9);

var _contentI = __webpack_require__(10);

var _contentI2 = _interopRequireDefault(_contentI);

var _contentI3 = __webpack_require__(11);

var _contentI4 = _interopRequireDefault(_contentI3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  Link media
__webpack_require__(64);
//  Styles

// JS

// import { SplitText } from "gsap/SplitText";
// import { TextPlugin } from "gsap/TextPlugin";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

_gsap.gsap.registerPlugin(_ScrollTrigger.ScrollTrigger);

var Site = void 0;
var breakpointSite = 768;
var pageContainer = '#ag';

var touch = matchMedia('(hover: none)').matches;

(function ($) {
	'use strict';

	Site = {
		/**
   * initialize prototype
   *
   */
		init: function init(elt) {
			var self = this;

			if ($('#pif-future-of-food').length > 0) {
				$('#pif-future-of-food').html((0, _contentI2.default)());
			}
			if ($('#pif-future-of-sport').length > 0) {
				$('#pif-future-of-sport').html((0, _contentI4.default)());
			}

			// self.scrollToAnchor();
			self.newWindowLink();

			// const touch = matchMedia('(hover: none)').matches;
			// if(document.referrer == "") {
			// 	if(touch) {
			// 		// $('.cp-bg-layer, .flex-v-center:not(.h-auto) ').css('height', $(window).outerHeight());
			// 	}
			// }
			// if(touch) {
			// 	window.addEventListener('resize', () => {
			// 		// We execute the same script as before
			// 		// $('.cp-bg-layer, .flex-v-center:not(.h-auto) ').css('height', $(window).outerHeight());
			// 	});
			// }

			self.removeOrphans();
			self.loazyloadImage('.wrapper-article');

			document.fonts.ready.then(function () {
				self.scrollAnimation();
				self.inviewAnimation();
				// self.countUpNumbers();
				self.scrollRefresh();
				// self.showRelevantCTA();
				// self.scrollIndicator();
			});
			// const scroll = new LocomotiveScroll();
		},

		// showRelevantCTA: function(){
		// 	try {
		// 		// Use Intl.DateTimeFormat to determine the user's time zone
		// 		var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		// 		var timeZoneParts = timeZone.split('/');
		// 		var region = timeZoneParts[0]; // e.g., "Europe", "Asia"
		// 		var city = timeZoneParts[timeZoneParts.length - 1]; // e.g., "London", "New_York"


		// 		// Map time zones to country codes (similar to the example)
		// 		const timeZoneCountryMap = {
		// 			London: 'GB',
		// 			New_York: 'US',
		// 			// Add additional mappings here based on the example logic
		// 		};

		// 		// Determine the country code based on the detected city
		// 		var countryCode = timeZoneCountryMap[city] || 'International';

		// 		// Update CTA logic based on the detected country code
		// 		if (countryCode === 'GB') {
		// 			// UK visitor
		// 			console.log('Welcome, UK visitor!');
		// 			$('.end-page-cta-title').html($('.end-page-cta-title').attr('data-title-uk'));

		// 			var url = $('.end-page-cta-btn').attr('data-url-uk');
		// 			var fixedUrl = url.replace(/\\_/g, "_");

		// 			$('.end-page-cta-btn').attr('href', fixedUrl);
		// 		} else {
		// 			// Non-UK visitor
		// 			// console.log('Welcome, international visitor!');
		// 		}
		// 	} catch (error) {
		// 		// console.error('Error determining time zone:', error);
		// 		// Fallback for international visitors
		// 		// console.log('Defaulting to international visitor.');
		// 	}
		// },


		removeOrphans: function removeOrphans() {
			// remove orphans / widows 
			$('#ag p, .fix-orphans, .cite-square').each(function () {
				var text = $(this).html();
				var words = text.split(' ');
				var totalWords = words.length;

				if (!$(this).parents().hasClass('dont-apply-words-nowrap')) {

					// Ensure there are at least 2 words
					if (totalWords >= 2) {
						var formattedLastWords = '<span class="words-nowrap">' + words[totalWords - 2] + ' ' + words[totalWords - 1] + '</span>';
						var newText = text.substring(0, text.length - (words[totalWords - 2].length + words[totalWords - 1].length + 1)) + formattedLastWords;
						$(this).html(newText);
					}
				}
			});
		},
		scrollRefresh: function scrollRefresh() {
			// refresh because of advert loading changing the page length
			if ($('.article-future-of-sport').length > 0) {
				_ScrollTrigger.ScrollTrigger.create({
					trigger: '.stat-i2-1',
					// markers: true,
					start: "top bottom",
					onEnter: function onEnter() {
						_ScrollTrigger.ScrollTrigger.refresh();
					}
				});
			}

			if ($('.article-future-of-food').length > 0) {
				// ScrollTrigger.create({
				// 	trigger: '.stat-i2-1', 
				// 	// markers: true,
				// 	start: "top bottom",
				// 	onEnter: function(){ 
				// 		ScrollTrigger.refresh()
				// 	}
				// });
			}
		},

		/**
   * animation on the stats
   *
   */
		countUpNumbers: function countUpNumbers(section) {

			function numberWithCommas(x) {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}

			function isInt(n) {
				return n % 1 === 0;
			}
			function isFloat(n) {
				return Number(n) === n && n % 1 !== 0;
			}

			function hasDotOrComma(value) {
				return value.indexOf(".") !== -1 || value.indexOf(",") !== -1;
			}

			function hasTwoDecimals(value) {
				var parts = value.split('.');
				return parts.length === 2 && parts[1].length === 2;
			}

			function animateState(el) {
				var count = $(el);
				var number = count.attr("data-number");
				var prefix_val = count.attr('data-prefix') || '';
				var suffix_val = count.attr('data-suffix') || '';
				var comma = isFloat(count.attr("data-number"));
				var countUpDuration = $(el).attr('data-duration') || 1;

				var increment = void 0;
				if (hasTwoDecimals(number)) {
					increment = 0.01; // Use 0.01 for two decimals
				} else if (hasDotOrComma(number)) {
					increment = 0.1; // Use 0.1 for other decimals
				} else {
					increment = 1; // Use 1 for integers
				}

				_gsap.gsap.to(count, {
					innerText: number,
					snap: { innerText: increment },
					stagger: {
						each: 1,
						onUpdate: function onUpdate() {
							var targetText = parseFloat(this.targets()[0].innerText);

							// Check the number of decimal places in the final target value
							var decimalPlaces = 0;
							if (number.includes(".")) {
								decimalPlaces = number.split(".")[1].length;
							}

							// Format the number with the appropriate number of decimal places
							var formattedNumber = targetText.toFixed(decimalPlaces);

							// Update the innerHTML with prefix and suffix
							this.targets()[0].innerHTML = prefix_val + formattedNumber + suffix_val;
						}
					},
					duration: countUpDuration,
					ease: "none" // Set ease to "none" for a linear transition
				});
			}

			$('.js-stat-number').each(function (el) {

				var $el = $(this);
				var $el_trigger = $(this).parents('.ivanimr-anim');

				var el_suffix = $(this).attr('data-suffix');
				var el_prefix = $(this).attr('data-prefix');

				var start_val = "top bottom";
				if ($el_trigger.hasClass('start-bottom')) {
					start_val = "bottom bottom";
				}

				// ScrollTrigger.create({
				// 	trigger: $el_trigger, 
				// 	start: start_val,
				// 	// markers: true,
				// 	id: "stat-view",
				// 	onEnter: function(){
				// 		$el.html(el_prefix+0+el_suffix);
				// 		animateState($el);
				// 		// if (!$el.hasClass('is-inview')) {
				// 			// $el.addClass('is-inview');
				// 		// }
				// 	},
				// 	onEnterBack: function(){
				// 		// $('.js-stat-number').html(0);
				// 		// animateState($el);
				// 	}
				// });

			});
		},

		// scrollIndicator: function() {
		// 	const IDLE_TIMEOUT = 7000; // Milliseconds (change this to 5000 for 5 seconds)
		// 	let idleTimer;

		// 	var $indicator = $('.fixed-scroll-indicator');

		// 	function resetIdleTimer() {
		// 		$indicator.attr('data-visible','0');
		// 	  	clearTimeout(idleTimer);
		// 	  	idleTimer = setTimeout(handleInactivity, IDLE_TIMEOUT);
		// 	}

		// 	function handleInactivity() {
		// 	  	// User has been inactive for 5 seconds
		// 	  	$indicator.attr('data-visible','1');
		// 	}

		// 	function stopInactivityDetection() {
		// 	  	clearTimeout(idleTimer);
		// 	  	// You can optionally remove event listeners here if needed
		// 	}

		// 	// Attach event listeners to capture user interactions
		// 	window.addEventListener('mousemove', resetIdleTimer);
		// 	window.addEventListener('mousedown', resetIdleTimer);
		// 	window.addEventListener('touchstart', resetIdleTimer);
		// 	window.addEventListener('keydown', resetIdleTimer);
		// 	window.addEventListener('scroll', resetIdleTimer);

		// 	// Add event listener for user leaving the page (beforeunload)
		// 	window.addEventListener('beforeunload', stopInactivityDetection);

		// 	// Call resetIdleTimer on page load to start the timer
		// 	resetIdleTimer();


		// 	ScrollTrigger.create({
		// 		trigger: '.client-footer', 
		// 		scrub: true,
		// 		start: "top bottom",
		// 		onEnter: function(){
		// 			$indicator.find('i').hide();
		// 		},
		// 		onLeaveBack: function(){
		// 			$indicator.find('i').show();
		// 		},
		// 	});

		// },
		debounce: function debounce(func, wait, immediate) {
			var timeout;
			return function () {
				var context = this,
				    args = arguments;
				var later = function later() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		},

		animateState: function animateState(el) {
			var self = this;

			function numberWithCommas(x) {
				return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}

			function isInt(n) {
				return n % 1 === 0;
			}
			function isFloat(n) {
				return Number(n) === n && n % 1 !== 0;
			}

			function hasDotOrComma(value) {
				return value.indexOf(".") !== -1 || value.indexOf(",") !== -1;
			}

			function hasTwoDecimals(value) {
				var parts = value.split('.');
				return parts.length === 2 && parts[1].length === 2;
			}

			var count = $(el);
			var number = count.attr("data-number");
			var prefix_val = count.attr('data-prefix') || '';
			var suffix_val = count.attr('data-suffix') || '';
			var comma = isFloat(count.attr("data-number"));
			var countUpDuration = $(el).attr('data-duration') || 1;

			var increment = void 0;
			if (hasTwoDecimals(number)) {
				increment = 0.01; // Use 0.01 for two decimals
			} else if (hasDotOrComma(number)) {
				increment = 0.1; // Use 0.1 for other decimals
			} else {
				increment = 1; // Use 1 for integers
			}

			_gsap.gsap.to(count, {
				innerText: number,
				snap: { innerText: increment },
				stagger: {
					each: 1,
					onUpdate: function onUpdate() {
						var targetText = parseFloat(this.targets()[0].innerText);

						// Check the number of decimal places in the final target value
						var decimalPlaces = 0;
						if (number.includes(".")) {
							decimalPlaces = number.split(".")[1].length;
						}

						// Format the number with the appropriate number of decimal places
						var formattedNumber = targetText.toFixed(decimalPlaces);

						// Update the innerHTML with prefix and suffix
						this.targets()[0].innerHTML = prefix_val + formattedNumber + suffix_val;
					}
				},
				duration: countUpDuration,
				ease: "none" // Set ease to "none" for a linear transition
			});
		},
		scrollAnimation: function scrollAnimation(section) {
			var self = this;

			$('.cp-scrolly').each(function () {
				var $triggerElt = $(this);
				var $pinElt = $triggerElt.find('.sticky-content');

				_ScrollTrigger.ScrollTrigger.create({
					trigger: $triggerElt,
					scrub: true,
					pin: $pinElt,
					// anticipatePin: true,
					start: "top 40px",
					end: "bottom bottom",
					pinSpacing: false,
					animation: _gsap.gsap.to($pinElt.find('img'), { scale: 1.01, duration: 1 })
				});
			});

			_ScrollTrigger.ScrollTrigger.matchMedia({
				'(max-width:767px)': function maxWidth767px() {

					var nav_height = $('.pc.m-pc').outerHeight();
					var start_top_val = 'top ' + nav_height;

					$('.stat-will-pin').each(function () {
						var $triggerElt = $(this);
						var $pinElt = $triggerElt.find('.stat__inner');

						_ScrollTrigger.ScrollTrigger.create({
							trigger: $triggerElt,
							scrub: true,
							pin: $pinElt,
							// anticipatePin: true,
							start: start_top_val,
							end: "200%",
							pinSpacing: false
						});
					});

					$('.stat-number--2030-sticky').each(function () {
						_ScrollTrigger.ScrollTrigger.create({
							trigger: '.stat-number--2030',
							scrub: true,
							pin: true,
							// anticipatePin: true,
							start: 'top 50%',
							end: "100%",
							pinSpacing: false
						});
					});
				},
				'(min-width:768px)': function minWidth768px() {

					var nav_height = $('.pc.m-pc').outerHeight();
					var start_top_val = 'top ' + nav_height;

					$('.stat-will-pin').each(function () {
						var $triggerElt = $(this);
						var $pinElt = $triggerElt.find('.stat__inner');

						_ScrollTrigger.ScrollTrigger.create({
							trigger: $triggerElt,
							scrub: true,
							pin: $pinElt,
							// anticipatePin: true,
							start: start_top_val,
							end: "200%",
							pinSpacing: false
						});
					});

					$('.pif-square').each(function () {
						var $el = $(this);
						var $triggerElt = $el.parents();;

						if (!$el.hasClass('pif-square--static')) {

							var el_b = $el.attr('data-top');

							_ScrollTrigger.ScrollTrigger.create({
								trigger: $triggerElt,
								scrub: true,
								// anticipatePin: true,
								start: "top bottom",
								end: "bottom top",
								pinSpacing: false,
								animation: _gsap.gsap.to($el, { 'top': el_b, duration: 1 })
							});
						}
					});
				},
				'(min-width:1024px)': function minWidth1024px() {

					$('.s2-sticky').each(function () {
						_ScrollTrigger.ScrollTrigger.create({
							trigger: '.s2-sticky',
							scrub: true,
							pin: true,
							// anticipatePin: true,
							start: "top 100px",
							end: '200%',
							pinSpacing: false
						});
					});

					$('.s3-sticky').each(function () {
						_ScrollTrigger.ScrollTrigger.create({
							trigger: '.s3-sticky',
							scrub: true,
							pin: true,
							// anticipatePin: true,
							start: "bottom bottom",
							end: '140%',
							pinSpacing: false
						});
					});
				}
			});

			$('.js-trigger-lottie').each(function () {
				var trigger_el = $(this);
				var start_val = $(this).attr('data-start');

				var lottiePlayer = trigger_el.find('lottie-player').get(0);

				_ScrollTrigger.ScrollTrigger.create({
					trigger: trigger_el,
					scrub: true,
					// markers: true,
					// anticipatePin: true,
					start: "bottom bottom",
					// start: "end bottom",
					onEnter: function onEnter() {
						// lottiePlayer.seek(0);
						lottiePlayer.play();
					} // Start playing when entering the viewport
					// onLeave: () => lottiePlayer.stop(), // Stop when leaving
					// onEnterBack: () => lottiePlayer.play(), // Play when scrolling back into view
					// onLeaveBack: () => {
					// 	lottiePlayer.seek(0);
					// 	lottiePlayer.play()
					// },
				});

				_ScrollTrigger.ScrollTrigger.create({
					trigger: trigger_el,
					scrub: true,
					// markers: true,
					// anticipatePin: true,
					start: start_val,
					onLeaveBack: function onLeaveBack() {
						lottiePlayer.seek(0);
					}
				});

				// ScrollTrigger.create({
				// 	trigger: trigger_el,
				// 	scrub: true,
				// 	// markers: true,
				// 	// anticipatePin: true,
				// 	start: "top bottom",
				//     onEnterBack: () => lottiePlayer.play(), // Play when scrolling back into view
				// });
			});

			if ($('.article-future-of-food').length > 0) {

				// // Define a function to be debounced
				// function onResize() {

				// }

				// // Wrap the function with debounce
				// const debouncedResize = self.debounce(onResize, 200, false);

				// // Attach the debounced function to the window resize event
				// window.addEventListener('resize', debouncedResize);


				_ScrollTrigger.ScrollTrigger.create({
					trigger: '.js-cp-fixed-scroller',
					scrub: true,
					// markers: true,
					id: "cp-fixed",
					// anticipatePin: true,
					start: "bottom 200%",
					end: 'bottom -100%',
					onEnter: function onEnter() {
						$('.cp-fixed').addClass('is-visible');
					},
					onLeaveBack: function onLeaveBack() {
						$('.cp-fixed').removeClass('is-visible');
					},
					onEnterBack: function onEnterBack() {
						$('.cp-fixed').addClass('is-visible');
					},
					onLeave: function onLeave() {
						$('.cp-fixed').removeClass('is-visible');
					}
				});

				_ScrollTrigger.ScrollTrigger.create({
					trigger: '.js-i1-intro-trigger',
					scrub: true,
					// anticipatePin: true,
					start: "top 40px",
					end: "100%",
					onEnter: function onEnter() {},
					onLeaveBack: function onLeaveBack() {}
				});

				_gsap.gsap.timeline().to('.cp-scrolly-intro--l2 img', { yPercent: 7, duration: 1 }).to('.cp-scrolly-intro--l3 img', { yPercent: 6, duration: 1 }, '<').to('.cp-scrolly-intro--l4 img', { yPercent: 5, duration: 1 }, '<').to('.cp-scrolly-intro--l5 img', { yPercent: 4, duration: 1 }, '<').to('.cp-scrolly-intro--l6 img', { yPercent: 0, duration: 1 }, '<').to('.cp-scrolly-intro--l7 img', { yPercent: -2, duration: 1 }, '<').to('.cp-scrolly-intro--title', { yPercent: -10, duration: 1 }, '<')
				// .to('.cp-scrolly-intro--scroll', {opacity: 0, duration:0.2 }, '<')
				.to('.titleboxed', { opacity: 1, duration: 0.2 }, '-=80%').to('.titleboxed', { opacity: 1, duration: 0.1 });

				_ScrollTrigger.ScrollTrigger.create({
					trigger: '.js-i1-intro-trigger',
					scrub: true,
					// anticipatePin: true,
					start: "top bottom",
					end: "bottom top",
					animation: _gsap.gsap.timeline()
					// .to('.cp-scrolly-intro--l2 img', {yPercent: 7, duration:1 })
					// .to('.cp-scrolly-intro--l3 img', {yPercent: 6, duration:1 }, '<')
					// .to('.cp-scrolly-intro--l4 img', {yPercent: 5, duration:1 }, '<')
					// .to('.cp-scrolly-intro--l5 img', {yPercent: 4, duration:1 }, '<')
					// .to('.cp-scrolly-intro--l6 img', {yPercent: 0, duration:1 }, '<')
					// .to('.cp-scrolly-intro--l7 img', {yPercent: -2, duration:1 }, '<')
					// .to('.cp-scrolly-intro--title', {yPercent: -10, duration:1 }, '<')
					.to('.cp-scrolly-intro--scroll', { opacity: 0, duration: 0.2 }, '<')
					// .to('.titleboxed', {opacity: 1, duration:0.2 }, '-=80%')
					// .to('.titleboxed', {opacity: 1, duration:0.1 })
					.to('.cp-scrolly-intro--title', { y: '-100vh', duration: 2 }).to('.titleboxed', { y: '-100vh', opacity: 1, duration: 2 }, '<').to('.cp-scrolly-intro--overlay', { opacity: 0, duration: 2 }, '<'),

					onEnter: function onEnter() {},
					onLeaveBack: function onLeaveBack() {}
				});

				$('.trigger-stat').each(function () {
					var $triggerElt = $(this);
					var target = $(this).attr('data-target');

					_ScrollTrigger.ScrollTrigger.create({
						trigger: $triggerElt,
						scrub: true,
						// markers: true,
						// anticipatePin: true,
						start: "top bottom",
						pinSpacing: false,
						onEnter: function onEnter() {

							$(target).addClass('is-inview');

							// var $el = $(target).find('.js-stat-number');

							// $(target).find('.js-stat-number').each(function(){
							// 	 var $el = $(this);
							// 	const el_suffix = $el.attr('data-suffix');
							// 	const el_prefix = $el.attr('data-prefix');

							// 	$el.html(el_prefix+0+el_suffix);
							// 	self.animateState($el);
							// })
						},
						onLeaveBack: function onLeaveBack() {
							$(target).removeClass('is-inview');
						}
					});
				});

				// ScrollTrigger.create({
				// 	trigger: '.stat-1',
				// 	scrub: true,
				// 	pin: true,
				// 	markers: true,
				// 	anticipatePin: true,
				// 	start: "top 40px",
				// 	end: "200%",
				// 	pinSpacing: false,
				// 	onEnter: function() {
				//         console.log('.stat-1 entered');
				//     },
				//     onLeaveBack: function() {
				//         console.log('.stat-1 left back');
				//     }
				// });
			}

			if ($('.article-future-of-sport').length > 0) {

				// // Define a function to be debounced
				// function onResize() {

				// }

				// // Wrap the function with debounce
				// const debouncedResize = self.debounce(onResize, 200, false);

				// // Attach the debounced function to the window resize event
				// window.addEventListener('resize', debouncedResize);

				_gsap.gsap.timeline().to('.cp-scrolly-intro--title', { xPercent: 10, duration: 1 }).to('.cp-scrolly-intro--title .h2-i2', { opacity: 1, duration: 1 });

				_ScrollTrigger.ScrollTrigger.create({
					trigger: '.js-i2-intro-trigger',
					scrub: true,
					// anticipatePin: true,
					start: "top bottom",
					end: "bottom top",
					animation: _gsap.gsap.timeline().to('.cp-scrolly-intro--scroll', { opacity: 0, duration: 0.2 }, '<').to('.cp-scrolly-intro--title', { y: '-100vh', duration: 2 })

				});
			}
		},

		// handleVideoSrc: function() {
		// 	var self = this; 
		// 	const vids = document.querySelectorAll("video[data-src]");
		// 	[...vids].forEach( 
		// 		function(vid) {
		// 			const src = vid.getAttribute('data-src');
		// 			vid.setAttribute('src', src);
		// 			// vid.setAttribute('autoplay', true);
		// 			self.playVideo(vid);
		// 		}
		// 	);
		// },
		// playVideo: function(vid) {
		// 	const self = this;
		// 	var playPromise = vid.play();
		// 	if (playPromise !== undefined) {
		// 		playPromise.then(function() {
		// 			// Automatic playback started!
		// 		}).catch(function(error) {
		// 			vid.muted = true;
		// 			vid.play();
		// 			// Automatic playback failed.
		// 			// Show a UI element to let the user manually start playback.
		// 			// vid.setAttribute('controls', true);

		// 			// const postersrc = vid.getAttribute('data-poster');
		// 			// vid.setAttribute('poster', postersrc);
		// 		});
		// 	}
		// },
		// pauseVideo: function(vid) {
		// 	vid.pause();
		// },


		/**
   * inview animation
   *
   */
		inviewAnimation: function inviewAnimation() {
			$("[class*='ivanim-']").each(function () {
				var $el = $(this);

				_ScrollTrigger.ScrollTrigger.create({
					trigger: $el,
					id: "inview",
					start: "top bottom",
					onEnter: function onEnter() {
						if (!$el.hasClass('is-inview')) {
							$el.addClass('is-inview');
						}
					}
				});
			});

			// inview repeat
			$("[class*='ivanimr-']").each(function () {
				var $el = $(this);

				var start_val = "top bottom";
				if ($el.hasClass('start-bottom')) {
					start_val = "bottom bottom";

					_ScrollTrigger.ScrollTrigger.create({
						trigger: $el,
						start: start_val,
						onEnter: function onEnter() {
							if (!$el.hasClass('is-inview')) {
								$el.addClass('is-inview');
							}
						}
					});
					_ScrollTrigger.ScrollTrigger.create({
						trigger: $el,
						start: 'top bottom',
						onLeaveBack: function onLeaveBack() {
							if ($el.hasClass('is-inview')) {
								$el.removeClass('is-inview');
							}
						}
					});
				} else {
					_ScrollTrigger.ScrollTrigger.create({
						trigger: $el,
						start: start_val,
						onEnter: function onEnter() {
							if (!$el.hasClass('is-inview')) {
								$el.addClass('is-inview');
							}
						},
						onLeave: function onLeave() {
							// if ($el.hasClass('is-inview')) {
							// 	$el.removeClass('is-inview');
							// }
						},
						onEnterBack: function onEnterBack() {
							// if (!$el.hasClass('is-inview')) {
							// 	$el.addClass('is-inview');
							// }
						},
						onLeaveBack: function onLeaveBack() {
							if ($el.hasClass('is-inview')) {
								$el.removeClass('is-inview');
							}
						}
					});
				}
			});

			$('.js-anim-children--slidefade').each(function () {
				var elts = $(this).children();
				_gsap.gsap.set(elts, { y: 30, opacity: 0 });

				_ScrollTrigger.ScrollTrigger.batch(elts, {
					start: "top 90%",
					onEnter: function onEnter(batch) {
						_gsap.gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true, duration: 1.2 });
					}
				});
			});
		},

		/**
   * loazyload Image
   *
   */
		loazyloadImage: function loazyloadImage(section) {
			function loadImage($this) {
				if ($this.length > 0) {
					if (!$this.parent().hasClass("loaded")) {
						// $this.parent().find('source').attr('srcset', $this.parent().find('source').attr('data-srcset'));
						$this.attr("srcset", $this.attr("data-srcset"));
						$this.attr("src", $this.attr("data-src"));
						$this.on('load', function () {
							$this.parent().addClass("loaded");
						}).on('error', function () {
							console.log("error loading image");
						});
						// Remove it from the set of matching elements in order to avoid that the handler gets re-executed
					}
				}
			}

			$(section + " .lazyload").each(function () {
				var $this = $(this);
				// desktop batch load section images as inview buggy with the 3d panels
				if ($(window).width() >= breakpointSite) {
					loadImage($this);
				} else {
					// on mobile we can load in view only
					// $(this).on("inview",  function() {
					loadImage($this);
					// })
				}
			});
		},

		/**
   * Open links in new window
   *
   */
		newWindowLink: function newWindowLink() {

			// Select all elements containing the URL (e.g., anchor tags with href attribute)
			$('[href*="\\_"]').each(function () {
				// Get the current URL from the element
				var url = $(this).attr('href');

				// Replace the double underscore with a single underscore using regex
				var fixedUrl = url.replace(/\\_/g, "_");

				// Update the element's href attribute with the fixed URL
				$(this).attr('href', fixedUrl);
			});

			$('p a[href], .txt-source a[href]').not('.samewindow').each(function () {
				$(this).attr('target', '_blank');
			});
		}

	};

	$(document).ready(function () {
		Site.init();
	});
})(jQuery);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61)


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LottiePlayer", function() { return LottiePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayMode", function() { return PlayMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerEvents", function() { return PlayerEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return PlayerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSrc", function() { return parseSrc; });
function _asyncIterator(t){var e,r,i,s=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,i=Symbol.iterator);s--;){if(r&&null!=(e=t[r]))return e.call(t);if(i&&null!=(e=t[i]))return new AsyncFromSyncIterator(e.call(t));r="@@asyncIterator",i="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(t){function e(t){if(Object(t)!==t)return Promise.reject(new TypeError(t+" is not an object."));var e=t.done;return Promise.resolve(t.value).then((function(t){return{value:t,done:e}}))}return AsyncFromSyncIterator=function(t){this.s=t,this.n=t.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var r=this.s.return;return void 0===r?Promise.resolve({value:t,done:!0}):e(r.apply(this.s,arguments))},throw:function(t){var r=this.s.return;return void 0===r?Promise.reject(t):e(r.apply(this.s,arguments))}},new AsyncFromSyncIterator(t)}var REACT_ELEMENT_TYPE;function _jsx(t,e,r,i){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=i;else if(a>1){for(var n=new Array(a),o=0;o<a;o++)n[o]=arguments[o+3];e.children=n}if(e&&s)for(var h in s)void 0===e[h]&&(e[h]=s[h]);else e||(e=s||{});return{$$typeof:REACT_ELEMENT_TYPE,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function _objectSpread2(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach((function(e){_defineProperty(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _wrapRegExp(){_wrapRegExp=function(t,e){return new r(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function r(t,i,s){var a=new RegExp(t,i);return e.set(a,s||e.get(t)),_setPrototypeOf(a,r.prototype)}function i(t,r){var i=e.get(r);return Object.keys(i).reduce((function(e,r){return e[r]=t[i[r]],e}),Object.create(null))}return _inherits(r,RegExp),r.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=i(r,this)),r},r.prototype[Symbol.replace]=function(r,s){if("string"==typeof s){var a=e.get(this);return t[Symbol.replace].call(this,r,s.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+a[e]})))}if("function"==typeof s){var n=this;return t[Symbol.replace].call(this,r,(function(){var t=arguments;return"object"!=typeof t[t.length-1]&&(t=[].slice.call(t)).push(i(t,n)),s.apply(this,t)}))}return t[Symbol.replace].call(this,r,s)},_wrapRegExp.apply(this,arguments)}function _AwaitValue(t){this.wrapped=t}function _AsyncGenerator(t){var e,r;function i(e,r){try{var a=t[e](r),n=a.value,o=n instanceof _AwaitValue;Promise.resolve(o?n.wrapped:n).then((function(t){o?i("return"===e?"return":"next",t):s(a.done?"return":"normal",t)}),(function(t){i("throw",t)}))}catch(t){s("throw",t)}}function s(t,s){switch(t){case"return":e.resolve({value:s,done:!0});break;case"throw":e.reject(s);break;default:e.resolve({value:s,done:!1})}(e=e.next)?i(e.key,e.arg):r=null}this._invoke=function(t,s){return new Promise((function(a,n){var o={key:t,arg:s,resolve:a,reject:n,next:null};r?r=r.next=o:(e=r=o,i(t,s))}))},"function"!=typeof t.return&&(this.return=void 0)}function _wrapAsyncGenerator(t){return function(){return new _AsyncGenerator(t.apply(this,arguments))}}function _awaitAsyncGenerator(t){return new _AwaitValue(t)}function _asyncGeneratorDelegate(t,e){var r={},i=!1;function s(r,s){return i=!0,s=new Promise((function(e){e(t[r](s))})),{done:!1,value:e(s)}}return r["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},r.next=function(t){return i?(i=!1,t):s("next",t)},"function"==typeof t.throw&&(r.throw=function(t){if(i)throw i=!1,t;return s("throw",t)}),"function"==typeof t.return&&(r.return=function(t){return i?(i=!1,t):s("return",t)}),r}function asyncGeneratorStep(t,e,r,i,s,a,n){try{var o=t[a](n),h=o.value}catch(t){return void r(t)}o.done?e(h):Promise.resolve(h).then(i,s)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(i,s){var a=t.apply(e,r);function n(t){asyncGeneratorStep(a,i,s,n,o,"next",t)}function o(t){asyncGeneratorStep(a,i,s,n,o,"throw",t)}n(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _defineEnumerableProperties(t,e){for(var r in e){(a=e[r]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,r,a)}if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),s=0;s<i.length;s++){var a,n=i[s];(a=e[n]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,n,a)}return t}function _defaults(t,e){for(var r=Object.getOwnPropertyNames(e),i=0;i<r.length;i++){var s=r[i],a=Object.getOwnPropertyDescriptor(e,s);a&&a.configurable&&void 0===t[s]&&Object.defineProperty(t,s,a)}return t}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _extends(){return _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},_extends.apply(this,arguments)}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),i.forEach((function(e){_defineProperty(t,e,r[e])}))}return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,_setPrototypeOf(t,e)}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _construct(t,e,r){return _construct=_isNativeReflectConstruct()?Reflect.construct:function(t,e,r){var i=[null];i.push.apply(i,e);var s=new(Function.bind.apply(t,i));return r&&_setPrototypeOf(s,r.prototype),s},_construct.apply(null,arguments)}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(r,t)},_wrapNativeSuper(t)}function _instanceof(t,e){return null!=e&&"undefined"!=typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):t instanceof e}function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _getRequireWildcardCache(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(t){return t?r:e})(t)}function _interopRequireWildcard(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=_getRequireWildcardCache(e);if(r&&r.has(t))return r.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var n=s?Object.getOwnPropertyDescriptor(t,a):null;n&&(n.get||n.set)?Object.defineProperty(i,a,n):i[a]=t[a]}return i.default=t,r&&r.set(t,i),i}function _newArrowCheck(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var r,i,s={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(s[r]=t[r]);return s}function _objectWithoutProperties(t,e){if(null==t)return{};var r,i,s=_objectWithoutPropertiesLoose(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,i=_getPrototypeOf(t);if(e){var s=_getPrototypeOf(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var i=_superPropBase(t,e);if(i){var s=Object.getOwnPropertyDescriptor(i,e);return s.get?s.get.call(arguments.length<3?t:r):s.value}},_get.apply(this,arguments)}function set(t,e,r,i){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,r,i){var s,a=_superPropBase(t,e);if(a){if((s=Object.getOwnPropertyDescriptor(a,e)).set)return s.set.call(i,r),!0;if(!s.writable)return!1}if(s=Object.getOwnPropertyDescriptor(i,e)){if(!s.writable)return!1;s.value=r,Object.defineProperty(i,e,s)}else _defineProperty(i,e,r);return!0},set(t,e,r,i)}function _set(t,e,r,i,s){if(!set(t,e,r,i||t)&&s)throw new Error("failed to set property");return r}function _taggedTemplateLiteral(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function _taggedTemplateLiteralLoose(t,e){return e||(e=t.slice(0)),t.raw=e,t}function _readOnlyError(t){throw new TypeError('"'+t+'" is read-only')}function _writeOnlyError(t){throw new TypeError('"'+t+'" is write-only')}function _classNameTDZError(t){throw new Error('Class "'+t+'" cannot be referenced in computed property keys.')}function _temporalUndefined(){}function _tdz(t){throw new ReferenceError(t+" is not defined - temporal dead zone")}function _temporalRef(t,e){return t===_temporalUndefined?_tdz(e):t}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _slicedToArrayLoose(t,e){return _arrayWithHoles(t)||_iterableToArrayLimitLoose(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _toArray(t){return _arrayWithHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableRest()}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _maybeArrayLike(t,e,r){if(e&&!Array.isArray(e)&&"number"==typeof e.length){var i=e.length;return _arrayLikeToArray(e,void 0!==r&&r<i?r:i)}return t(e,r)}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _iterableToArrayLimit(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var i,s,a=[],n=!0,o=!1;try{for(r=r.call(t);!(n=(i=r.next()).done)&&(a.push(i.value),!e||a.length!==e);n=!0);}catch(t){o=!0,s=t}finally{try{n||null==r.return||r.return()}finally{if(o)throw s}}return a}}function _iterableToArrayLimitLoose(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var i=[];for(r=r.call(t),_step;!(_step=r.next()).done&&(i.push(_step.value),!e||i.length!==e););return i}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _createForOfIteratorHelper(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,s=function(){};return{s:s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n=!0,o=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return n=t.done,t},e:function(t){o=!0,a=t},f:function(){try{n||null==r.return||r.return()}finally{if(o)throw a}}}}function _createForOfIteratorHelperLoose(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _skipFirstGeneratorNext(t){return function(){var e=t.apply(this,arguments);return e.next(),e}}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _initializerWarningHelper(t,e){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}function _initializerDefineProperty(t,e,r,i){r&&Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function _applyDecoratedDescriptor(t,e,r,i,s){var a={};return Object.keys(i).forEach((function(t){a[t]=i[t]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,i){return i(t,e,r)||r}),a),s&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(s):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}_AsyncGenerator.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},_AsyncGenerator.prototype.next=function(t){return this._invoke("next",t)},_AsyncGenerator.prototype.throw=function(t){return this._invoke("throw",t)},_AsyncGenerator.prototype.return=function(t){return this._invoke("return",t)};var id=0;function _classPrivateFieldLooseKey(t){return"__private_"+id+++"_"+t}function _classPrivateFieldLooseBase(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function _classPrivateFieldGet(t,e){return _classApplyDescriptorGet(t,_classExtractFieldDescriptor(t,e,"get"))}function _classPrivateFieldSet(t,e,r){return _classApplyDescriptorSet(t,_classExtractFieldDescriptor(t,e,"set"),r),r}function _classPrivateFieldDestructureSet(t,e){return _classApplyDescriptorDestructureSet(t,_classExtractFieldDescriptor(t,e,"set"))}function _classExtractFieldDescriptor(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}function _classStaticPrivateFieldSpecGet(t,e,r){return _classCheckPrivateStaticAccess(t,e),_classCheckPrivateStaticFieldDescriptor(r,"get"),_classApplyDescriptorGet(t,r)}function _classStaticPrivateFieldSpecSet(t,e,r,i){return _classCheckPrivateStaticAccess(t,e),_classCheckPrivateStaticFieldDescriptor(r,"set"),_classApplyDescriptorSet(t,r,i),i}function _classStaticPrivateMethodGet(t,e,r){return _classCheckPrivateStaticAccess(t,e),r}function _classStaticPrivateMethodSet(){throw new TypeError("attempted to set read only static private field")}function _classApplyDescriptorGet(t,e){return e.get?e.get.call(t):e.value}function _classApplyDescriptorSet(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}function _classApplyDescriptorDestructureSet(t,e){if(e.set)return"__destrObj"in e||(e.__destrObj={set value(r){e.set.call(t,r)}}),e.__destrObj;if(!e.writable)throw new TypeError("attempted to set read only private field");return e}function _classStaticPrivateFieldDestructureSet(t,e,r){return _classCheckPrivateStaticAccess(t,e),_classCheckPrivateStaticFieldDescriptor(r,"set"),_classApplyDescriptorDestructureSet(t,r)}function _classCheckPrivateStaticAccess(t,e){if(t!==e)throw new TypeError("Private static access of wrong provenance")}function _classCheckPrivateStaticFieldDescriptor(t,e){if(void 0===t)throw new TypeError("attempted to "+e+" private static field before its declaration")}function _decorate(t,e,r,i){var s=_getDecoratorsApi();if(i)for(var a=0;a<i.length;a++)s=i[a](s);var n=e((function(t){s.initializeInstanceElements(t,o.elements)}),r),o=s.decorateClass(_coalesceClassElements(n.d.map(_createElementDescriptor)),t);return s.initializeClassElements(n.F,o.elements),s.runClassFinishers(n.F,o.finishers)}function _getDecoratorsApi(){_getDecoratorsApi=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(r){e.forEach((function(e){e.kind===r&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var r=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var s=e.placement;if(e.kind===i&&("static"===s||"prototype"===s)){var a="static"===s?t:r;this.defineClassElement(a,e)}}),this)}),this)},defineClassElement:function(t,e){var r=e.descriptor;if("field"===e.kind){var i=e.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,r)},decorateClass:function(t,e){var r=[],i=[],s={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,s)}),this),t.forEach((function(t){if(!_hasDecorators(t))return r.push(t);var e=this.decorateElement(t,s);r.push(e.element),r.push.apply(r,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:r,finishers:i};var a=this.decorateConstructor(r,e);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(t,e,r){var i=e[t.placement];if(!r&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var r=[],i=[],s=t.decorators,a=s.length-1;a>=0;a--){var n=e[t.placement];n.splice(n.indexOf(t.key),1);var o=this.fromElementDescriptor(t),h=this.toElementFinisherExtras((0,s[a])(o)||o);t=h.element,this.addElementPlacement(t,e),h.finisher&&i.push(h.finisher);var l=h.extras;if(l){for(var p=0;p<l.length;p++)this.addElementPlacement(l[p],e);r.push.apply(r,l)}}return{element:t,finishers:i,extras:r}},decorateConstructor:function(t,e){for(var r=[],i=e.length-1;i>=0;i--){var s=this.fromClassDescriptor(t),a=this.toClassDescriptor((0,e[i])(s)||s);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){t=a.elements;for(var n=0;n<t.length-1;n++)for(var o=n+1;o<t.length;o++)if(t[n].key===t[o].key&&t[n].placement===t[o].placement)throw new TypeError("Duplicated element ("+t[n].key+")")}}return{elements:t,finishers:r}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){if(void 0!==t)return _toArray(t).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=_toPropertyKey(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var s=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var a={kind:e,key:r,placement:i,descriptor:Object.assign({},s)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),a.initializer=t.initializer),a},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:_optionalCallableProperty(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var r=_optionalCallableProperty(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:r}},runClassFinishers:function(t,e){for(var r=0;r<e.length;r++){var i=(0,e[r])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,r){if(void 0!==t[e])throw new TypeError(r+" can't have a ."+e+" property.")}};return t}function _createElementDescriptor(t){var e,r=_toPropertyKey(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:r,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function _coalesceGetterSetter(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function _coalesceClassElements(t){for(var e=[],r=function(t){return"method"===t.kind&&t.key===a.key&&t.placement===a.placement},i=0;i<t.length;i++){var s,a=t[i];if("method"===a.kind&&(s=e.find(r)))if(_isDataDescriptor(a.descriptor)||_isDataDescriptor(s.descriptor)){if(_hasDecorators(a)||_hasDecorators(s))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");s.descriptor=a.descriptor}else{if(_hasDecorators(a)){if(_hasDecorators(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");s.decorators=a.decorators}_coalesceGetterSetter(a,s)}else e.push(a)}return e}function _hasDecorators(t){return t.decorators&&t.decorators.length}function _isDataDescriptor(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function _optionalCallableProperty(t,e){var r=t[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}function _classPrivateMethodGet(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}function _checkPrivateRedeclaration(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldInitSpec(t,e,r){_checkPrivateRedeclaration(t,e),e.set(t,r)}function _classPrivateMethodInitSpec(t,e){_checkPrivateRedeclaration(t,e),e.add(t)}function _classPrivateMethodSet(){throw new TypeError("attempted to reassign private method")}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _extendStatics=function(t,e){return _extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},_extendStatics(t,e)};function __extends(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}_extendStatics(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var _assign=function(){return _assign=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var s in e=arguments[r])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},_assign.apply(this,arguments)};function __rest(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(r[i[s]]=t[i[s]])}return r}function __decorate(t,e,r,i){var s,a=arguments.length,n=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(n=(a<3?s(n):a>3?s(e,r,n):s(e,r))||n);return a>3&&n&&Object.defineProperty(e,r,n),n}function __param(t,e){return function(r,i){e(r,i,t)}}function __metadata(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function __awaiter(t,e,r,i){return new(r||(r=Promise))((function(s,a){function n(t){try{h(i.next(t))}catch(t){a(t)}}function o(t){try{h(i.throw(t))}catch(t){a(t)}}function h(t){var e;t.done?s(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,o)}h((i=i.apply(t,e||[])).next())}))}function __generator(t,e){var r,i,s,a,n={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=2&a[0]?i.return:a[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,a[1])).done)return s;switch(i=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,i=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(!(s=n.trys,(s=s.length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){n=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){n.label=a[1];break}if(6===a[0]&&n.label<s[1]){n.label=s[1],s=a;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(a);break}s[2]&&n.ops.pop(),n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t],i=0}finally{r=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}var __createBinding=Object.create?function(t,e,r,i){void 0===i&&(i=r),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]};function __exportStar(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||__createBinding(e,t,r)}function __values(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],i=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,s,a=r.call(t),n=[];try{for(;(void 0===e||e-- >0)&&!(i=a.next()).done;)n.push(i.value)}catch(t){s={error:t}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(s)throw s.error}}return n}function __spread(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t}function __spreadArrays(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var i=Array(t),s=0;for(e=0;e<r;e++)for(var a=arguments[e],n=0,o=a.length;n<o;n++,s++)i[s]=a[n];return i}function __spreadArray(t,e,r){if(r||2===arguments.length)for(var i,s=0,a=e.length;s<a;s++)!i&&s in e||(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return t.concat(i||Array.prototype.slice.call(e))}function __await(t){return this instanceof __await?(this.v=t,this):new __await(t)}function __asyncGenerator(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,s=r.apply(t,e||[]),a=[];return i={},n("next"),n("throw"),n("return"),i[Symbol.asyncIterator]=function(){return this},i;function n(t){s[t]&&(i[t]=function(e){return new Promise((function(r,i){a.push([t,e,r,i])>1||o(t,e)}))})}function o(t,e){try{!function(t){t.value instanceof __await?Promise.resolve(t.value.v).then(h,l):p(a[0][2],t)}(s[t](e))}catch(t){p(a[0][3],t)}}function h(t){o("next",t)}function l(t){o("throw",t)}function p(t,e){t(e),a.shift(),a.length&&o(a[0][0],a[0][1])}}function __asyncDelegator(t){var e,r;return e={},i("next"),i("throw",(function(t){throw t})),i("return"),e[Symbol.iterator]=function(){return this},e;function i(i,s){e[i]=t[i]?function(e){return(r=!r)?{value:__await(t[i](e)),done:"return"===i}:s?s(e):e}:s}}function __asyncValues(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(r){e[r]=t[r]&&function(e){return new Promise((function(i,s){(function(t,e,r,i){Promise.resolve(i).then((function(e){t({value:e,done:r})}),e)})(i,s,(e=t[r](e)).done,e.value)}))}}}function __makeTemplateObject(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var __setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function __importStar(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e}function __importDefault(t){return t&&t.__esModule?t:{default:t}}function __classPrivateFieldGet(t,e,r,i){if("a"===r&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(t):i?i.value:e.get(t)}function __classPrivateFieldSet(t,e,r,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(t,r):s?s.value=r:e.set(t,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var t$3=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$8=Symbol(),n$5=new Map;class s$3{constructor(t,e){if(this._$cssResult$=!0,e!==e$8)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){var t=n$5.get(this.cssText);return t$3&&void 0===t&&(n$5.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}var o$5=t=>new s$3("string"==typeof t?t:t+"",e$8),r$3=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];var s=1===t.length?t[0]:r.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new s$3(s,e$8)},i$3=(t,e)=>{t$3?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{var r=document.createElement("style"),i=window.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,t.appendChild(r)}))},S$1=t$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{var e="";for(var r of t.cssRules)e+=r.cssText;return o$5(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,s$2,e$7=window.trustedTypes,r$2=e$7?e$7.emptyScript:"",h$2=window.reactiveElementPolyfillSupport,o$4={toAttribute(t,e){switch(e){case Boolean:t=t?r$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){var r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},n$4=(t,e)=>e!==t&&(e==e||t==t),l$3={attribute:!0,type:String,converter:o$4,reflect:!1,hasChanged:n$4},t$2;class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();var t=[];return this.elementProperties.forEach(((e,r)=>{var i=this._$Eh(r,e);void 0!==i&&(this._$Eu.set(i,r),t.push(i))})),t}static createProperty(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l$3;if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){var s=this[t];this[e]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;var t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){var e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(var i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){var e=[];if(Array.isArray(t)){var r=new Set(t.flat(1/0).reverse());for(var i of r)e.unshift(S$1(i))}else void 0!==t&&e.push(S$1(t));return e}static _$Eh(t,e){var r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$3(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e){var r,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l$3,a=this.constructor._$Eh(t,s);if(void 0!==a&&!0===s.reflect){var n=(null!==(i=null===(r=s.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:o$4.toAttribute)(e,s.type);this._$Ei=t,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Ei=null}}_$AK(t,e){var r,i,s,a=this.constructor,n=a._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){var o=a.getPropertyOptions(n),h=o.converter,l=null!==(s=null!==(i=null===(r=h)||void 0===r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof h?h:null)&&void 0!==s?s:o$4.fromAttribute;this._$Ei=n,this[n]=l(e,o.type),this._$Ei=null}}requestUpdate(t,e,r){var i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}_$EC(){var t=this;return _asyncToGenerator((function*(){t.isUpdatePending=!0;try{yield t._$Ep}catch(e){Promise.reject(e)}var e=t.scheduleUpdate();return null!=e&&(yield e),!t.isUpdatePending}))()}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(this.isUpdatePending){this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);var e=!1,r=this._$AL;try{(e=this.shouldUpdate(r))?(this.willUpdate(r),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$2||h$2({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.2.1");var i$2=globalThis.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$6="lit$".concat((Math.random()+"").slice(9),"$"),o$3="?"+e$6,n$3="<".concat(o$3,">"),l$2=document,h$1=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l$2.createComment(t)},r$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var e;return d(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea)$/i,p=t=>function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return{_$litType$:t,strings:e,values:i}},$=p(1),y=p(2),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,e,r)=>{var i,s,a=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e,n=a._$litPart$;if(void 0===n){var o=null!==(s=null==r?void 0:r.renderBefore)&&void 0!==s?s:null;a._$litPart$=n=new N(e.insertBefore(h$1(),o),o,void 0,null!=r?r:{})}return n._$AI(t),n},A=l$2.createTreeWalker(l$2,129,null,!1),C=(t,e)=>{for(var r,i=t.length-1,s=[],n=2===e?"<svg>":"",o=c,h=0;h<i;h++){for(var l=t[h],p=void 0,u=void 0,d=-1,y=0;y<l.length&&(o.lastIndex=y,null!==(u=o.exec(l)));)y=o.lastIndex,o===c?"!--"===u[1]?o=v:void 0!==u[1]?o=a:void 0!==u[2]?(g.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=f):void 0!==u[3]&&(o=f):o===f?">"===u[0]?(o=null!=r?r:c,d=-1):void 0===u[1]?d=-2:(d=o.lastIndex-u[2].length,p=u[1],o=void 0===u[3]?f:'"'===u[3]?m:_):o===m||o===_?o=f:o===v||o===a?o=c:(o=f,r=void 0);var b=o===f&&t[h+1].startsWith("/>")?" ":"";n+=o===c?l+n$3:d>=0?(s.push(p),l.slice(0,d)+"$lit$"+l.slice(d)+e$6+b):l+e$6+(-2===d?(s.push(void 0),h):b)}var P=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s$1?s$1.createHTML(P):P,s]};class E{constructor(t,e){var r,{strings:i,_$litType$:s}=t;this.parts=[];var a=0,n=0,o=i.length-1,h=this.parts,[l,p]=C(i,s);if(this.el=E.createElement(l,e),A.currentNode=this.el.content,2===s){var c=this.el.content,f=c.firstChild;f.remove(),c.append(...f.childNodes)}for(;null!==(r=A.nextNode())&&h.length<o;){if(1===r.nodeType){if(r.hasAttributes()){var u=[];for(var d of r.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(e$6)){var m=p[n++];if(u.push(d),void 0!==m){var y=r.getAttribute(m.toLowerCase()+"$lit$").split(e$6),v=/([.?@])?(.*)/.exec(m);h.push({type:1,index:a,name:v[2],strings:y,ctor:"."===v[1]?M:"?"===v[1]?H:"@"===v[1]?I:S})}else h.push({type:6,index:a})}for(var b of u)r.removeAttribute(b)}if(g.test(r.tagName)){var _=r.textContent.split(e$6),P=_.length-1;if(P>0){r.textContent=i$2?i$2.emptyScript:"";for(var x=0;x<P;x++)r.append(_[x],h$1()),A.nextNode(),h.push({type:2,index:++a});r.append(_[P],h$1())}}}else if(8===r.nodeType)if(r.data===o$3)h.push({type:2,index:a});else for(var w=-1;-1!==(w=r.data.indexOf(e$6,w+1));)h.push({type:7,index:a}),w+=e$6.length-1;a++}}static createElement(t,e){var r=l$2.createElement("template");return r.innerHTML=t,r}}function P(t,e){var r,i,s,a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,o=arguments.length>3?arguments[3]:void 0;if(e===b)return e;var h=void 0!==o?null===(r=n._$Cl)||void 0===r?void 0:r[o]:n._$Cu,l=r$1(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==l&&(null===(i=null==h?void 0:h._$AO)||void 0===i||i.call(h,!1),void 0===l?h=void 0:(h=new l(t))._$AT(t,n,o),void 0!==o?(null!==(s=(a=n)._$Cl)&&void 0!==s?s:a._$Cl=[])[o]=h:n._$Cu=h),void 0!==h&&(e=P(t,h._$AS(t,e.values),h,o)),e}class V{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e,{el:{content:r},parts:i}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:l$2).importNode(r,!0);A.currentNode=s;for(var a=A.nextNode(),n=0,o=0,h=i[0];void 0!==h;){if(n===h.index){var l=void 0;2===h.type?l=new N(a,a.nextSibling,this,t):1===h.type?l=new h.ctor(a,h.name,h.strings,this,t):6===h.type&&(l=new L(a,this,t)),this.v.push(l),h=i[++o]}n!==(null==h?void 0:h.index)&&(a=A.nextNode(),n++)}return s}m(t){var e=0;for(var r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{constructor(t,e,r,i){var s;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=P(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),r$1(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u(t)?this.A(t):this.$(t)}M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==w&&r$1(this._$AH)?this._$AA.nextSibling.data=t:this.S(l$2.createTextNode(t)),this._$AH=t}T(t){var e,{values:r,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=E.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(r);else{var a=new V(s,this),n=a.p(this.options);a.m(r),this.S(n),this._$AH=a}}_$AC(t){var e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new E(t)),e}A(t){d(this._$AH)||(this._$AH=[],this._$AR());var e,r=this._$AH,i=0;for(var s of t)i===r.length?r.push(e=new N(this.M(h$1()),this.M(h$1()),this,this.options)):e=r[i],e._$AI(s),i++;i<r.length&&(this._$AR(e&&e._$AB.nextSibling,i),r.length=i)}_$AR(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,r=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,r);e&&e!==this._$AB;){var i=e.nextSibling;e.remove(),e=i}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class S{constructor(t,e,r,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=this.strings,a=!1;if(void 0===s)t=P(this,t,e,0),(a=!r$1(t)||t!==this._$AH&&t!==b)&&(this._$AH=t);else{var n,o,h=t;for(t=s[0],n=0;n<s.length-1;n++)(o=P(this,h[r+n],e,n))===b&&(o=this._$AH[n]),a||(a=!r$1(o)||o!==this._$AH[n]),o===w?t=w:t!==w&&(t+=(null!=o?o:"")+s[n+1]),this._$AH[n]=o}a&&!i&&this.k(t)}k(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends S{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===w?void 0:t}}var k=i$2?i$2.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4}k(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends S{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t){var e;if((t=null!==(e=P(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:w)!==b){var r=this._$AH,i=t===w&&r!==w||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==w&&(r===w||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}var R={P:"$lit$",V:e$6,L:o$3,I:1,N:C,R:V,D:u,j:P,H:N,O:S,F:H,B:I,W:M,Z:L},z=window.litHtmlPolyfillSupport,l$1,o$2;null==z||z(E,N),(null!==(t$2=globalThis.litHtmlVersions)&&void 0!==t$2?t$2:globalThis.litHtmlVersions=[]).push("2.1.2");var r=a$1;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e,r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});var n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});var h={_$AK:(t,e,r)=>{t._$AK(e,r)},_$AL:t=>t._$AL};(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n$1=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{var{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,i$1=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?_objectSpread2(_objectSpread2({},e),{},{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function e$5(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):i$1(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return e$5(_objectSpread2(_objectSpread2({},t),{},{state:!0}))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var e$4=(t,e,r)=>{Object.defineProperty(e,r,t)},t=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),o$1=t=>{var{finisher:e,descriptor:r}=t;return(t,i)=>{var s;if(void 0===i){var a=null!==(s=t.originalKey)&&void 0!==s?s:t.key,n=null!=r?{kind:"method",placement:"prototype",key:a,descriptor:r(t.key)}:_objectSpread2(_objectSpread2({},t),{},{key:a});return null!=e&&(n.finisher=function(t){e(t,a)}),n}var o=t.constructor;void 0!==r&&Object.defineProperty(t,i,r(i)),null==e||e(o,i)}},n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$3(t){return o$1({finisher:(e,r)=>{Object.assign(e.prototype[r],t)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t,e){return o$1({descriptor:r=>{var i={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){var s="symbol"==typeof r?Symbol():"__"+r;i.get=function(){var e,r;return void 0===this[s]&&(this[s]=null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null),this[s]}}return i}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$2(t){return o$1({descriptor:e=>({get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==r?r:[]},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$1(t){return o$1({descriptor:e=>({get(){var e=this;return _asyncToGenerator((function*(){var r;return yield e.updateComplete,null===(r=e.renderRoot)||void 0===r?void 0:r.querySelector(t)}))()},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var e=null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function l(t){var{slot:r,selector:i}=null!=t?t:{};return o$1({descriptor:s=>({get(){var s,a="slot"+(r?"[name=".concat(r,"]"):":not([name])"),n=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(a),o=null!=n?e(n,t):[];return i?o.filter((t=>t.matches(i))):o},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(t,e,r){var i,s=t;return"object"==typeof t?(s=t.slot,i=t):i={flatten:e},r?l({slot:s,flatten:e,selector:r}):o$1({descriptor:t=>({get(){var t,e,r="slot"+(s?"[name=".concat(s,"]"):":not([name])"),a=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(r);return null!==(e=null==a?void 0:a.assignedNodes(i))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function getDefaultExportFromNamespaceIfPresent(t){return t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function getDefaultExportFromNamespaceIfNotNamed(t){return t&&Object.prototype.hasOwnProperty.call(t,"default")&&1===Object.keys(t).length?t.default:t}function getAugmentedNamespace(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})})),e}function commonjsRequire(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var lottie$1={exports:{}};(function(module,exports){var factory;"undefined"!=typeof navigator&&(factory=function(){var svgNS="http://www.w3.org/2000/svg",locationHref="",_useWebWorker=!1,initialDefaultFrame=-999999,setWebWorker=function(t){_useWebWorker=!!t},getWebWorker=function(){return _useWebWorker},setLocationHref=function(t){locationHref=t},getLocationHref=function(){return locationHref};function createTag(t){return document.createElement(t)}function extendPrototype(t,e){var r,i,s=t.length;for(r=0;r<s;r+=1)for(var a in i=t[r].prototype)Object.prototype.hasOwnProperty.call(i,a)&&(e.prototype[a]=i[a])}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}var audioControllerFactory=function(){function t(t){this.audios=[],this.audioFactory=t,this._volume=1,this._isMuted=!1}return t.prototype={addAudio:function(t){this.audios.push(t)},pause:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].pause()},resume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].resume()},setRate:function(t){var e,r=this.audios.length;for(e=0;e<r;e+=1)this.audios[e].setRate(t)},createAudio:function(t){return this.audioFactory?this.audioFactory(t):window.Howl?new window.Howl({src:[t]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(t){this.audioFactory=t},setVolume:function(t){this._volume=t,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var t,e=this.audios.length;for(t=0;t<e;t+=1)this.audios[t].volume(this._volume*(this._isMuted?0:1))}},function(){return new t}}(),createTypedArray=function(){function t(t,e){var r,i=0,s=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(i=0;i<e;i+=1)s.push(r);return s}return"function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(e,r){return"float32"===e?new Float32Array(r):"int16"===e?new Int16Array(r):"uint8c"===e?new Uint8ClampedArray(r):t(e,r)}:t}();function createSizedArray(t){return Array.apply(null,{length:t})}function _typeof$6(t){return _typeof$6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$6(t)}var subframeEnabled=!0,expressionsPlugin=null,expressionsInterfaces=null,idPrefix$1="",isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),_shouldRoundValues=!1,bmPow=Math.pow,bmSqrt=Math.sqrt,bmFloor=Math.floor,bmMax=Math.max,bmMin=Math.min,BMMath={};function ProjectInterface$1(){return{}}!function(){var t,e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],r=e.length;for(t=0;t<r;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){if("object"===_typeof$6(t)&&t.length){var e,r=createSizedArray(t.length),i=t.length;for(e=0;e<i;e+=1)r[e]=Math.abs(t[e]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function roundValues(t){_shouldRoundValues=!!t}function bmRnd(t){return _shouldRoundValues?Math.round(t):t}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin="0 0",t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility="visible",t.style.webkitBackfaceVisibility="visible",t.style.transformStyle="preserve-3d",t.style.webkitTransformStyle="preserve-3d",t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,r,i){this.type=t,this.currentTime=e,this.totalTime=r,this.direction=i<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,r,i){this.type=t,this.currentLoop=r,this.totalLoops=e,this.direction=i<0?-1:1}function BMSegmentStartEvent(t,e,r){this.type=t,this.firstFrame=e,this.totalFrames=r}function BMDestroyEvent(t,e){this.type=t,this.target=e}function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function BMConfigErrorEvent(t){this.type="configError",this.nativeError=t}function BMAnimationConfigErrorEvent(t,e){this.type=t,this.nativeError=e}var createElementID=(_count=0,function(){return idPrefix$1+"__lottie_element_"+(_count+=1)}),_count;function HSVtoRGB(t,e,r){var i,s,a,n,o,h,l,p;switch(h=r*(1-e),l=r*(1-(o=6*t-(n=Math.floor(6*t)))*e),p=r*(1-(1-o)*e),n%6){case 0:i=r,s=p,a=h;break;case 1:i=l,s=r,a=h;break;case 2:i=h,s=r,a=p;break;case 3:i=h,s=l,a=r;break;case 4:i=p,s=h,a=r;break;case 5:i=r,s=h,a=l}return[i,s,a]}function RGBtoHSV(t,e,r){var i,s=Math.max(t,e,r),a=Math.min(t,e,r),n=s-a,o=0===s?0:n/s,h=s/255;switch(s){case a:i=0;break;case t:i=e-r+n*(e<r?6:0),i/=6*n;break;case e:i=r-t+2*n,i/=6*n;break;case r:i=t-e+4*n,i/=6*n}return[i,o,h]}function addSaturationToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[1]+=e,r[1]>1?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[2]+=e,r[2]>1?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[0]+=e/360,r[0]>1?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}var rgbToHex=function(){var t,e,r=[];for(t=0;t<256;t+=1)e=t.toString(16),r[t]=1===e.length?"0"+e:e;return function(t,e,i){return t<0&&(t=0),e<0&&(e=0),i<0&&(i=0),"#"+r[t]+r[e]+r[i]}}(),setSubframeEnabled=function(t){subframeEnabled=!!t},getSubframeEnabled=function(){return subframeEnabled},setExpressionsPlugin=function(t){expressionsPlugin=t},getExpressionsPlugin=function(){return expressionsPlugin},setExpressionInterfaces=function(t){expressionsInterfaces=t},getExpressionInterfaces=function(){return expressionsInterfaces},setDefaultCurveSegments=function(t){defaultCurveSegments=t},getDefaultCurveSegments=function(){return defaultCurveSegments},setIdPrefix=function(t){idPrefix$1=t},getIdPrefix=function(){return idPrefix$1};function createNS(t){return document.createElementNS(svgNS,t)}function _typeof$5(t){return _typeof$5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$5(t)}var dataManager=function(){var t,e,r=1,i=[],s={onmessage:function(){},postMessage:function(e){t({data:e})}},_workerSelf={postMessage:function(t){s.onmessage({data:t})}};function a(){e||(e=function(e){if(window.Worker&&window.Blob&&getWebWorker()){var r=new Blob(["var _workerSelf = self; self.onmessage = ",e.toString()],{type:"text/javascript"}),i=URL.createObjectURL(r);return new Worker(i)}return t=e,s}((function(t){if(_workerSelf.dataManager||(_workerSelf.dataManager=function(){function t(s,a){var n,o,h,l,p,f,u=s.length;for(o=0;o<u;o+=1)if("ks"in(n=s[o])&&!n.completed){if(n.completed=!0,n.hasMask){var d=n.masksProperties;for(l=d.length,h=0;h<l;h+=1)if(d[h].pt.k.i)i(d[h].pt.k);else for(f=d[h].pt.k.length,p=0;p<f;p+=1)d[h].pt.k[p].s&&i(d[h].pt.k[p].s[0]),d[h].pt.k[p].e&&i(d[h].pt.k[p].e[0])}0===n.ty?(n.layers=e(n.refId,a),t(n.layers,a)):4===n.ty?r(n.shapes):5===n.ty&&c(n)}}function e(t,e){var r=function(t,e){for(var r=0,i=e.length;r<i;){if(e[r].id===t)return e[r];r+=1}return null}(t,e);return r?r.layers.__used?JSON.parse(JSON.stringify(r.layers)):(r.layers.__used=!0,r.layers):null}function r(t){var e,s,a;for(e=t.length-1;e>=0;e-=1)if("sh"===t[e].ty)if(t[e].ks.k.i)i(t[e].ks.k);else for(a=t[e].ks.k.length,s=0;s<a;s+=1)t[e].ks.k[s].s&&i(t[e].ks.k[s].s[0]),t[e].ks.k[s].e&&i(t[e].ks.k[s].e[0]);else"gr"===t[e].ty&&r(t[e].it)}function i(t){var e,r=t.i.length;for(e=0;e<r;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function s(t,e){var r=e?e.split("."):[100,100,100];return t[0]>r[0]||!(r[0]>t[0])&&(t[1]>r[1]||!(r[1]>t[1])&&(t[2]>r[2]||!(r[2]>t[2])&&null))}var a,n=function(){var t=[4,4,14];function e(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)5===t[e].ty&&(i=void 0,i=(r=t[e]).t.d,r.t.d={k:[{s:i,t:0}]})}return function(r){if(s(t,r.v)&&(e(r.layers),r.assets)){var i,a=r.assets.length;for(i=0;i<a;i+=1)r.assets[i].layers&&e(r.assets[i].layers)}}}(),o=(a=[4,7,99],function(t){if(t.chars&&!s(a,t.v)){var e,i=t.chars.length;for(e=0;e<i;e+=1){var n=t.chars[e];n.data&&n.data.shapes&&(r(n.data.shapes),n.data.ip=0,n.data.op=99999,n.data.st=0,n.data.sr=1,n.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},t.chars[e].t||(n.data.shapes.push({ty:"no"}),n.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}),h=function(){var t=[5,7,15];function e(t){var e,r,i=t.length;for(e=0;e<i;e+=1)5===t[e].ty&&(r=void 0,"number"==typeof(r=t[e].t.p).a&&(r.a={a:0,k:r.a}),"number"==typeof r.p&&(r.p={a:0,k:r.p}),"number"==typeof r.r&&(r.r={a:0,k:r.r}))}return function(r){if(s(t,r.v)&&(e(r.layers),r.assets)){var i,a=r.assets.length;for(i=0;i<a;i+=1)r.assets[i].layers&&e(r.assets[i].layers)}}}(),l=function(){var t=[4,1,9];function e(t){var r,i,s,a=t.length;for(r=0;r<a;r+=1)if("gr"===t[r].ty)e(t[r].it);else if("fl"===t[r].ty||"st"===t[r].ty)if(t[r].c.k&&t[r].c.k[0].i)for(s=t[r].c.k.length,i=0;i<s;i+=1)t[r].c.k[i].s&&(t[r].c.k[i].s[0]/=255,t[r].c.k[i].s[1]/=255,t[r].c.k[i].s[2]/=255,t[r].c.k[i].s[3]/=255),t[r].c.k[i].e&&(t[r].c.k[i].e[0]/=255,t[r].c.k[i].e[1]/=255,t[r].c.k[i].e[2]/=255,t[r].c.k[i].e[3]/=255);else t[r].c.k[0]/=255,t[r].c.k[1]/=255,t[r].c.k[2]/=255,t[r].c.k[3]/=255}function r(t){var r,i=t.length;for(r=0;r<i;r+=1)4===t[r].ty&&e(t[r].shapes)}return function(e){if(s(t,e.v)&&(r(e.layers),e.assets)){var i,a=e.assets.length;for(i=0;i<a;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}(),p=function(){var t=[4,4,18];function e(t){var r,i,s;for(r=t.length-1;r>=0;r-=1)if("sh"===t[r].ty)if(t[r].ks.k.i)t[r].ks.k.c=t[r].closed;else for(s=t[r].ks.k.length,i=0;i<s;i+=1)t[r].ks.k[i].s&&(t[r].ks.k[i].s[0].c=t[r].closed),t[r].ks.k[i].e&&(t[r].ks.k[i].e[0].c=t[r].closed);else"gr"===t[r].ty&&e(t[r].it)}function r(t){var r,i,s,a,n,o,h=t.length;for(i=0;i<h;i+=1){if((r=t[i]).hasMask){var l=r.masksProperties;for(a=l.length,s=0;s<a;s+=1)if(l[s].pt.k.i)l[s].pt.k.c=l[s].cl;else for(o=l[s].pt.k.length,n=0;n<o;n+=1)l[s].pt.k[n].s&&(l[s].pt.k[n].s[0].c=l[s].cl),l[s].pt.k[n].e&&(l[s].pt.k[n].e[0].c=l[s].cl)}4===r.ty&&e(r.shapes)}}return function(e){if(s(t,e.v)&&(r(e.layers),e.assets)){var i,a=e.assets.length;for(i=0;i<a;i+=1)e.assets[i].layers&&r(e.assets[i].layers)}}}();function c(t){0===t.t.a.length&&t.t.p}var f={completeData:function(r){r.__complete||(l(r),n(r),o(r),h(r),p(r),t(r.layers,r.assets),function(r,i){if(r){var s=0,a=r.length;for(s=0;s<a;s+=1)1===r[s].t&&(r[s].data.layers=e(r[s].data.refId,i),t(r[s].data.layers,i))}}(r.chars,r.assets),r.__complete=!0)}};return f.checkColors=l,f.checkChars=o,f.checkPathProperties=h,f.checkShapes=p,f.completeLayers=t,f}()),_workerSelf.assetLoader||(_workerSelf.assetLoader=function(){function t(t){var e=t.getResponseHeader("content-type");return e&&"json"===t.responseType&&-1!==e.indexOf("json")||t.response&&"object"===_typeof$5(t.response)?t.response:t.response&&"string"==typeof t.response?JSON.parse(t.response):t.responseText?JSON.parse(t.responseText):null}return{load:function(e,r,i,s){var a,n=new XMLHttpRequest;try{n.responseType="json"}catch(t){}n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status)a=t(n),i(a);else try{a=t(n),i(a)}catch(t){s&&s(t)}};try{n.open(["G","E","T"].join(""),e,!0)}catch(t){n.open(["G","E","T"].join(""),r+"/"+e,!0)}n.send()}}}()),"loadAnimation"===t.data.type)_workerSelf.assetLoader.load(t.data.path,t.data.fullPath,(function(e){_workerSelf.dataManager.completeData(e),_workerSelf.postMessage({id:t.data.id,payload:e,status:"success"})}),(function(){_workerSelf.postMessage({id:t.data.id,status:"error"})}));else if("complete"===t.data.type){var e=t.data.animation;_workerSelf.dataManager.completeData(e),_workerSelf.postMessage({id:t.data.id,payload:e,status:"success"})}else"loadData"===t.data.type&&_workerSelf.assetLoader.load(t.data.path,t.data.fullPath,(function(e){_workerSelf.postMessage({id:t.data.id,payload:e,status:"success"})}),(function(){_workerSelf.postMessage({id:t.data.id,status:"error"})}))})),e.onmessage=function(t){var e=t.data,r=e.id,s=i[r];i[r]=null,"success"===e.status?s.onComplete(e.payload):s.onError&&s.onError()})}function n(t,e){var s="processId_"+(r+=1);return i[s]={onComplete:t,onError:e},s}return{loadAnimation:function(t,r,i){a();var s=n(r,i);e.postMessage({type:"loadAnimation",path:t,fullPath:window.location.origin+window.location.pathname,id:s})},loadData:function(t,r,i){a();var s=n(r,i);e.postMessage({type:"loadData",path:t,fullPath:window.location.origin+window.location.pathname,id:s})},completeAnimation:function(t,r,i){a();var s=n(r,i);e.postMessage({type:"complete",animation:t,id:s})}}}(),ImagePreloader=function(){var t=function(){var t=createTag("canvas");t.width=1,t.height=1;var e=t.getContext("2d");return e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,1,1),t}();function e(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function r(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(t,e,r){var i="";if(t.e)i=t.p;else if(e){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),i=e+s}else i=r,i+=t.u?t.u:"",i+=t.p;return i}function s(t){var e=0,r=setInterval(function(){(t.getBBox().width||e>500)&&(this._imageLoaded(),clearInterval(r)),e+=1}.bind(this),50)}function a(t){var e={assetData:t},r=i(t,this.assetsPath,this.path);return dataManager.loadData(r,function(t){e.img=t,this._footageLoaded()}.bind(this),function(){e.img={},this._footageLoaded()}.bind(this)),e}function n(){this._imageLoaded=e.bind(this),this._footageLoaded=r.bind(this),this.testImageLoaded=s.bind(this),this.createFootageData=a.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return n.prototype={loadAssets:function(t,e){var r;this.imagesLoadedCb=e;var i=t.length;for(r=0;r<i;r+=1)t[r].layers||(t[r].t&&"seq"!==t[r].t?3===t[r].t&&(this.totalFootages+=1,this.images.push(this.createFootageData(t[r]))):(this.totalImages+=1,this.images.push(this._createImageData(t[r]))))},setAssetsPath:function(t){this.assetsPath=t||""},setPath:function(t){this.path=t||""},loadedImages:function(){return this.totalImages===this.loadedAssets},loadedFootages:function(){return this.totalFootages===this.loadedFootagesCount},destroy:function(){this.imagesLoadedCb=null,this.images.length=0},getAsset:function(t){for(var e=0,r=this.images.length;e<r;){if(this.images[e].assetData===t)return this.images[e].img;e+=1}return null},createImgData:function(e){var r=i(e,this.assetsPath,this.path),s=createTag("img");s.crossOrigin="anonymous",s.addEventListener("load",this._imageLoaded,!1),s.addEventListener("error",function(){a.img=t,this._imageLoaded()}.bind(this),!1),s.src=r;var a={img:s,assetData:e};return a},createImageData:function(e){var r=i(e,this.assetsPath,this.path),s=createNS("image");isSafari?this.testImageLoaded(s):s.addEventListener("load",this._imageLoaded,!1),s.addEventListener("error",function(){a.img=t,this._imageLoaded()}.bind(this),!1),s.setAttributeNS("http://www.w3.org/1999/xlink","href",r),this._elementHelper.append?this._elementHelper.append(s):this._elementHelper.appendChild(s);var a={img:s,assetData:e};return a},imageLoaded:e,footageLoaded:r,setCacheType:function(t,e){"svg"===t?(this._elementHelper=e,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}},n}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var r=this._cbs[t],i=0;i<r.length;i+=1)r[i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(e){if(this._cbs[t]){for(var r=0,i=this._cbs[t].length;r<i;)this._cbs[t][r]===e&&(this._cbs[t].splice(r,1),r-=1,i-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var markerParser=function(){function t(t){for(var e,r=t.split("\r\n"),i={},s=0,a=0;a<r.length;a+=1)2===(e=r[a].split(":")).length&&(i[e[0]]=e[1].trim(),s+=1);if(0===s)throw new Error;return i}return function(e){for(var r=[],i=0;i<e.length;i+=1){var s=e[i],a={time:s.tm,duration:s.dr};try{a.payload=JSON.parse(e[i].cm)}catch(r){try{a.payload=t(e[i].cm)}catch(t){a.payload={name:e[i].cm}}}r.push(a)}return r}}(),ProjectInterface=function(){function t(t){this.compositions.push(t)}return function(){function e(t){for(var e=0,r=this.compositions.length;e<r;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].data.xt&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}return null}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),renderers={},registerRenderer=function(t,e){renderers[t]=e};function getRenderer(t){return renderers[t]}function getRegisteredRenderer(){if(renderers.canvas)return"canvas";for(var t in renderers)if(renderers[t])return t;return""}function _typeof$4(t){return _typeof$4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$4(t)}var AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=getSubframeEnabled(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader,this.audioController=audioControllerFactory(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new BMEnterFrameEvent("drawnFrame",0,0,0),this.expressionsPlugin=getExpressionsPlugin()};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e="svg";t.animType?e=t.animType:t.renderer&&(e=t.renderer);var r=getRenderer(e);this.renderer=new r(this,t.rendererSettings),this.imagePreloader.setCacheType(e,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=e,""===t.loop||null===t.loop||void 0===t.loop||!0===t.loop?this.loop=!0:!1===t.loop?this.loop=!1:this.loop=parseInt(t.loop,10),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!Object.prototype.hasOwnProperty.call(t,"autoloadSegments")||t.autoloadSegments,this.assetsPath=t.assetsPath,this.initialSegment=t.initialSegment,t.audioFactory&&this.audioController.setAudioFactory(t.audioFactory),t.animationData?this.setupAnimation(t.animationData):t.path&&(-1!==t.path.lastIndexOf("\\")?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),dataManager.loadAnimation(t.path,this.configAnimation,this.onSetupError))},AnimationItem.prototype.onSetupError=function(){this.trigger("data_failed")},AnimationItem.prototype.setupAnimation=function(t){dataManager.completeAnimation(t,this.configAnimation)},AnimationItem.prototype.setData=function(t,e){e&&"object"!==_typeof$4(e)&&(e=JSON.parse(e));var r={wrapper:t,animationData:e},i=t.attributes;r.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",r.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:getRegisteredRenderer()||"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";"false"===s?r.loop=!1:"true"===s?r.loop=!0:""!==s&&(r.loop=parseInt(s,10));var a=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:!i.getNamedItem("bm-autoplay")||i.getNamedItem("bm-autoplay").value;r.autoplay="false"!==a,r.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"","false"===(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")&&(r.prerender=!1),r.path?this.setParams(r):this.trigger("destroy")},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e,r,i=this.animationData.layers,s=i.length,a=t.layers,n=a.length;for(r=0;r<n;r+=1)for(e=0;e<s;){if(i[e].id===a[r].id){i[e]=a[r];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,e=0;e<s;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeAnimation(this.animationData,this.onSegmentComplete)},AnimationItem.prototype.onSegmentComplete=function(t){this.animationData=t;var e=getExpressionsPlugin();e&&e.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.totalFrames);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var r=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,dataManager.loadData(r,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},AnimationItem.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.markers=markerParser(t.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(t){this.triggerConfigError(t)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||"canvas"!==this.renderer.rendererType)&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var t=getExpressionsPlugin();t&&t.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},AnimationItem.prototype.resize=function(t,e){var r="number"==typeof t?t:void 0,i="number"==typeof e?e:void 0;this.renderer.updateContainerSize(r,i)},AnimationItem.prototype.setSubframe=function(t){this.isSubframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},AnimationItem.prototype.renderFrame=function(){if(!1!==this.isLoaded&&this.renderer)try{this.expressionsPlugin&&this.expressionsPlugin.resetFrame(),this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},AnimationItem.prototype.play=function(t){t&&this.name!==t||!0===this.isPaused&&(this.isPaused=!1,this.trigger("_play"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!==t||!1===this.isPaused&&(this.isPaused=!0,this.trigger("_pause"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},AnimationItem.prototype.togglePause=function(t){t&&this.name!==t||(!0===this.isPaused?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!==t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.getMarkerData=function(t){for(var e,r=0;r<this.markers.length;r+=1)if((e=this.markers[r]).payload&&e.payload.name===t)return e;return null},AnimationItem.prototype.goToAndStop=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&this.goToAndStop(s.time,!0)}else e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier);this.pause()}},AnimationItem.prototype.goToAndPlay=function(t,e,r){if(!r||this.name===r){var i=Number(t);if(isNaN(i)){var s=this.getMarkerData(t);s&&(s.duration?this.playSegments([s.time,s.time+s.duration],!0):this.goToAndStop(s.time,!0))}else this.goToAndStop(i,e,r);this.play()}},AnimationItem.prototype.advanceTime=function(t){if(!0!==this.isPaused&&!1!==this.isLoaded){var e=this.currentRawFrame+t*this.frameModifier,r=!1;e>=this.totalFrames-1&&this.frameModifier>0?this.loop&&this.playCount!==this.loop?e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(r=!0,e=this.totalFrames-1):e<0?this.checkSegments(e%this.totalFrames)||(!this.loop||this.playCount--<=0&&!0!==this.loop?(r=!0,e=0):(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0)):this.setCurrentRawFrameValue(e),r&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.timeCompleted=this.totalFrames,this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.timeCompleted=this.totalFrames,this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?r=t:this.currentRawFrame+this.firstFrame>e&&(r=e-t)),this.firstFrame=t,this.totalFrames=e-t,this.timeCompleted=this.totalFrames,-1!==r&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),"object"===_typeof$4(t[0])){var r,i=t.length;for(r=0;r<i;r+=1)this.segments.push(t[r])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),t),!0)},AnimationItem.prototype.destroy=function(t){t&&this.name!==t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.expressionsPlugin=null,this.imagePreloader=null,this.projectInterface=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.setLoop=function(t){this.loop=t},AnimationItem.prototype.setVolume=function(t,e){e&&this.name!==e||this.audioController.setVolume(t)},AnimationItem.prototype.getVolume=function(){return this.audioController.getVolume()},AnimationItem.prototype.mute=function(t){t&&this.name!==t||this.audioController.mute()},AnimationItem.prototype.unmute=function(t){t&&this.name!==t||this.audioController.unmute()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var r=t.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,r=this.assets.length;e<r;){if(t===this.assets[e].id)return this.assets[e];e+=1}return null},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.updateDocumentData=function(t,e,r){try{this.renderer.getElementByPath(t).updateDocumentData(e,r)}catch(t){}},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(t,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},AnimationItem.prototype.triggerConfigError=function(t){var e=new BMConfigErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var animationManager=function(){var t={},e=[],r=0,i=0,s=0,a=!0,n=!1;function o(t){for(var r=0,s=t.target;r<i;)e[r].animation===s&&(e.splice(r,1),r-=1,i-=1,s.isPaused||p()),r+=1}function h(t,r){if(!t)return null;for(var s=0;s<i;){if(e[s].elem===t&&null!==e[s].elem)return e[s].animation;s+=1}var a=new AnimationItem;return c(a,t),a.setData(t,r),a}function l(){s+=1,d()}function p(){s-=1}function c(t,r){t.addEventListener("destroy",o),t.addEventListener("_active",l),t.addEventListener("_idle",p),e.push({elem:r,animation:t}),i+=1}function f(t){var o,h=t-r;for(o=0;o<i;o+=1)e[o].animation.advanceTime(h);r=t,s&&!n?window.requestAnimationFrame(f):a=!0}function u(t){r=t,window.requestAnimationFrame(f)}function d(){!n&&s&&a&&(window.requestAnimationFrame(u),a=!1)}return t.registerAnimation=h,t.loadAnimation=function(t){var e=new AnimationItem;return c(e,null),e.setParams(t),e},t.setSpeed=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setSpeed(t,r)},t.setDirection=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setDirection(t,r)},t.play=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.play(t)},t.pause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.pause(t)},t.stop=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.stop(t)},t.togglePause=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.togglePause(t)},t.searchAnimations=function(t,e,r){var i,s=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),a=s.length;for(i=0;i<a;i+=1)r&&s[i].setAttribute("data-bm-type",r),h(s[i],t);if(e&&0===a){r||(r="svg");var n=document.getElementsByTagName("body")[0];n.innerText="";var o=createTag("div");o.style.width="100%",o.style.height="100%",o.setAttribute("data-bm-type",r),n.appendChild(o),h(o,t)}},t.resize=function(){var t;for(t=0;t<i;t+=1)e[t].animation.resize()},t.goToAndStop=function(t,r,s){var a;for(a=0;a<i;a+=1)e[a].animation.goToAndStop(t,r,s)},t.destroy=function(t){var r;for(r=i-1;r>=0;r-=1)e[r].animation.destroy(t)},t.freeze=function(){n=!0},t.unfreeze=function(){n=!1,d()},t.setVolume=function(t,r){var s;for(s=0;s<i;s+=1)e[s].animation.setVolume(t,r)},t.mute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.mute(t)},t.unmute=function(t){var r;for(r=0;r<i;r+=1)e[r].animation.unmute(t)},t.getRegisteredAnimations=function(){var t,r=e.length,i=[];for(t=0;t<r;t+=1)i.push(e[t].animation);return i},t}(),BezierFactory=function(){var t={getBezierEasing:function(t,r,i,s,a){var n=a||("bez_"+t+"_"+r+"_"+i+"_"+s).replace(/\./g,"p");if(e[n])return e[n];var o=new l([t,r,i,s]);return e[n]=o,o}},e={},r=.1,i="function"==typeof Float32Array;function s(t,e){return 1-3*e+3*t}function a(t,e){return 3*e-6*t}function n(t){return 3*t}function o(t,e,r){return((s(e,r)*t+a(e,r))*t+n(e))*t}function h(t,e,r){return 3*s(e,r)*t*t+2*a(e,r)*t+n(e)}function l(t){this._p=t,this._mSampleValues=i?new Float32Array(11):new Array(11),this._precomputed=!1,this.get=this.get.bind(this)}return l.prototype={get:function(t){var e=this._p[0],r=this._p[1],i=this._p[2],s=this._p[3];return this._precomputed||this._precompute(),e===r&&i===s?t:0===t?0:1===t?1:o(this._getTForX(t),r,s)},_precompute:function(){var t=this._p[0],e=this._p[1],r=this._p[2],i=this._p[3];this._precomputed=!0,t===e&&r===i||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],i=0;i<11;++i)this._mSampleValues[i]=o(i*r,t,e)},_getTForX:function(t){for(var e=this._p[0],i=this._p[2],s=this._mSampleValues,a=0,n=1;10!==n&&s[n]<=t;++n)a+=r;var l=a+(t-s[--n])/(s[n+1]-s[n])*r,p=h(l,e,i);return p>=.001?function(t,e,r,i){for(var s=0;s<4;++s){var a=h(e,r,i);if(0===a)return e;e-=(o(e,r,i)-t)/a}return e}(t,l,e,i):0===p?l:function(t,e,r,i,s){var a,n,h=0;do{(a=o(n=e+(r-e)/2,i,s)-t)>0?r=n:e=n}while(Math.abs(a)>1e-7&&++h<10);return n}(t,a,a+r,e,i)}},t}(),pooling={double:function(t){return t.concat(createSizedArray(t.length))}},poolFactory=function(t,e,r){var i=0,s=t,a=createSizedArray(s);return{newElement:function(){return i?a[i-=1]:e()},release:function(t){i===s&&(a=pooling.double(a),s*=2),r&&r(t),a[i]=t,i+=1}}},bezierLengthPool=poolFactory(8,(function(){return{addedLength:0,percents:createTypedArray("float32",getDefaultCurveSegments()),lengths:createTypedArray("float32",getDefaultCurveSegments())}})),segmentsLengthPool=poolFactory(8,(function(){return{lengths:[],totalLength:0}}),(function(t){var e,r=t.lengths.length;for(e=0;e<r;e+=1)bezierLengthPool.release(t.lengths[e]);t.lengths.length=0}));function bezFunction(){var t=Math;function e(t,e,r,i,s,a){var n=t*i+e*s+r*a-s*i-a*t-r*e;return n>-.001&&n<.001}var r=function(t,e,r,i){var s,a,n,o,h,l,p=getDefaultCurveSegments(),c=0,f=[],u=[],d=bezierLengthPool.newElement();for(n=r.length,s=0;s<p;s+=1){for(h=s/(p-1),l=0,a=0;a<n;a+=1)o=bmPow(1-h,3)*t[a]+3*bmPow(1-h,2)*h*r[a]+3*(1-h)*bmPow(h,2)*i[a]+bmPow(h,3)*e[a],f[a]=o,null!==u[a]&&(l+=bmPow(f[a]-u[a],2)),u[a]=f[a];l&&(c+=l=bmSqrt(l)),d.percents[s]=h,d.lengths[s]=c}return d.addedLength=c,d};function i(t){this.segmentLength=0,this.points=new Array(t)}function s(t,e){this.partialLength=t,this.point=e}var a,n=(a={},function(t,r,n,o){var h=(t[0]+"_"+t[1]+"_"+r[0]+"_"+r[1]+"_"+n[0]+"_"+n[1]+"_"+o[0]+"_"+o[1]).replace(/\./g,"p");if(!a[h]){var l,p,c,f,u,d,m,y=getDefaultCurveSegments(),g=0,v=null;2===t.length&&(t[0]!==r[0]||t[1]!==r[1])&&e(t[0],t[1],r[0],r[1],t[0]+n[0],t[1]+n[1])&&e(t[0],t[1],r[0],r[1],r[0]+o[0],r[1]+o[1])&&(y=2);var b=new i(y);for(c=n.length,l=0;l<y;l+=1){for(m=createSizedArray(c),u=l/(y-1),d=0,p=0;p<c;p+=1)f=bmPow(1-u,3)*t[p]+3*bmPow(1-u,2)*u*(t[p]+n[p])+3*(1-u)*bmPow(u,2)*(r[p]+o[p])+bmPow(u,3)*r[p],m[p]=f,null!==v&&(d+=bmPow(m[p]-v[p],2));g+=d=bmSqrt(d),b.points[l]=new s(d,m),v=m}b.segmentLength=g,a[h]=b}return a[h]});function o(t,e){var r=e.percents,i=e.lengths,s=r.length,a=bmFloor((s-1)*t),n=t*e.addedLength,o=0;if(a===s-1||0===a||n===i[a])return r[a];for(var h=i[a]>n?-1:1,l=!0;l;)if(i[a]<=n&&i[a+1]>n?(o=(n-i[a])/(i[a+1]-i[a]),l=!1):a+=h,a<0||a>=s-1){if(a===s-1)return r[a];l=!1}return r[a]+(r[a+1]-r[a])*o}var h=createTypedArray("float32",8);return{getSegmentsLength:function(t){var e,i=segmentsLengthPool.newElement(),s=t.c,a=t.v,n=t.o,o=t.i,h=t._length,l=i.lengths,p=0;for(e=0;e<h-1;e+=1)l[e]=r(a[e],a[e+1],n[e],o[e+1]),p+=l[e].addedLength;return s&&h&&(l[e]=r(a[e],a[0],n[e],o[0]),p+=l[e].addedLength),i.totalLength=p,i},getNewSegment:function(e,r,i,s,a,n,l){a<0?a=0:a>1&&(a=1);var p,c=o(a,l),f=o(n=n>1?1:n,l),u=e.length,d=1-c,m=1-f,y=d*d*d,g=c*d*d*3,v=c*c*d*3,b=c*c*c,_=d*d*m,P=c*d*m+d*c*m+d*d*f,S=c*c*m+d*c*f+c*d*f,E=c*c*f,x=d*m*m,C=c*m*m+d*f*m+d*m*f,A=c*f*m+d*f*f+c*m*f,w=c*f*f,k=m*m*m,T=f*m*m+m*f*m+m*m*f,M=f*f*m+m*f*f+f*m*f,D=f*f*f;for(p=0;p<u;p+=1)h[4*p]=t.round(1e3*(y*e[p]+g*i[p]+v*s[p]+b*r[p]))/1e3,h[4*p+1]=t.round(1e3*(_*e[p]+P*i[p]+S*s[p]+E*r[p]))/1e3,h[4*p+2]=t.round(1e3*(x*e[p]+C*i[p]+A*s[p]+w*r[p]))/1e3,h[4*p+3]=t.round(1e3*(k*e[p]+T*i[p]+M*s[p]+D*r[p]))/1e3;return h},getPointInSegment:function(e,r,i,s,a,n){var h=o(a,n),l=1-h;return[t.round(1e3*(l*l*l*e[0]+(h*l*l+l*h*l+l*l*h)*i[0]+(h*h*l+l*h*h+h*l*h)*s[0]+h*h*h*r[0]))/1e3,t.round(1e3*(l*l*l*e[1]+(h*l*l+l*h*l+l*l*h)*i[1]+(h*h*l+l*h*h+h*l*h)*s[1]+h*h*h*r[1]))/1e3]},buildBezierData:n,pointOnLine2D:e,pointOnLine3D:function(r,i,s,a,n,o,h,l,p){if(0===s&&0===o&&0===p)return e(r,i,a,n,h,l);var c,f=t.sqrt(t.pow(a-r,2)+t.pow(n-i,2)+t.pow(o-s,2)),u=t.sqrt(t.pow(h-r,2)+t.pow(l-i,2)+t.pow(p-s,2)),d=t.sqrt(t.pow(h-a,2)+t.pow(l-n,2)+t.pow(p-o,2));return(c=f>u?f>d?f-u-d:d-u-f:d>u?d-u-f:u-f-d)>-1e-4&&c<1e-4}}}var bez=bezFunction(),initFrame=initialDefaultFrame,mathAbs=Math.abs;function interpolateValue(t,e){var r,i=this.offsetTime;"multidimensional"===this.propType&&(r=createTypedArray("float32",this.pv.length));for(var s,a,n,o,h,l,p,c,f,u=e.lastIndex,d=u,m=this.keyframes.length-1,y=!0;y;){if(s=this.keyframes[d],a=this.keyframes[d+1],d===m-1&&t>=a.t-i){s.h&&(s=a),u=0;break}if(a.t-i>t){u=d;break}d<m-1?d+=1:(u=0,y=!1)}n=this.keyframesMetadata[d]||{};var g,v=a.t-i,b=s.t-i;if(s.to){n.bezierData||(n.bezierData=bez.buildBezierData(s.s,a.s||s.e,s.to,s.ti));var _=n.bezierData;if(t>=v||t<b){var P=t>=v?_.points.length-1:0;for(h=_.points[P].point.length,o=0;o<h;o+=1)r[o]=_.points[P].point[o]}else{n.__fnct?f=n.__fnct:(f=BezierFactory.getBezierEasing(s.o.x,s.o.y,s.i.x,s.i.y,s.n).get,n.__fnct=f),l=f((t-b)/(v-b));var S,E=_.segmentLength*l,x=e.lastFrame<t&&e._lastKeyframeIndex===d?e._lastAddedLength:0;for(c=e.lastFrame<t&&e._lastKeyframeIndex===d?e._lastPoint:0,y=!0,p=_.points.length;y;){if(x+=_.points[c].partialLength,0===E||0===l||c===_.points.length-1){for(h=_.points[c].point.length,o=0;o<h;o+=1)r[o]=_.points[c].point[o];break}if(E>=x&&E<x+_.points[c+1].partialLength){for(S=(E-x)/_.points[c+1].partialLength,h=_.points[c].point.length,o=0;o<h;o+=1)r[o]=_.points[c].point[o]+(_.points[c+1].point[o]-_.points[c].point[o])*S;break}c<p-1?c+=1:y=!1}e._lastPoint=c,e._lastAddedLength=x-_.points[c].partialLength,e._lastKeyframeIndex=d}}else{var C,A,w,k,T;if(m=s.s.length,g=a.s||s.e,this.sh&&1!==s.h)t>=v?(r[0]=g[0],r[1]=g[1],r[2]=g[2]):t<=b?(r[0]=s.s[0],r[1]=s.s[1],r[2]=s.s[2]):quaternionToEuler(r,slerp(createQuaternion(s.s),createQuaternion(g),(t-b)/(v-b)));else for(d=0;d<m;d+=1)1!==s.h&&(t>=v?l=1:t<b?l=0:(s.o.x.constructor===Array?(n.__fnct||(n.__fnct=[]),n.__fnct[d]?f=n.__fnct[d]:(C=void 0===s.o.x[d]?s.o.x[0]:s.o.x[d],A=void 0===s.o.y[d]?s.o.y[0]:s.o.y[d],w=void 0===s.i.x[d]?s.i.x[0]:s.i.x[d],k=void 0===s.i.y[d]?s.i.y[0]:s.i.y[d],f=BezierFactory.getBezierEasing(C,A,w,k).get,n.__fnct[d]=f)):n.__fnct?f=n.__fnct:(C=s.o.x,A=s.o.y,w=s.i.x,k=s.i.y,f=BezierFactory.getBezierEasing(C,A,w,k).get,s.keyframeMetadata=f),l=f((t-b)/(v-b)))),g=a.s||s.e,T=1===s.h?s.s[d]:s.s[d]+(g[d]-s.s[d])*l,"multidimensional"===this.propType?r[d]=T:r=T}return e.lastIndex=u,r}function slerp(t,e,r){var i,s,a,n,o,h=[],l=t[0],p=t[1],c=t[2],f=t[3],u=e[0],d=e[1],m=e[2],y=e[3];return(s=l*u+p*d+c*m+f*y)<0&&(s=-s,u=-u,d=-d,m=-m,y=-y),1-s>1e-6?(i=Math.acos(s),a=Math.sin(i),n=Math.sin((1-r)*i)/a,o=Math.sin(r*i)/a):(n=1-r,o=r),h[0]=n*l+o*u,h[1]=n*p+o*d,h[2]=n*c+o*m,h[3]=n*f+o*y,h}function quaternionToEuler(t,e){var r=e[0],i=e[1],s=e[2],a=e[3],n=Math.atan2(2*i*a-2*r*s,1-2*i*i-2*s*s),o=Math.asin(2*r*i+2*s*a),h=Math.atan2(2*r*a-2*i*s,1-2*r*r-2*s*s);t[0]=n/degToRads,t[1]=o/degToRads,t[2]=h/degToRads}function createQuaternion(t){var e=t[0]*degToRads,r=t[1]*degToRads,i=t[2]*degToRads,s=Math.cos(e/2),a=Math.cos(r/2),n=Math.cos(i/2),o=Math.sin(e/2),h=Math.sin(r/2),l=Math.sin(i/2);return[o*h*n+s*a*l,o*a*n+s*h*l,s*h*n-o*a*l,s*a*n-o*h*l]}function getValueAtCurrentTime(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==initFrame&&(this._caching.lastFrame>=r&&t>=r||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var i=this.interpolateValue(t,this._caching);this.pv=i}return this._caching.lastFrame=t,this.pv}function setVValue(t){var e;if("unidimensional"===this.propType)e=t*this.mult,mathAbs(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var r=0,i=this.v.length;r<i;)e=t[r]*this.mult,mathAbs(this.v[r]-e)>1e-5&&(this.v[r]=e,this._mdf=!0),r+=1}function processEffectsSequence(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t;this.lock=!0,this._mdf=this._isFirstFrame;var e=this.effectsSequence.length,r=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)r=this.effectsSequence[t](r);this.setVValue(r),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function addEffect(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function ValueProperty(t,e,r,i){this.propType="unidimensional",this.mult=r||1,this.data=e,this.v=r?e.k*r:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.addEffect=addEffect}function MultiDimensionalProperty(t,e,r,i){var s;this.propType="multidimensional",this.mult=r||1,this.data=e,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var a=e.k.length;for(this.v=createTypedArray("float32",a),this.pv=createTypedArray("float32",a),this.vel=createTypedArray("float32",a),s=0;s<a;s+=1)this.v[s]=e.k[s]*this.mult,this.pv[s]=e.k[s];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=processEffectsSequence,this.setVValue=setVValue,this.addEffect=addEffect}function KeyframedValueProperty(t,e,r,i){this.propType="unidimensional",this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:initFrame,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=r||1,this.elem=t,this.container=i,this.comp=t.comp,this.v=initFrame,this.pv=initFrame,this._isFirstFrame=!0,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.interpolateValue=interpolateValue,this.effectsSequence=[getValueAtCurrentTime.bind(this)],this.addEffect=addEffect}function KeyframedMultidimensionalProperty(t,e,r,i){var s;this.propType="multidimensional";var a,n,o,h,l=e.k.length;for(s=0;s<l-1;s+=1)e.k[s].to&&e.k[s].s&&e.k[s+1]&&e.k[s+1].s&&(a=e.k[s].s,n=e.k[s+1].s,o=e.k[s].to,h=e.k[s].ti,(2===a.length&&(a[0]!==n[0]||a[1]!==n[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],a[0]+o[0],a[1]+o[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],n[0]+h[0],n[1]+h[1])||3===a.length&&(a[0]!==n[0]||a[1]!==n[1]||a[2]!==n[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],a[0]+o[0],a[1]+o[1],a[2]+o[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],n[0]+h[0],n[1]+h[1],n[2]+h[2]))&&(e.k[s].to=null,e.k[s].ti=null),a[0]===n[0]&&a[1]===n[1]&&0===o[0]&&0===o[1]&&0===h[0]&&0===h[1]&&(2===a.length||a[2]===n[2]&&0===o[2]&&0===h[2])&&(e.k[s].to=null,e.k[s].ti=null));this.effectsSequence=[getValueAtCurrentTime.bind(this)],this.data=e,this.keyframes=e.k,this.keyframesMetadata=[],this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=r||1,this.elem=t,this.container=i,this.comp=t.comp,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.interpolateValue=interpolateValue,this.frameId=-1;var p=e.k[0].s.length;for(this.v=createTypedArray("float32",p),this.pv=createTypedArray("float32",p),s=0;s<p;s+=1)this.v[s]=initFrame,this.pv[s]=initFrame;this._caching={lastFrame:initFrame,lastIndex:0,value:createTypedArray("float32",p)},this.addEffect=addEffect}var PropertyFactory=(ob={getProp:function(t,e,r,i,s){var a;if(e.sid&&(e=t.globalData.slotManager.getProp(e)),e.k.length)if("number"==typeof e.k[0])a=new MultiDimensionalProperty(t,e,i,s);else switch(r){case 0:a=new KeyframedValueProperty(t,e,i,s);break;case 1:a=new KeyframedMultidimensionalProperty(t,e,i,s)}else a=new ValueProperty(t,e,i,s);return a.effectsSequence.length&&s.addDynamicProperty(a),a}},ob),ob;function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){var t;this._mdf=!1;var e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var pointPool=poolFactory(8,(function(){return createTypedArray("float32",2)}));function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var r=0;r<e;)this.v[r]=pointPool.newElement(),this.o[r]=pointPool.newElement(),this.i[r]=pointPool.newElement(),r+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,r,i,s){var a;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o;break;default:a=[]}(!a[i]||a[i]&&!s)&&(a[i]=pointPool.newElement()),a[i][0]=t,a[i][1]=e},ShapePath.prototype.setTripleAt=function(t,e,r,i,s,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(r,i,"o",n,o),this.setXYAt(s,a,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,r=this.o,i=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],r[0][0],r[0][1],0,!1),s=1);var a,n=this._length-1,o=this._length;for(a=s;a<o;a+=1)t.setTripleAt(e[n][0],e[n][1],i[n][0],i[n][1],r[n][0],r[n][1],a,!1),n-=1;return t},ShapePath.prototype.length=function(){return this._length};var shapePool=(factory=poolFactory(4,(function(){return new ShapePath}),(function(t){var e,r=t._length;for(e=0;e<r;e+=1)pointPool.release(t.v[e]),pointPool.release(t.i[e]),pointPool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1})),factory.clone=function(t){var e,r=factory.newElement(),i=void 0===t._length?t.v.length:t._length;for(r.setLength(i),r.c=t.c,e=0;e<i;e+=1)r.setTripleAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[e][1],t.i[e][0],t.i[e][1],e);return r},factory),factory;function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shapePool.release(this.shapes[t]);this._length=0};var shapeCollectionPool=function(){var t={newShapeCollection:function(){return e?i[e-=1]:new ShapeCollection},release:function(t){var s,a=t._length;for(s=0;s<a;s+=1)shapePool.release(t.shapes[s]);t._length=0,e===r&&(i=pooling.double(i),r*=2),i[e]=t,e+=1}},e=0,r=4,i=createSizedArray(r);return t}(),ShapePropertyFactory=function(){var t=-999999;function e(t,e,r){var i,s,a,n,o,h,l,p,c,f=r.lastIndex,u=this.keyframes;if(t<u[0].t-this.offsetTime)i=u[0].s[0],a=!0,f=0;else if(t>=u[u.length-1].t-this.offsetTime)i=u[u.length-1].s?u[u.length-1].s[0]:u[u.length-2].e[0],a=!0;else{for(var d,m,y,g=f,v=u.length-1,b=!0;b&&(d=u[g],!((m=u[g+1]).t-this.offsetTime>t));)g<v-1?g+=1:b=!1;if(y=this.keyframesMetadata[g]||{},f=g,!(a=1===d.h)){if(t>=m.t-this.offsetTime)p=1;else if(t<d.t-this.offsetTime)p=0;else{var _;y.__fnct?_=y.__fnct:(_=BezierFactory.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y).get,y.__fnct=_),p=_((t-(d.t-this.offsetTime))/(m.t-this.offsetTime-(d.t-this.offsetTime)))}s=m.s?m.s[0]:d.e[0]}i=d.s[0]}for(h=e._length,l=i.i[0].length,r.lastIndex=f,n=0;n<h;n+=1)for(o=0;o<l;o+=1)c=a?i.i[n][o]:i.i[n][o]+(s.i[n][o]-i.i[n][o])*p,e.i[n][o]=c,c=a?i.o[n][o]:i.o[n][o]+(s.o[n][o]-i.o[n][o])*p,e.o[n][o]=c,c=a?i.v[n][o]:i.v[n][o]+(s.v[n][o]-i.v[n][o])*p,e.v[n][o]=c}function r(){var e=this.comp.renderedFrame-this.offsetTime,r=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime,s=this._caching.lastFrame;return s!==t&&(s<r&&e<r||s>i&&e>i)||(this._caching.lastIndex=s<e?this._caching.lastIndex:0,this.interpolateShape(e,this.pv,this._caching)),this._caching.lastFrame=e,this.pv}function i(){this.paths=this.localShapeCollection}function s(t){(function(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var r,i=t._length;for(r=0;r<i;r+=1)if(t.v[r][0]!==e.v[r][0]||t.v[r][1]!==e.v[r][1]||t.o[r][0]!==e.o[r][0]||t.o[r][1]!==e.o[r][1]||t.i[r][0]!==e.i[r][0]||t.i[r][1]!==e.i[r][1])return!1;return!0})(this.v,t)||(this.v=shapePool.clone(t),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function a(){if(this.elem.globalData.frameId!==this.frameId)if(this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var t,e;this.lock=!0,this._mdf=!1,t=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k;var r=this.effectsSequence.length;for(e=0;e<r;e+=1)t=this.effectsSequence[e](t);this.setVValue(t),this.lock=!1,this.frameId=this.elem.globalData.frameId}else this._mdf=!1}function n(t,e,r){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var s=3===r?e.pt.k:e.ks.k;this.v=shapePool.clone(s),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i,this.effectsSequence=[]}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(e,s,a){this.propType="shape",this.comp=e.comp,this.elem=e,this.container=e,this.offsetTime=e.data.st,this.keyframes=3===a?s.pt.k:s.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var n=this.keyframes[0].s[0].i.length;this.v=shapePool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,n),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=i,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[r.bind(this)]}n.prototype.interpolateShape=e,n.prototype.getValue=a,n.prototype.setVValue=s,n.prototype.addEffect=o,h.prototype.getValue=a,h.prototype.interpolateShape=e,h.prototype.setVValue=s,h.prototype.addEffect=o;var l=function(){var t=roundCorner;function e(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.elem=t,this.comp=t.comp,this.frameId=-1,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return e.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var e=this.p.v[0],r=this.p.v[1],i=this.s.v[0]/2,s=this.s.v[1]/2,a=3!==this.d,n=this.v;n.v[0][0]=e,n.v[0][1]=r-s,n.v[1][0]=a?e+i:e-i,n.v[1][1]=r,n.v[2][0]=e,n.v[2][1]=r+s,n.v[3][0]=a?e-i:e+i,n.v[3][1]=r,n.i[0][0]=a?e-i*t:e+i*t,n.i[0][1]=r-s,n.i[1][0]=a?e+i:e-i,n.i[1][1]=r-s*t,n.i[2][0]=a?e+i*t:e-i*t,n.i[2][1]=r+s,n.i[3][0]=a?e-i:e+i,n.i[3][1]=r+s*t,n.o[0][0]=a?e+i*t:e-i*t,n.o[0][1]=r-s,n.o[1][0]=a?e+i:e-i,n.o[1][1]=r+s*t,n.o[2][0]=a?e-i*t:e+i*t,n.o[2][1]=r+s,n.o[3][0]=a?e-i:e+i,n.o[3][1]=r-s*t}},extendPrototype([DynamicPropertyContainer],e),e}(),p=function(){function t(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return t.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var t,e,r,i,s=2*Math.floor(this.pt.v),a=2*Math.PI/s,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,c=2*Math.PI*o/(2*s),f=2*Math.PI*h/(2*s),u=-Math.PI/2;u+=this.r.v;var d=3===this.data.d?-1:1;for(this.v._length=0,t=0;t<s;t+=1){r=n?l:p,i=n?c:f;var m=(e=n?o:h)*Math.cos(u),y=e*Math.sin(u),g=0===m&&0===y?0:y/Math.sqrt(m*m+y*y),v=0===m&&0===y?0:-m/Math.sqrt(m*m+y*y);m+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(m,y,m-g*i*r*d,y-v*i*r*d,m+g*i*r*d,y+v*i*r*d,t,!0),n=!n,u+=a*d}},convertPolygonToPath:function(){var t,e=Math.floor(this.pt.v),r=2*Math.PI/e,i=this.or.v,s=this.os.v,a=2*Math.PI*i/(4*e),n=.5*-Math.PI,o=3===this.data.d?-1:1;for(n+=this.r.v,this.v._length=0,t=0;t<e;t+=1){var h=i*Math.cos(n),l=i*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),c=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*a*s*o,l-c*a*s*o,h+p*a*s*o,l+c*a*s*o,t,!0),n+=r*o}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],t),t}(),c=function(){function t(t,e){this.v=shapePool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return t.prototype={convertRectToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=bmMin(r,i,this.r.v),a=s*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+s,t+r,e-i+a,0,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-a,t+r,e+i-s,1,!0),0!==s?(this.v.setTripleAt(t+r-s,e+i,t+r-s,e+i,t+r-a,e+i,2,!0),this.v.setTripleAt(t-r+s,e+i,t-r+a,e+i,t-r+s,e+i,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-s,t-r,e+i-a,4,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+a,t-r,e-i+s,5,!0),this.v.setTripleAt(t-r+s,e-i,t-r+s,e-i,t-r+a,e-i,6,!0),this.v.setTripleAt(t+r-s,e-i,t+r-a,e-i,t+r-s,e-i,7,!0)):(this.v.setTripleAt(t-r,e+i,t-r+a,e+i,t-r,e+i,2),this.v.setTripleAt(t-r,e-i,t-r,e-i+a,t-r,e-i,3))):(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+a,t+r,e-i+s,0,!0),0!==s?(this.v.setTripleAt(t+r-s,e-i,t+r-s,e-i,t+r-a,e-i,1,!0),this.v.setTripleAt(t-r+s,e-i,t-r+a,e-i,t-r+s,e-i,2,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+s,t-r,e-i+a,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-a,t-r,e+i-s,4,!0),this.v.setTripleAt(t-r+s,e+i,t-r+s,e+i,t-r+a,e+i,5,!0),this.v.setTripleAt(t+r-s,e+i,t+r-a,e+i,t+r-s,e+i,6,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-s,t+r,e+i-a,7,!0)):(this.v.setTripleAt(t-r,e-i,t-r+a,e-i,t-r,e-i,1,!0),this.v.setTripleAt(t-r,e+i,t-r,e+i-a,t-r,e+i,2,!0),this.v.setTripleAt(t+r,e+i,t+r-a,e+i,t+r,e+i,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:i},extendPrototype([DynamicPropertyContainer],t),t}(),f={getShapeProp:function(t,e,r){var i;return 3===r||4===r?i=(3===r?e.pt:e.ks).k.length?new h(t,e,r):new n(t,e,r):5===r?i=new c(t,e):6===r?i=new l(t,e):7===r&&(i=new p(t,e)),i.k&&t.addDynamicProperty(i),i},getConstructorFunction:function(){return n},getKeyframedConstructorFunction:function(){return h}};return f}(),Matrix=function(){var t=Math.cos,e=Math.sin,r=Math.tan,i=Math.round;function s(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function a(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1)}function n(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1)}function o(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1)}function h(r){if(0===r)return this;var i=t(r),s=e(r);return this._t(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1)}function l(t,e){return this._t(1,e,t,1,0,0)}function p(t,e){return this.shear(r(t),r(e))}function c(i,s){var a=t(s),n=e(s);return this._t(a,n,0,0,-n,a,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,r(i),1,0,0,0,0,1,0,0,0,0,1)._t(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1)}function f(t,e,r){return r||0===r||(r=1),1===t&&1===e&&1===r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function u(t,e,r,i,s,a,n,o,h,l,p,c,f,u,d,m){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=i,this.props[4]=s,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=c,this.props[12]=f,this.props[13]=u,this.props[14]=d,this.props[15]=m,this}function d(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function m(t,e,r,i,s,a,n,o,h,l,p,c,f,u,d,m){var y=this.props;if(1===t&&0===e&&0===r&&0===i&&0===s&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===c)return y[12]=y[12]*t+y[15]*f,y[13]=y[13]*a+y[15]*u,y[14]=y[14]*p+y[15]*d,y[15]*=m,this._identityCalculated=!1,this;var g=y[0],v=y[1],b=y[2],_=y[3],P=y[4],S=y[5],E=y[6],x=y[7],C=y[8],A=y[9],w=y[10],k=y[11],T=y[12],M=y[13],D=y[14],F=y[15];return y[0]=g*t+v*s+b*h+_*f,y[1]=g*e+v*a+b*l+_*u,y[2]=g*r+v*n+b*p+_*d,y[3]=g*i+v*o+b*c+_*m,y[4]=P*t+S*s+E*h+x*f,y[5]=P*e+S*a+E*l+x*u,y[6]=P*r+S*n+E*p+x*d,y[7]=P*i+S*o+E*c+x*m,y[8]=C*t+A*s+w*h+k*f,y[9]=C*e+A*a+w*l+k*u,y[10]=C*r+A*n+w*p+k*d,y[11]=C*i+A*o+w*c+k*m,y[12]=T*t+M*s+D*h+F*f,y[13]=T*e+M*a+D*l+F*u,y[14]=T*r+M*n+D*p+F*d,y[15]=T*i+M*o+D*c+F*m,this._identityCalculated=!1,this}function y(t){var e=t.props;return this.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function g(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function v(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function b(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e];return t}function _(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function P(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function S(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function E(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function x(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function C(){var t=this.props[0]*this.props[5]-this.props[1]*this.props[4],e=this.props[5]/t,r=-this.props[1]/t,i=-this.props[4]/t,s=this.props[0]/t,a=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/t,n=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/t,o=new Matrix;return o.props[0]=e,o.props[1]=r,o.props[4]=i,o.props[5]=s,o.props[12]=a,o.props[13]=n,o}function A(t){return this.getInverseMatrix().applyToPointArray(t[0],t[1],t[2]||0)}function w(t){var e,r=t.length,i=[];for(e=0;e<r;e+=1)i[e]=A(t[e]);return i}function k(t,e,r){var i=createTypedArray("float32",6);if(this.isIdentity())i[0]=t[0],i[1]=t[1],i[2]=e[0],i[3]=e[1],i[4]=r[0],i[5]=r[1];else{var s=this.props[0],a=this.props[1],n=this.props[4],o=this.props[5],h=this.props[12],l=this.props[13];i[0]=t[0]*s+t[1]*n+h,i[1]=t[0]*a+t[1]*o+l,i[2]=e[0]*s+e[1]*n+h,i[3]=e[0]*a+e[1]*o+l,i[4]=r[0]*s+r[1]*n+h,i[5]=r[0]*a+r[1]*o+l}return i}function T(t,e,r){return this.isIdentity()?[t,e,r]:[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function M(t,e){if(this.isIdentity())return t+","+e;var r=this.props;return Math.round(100*(t*r[0]+e*r[4]+r[12]))/100+","+Math.round(100*(t*r[1]+e*r[5]+r[13]))/100}function D(){for(var t=0,e=this.props,r="matrix3d(";t<16;)r+=i(1e4*e[t])/1e4,r+=15===t?")":",",t+=1;return r}function F(t){return t<1e-6&&t>0||t>-1e-6&&t<0?i(1e4*t)/1e4:t}function I(){var t=this.props;return"matrix("+F(t[0])+","+F(t[1])+","+F(t[4])+","+F(t[5])+","+F(t[12])+","+F(t[13])+")"}return function(){this.reset=s,this.rotate=a,this.rotateX=n,this.rotateY=o,this.rotateZ=h,this.skew=p,this.skewFromAxis=c,this.shear=l,this.scale=f,this.setTransform=u,this.translate=d,this.transform=m,this.multiply=y,this.applyToPoint=P,this.applyToX=S,this.applyToY=E,this.applyToZ=x,this.applyToPointArray=T,this.applyToTriplePoints=k,this.applyToPointStringified=M,this.toCSS=D,this.to2dCSS=I,this.clone=b,this.cloneFromProps=_,this.equals=v,this.inversePoints=w,this.inversePoint=A,this.getInverseMatrix=C,this._t=this.transform,this.isIdentity=g,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();function _typeof$3(t){return _typeof$3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$3(t)}var lottie={},standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";function setLocation(t){setLocationHref(t)}function searchAnimations(){!0===standalone?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function setSubframeRendering(t){setSubframeEnabled(t)}function setPrefix(t){setIdPrefix(t)}function loadAnimation(t){return!0===standalone&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":setDefaultCurveSegments(200);break;default:case"medium":setDefaultCurveSegments(50);break;case"low":setDefaultCurveSegments(10)}else!isNaN(t)&&t>1&&setDefaultCurveSegments(t);getDefaultCurveSegments()>=50?roundValues(!1):roundValues(!0)}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&setExpressionsPlugin(e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;default:return null}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),r=0;r<e.length;r+=1){var i=e[r].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}return null}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocation,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.setVolume=animationManager.setVolume,lottie.mute=animationManager.mute,lottie.unmute=animationManager.unmute,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.useWebWorker=setWebWorker,lottie.setIDPrefix=setPrefix,lottie.__getFactory=getFactory,lottie.version="5.12.2";var queryString="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""};queryString=myScript.src?myScript.src.replace(/^[^\?]+\??/,""):"",renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);try{"object"!==_typeof$3(exports)&&(window.bodymovin=lottie)}catch(t){}var ShapeModifiers=function(){var t={},e={};return t.registerModifier=function(t,r){e[t]||(e[t]=r)},t.getModifier=function(t,r,i){return new e[t](r,i)},t}();function ShapeModifier(){}function TrimModifier(){}function PuckerAndBloatModifier(){}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:shapeCollectionPool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},ShapeModifier.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,r,i,s){var a=[];e<=1?a.push({s:t,e:e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],l=a.length;for(n=0;n<l;n+=1){var p,c;(o=a[n]).e*s<i||o.s*s>i+r||(p=o.s*s<=i?0:(o.s*s-i)/r,c=o.e*s>=i+r?1:(o.e*s-i)/r,h.push([p,c]))}return h.length||h.push([0,0]),h},TrimModifier.prototype.releasePathsData=function(t){var e,r=t.length;for(e=0;e<r;e+=1)segmentsLengthPool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,r,i,s;if(this._mdf||t){var a=this.o.v%360/360;if(a<0&&(a+=1),(e=this.s.v>1?1+a:this.s.v<0?0+a:this.s.v+a)>(r=this.e.v>1?1+a:this.e.v<0?0+a:this.e.v+a)){var n=e;e=r,r=n}e=1e-4*Math.round(1e4*e),r=1e-4*Math.round(1e4*r),this.sValue=e,this.eValue=r}else e=this.sValue,r=this.eValue;var o,h,l,p,c,f=this.shapes.length,u=0;if(r===e)for(s=0;s<f;s+=1)this.shapes[s].localShapeCollection.releaseShapes(),this.shapes[s].shape._mdf=!0,this.shapes[s].shape.paths=this.shapes[s].localShapeCollection,this._mdf&&(this.shapes[s].pathsData.length=0);else if(1===r&&0===e||0===r&&1===e){if(this._mdf)for(s=0;s<f;s+=1)this.shapes[s].pathsData.length=0,this.shapes[s].shape._mdf=!0}else{var d,m,y=[];for(s=0;s<f;s+=1)if((d=this.shapes[s]).shape._mdf||this._mdf||t||2===this.m){if(h=(i=d.shape.paths)._length,c=0,!d.shape._mdf&&d.pathsData.length)c=d.totalShapeLength;else{for(l=this.releasePathsData(d.pathsData),o=0;o<h;o+=1)p=bez.getSegmentsLength(i.shapes[o]),l.push(p),c+=p.totalLength;d.totalShapeLength=c,d.pathsData=l}u+=c,d.shape._mdf=!0}else d.shape.paths=d.localShapeCollection;var g,v=e,b=r,_=0;for(s=f-1;s>=0;s-=1)if((d=this.shapes[s]).shape._mdf){for((m=d.localShapeCollection).releaseShapes(),2===this.m&&f>1?(g=this.calculateShapeEdges(e,r,d.totalShapeLength,_,u),_+=d.totalShapeLength):g=[[v,b]],h=g.length,o=0;o<h;o+=1){v=g[o][0],b=g[o][1],y.length=0,b<=1?y.push({s:d.totalShapeLength*v,e:d.totalShapeLength*b}):v>=1?y.push({s:d.totalShapeLength*(v-1),e:d.totalShapeLength*(b-1)}):(y.push({s:d.totalShapeLength*v,e:d.totalShapeLength}),y.push({s:0,e:d.totalShapeLength*(b-1)}));var P=this.addShapes(d,y[0]);if(y[0].s!==y[0].e){if(y.length>1)if(d.shape.paths.shapes[d.shape.paths._length-1].c){var S=P.pop();this.addPaths(P,m),P=this.addShapes(d,y[1],S)}else this.addPaths(P,m),P=this.addShapes(d,y[1]);this.addPaths(P,m)}}d.shape.paths=m}}},TrimModifier.prototype.addPaths=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e.addShape(t[r])},TrimModifier.prototype.addSegment=function(t,e,r,i,s,a,n){s.setXYAt(e[0],e[1],"o",a),s.setXYAt(r[0],r[1],"i",a+1),n&&s.setXYAt(t[0],t[1],"v",a),s.setXYAt(i[0],i[1],"v",a+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,r,i){e.setXYAt(t[1],t[5],"o",r),e.setXYAt(t[2],t[6],"i",r+1),i&&e.setXYAt(t[0],t[4],"v",r),e.setXYAt(t[3],t[7],"v",r+1)},TrimModifier.prototype.addShapes=function(t,e,r){var i,s,a,n,o,h,l,p,c=t.pathsData,f=t.shape.paths.shapes,u=t.shape.paths._length,d=0,m=[],y=!0;for(r?(o=r._length,p=r._length):(r=shapePool.newElement(),o=0,p=0),m.push(r),i=0;i<u;i+=1){for(h=c[i].lengths,r.c=f[i].c,a=f[i].c?h.length:h.length+1,s=1;s<a;s+=1)if(d+(n=h[s-1]).addedLength<e.s)d+=n.addedLength,r.c=!1;else{if(d>e.e){r.c=!1;break}e.s<=d&&e.e>=d+n.addedLength?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[s],f[i].v[s],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[s],f[i].o[s-1],f[i].i[s],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1),d+=n.addedLength,o+=1}if(f[i].c&&h.length){if(n=h[s-1],d<=e.e){var g=h[s-1].addedLength;e.s<=d&&e.e>=d+g?(this.addSegment(f[i].v[s-1],f[i].o[s-1],f[i].i[0],f[i].v[0],r,o,y),y=!1):(l=bez.getNewSegment(f[i].v[s-1],f[i].v[0],f[i].o[s-1],f[i].i[0],(e.s-d)/g,(e.e-d)/g,h[s-1]),this.addSegmentFromArray(l,r,o,y),y=!1,r.c=!1)}else r.c=!1;d+=n.addedLength,o+=1}if(r._length&&(r.setXYAt(r.v[p][0],r.v[p][1],"i",p),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),d>e.e)break;i<u-1&&(r=shapePool.newElement(),y=!0,m.push(r),o=0)}return m},extendPrototype([ShapeModifier],PuckerAndBloatModifier),PuckerAndBloatModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(t,e.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},PuckerAndBloatModifier.prototype.processPath=function(t,e){var r=e/100,i=[0,0],s=t._length,a=0;for(a=0;a<s;a+=1)i[0]+=t.v[a][0],i[1]+=t.v[a][1];i[0]/=s,i[1]/=s;var n,o,h,l,p,c,f=shapePool.newElement();for(f.c=t.c,a=0;a<s;a+=1)n=t.v[a][0]+(i[0]-t.v[a][0])*r,o=t.v[a][1]+(i[1]-t.v[a][1])*r,h=t.o[a][0]+(i[0]-t.o[a][0])*-r,l=t.o[a][1]+(i[1]-t.o[a][1])*-r,p=t.i[a][0]+(i[0]-t.i[a][0])*-r,c=t.i[a][1]+(i[1]-t.i[a][1])*-r,f.setTripleAt(n,o,h,l,p,c,a);return f},PuckerAndBloatModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.amount.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)};var TransformPropertyFactory=function(){var t=[0,0];function e(t,e,r){if(this.elem=t,this.frameId=-1,this.propType="transform",this.data=e,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(r||t),e.p&&e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this))):this.p=PropertyFactory.getProp(t,e.p||{k:[0,0,0]},1,0,this),e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this),e.or.k[0].ti){var i,s=e.or.k.length;for(i=0;i<s;i+=1)e.or.k[i].to=null,e.or.k[i].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(t,e.r||{k:0},0,degToRads,this);e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(t,e.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(t,e.s||{k:[100,100,100]},1,.01,this),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,t):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}return e.prototype={applyToMatrix:function(t){var e=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||e,this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&t.skewFromAxis(-this.sk.v,this.sa.v),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])},getValue:function(e){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||e){var r;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var i,s;if(r=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(i=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/r,0),s=this.p.getValueAtTime(this.p.keyframes[0].t/r,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(i=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/r,0),s=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/r,0)):(i=this.p.pv,s=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/r,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){i=[],s=[];var a=this.px,n=this.py;a._caching.lastFrame+a.offsetTime<=a.keyframes[0].t?(i[0]=a.getValueAtTime((a.keyframes[0].t+.01)/r,0),i[1]=n.getValueAtTime((n.keyframes[0].t+.01)/r,0),s[0]=a.getValueAtTime(a.keyframes[0].t/r,0),s[1]=n.getValueAtTime(n.keyframes[0].t/r,0)):a._caching.lastFrame+a.offsetTime>=a.keyframes[a.keyframes.length-1].t?(i[0]=a.getValueAtTime(a.keyframes[a.keyframes.length-1].t/r,0),i[1]=n.getValueAtTime(n.keyframes[n.keyframes.length-1].t/r,0),s[0]=a.getValueAtTime((a.keyframes[a.keyframes.length-1].t-.01)/r,0),s[1]=n.getValueAtTime((n.keyframes[n.keyframes.length-1].t-.01)/r,0)):(i=[a.pv,n.pv],s[0]=a.getValueAtTime((a._caching.lastFrame+a.offsetTime-.01)/r,a.offsetTime),s[1]=n.getValueAtTime((n._caching.lastFrame+n.offsetTime-.01)/r,n.offsetTime))}else i=s=t;this.v.rotate(-Math.atan2(i[1]-s[1],i[0]-s[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}},precalculateMatrix:function(){if(this.appliedTransformations=0,this.pre.reset(),!this.a.effectsSequence.length&&(this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1,!this.s.effectsSequence.length)){if(this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2,this.sk){if(this.sk.effectsSequence.length||this.sa.effectsSequence.length)return;this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3}this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}},autoOrient:function(){}},extendPrototype([DynamicPropertyContainer],e),e.prototype.addDynamicProperty=function(t){this._addDynamicProperty(t),this.elem.addDynamicProperty(t),this._isDirty=!0},e.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty,{getTransformProperty:function(t,r,i){return new e(t,r,i)}}}();function RepeaterModifier(){}function RoundCornersModifier(){}function floatEqual(t,e){return 1e5*Math.abs(t-e)<=Math.min(Math.abs(t),Math.abs(e))}function floatZero(t){return Math.abs(t)<=1e-5}function lerp(t,e,r){return t*(1-r)+e*r}function lerpPoint(t,e,r){return[lerp(t[0],e[0],r),lerp(t[1],e[1],r)]}function quadRoots(t,e,r){if(0===t)return[];var i=e*e-4*t*r;if(i<0)return[];var s=-e/(2*t);if(0===i)return[s];var a=Math.sqrt(i)/(2*t);return[s-a,s+a]}function polynomialCoefficients(t,e,r,i){return[3*e-t-3*r+i,3*t-6*e+3*r,-3*t+3*e,t]}function singlePoint(t){return new PolynomialBezier(t,t,t,t,!1)}function PolynomialBezier(t,e,r,i,s){s&&pointEqual(t,e)&&(e=lerpPoint(t,i,1/3)),s&&pointEqual(r,i)&&(r=lerpPoint(t,i,2/3));var a=polynomialCoefficients(t[0],e[0],r[0],i[0]),n=polynomialCoefficients(t[1],e[1],r[1],i[1]);this.a=[a[0],n[0]],this.b=[a[1],n[1]],this.c=[a[2],n[2]],this.d=[a[3],n[3]],this.points=[t,e,r,i]}function extrema(t,e){var r=t.points[0][e],i=t.points[t.points.length-1][e];if(r>i){var s=i;i=r,r=s}for(var a=quadRoots(3*t.a[e],2*t.b[e],t.c[e]),n=0;n<a.length;n+=1)if(a[n]>0&&a[n]<1){var o=t.point(a[n])[e];o<r?r=o:o>i&&(i=o)}return{min:r,max:i}}function intersectData(t,e,r){var i=t.boundingBox();return{cx:i.cx,cy:i.cy,width:i.width,height:i.height,bez:t,t:(e+r)/2,t1:e,t2:r}}function splitData(t){var e=t.bez.split(.5);return[intersectData(e[0],t.t1,t.t),intersectData(e[1],t.t,t.t2)]}function boxIntersect(t,e){return 2*Math.abs(t.cx-e.cx)<t.width+e.width&&2*Math.abs(t.cy-e.cy)<t.height+e.height}function intersectsImpl(t,e,r,i,s,a){if(boxIntersect(t,e))if(r>=a||t.width<=i&&t.height<=i&&e.width<=i&&e.height<=i)s.push([t.t,e.t]);else{var n=splitData(t),o=splitData(e);intersectsImpl(n[0],o[0],r+1,i,s,a),intersectsImpl(n[0],o[1],r+1,i,s,a),intersectsImpl(n[1],o[0],r+1,i,s,a),intersectsImpl(n[1],o[1],r+1,i,s,a)}}function crossProduct(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function lineIntersection(t,e,r,i){var s=[t[0],t[1],1],a=[e[0],e[1],1],n=[r[0],r[1],1],o=[i[0],i[1],1],h=crossProduct(crossProduct(s,a),crossProduct(n,o));return floatZero(h[2])?null:[h[0]/h[2],h[1]/h[2]]}function polarOffset(t,e,r){return[t[0]+Math.cos(e)*r,t[1]-Math.sin(e)*r]}function pointDistance(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function pointEqual(t,e){return floatEqual(t[0],e[0])&&floatEqual(t[1],e[1])}function ZigZagModifier(){}function setPoint(t,e,r,i,s,a,n){var o=r-Math.PI/2,h=r+Math.PI/2,l=e[0]+Math.cos(r)*i*s,p=e[1]-Math.sin(r)*i*s;t.setTripleAt(l,p,l+Math.cos(o)*a,p-Math.sin(o)*a,l+Math.cos(h)*n,p-Math.sin(h)*n,t.length())}function getPerpendicularVector(t,e){var r=[e[0]-t[0],e[1]-t[1]],i=.5*-Math.PI;return[Math.cos(i)*r[0]-Math.sin(i)*r[1],Math.sin(i)*r[0]+Math.cos(i)*r[1]]}function getProjectingAngle(t,e){var r=0===e?t.length()-1:e-1,i=(e+1)%t.length(),s=getPerpendicularVector(t.v[r],t.v[i]);return Math.atan2(0,1)-Math.atan2(s[1],s[0])}function zigZagCorner(t,e,r,i,s,a,n){var o=getProjectingAngle(e,r),h=e.v[r%e._length],l=e.v[0===r?e._length-1:r-1],p=e.v[(r+1)%e._length],c=2===a?Math.sqrt(Math.pow(h[0]-l[0],2)+Math.pow(h[1]-l[1],2)):0,f=2===a?Math.sqrt(Math.pow(h[0]-p[0],2)+Math.pow(h[1]-p[1],2)):0;setPoint(t,e.v[r%e._length],o,n,i,f/(2*(s+1)),c/(2*(s+1)),a)}function zigZagSegment(t,e,r,i,s,a){for(var n=0;n<i;n+=1){var o=(n+1)/(i+1),h=2===s?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,l=e.normalAngle(o);setPoint(t,e.point(o),l,a,r,h/(2*(i+1)),h/(2*(i+1)),s),a=-a}return a}function linearOffset(t,e,r){var i=Math.atan2(e[0]-t[0],e[1]-t[1]);return[polarOffset(t,i,r),polarOffset(e,i,r)]}function offsetSegment(t,e){var r,i,s,a,n,o,h;r=(h=linearOffset(t.points[0],t.points[1],e))[0],i=h[1],s=(h=linearOffset(t.points[1],t.points[2],e))[0],a=h[1],n=(h=linearOffset(t.points[2],t.points[3],e))[0],o=h[1];var l=lineIntersection(r,i,s,a);null===l&&(l=i);var p=lineIntersection(n,o,s,a);return null===p&&(p=n),new PolynomialBezier(r,l,p,o)}function joinLines(t,e,r,i,s){var a=e.points[3],n=r.points[0];if(3===i)return a;if(pointEqual(a,n))return a;if(2===i){var o=-e.tangentAngle(1),h=-r.tangentAngle(0)+Math.PI,l=lineIntersection(a,polarOffset(a,o+Math.PI/2,100),n,polarOffset(n,o+Math.PI/2,100)),p=l?pointDistance(l,a):pointDistance(a,n)/2,c=polarOffset(a,o,2*p*roundCorner);return t.setXYAt(c[0],c[1],"o",t.length()-1),c=polarOffset(n,h,2*p*roundCorner),t.setTripleAt(n[0],n[1],n[0],n[1],c[0],c[1],t.length()),n}var f=lineIntersection(pointEqual(a,e.points[2])?e.points[0]:e.points[2],a,n,pointEqual(n,r.points[1])?r.points[3]:r.points[1]);return f&&pointDistance(f,a)<s?(t.setTripleAt(f[0],f[1],f[0],f[1],f[0],f[1],t.length()),f):a}function getIntersection(t,e){var r=t.intersections(e);return r.length&&floatEqual(r[0][0],1)&&r.shift(),r.length?r[0]:null}function pruneSegmentIntersection(t,e){var r=t.slice(),i=e.slice(),s=getIntersection(t[t.length-1],e[0]);return s&&(r[t.length-1]=t[t.length-1].split(s[0])[0],i[0]=e[0].split(s[1])[1]),t.length>1&&e.length>1&&(s=getIntersection(t[0],e[e.length-1]))?[[t[0].split(s[0])[0]],[e[e.length-1].split(s[1])[1]]]:[r,i]}function pruneIntersections(t){for(var e,r=1;r<t.length;r+=1)e=pruneSegmentIntersection(t[r-1],t[r]),t[r-1]=e[0],t[r]=e[1];return t.length>1&&(e=pruneSegmentIntersection(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}function offsetSegmentSplit(t,e){var r,i,s,a,n=t.inflectionPoints();if(0===n.length)return[offsetSegment(t,e)];if(1===n.length||floatEqual(n[1],1))return r=(s=t.split(n[0]))[0],i=s[1],[offsetSegment(r,e),offsetSegment(i,e)];r=(s=t.split(n[0]))[0];var o=(n[1]-n[0])/(1-n[0]);return a=(s=s[1].split(o))[0],i=s[1],[offsetSegment(r,e),offsetSegment(a,e),offsetSegment(i,e)]}function OffsetPathModifier(){}function getFontProperties(t){for(var e=t.fStyle?t.fStyle.split(" "):[],r="normal",i="normal",s=e.length,a=0;a<s;a+=1)switch(e[a].toLowerCase()){case"italic":i="italic";break;case"bold":r="700";break;case"black":r="900";break;case"medium":r="500";break;case"regular":case"normal":r="400";break;case"light":case"thin":r="200"}return{style:i,weight:t.fWeight||r}}extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.so=PropertyFactory.getProp(t,e.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,r,i,s,a){var n=a?-1:1,o=i.s.v[0]+(1-i.s.v[0])*(1-s),h=i.s.v[1]+(1-i.s.v[1])*(1-s);t.translate(i.p.v[0]*n*s,i.p.v[1]*n*s,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*n*s),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),r.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),r.scale(a?1/o:o,a?1/h:h),r.translate(i.a.v[0],i.a.v[1],i.a.v[2])},RepeaterModifier.prototype.init=function(t,e,r,i){for(this.elem=t,this.arr=e,this.pos=r,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[r]);r>0;)r-=1,this._elements.unshift(e[r]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]._render=e,"gr"===t[r].ty&&this.changeGroupRender(t[r].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,r,i,s,a,n=!1;if(this._mdf||t){var o,h=Math.ceil(this.c.v);if(this._groups.length<h){for(;this._groups.length<h;){var l={it:this.cloneElements(this._elements),ty:"gr"};l.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,l),this._groups.splice(0,0,l),this._currentCopies+=1}this.elem.reloadShapes(),n=!0}for(a=0,i=0;i<=this._groups.length-1;i+=1){if(o=a<h,this._groups[i]._render=o,this.changeGroupRender(this._groups[i].it,o),!o){var p=this.elemsData[i].it,c=p[p.length-1];0!==c.transform.op.v?(c.transform.op._mdf=!0,c.transform.op.v=0):c.transform.op._mdf=!1}a+=1}this._currentCopies=h;var f=this.o.v,u=f%1,d=f>0?Math.floor(f):Math.ceil(f),m=this.pMatrix.props,y=this.rMatrix.props,g=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var v,b,_=0;if(f>0){for(;_<d;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),_+=1;u&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,u,!1),_+=u)}else if(f<0){for(;_>d;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),_-=1;u&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-u,!0),_-=u)}for(i=1===this.data.m?0:this._currentCopies-1,s=1===this.data.m?1:-1,a=this._currentCopies;a;){if(b=(r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props).length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=1===this._currentCopies?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),0!==_){for((0!==i&&1===s||i!==this._currentCopies-1&&-1===s)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15]),this.matrix.transform(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9],g[10],g[11],g[12],g[13],g[14],g[15]),this.matrix.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),v=0;v<b;v+=1)r[v]=this.matrix.props[v];this.matrix.reset()}else for(this.matrix.reset(),v=0;v<b;v+=1)r[v]=this.matrix.props[v];_+=1,a-=1,i+=s}}else for(a=this._currentCopies,i=0,s=1;a;)r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,i+=s;return n},RepeaterModifier.prototype.addShape=function(){},extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(t,e){var r,i=shapePool.newElement();i.c=t.c;var s,a,n,o,h,l,p,c,f,u,d,m,y=t._length,g=0;for(r=0;r<y;r+=1)s=t.v[r],n=t.o[r],a=t.i[r],s[0]===n[0]&&s[1]===n[1]&&s[0]===a[0]&&s[1]===a[1]?0!==r&&r!==y-1||t.c?(o=0===r?t.v[y-1]:t.v[r-1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=d=s[0]+(o[0]-s[0])*l,c=m=s[1]-(s[1]-o[1])*l,f=p-(p-s[0])*roundCorner,u=c-(c-s[1])*roundCorner,i.setTripleAt(p,c,f,u,d,m,g),g+=1,o=r===y-1?t.v[0]:t.v[r+1],l=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,p=f=s[0]+(o[0]-s[0])*l,c=u=s[1]+(o[1]-s[1])*l,d=p-(p-s[0])*roundCorner,m=c-(c-s[1])*roundCorner,i.setTripleAt(p,c,f,u,d,m,g),g+=1):(i.setTripleAt(s[0],s[1],n[0],n[1],a[0],a[1],g),g+=1):(i.setTripleAt(t.v[r][0],t.v[r][1],t.o[r][0],t.o[r][1],t.i[r][0],t.i[r][1],g),g+=1);return i},RoundCornersModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.rd.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},PolynomialBezier.prototype.point=function(t){return[((this.a[0]*t+this.b[0])*t+this.c[0])*t+this.d[0],((this.a[1]*t+this.b[1])*t+this.c[1])*t+this.d[1]]},PolynomialBezier.prototype.derivative=function(t){return[(3*t*this.a[0]+2*this.b[0])*t+this.c[0],(3*t*this.a[1]+2*this.b[1])*t+this.c[1]]},PolynomialBezier.prototype.tangentAngle=function(t){var e=this.derivative(t);return Math.atan2(e[1],e[0])},PolynomialBezier.prototype.normalAngle=function(t){var e=this.derivative(t);return Math.atan2(e[0],e[1])},PolynomialBezier.prototype.inflectionPoints=function(){var t=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(floatZero(t))return[];var e=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/t,r=e*e-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/t;if(r<0)return[];var i=Math.sqrt(r);return floatZero(i)?i>0&&i<1?[e]:[]:[e-i,e+i].filter((function(t){return t>0&&t<1}))},PolynomialBezier.prototype.split=function(t){if(t<=0)return[singlePoint(this.points[0]),this];if(t>=1)return[this,singlePoint(this.points[this.points.length-1])];var e=lerpPoint(this.points[0],this.points[1],t),r=lerpPoint(this.points[1],this.points[2],t),i=lerpPoint(this.points[2],this.points[3],t),s=lerpPoint(e,r,t),a=lerpPoint(r,i,t),n=lerpPoint(s,a,t);return[new PolynomialBezier(this.points[0],e,s,n,!0),new PolynomialBezier(n,a,i,this.points[3],!0)]},PolynomialBezier.prototype.bounds=function(){return{x:extrema(this,0),y:extrema(this,1)}},PolynomialBezier.prototype.boundingBox=function(){var t=this.bounds();return{left:t.x.min,right:t.x.max,top:t.y.min,bottom:t.y.max,width:t.x.max-t.x.min,height:t.y.max-t.y.min,cx:(t.x.max+t.x.min)/2,cy:(t.y.max+t.y.min)/2}},PolynomialBezier.prototype.intersections=function(t,e,r){void 0===e&&(e=2),void 0===r&&(r=7);var i=[];return intersectsImpl(intersectData(this,0,1),intersectData(t,0,1),0,e,i,r),i},PolynomialBezier.shapeSegment=function(t,e){var r=(e+1)%t.length();return new PolynomialBezier(t.v[e],t.o[e],t.i[r],t.v[r],!0)},PolynomialBezier.shapeSegmentInverted=function(t,e){var r=(e+1)%t.length();return new PolynomialBezier(t.v[r],t.i[r],t.o[e],t.v[e],!0)},extendPrototype([ShapeModifier],ZigZagModifier),ZigZagModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amplitude=PropertyFactory.getProp(t,e.s,0,null,this),this.frequency=PropertyFactory.getProp(t,e.r,0,null,this),this.pointsType=PropertyFactory.getProp(t,e.pt,0,null,this),this._isAnimated=0!==this.amplitude.effectsSequence.length||0!==this.frequency.effectsSequence.length||0!==this.pointsType.effectsSequence.length},ZigZagModifier.prototype.processPath=function(t,e,r,i){var s=t._length,a=shapePool.newElement();if(a.c=t.c,t.c||(s-=1),0===s)return a;var n=-1,o=PolynomialBezier.shapeSegment(t,0);zigZagCorner(a,t,0,e,r,i,n);for(var h=0;h<s;h+=1)n=zigZagSegment(a,o,e,r,i,-n),o=h!==s-1||t.c?PolynomialBezier.shapeSegment(t,(h+1)%s):null,zigZagCorner(a,t,h+1,e,r,i,n);return a},ZigZagModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.amplitude.v,l=Math.max(0,Math.round(this.frequency.v)),p=this.pointsType.v;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h,l,p));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},extendPrototype([ShapeModifier],OffsetPathModifier),OffsetPathModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(t,e.a,0,null,this),this.miterLimit=PropertyFactory.getProp(t,e.ml,0,null,this),this.lineJoin=e.lj,this._isAnimated=0!==this.amount.effectsSequence.length},OffsetPathModifier.prototype.processPath=function(t,e,r,i){var s=shapePool.newElement();s.c=t.c;var a,n,o,h=t.length();t.c||(h-=1);var l=[];for(a=0;a<h;a+=1)o=PolynomialBezier.shapeSegment(t,a),l.push(offsetSegmentSplit(o,e));if(!t.c)for(a=h-1;a>=0;a-=1)o=PolynomialBezier.shapeSegmentInverted(t,a),l.push(offsetSegmentSplit(o,e));l=pruneIntersections(l);var p=null,c=null;for(a=0;a<l.length;a+=1){var f=l[a];for(c&&(p=joinLines(s,c,f[0],r,i)),c=f[f.length-1],n=0;n<f.length;n+=1)o=f[n],p&&pointEqual(o.points[0],p)?s.setXYAt(o.points[1][0],o.points[1][1],"o",s.length()-1):s.setTripleAt(o.points[0][0],o.points[0][1],o.points[1][0],o.points[1][1],o.points[0][0],o.points[0][1],s.length()),s.setTripleAt(o.points[3][0],o.points[3][1],o.points[3][0],o.points[3][1],o.points[2][0],o.points[2][1],s.length()),p=o.points[3]}return l.length&&joinLines(s,c,l[0][0],r,i),s},OffsetPathModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.amount.v,l=this.miterLimit.v,p=this.lineJoin;if(0!==h)for(r=0;r<o;r+=1){if(n=(a=this.shapes[r]).localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h,p,l));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)};var FontManager=function(){var t={w:0,size:0,shapes:[],data:{shapes:[]}},e=[];e=e.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var r=127988,i=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"];function s(t,e){var r=createTag("span");r.setAttribute("aria-hidden",!0),r.style.fontFamily=e;var i=createTag("span");i.innerText="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(i),document.body.appendChild(r);var s=i.offsetWidth;return i.style.fontFamily=function(t){var e,r=t.split(","),i=r.length,s=[];for(e=0;e<i;e+=1)"sans-serif"!==r[e]&&"monospace"!==r[e]&&s.push(r[e]);return s.join(",")}(t)+", "+e,{node:i,w:s,parent:r}}function a(t,e){var r,i=document.body&&e?"svg":"canvas",s=getFontProperties(t);if("svg"===i){var a=createNS("text");a.style.fontSize="100px",a.setAttribute("font-family",t.fFamily),a.setAttribute("font-style",s.style),a.setAttribute("font-weight",s.weight),a.textContent="1",t.fClass?(a.style.fontFamily="inherit",a.setAttribute("class",t.fClass)):a.style.fontFamily=t.fFamily,e.appendChild(a),r=a}else{var n=new OffscreenCanvas(500,500).getContext("2d");n.font=s.style+" "+s.weight+" 100px "+t.fFamily,r=n}return{measureText:function(t){return"svg"===i?(r.textContent=t,r.getComputedTextLength()):r.measureText(t).width}}}function n(t){var e=0,r=t.charCodeAt(0);if(r>=55296&&r<=56319){var i=t.charCodeAt(1);i>=56320&&i<=57343&&(e=1024*(r-55296)+i-56320+65536)}return e}function o(t){var e=n(t);return e>=127462&&e<=127487}var h=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};h.isModifier=function(t,e){var r=t.toString(16)+e.toString(16);return-1!==i.indexOf(r)},h.isZeroWidthJoiner=function(t){return 8205===t},h.isFlagEmoji=function(t){return o(t.substr(0,2))&&o(t.substr(2,2))},h.isRegionalCode=o,h.isCombinedCharacter=function(t){return-1!==e.indexOf(t)},h.isRegionalFlag=function(t,e){var i=n(t.substr(e,2));if(i!==r)return!1;var s=0;for(e+=2;s<5;){if((i=n(t.substr(e,2)))<917601||i>917626)return!1;s+=1,e+=2}return 917631===n(t.substr(e,2))},h.isVariationSelector=function(t){return 65039===t},h.BLACK_FLAG_CODE_POINT=r;var l={addChars:function(t){if(t){var e;this.chars||(this.chars=[]);var r,i,s=t.length,a=this.chars.length;for(e=0;e<s;e+=1){for(r=0,i=!1;r<a;)this.chars[r].style===t[e].style&&this.chars[r].fFamily===t[e].fFamily&&this.chars[r].ch===t[e].ch&&(i=!0),r+=1;i||(this.chars.push(t[e]),a+=1)}}},addFonts:function(t,e){if(t){if(this.chars)return this.isLoaded=!0,void(this.fonts=t.list);if(!document.body)return this.isLoaded=!0,t.list.forEach((function(t){t.helper=a(t),t.cache={}})),void(this.fonts=t.list);var r,i=t.list,n=i.length,o=n;for(r=0;r<n;r+=1){var h,l,p=!0;if(i[r].loaded=!1,i[r].monoCase=s(i[r].fFamily,"monospace"),i[r].sansCase=s(i[r].fFamily,"sans-serif"),i[r].fPath){if("p"===i[r].fOrigin||3===i[r].origin){if((h=document.querySelectorAll('style[f-forigin="p"][f-family="'+i[r].fFamily+'"], style[f-origin="3"][f-family="'+i[r].fFamily+'"]')).length>0&&(p=!1),p){var c=createTag("style");c.setAttribute("f-forigin",i[r].fOrigin),c.setAttribute("f-origin",i[r].origin),c.setAttribute("f-family",i[r].fFamily),c.type="text/css",c.innerText="@font-face {font-family: "+i[r].fFamily+"; font-style: normal; src: url('"+i[r].fPath+"');}",e.appendChild(c)}}else if("g"===i[r].fOrigin||1===i[r].origin){for(h=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),l=0;l<h.length;l+=1)-1!==h[l].href.indexOf(i[r].fPath)&&(p=!1);if(p){var f=createTag("link");f.setAttribute("f-forigin",i[r].fOrigin),f.setAttribute("f-origin",i[r].origin),f.type="text/css",f.rel="stylesheet",f.href=i[r].fPath,document.body.appendChild(f)}}else if("t"===i[r].fOrigin||2===i[r].origin){for(h=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),l=0;l<h.length;l+=1)i[r].fPath===h[l].src&&(p=!1);if(p){var u=createTag("link");u.setAttribute("f-forigin",i[r].fOrigin),u.setAttribute("f-origin",i[r].origin),u.setAttribute("rel","stylesheet"),u.setAttribute("href",i[r].fPath),e.appendChild(u)}}}else i[r].loaded=!0,o-=1;i[r].helper=a(i[r],e),i[r].cache={},this.fonts.push(i[r])}0===o?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}else this.isLoaded=!0},getCharData:function(e,r,i){for(var s=0,a=this.chars.length;s<a;){if(this.chars[s].ch===e&&this.chars[s].style===r&&this.chars[s].fFamily===i)return this.chars[s];s+=1}return("string"==typeof e&&13!==e.charCodeAt(0)||!e)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",e,r,i)),t},getFontByName:function(t){for(var e=0,r=this.fonts.length;e<r;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return this.fonts[0]},measureText:function(t,e,r){var i=this.getFontByName(e),s=t;if(!i.cache[s]){var a=i.helper;if(" "===t){var n=a.measureText("|"+t+"|"),o=a.measureText("||");i.cache[s]=(n-o)/100}else i.cache[s]=a.measureText(t)/100}return i.cache[s]*r},checkLoadedFonts:function(){var t,e,r,i=this.fonts.length,s=i;for(t=0;t<i;t+=1)this.fonts[t].loaded?s-=1:"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(e=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,e.offsetWidth!==r?(s-=1,this.fonts[t].loaded=!0):(e=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,e.offsetWidth!==r&&(s-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==s&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)},setIsLoaded:function(){this.isLoaded=!0}};return h.prototype=l,h}();function SlotManager(t){this.animationData=t}function slotFactory(t){return new SlotManager(t)}function RenderableElement(){}SlotManager.prototype.getProp=function(t){return this.animationData.slots&&this.animationData.slots[t.sid]?Object.assign(t,this.animationData.slots[t.sid].p):t},RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){-1===this.renderableComponents.indexOf(t)&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){-1!==this.renderableComponents.indexOf(t)&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?!0!==this.isInRange&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):!1!==this.isInRange&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var getBlendMode=(blendModeEnums={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},function(t){return blendModeEnums[t]||""}),blendModeEnums;function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function MaskIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function CheckboxEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(t,e){var r,i=t.ef||[];this.effectElements=[];var s,a=i.length;for(r=0;r<a;r+=1)s=new GroupEffect(i[r],e),this.effectElements.push(s)}function GroupEffect(t,e){this.init(t,e)}function BaseElement(){}function FrameElement(){}function FootageElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,r)}function AudioElement(t,e,r){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.initBaseData(t,e,r),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0},this.lv=PropertyFactory.getProp(this,t.au&&t.au.lv?t.au.lv:{k:[100]},1,.01,this)}function BaseRenderer(){}extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(t,e){var r;this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var i,s=this.data.ef.length,a=this.data.ef;for(r=0;r<s;r+=1){switch(i=null,a[r].ty){case 0:i=new SliderEffect(a[r],e,this);break;case 1:i=new AngleEffect(a[r],e,this);break;case 2:i=new ColorEffect(a[r],e,this);break;case 3:i=new PointEffect(a[r],e,this);break;case 4:case 7:i=new CheckboxEffect(a[r],e,this);break;case 10:i=new LayerIndexEffect(a[r],e,this);break;case 11:i=new MaskIndexEffect(a[r],e,this);break;case 5:i=new EffectsManager(a[r],e,this);break;default:i=new NoValueEffect(a[r],e,this)}i&&this.effectElements.push(i)}},BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&!1!==this.data.masksProperties[t].cl)return!0;t+=1}return!1},initExpressions:function(){var t=getExpressionInterfaces();if(t){var e=t("layer"),r=t("effects"),i=t("shape"),s=t("text"),a=t("comp");this.layerInterface=e(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var n=r.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(n),0===this.data.ty||this.data.xt?this.compInterface=a(this):4===this.data.ty?(this.layerInterface.shapeInterface=i(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=s(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var t=getBlendMode(this.data.bm);(this.baseElement||this.layerElement).style["mix-blend-mode"]=t},initBaseData:function(t,e,r){this.globalData=e,this.comp=r,this.data=t,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var r,i=this.dynamicProperties.length;for(r=0;r<i;r+=1)(e||this._isParent&&"transform"===this.dynamicProperties[r].propType)&&(this.dynamicProperties[r].getValue(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&this.dynamicProperties.push(t)}},FootageElement.prototype.prepareFrame=function(){},extendPrototype([RenderableElement,BaseElement,FrameElement],FootageElement),FootageElement.prototype.getBaseElement=function(){return null},FootageElement.prototype.renderFrame=function(){},FootageElement.prototype.destroy=function(){},FootageElement.prototype.initExpressions=function(){var t=getExpressionInterfaces();if(t){var e=t("footage");this.layerInterface=e(this)}},FootageElement.prototype.getFootageData=function(){return this.footageData},AudioElement.prototype.prepareFrame=function(t){if(this.prepareRenderableFrame(t,!0),this.prepareProperties(t,!0),this.tm._placeholder)this._currentTime=t/this.data.sr;else{var e=this.tm.v;this._currentTime=e}this._volume=this.lv.v[0];var r=this._volume*this._volumeMultiplier;this._previousVolume!==r&&(this._previousVolume=r,this.audio.volume(r))},extendPrototype([RenderableElement,BaseElement,FrameElement],AudioElement),AudioElement.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},AudioElement.prototype.show=function(){},AudioElement.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},AudioElement.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},AudioElement.prototype.resume=function(){this._canPlay=!0},AudioElement.prototype.setRate=function(t){this.audio.rate(t)},AudioElement.prototype.volume=function(t){this._volumeMultiplier=t,this._previousVolume=t*this._volume,this.audio.volume(this._previousVolume)},AudioElement.prototype.getBaseElement=function(){return null},AudioElement.prototype.destroy=function(){},AudioElement.prototype.sourceRectAtTime=function(){},AudioElement.prototype.initExpressions=function(){},BaseRenderer.prototype.checkLayers=function(t){var e,r,i=this.layers.length;for(this.completeLayers=!0,e=i-1;e>=0;e-=1)this.elements[e]||(r=this.layers[e]).ip-r.st<=t-this.layers[e].st&&r.op-r.st>t-this.layers[e].st&&this.buildItem(e),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:default:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 6:return this.createAudio(t);case 13:return this.createCamera(t);case 15:return this.createFootage(t)}},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.createAudio=function(t){return new AudioElement(t,this.globalData,this)},BaseRenderer.prototype.createFootage=function(t){return new FootageElement(t,this.globalData,this)},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){var e;this.completeLayers=!1;var r,i=t.length,s=this.layers.length;for(e=0;e<i;e+=1)for(r=0;r<s;){if(this.layers[r].id===t[e].id){this.layers[r]=t[e];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,r){for(var i=this.elements,s=this.layers,a=0,n=s.length;a<n;)s[a].ind==e&&(i[a]&&!0!==i[a]?(r.push(i[a]),i[a].setAsParent(),void 0!==s[a].parent?this.buildElementParenting(t,s[a].parent,r):t.setHierarchy(r)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length;for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},BaseRenderer.prototype.getElementById=function(t){var e,r=this.elements.length;for(e=0;e<r;e+=1)if(this.elements[e].data.ind===t)return this.elements[e];return null},BaseRenderer.prototype.getElementByPath=function(t){var e,r=t.shift();if("number"==typeof r)e=this.elements[r];else{var i,s=this.elements.length;for(i=0;i<s;i+=1)if(this.elements[i].data.nm===r){e=this.elements[i];break}}return 0===t.length?e:e.getElementByPath(t)},BaseRenderer.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new FontManager,this.globalData.slotManager=slotFactory(t),this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}};var effectTypes={TRANSFORM_EFFECT:"transformEFfect"};function TransformElement(){}function MaskElement(t,e,r){this.data=t,this.element=e,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i,s,a=this.globalData.defs,n=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(n),this.solidPath="";var o,h,l,p,c,f,u=this.masksProperties,d=0,m=[],y=createElementID(),g="clipPath",v="clip-path";for(i=0;i<n;i+=1)if(("a"!==u[i].mode&&"n"!==u[i].mode||u[i].inv||100!==u[i].o.k||u[i].o.x)&&(g="mask",v="mask"),"s"!==u[i].mode&&"i"!==u[i].mode||0!==d?l=null:((l=createNS("rect")).setAttribute("fill","#ffffff"),l.setAttribute("width",this.element.comp.data.w||0),l.setAttribute("height",this.element.comp.data.h||0),m.push(l)),s=createNS("path"),"n"===u[i].mode)this.viewData[i]={op:PropertyFactory.getProp(this.element,u[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,u[i],3),elem:s,lastPath:""},a.appendChild(s);else{var b;if(d+=1,s.setAttribute("fill","s"===u[i].mode?"#000000":"#ffffff"),s.setAttribute("clip-rule","nonzero"),0!==u[i].x.k?(g="mask",v="mask",f=PropertyFactory.getProp(this.element,u[i].x,0,null,this.element),b=createElementID(),(p=createNS("filter")).setAttribute("id",b),(c=createNS("feMorphology")).setAttribute("operator","erode"),c.setAttribute("in","SourceGraphic"),c.setAttribute("radius","0"),p.appendChild(c),a.appendChild(p),s.setAttribute("stroke","s"===u[i].mode?"#000000":"#ffffff")):(c=null,f=null),this.storedData[i]={elem:s,x:f,expan:c,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"===u[i].mode){h=m.length;var _=createNS("g");for(o=0;o<h;o+=1)_.appendChild(m[o]);var P=createNS("mask");P.setAttribute("mask-type","alpha"),P.setAttribute("id",y+"_"+d),P.appendChild(s),a.appendChild(P),_.setAttribute("mask","url("+getLocationHref()+"#"+y+"_"+d+")"),m.length=0,m.push(_)}else m.push(s);u[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:s,lastPath:"",op:PropertyFactory.getProp(this.element,u[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,u[i],3),invRect:l},this.viewData[i].prop.k||this.drawPath(u[i],this.viewData[i].prop.v,this.viewData[i])}for(this.maskElement=createNS(g),n=m.length,i=0;i<n;i+=1)this.maskElement.appendChild(m[i]);d>0&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(v,"url("+getLocationHref()+"#"+y+")"),a.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}TransformElement.prototype={initTransform:function(){var t=new Matrix;this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_localMatMdf:!1,_opMdf:!1,mat:t,localMat:t,localOpacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,r=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;r<i;){if(this.hierarchy[r].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}r+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),r=0;r<i;r+=1)e.multiply(this.hierarchy[r].finalTransform.mProp.v)}this.finalTransform._matMdf&&(this.finalTransform._localMatMdf=this.finalTransform._matMdf),this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v)},renderLocalTransform:function(){if(this.localTransforms){var t=0,e=this.localTransforms.length;if(this.finalTransform._localMatMdf=this.finalTransform._matMdf,!this.finalTransform._localMatMdf||!this.finalTransform._opMdf)for(;t<e;)this.localTransforms[t]._mdf&&(this.finalTransform._localMatMdf=!0),this.localTransforms[t]._opMdf&&!this.finalTransform._opMdf&&(this.finalTransform.localOpacity=this.finalTransform.mProp.o.v,this.finalTransform._opMdf=!0),t+=1;if(this.finalTransform._localMatMdf){var r=this.finalTransform.localMat;for(this.localTransforms[0].matrix.clone(r),t=1;t<e;t+=1){var i=this.localTransforms[t].matrix;r.multiply(i)}r.multiply(this.finalTransform.mat)}if(this.finalTransform._opMdf){var s=this.finalTransform.localOpacity;for(t=0;t<e;t+=1)s*=.01*this.localTransforms[t].opacity;this.finalTransform.localOpacity=s}}},searchEffectTransforms:function(){if(this.renderableEffectsManager){var t=this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);if(t.length){this.localTransforms=[],this.finalTransform.localMat=new Matrix;var e=0,r=t.length;for(e=0;e<r;e+=1)this.localTransforms.push(t[e])}}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var r,i=!0,s=this.comp;i;)s.finalTransform?(s.data.hasMask&&e.splice(0,0,s.finalTransform),s=s.comp):i=!1;var a,n=e.length;for(r=0;r<n;r+=1)a=e[r].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},mHelper:new Matrix},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e,r=this.element.finalTransform.mat,i=this.masksProperties.length;for(e=0;e<i;e+=1)if((this.viewData[e].prop._mdf||t)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op._mdf||t)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[e].invRect.setAttribute("transform",r.getInverseMatrix().to2dCSS()),this.storedData[e].x&&(this.storedData[e].x._mdf||t))){var s=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+getLocationHref()+"#"+this.storedData[e].filterId+")")),s.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,r){var i,s,a=" M"+e.v[0][0]+","+e.v[0][1];for(s=e._length,i=1;i<s;i+=1)a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[i][0]+","+e.i[i][1]+" "+e.v[i][0]+","+e.v[i][1];if(e.c&&s>1&&(a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),r.lastPath!==a){var n="";r.elem&&(e.c&&(n=t.inv?this.solidPath+a:a),r.elem.setAttribute("d",n)),r.lastPath=a}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var filtersFactory=function(){var t={createFilter:function(t,e){var r=createNS("filter");return r.setAttribute("id",t),!0!==e&&(r.setAttribute("filterUnits","objectBoundingBox"),r.setAttribute("x","0%"),r.setAttribute("y","0%"),r.setAttribute("width","100%"),r.setAttribute("height","100%")),r},createAlphaToLuminanceFilter:function(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t}};return t}(),featureSupport=function(){var t={maskType:!0,svgLumaHidden:!0,offscreenCanvas:"undefined"!=typeof OffscreenCanvas};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),/firefox/i.test(navigator.userAgent)&&(t.svgLumaHidden=!1),t}(),registeredEffects$1={},idPrefix="filter_result_";function SVGEffects(t){var e,r,i="SourceGraphic",s=t.data.ef?t.data.ef.length:0,a=createElementID(),n=filtersFactory.createFilter(a,!0),o=0;for(this.filters=[],e=0;e<s;e+=1){r=null;var h=t.data.ef[e].ty;registeredEffects$1[h]&&(r=new(0,registeredEffects$1[h].effect)(n,t.effectsManager.effectElements[e],t,idPrefix+o,i),i=idPrefix+o,registeredEffects$1[h].countsAsEffect&&(o+=1)),r&&this.filters.push(r)}o&&(t.globalData.defs.appendChild(n),t.layerElement.setAttribute("filter","url("+getLocationHref()+"#"+a+")")),this.filters.length&&t.addRenderableComponent(this)}function registerEffect$1(t,e,r){registeredEffects$1[t]={effect:e,countsAsEffect:r}}function SVGBaseElement(){}function HierarchyElement(){}function RenderableDOMElement(){}function IImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.assetData&&this.assetData.sid&&(this.assetData=e.slotManager.getProp(this.assetData)),this.initElement(t,e,r),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}function ProcessedElement(t,e){this.elem=t,this.pos=e}function IShapeElement(){}SVGEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)},SVGEffects.prototype.getEffects=function(t){var e,r=this.filters.length,i=[];for(e=0;e<r;e+=1)this.filters[e].type===t&&i.push(this.filters[e]);return i},SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t=null;if(this.data.td){this.matteMasks={};var e=createNS("g");e.setAttribute("id",this.layerId),e.appendChild(this.layerElement),t=e,this.globalData.defs.appendChild(e)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),t=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var r=createNS("clipPath"),i=createNS("path");i.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var s=createElementID();if(r.setAttribute("id",s),r.appendChild(i),this.globalData.defs.appendChild(r),this.checkMasks()){var a=createNS("g");a.setAttribute("clip-path","url("+getLocationHref()+"#"+s+")"),a.appendChild(this.layerElement),this.transformedElement=a,t?t.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+s+")")}0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._localMatMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.localMat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.localOpacity)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this),this.searchEffectTransforms()},getMatte:function(t){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[t]){var e,r,i,s,a=this.layerId+"_"+t;if(1===t||3===t){var n=createNS("mask");n.setAttribute("id",a),n.setAttribute("mask-type",3===t?"luminance":"alpha"),(i=createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),n.appendChild(i),this.globalData.defs.appendChild(n),featureSupport.maskType||1!==t||(n.setAttribute("mask-type","luminance"),e=createElementID(),r=filtersFactory.createFilter(e),this.globalData.defs.appendChild(r),r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),(s=createNS("g")).appendChild(i),n.appendChild(s),s.setAttribute("filter","url("+getLocationHref()+"#"+e+")"))}else if(2===t){var o=createNS("mask");o.setAttribute("id",a),o.setAttribute("mask-type","alpha");var h=createNS("g");o.appendChild(h),e=createElementID(),r=filtersFactory.createFilter(e);var l=createNS("feComponentTransfer");l.setAttribute("in","SourceGraphic"),r.appendChild(l);var p=createNS("feFuncA");p.setAttribute("type","table"),p.setAttribute("tableValues","1.0 0.0"),l.appendChild(p),this.globalData.defs.appendChild(r);var c=createNS("rect");c.setAttribute("width",this.comp.data.w),c.setAttribute("height",this.comp.data.h),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("fill","#ffffff"),c.setAttribute("opacity","0"),h.setAttribute("filter","url("+getLocationHref()+"#"+e+")"),h.appendChild(c),(i=createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),h.appendChild(i),featureSupport.maskType||(o.setAttribute("mask-type","luminance"),r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),s=createNS("g"),h.appendChild(c),s.appendChild(this.layerElement),h.appendChild(s)),this.globalData.defs.appendChild(o)}this.matteMasks[t]=a}return this.matteMasks[t]},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+getLocationHref()+"#"+t+")")}},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},extendPrototype([RenderableElement,createProxyFunction({initElement:function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){this.hidden||this.isInRange&&!this.isTransparent||((this.baseElement||this.layerElement).style.display="none",this.hidden=!0)},show:function(){this.isInRange&&!this.isTransparent&&(this.data.hd||((this.baseElement||this.layerElement).style.display="block"),this.hidden=!1,this._isFirstFrame=!0)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],RenderableDOMElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},IShapeElement.prototype={addShapeToModifiers:function(t){var e,r=this.shapeModifiers.length;for(e=0;e<r;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=this.shapeModifiers.length;0<e;)if(this.shapeModifiers[0].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();for(t=(e=this.shapeModifiers.length)-1;t>=0&&!this.shapeModifiers[t].processShapes(this._isFirstFrame);t-=1);}},searchProcessedElement:function(t){for(var e=this.processedElements,r=0,i=e.length;r<i;){if(e[r].elem===t)return e[r].pos;r+=1}return 0},addProcessedElement:function(t,e){for(var r=this.processedElements,i=r.length;i;)if(r[i-=1].elem===t)return void(r[i].pos=e);r.push(new ProcessedElement(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}};var lineCapEnum={1:"butt",2:"round",3:"square"},lineJoinEnum={1:"miter",2:"round",3:"bevel"};function SVGShapeData(t,e,r){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=r,this.lvl=e,this._isAnimated=!!r.k;for(var i=0,s=t.length;i<s;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!0===t.hd,this.pElem=createNS("path"),this.msElem=null}function DashProperty(t,e,r,i){var s;this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=r,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(i);var a,n=e.length||0;for(s=0;s<n;s+=1)a=PropertyFactory.getProp(t,e[s].v,0,0,this),this.k=a.k||this.k,this.dataProps[s]={n:e[s].n,p:a};this.k||this.getValue(!0),this._isAnimated=this.k}function SVGStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r,this._isAnimated=!!this._isAnimated}function SVGFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r}function SVGNoStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=r}function GradientProperty(t,e,r){this.data=e,this.c=createTypedArray("uint8c",4*e.p);var i=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(r),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}function SVGGradientFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,r)}function SVGGradientStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,r),this._isAnimated=!!this._isAnimated}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}function SVGTransformData(t,e,r){this.transform={mProps:t,op:e,container:r},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},DashProperty.prototype.getValue=function(t){if((this.elem.globalData.frameId!==this.frameId||t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,r=this.dataProps.length;for("svg"===this.renderer&&(this.dashStr=""),e=0;e<r;e+=1)"o"!==this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty),extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContainer],SVGFillStyleData),extendPrototype([DynamicPropertyContainer],SVGNoStyleData),GradientProperty.prototype.comparePoints=function(t,e){for(var r=0,i=this.o.length/2;r<i;){if(Math.abs(t[4*r]-t[4*e+2*r])>.01)return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,r,i,s=4*this.data.p;for(e=0;e<s;e+=1)r=e%4==0?100:255,i=Math.round(this.prop.v[e]*r),this.c[e]!==i&&(this.c[e]=i,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=4*this.data.p;e<s;e+=1)r=e%2==0?100:1,i=e%2==0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this._omdf=!t);this._mdf=!t}},extendPrototype([DynamicPropertyContainer],GradientProperty),SVGGradientFillStyleData.prototype.initGradientData=function(t,e,r){this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.s=PropertyFactory.getProp(t,e.s,1,null,this),this.e=PropertyFactory.getProp(t,e.e,1,null,this),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,this),this.g=new GradientProperty(t,e.g,this),this.style=r,this.stops=[],this.setGradientData(r.pElem,e),this.setGradientOpacity(e,r),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var r=createElementID(),i=createNS(1===e.t?"linearGradient":"radialGradient");i.setAttribute("id",r),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s,a,n,o=[];for(n=4*e.g.p,a=0;a<n;a+=4)s=createNS("stop"),i.appendChild(s),o.push(s);t.setAttribute("gf"===e.ty?"fill":"stroke","url("+getLocationHref()+"#"+r+")"),this.gf=i,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,s,a=createNS("mask"),n=createNS("path");a.appendChild(n);var o=createElementID(),h=createElementID();a.setAttribute("id",h);var l=createNS(1===t.t?"linearGradient":"radialGradient");l.setAttribute("id",o),l.setAttribute("spreadMethod","pad"),l.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var p=this.stops;for(i=4*t.g.p;i<s;i+=2)(r=createNS("stop")).setAttribute("stop-color","rgb(255,255,255)"),l.appendChild(r),p.push(r);n.setAttribute("gf"===t.ty?"fill":"stroke","url("+getLocationHref()+"#"+o+")"),"gs"===t.ty&&(n.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),n.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),1===t.lj&&n.setAttribute("stroke-miterlimit",t.ml)),this.of=l,this.ms=a,this.ost=p,this.maskId=h,e.msElem=n}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);var buildShapeString=function(t,e,r,i){if(0===e)return"";var s,a=t.o,n=t.i,o=t.v,h=" M"+i.applyToPointStringified(o[0][0],o[0][1]);for(s=1;s<e;s+=1)h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[s][0],n[s][1])+" "+i.applyToPointStringified(o[s][0],o[s][1]);return r&&e&&(h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[0][0],n[0][1])+" "+i.applyToPointStringified(o[0][0],o[0][1]),h+="z"),h},SVGElementsRenderer=function(){var t=new Matrix,e=new Matrix;function r(t,e,r){(r||e.transform.op._mdf)&&e.transform.container.setAttribute("opacity",e.transform.op.v),(r||e.transform.mProps._mdf)&&e.transform.container.setAttribute("transform",e.transform.mProps.v.to2dCSS())}function i(){}function s(r,i,s){var a,n,o,h,l,p,c,f,u,d,m=i.styles.length,y=i.lvl;for(p=0;p<m;p+=1){if(h=i.sh._mdf||s,i.styles[p].lvl<y){for(f=e.reset(),u=y-i.styles[p].lvl,d=i.transformers.length-1;!h&&u>0;)h=i.transformers[d].mProps._mdf||h,u-=1,d-=1;if(h)for(u=y-i.styles[p].lvl,d=i.transformers.length-1;u>0;)f.multiply(i.transformers[d].mProps.v),u-=1,d-=1}else f=t;if(n=(c=i.sh.paths)._length,h){for(o="",a=0;a<n;a+=1)(l=c.shapes[a])&&l._length&&(o+=buildShapeString(l,l._length,l.c,f));i.caches[p]=o}else o=i.caches[p];i.styles[p].d+=!0===r.hd?"":o,i.styles[p]._mdf=h||i.styles[p]._mdf}}function a(t,e,r){var i=e.style;(e.c._mdf||r)&&i.pElem.setAttribute("fill","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("fill-opacity",e.o.v)}function n(t,e,r){o(t,e,r),h(0,e,r)}function o(t,e,r){var i,s,a,n,o,h=e.gf,l=e.g._hasOpacity,p=e.s.v,c=e.e.v;if(e.o._mdf||r){var f="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(f,e.o.v)}if(e.s._mdf||r){var u=1===t.t?"x1":"cx",d="x1"===u?"y1":"cy";h.setAttribute(u,p[0]),h.setAttribute(d,p[1]),l&&!e.g._collapsable&&(e.of.setAttribute(u,p[0]),e.of.setAttribute(d,p[1]))}if(e.g._cmdf||r){i=e.cst;var m=e.g.c;for(a=i.length,s=0;s<a;s+=1)(n=i[s]).setAttribute("offset",m[4*s]+"%"),n.setAttribute("stop-color","rgb("+m[4*s+1]+","+m[4*s+2]+","+m[4*s+3]+")")}if(l&&(e.g._omdf||r)){var y=e.g.o;for(a=(i=e.g._collapsable?e.cst:e.ost).length,s=0;s<a;s+=1)n=i[s],e.g._collapsable||n.setAttribute("offset",y[2*s]+"%"),n.setAttribute("stop-opacity",y[2*s+1])}if(1===t.t)(e.e._mdf||r)&&(h.setAttribute("x2",c[0]),h.setAttribute("y2",c[1]),l&&!e.g._collapsable&&(e.of.setAttribute("x2",c[0]),e.of.setAttribute("y2",c[1])));else if((e.s._mdf||e.e._mdf||r)&&(o=Math.sqrt(Math.pow(p[0]-c[0],2)+Math.pow(p[1]-c[1],2)),h.setAttribute("r",o),l&&!e.g._collapsable&&e.of.setAttribute("r",o)),e.e._mdf||e.h._mdf||e.a._mdf||r){o||(o=Math.sqrt(Math.pow(p[0]-c[0],2)+Math.pow(p[1]-c[1],2)));var g=Math.atan2(c[1]-p[1],c[0]-p[0]),v=e.h.v;v>=1?v=.99:v<=-1&&(v=-.99);var b=o*v,_=Math.cos(g+e.a.v)*b+p[0],P=Math.sin(g+e.a.v)*b+p[1];h.setAttribute("fx",_),h.setAttribute("fy",P),l&&!e.g._collapsable&&(e.of.setAttribute("fx",_),e.of.setAttribute("fy",P))}}function h(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||r)&&s.dashStr&&(i.pElem.setAttribute("stroke-dasharray",s.dashStr),i.pElem.setAttribute("stroke-dashoffset",s.dashoffset[0])),e.c&&(e.c._mdf||r)&&i.pElem.setAttribute("stroke","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||r)&&(i.pElem.setAttribute("stroke-width",e.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",e.w.v))}return{createRenderFunction:function(t){switch(t.ty){case"fl":return a;case"gf":return o;case"gs":return n;case"st":return h;case"sh":case"el":case"rc":case"sr":return s;case"tr":return r;case"no":return i;default:return null}}}}();function SVGShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,r),this.prevViewData=[]}function LetterProps(t,e,r,i,s,a){this.o=t,this.sw=e,this.sc=r,this.fc=i,this.m=s,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!r,fc:!!i,m:!0,p:!0}}function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,e.d&&e.d.sid&&(e.d=t.globalData.slotManager.getProp(e.d)),this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var t,e,r,i,s=this.shapes.length,a=this.stylesList.length,n=[],o=!1;for(r=0;r<a;r+=1){for(i=this.stylesList[r],o=!1,n.length=0,t=0;t<s;t+=1)-1!==(e=this.shapes[t]).styles.indexOf(i)&&(n.push(e),o=e._isAnimated||o);n.length>1&&o&&this.setShapesAsAnimated(n)}},SVGShapeElement.prototype.setShapesAsAnimated=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(t,e){var r,i=new SVGStyleData(t,e),s=i.pElem;return"st"===t.ty?r=new SVGStrokeStyleData(this,t,i):"fl"===t.ty?r=new SVGFillStyleData(this,t,i):"gf"===t.ty||"gs"===t.ty?(r=new("gf"===t.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData)(this,t,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),s.setAttribute("mask","url("+getLocationHref()+"#"+r.maskId+")"))):"no"===t.ty&&(r=new SVGNoStyleData(this,t,i)),"st"!==t.ty&&"gs"!==t.ty||(s.setAttribute("stroke-linecap",lineCapEnum[t.lc||2]),s.setAttribute("stroke-linejoin",lineJoinEnum[t.lj||2]),s.setAttribute("fill-opacity","0"),1===t.lj&&s.setAttribute("stroke-miterlimit",t.ml)),2===t.r&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),t.bm&&(s.style["mix-blend-mode"]=getBlendMode(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,r),r},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=getBlendMode(t.bm)),e},SVGShapeElement.prototype.createTransformElement=function(t,e){var r=TransformPropertyFactory.getTransformProperty(this,t,this),i=new SVGTransformData(r,r.o,e);return this.addToAnimatedContents(t,i),i},SVGShapeElement.prototype.createShapeElement=function(t,e,r){var i=4;"rc"===t.ty?i=5:"el"===t.ty?i=6:"sr"===t.ty&&(i=7);var s=new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this,t,i,this));return this.shapes.push(s),this.addShapeToModifiers(s),this.addToAnimatedContents(t,s),s},SVGShapeElement.prototype.addToAnimatedContents=function(t,e){for(var r=0,i=this.animatedContents.length;r<i;){if(this.animatedContents[r].element===e)return;r+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(t),element:e,data:t})},SVGShapeElement.prototype.setElementStyles=function(t){var e,r=t.styles,i=this.stylesList.length;for(e=0;e<i;e+=1)this.stylesList[e].closed||r.push(this.stylesList[e])},SVGShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,r,i,s,a,n){var o,h,l,p,c,f,u=[].concat(a),d=t.length-1,m=[],y=[];for(o=d;o>=0;o-=1){if((f=this.searchProcessedElement(t[o]))?e[o]=r[f-1]:t[o]._render=n,"fl"===t[o].ty||"st"===t[o].ty||"gf"===t[o].ty||"gs"===t[o].ty||"no"===t[o].ty)f?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],s),t[o]._render&&e[o].style.pElem.parentNode!==i&&i.appendChild(e[o].style.pElem),m.push(e[o].style);else if("gr"===t[o].ty){if(f)for(l=e[o].it.length,h=0;h<l;h+=1)e[o].prevViewData[h]=e[o].it[h];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,s+1,u,n),t[o]._render&&e[o].gr.parentNode!==i&&i.appendChild(e[o].gr)}else"tr"===t[o].ty?(f||(e[o]=this.createTransformElement(t[o],i)),p=e[o].transform,u.push(p)):"sh"===t[o].ty||"rc"===t[o].ty||"el"===t[o].ty||"sr"===t[o].ty?(f||(e[o]=this.createShapeElement(t[o],u,s)),this.setElementStyles(e[o])):"tm"===t[o].ty||"rd"===t[o].ty||"ms"===t[o].ty||"pb"===t[o].ty||"zz"===t[o].ty||"op"===t[o].ty?(f?(c=e[o]).closed=!1:((c=ShapeModifiers.getModifier(t[o].ty)).init(this,t[o]),e[o]=c,this.shapeModifiers.push(c)),y.push(c)):"rp"===t[o].ty&&(f?(c=e[o]).closed=!0:(c=ShapeModifiers.getModifier(t[o].ty),e[o]=c,c.init(this,t,o,e),this.shapeModifiers.push(c),n=!1),y.push(c));this.addProcessedElement(t[o],o+1)}for(d=m.length,o=0;o<d;o+=1)m[o].closed=!0;for(d=y.length,o=0;o<d;o+=1)y[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){var t;this.renderModifiers();var e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var t,e,r=this.animatedContents.length;for(t=0;t<r;t+=1)e=this.animatedContents[t],(this._isFirstFrame||e.element._isAnimated)&&!0!==e.data&&e.fn(e.data,e.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null},LetterProps.prototype.update=function(t,e,r,i,s,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,n=!0),this.sc!==r&&(this.sc=r,this._mdf.sc=!0,n=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,n=!0),this.m!==s&&(this.m=s,this._mdf.m=!0,n=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,this._mdf.p=!0,n=!0),n},TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},TextProperty.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||t){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,r=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{var i;this.lock=!0,this._mdf=!1;var s=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)a=r!==this.keysIndex?this.effectsSequence[i](a,a.t):this.effectsSequence[i](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},TextProperty.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,r=0,i=t.length;r<=i-1&&!(r===i-1||t[r+1].t>e);)r+=1;return this.keysIndex!==r&&(this.keysIndex=r),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(t){for(var e,r,i=[],s=0,a=t.length,n=!1,o=!1,h="";s<a;)n=o,o=!1,e=t.charCodeAt(s),h=t.charAt(s),FontManager.isCombinedCharacter(e)?n=!0:e>=55296&&e<=56319?FontManager.isRegionalFlag(t,s)?h=t.substr(s,14):(r=t.charCodeAt(s+1))>=56320&&r<=57343&&(FontManager.isModifier(e,r)?(h=t.substr(s,2),n=!0):h=FontManager.isFlagEmoji(t.substr(s,4))?t.substr(s,4):t.substr(s,2)):e>56319?(r=t.charCodeAt(s+1),FontManager.isVariationSelector(e)&&(n=!0)):FontManager.isZeroWidthJoiner(e)&&(n=!0,o=!0),n?(i[i.length-1]+=h,n=!1):i.push(h),s+=h.length;return i},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,r,i,s,a,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],c=0,f=l.m.g,u=0,d=0,m=0,y=[],g=0,v=0,b=h.getFontByName(t.f),_=0,P=getFontProperties(b);t.fWeight=P.weight,t.fStyle=P.style,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var S,E=t.tr/1e3*t.finalSize;if(t.sz)for(var x,C,A=!0,w=t.sz[0],k=t.sz[1];A;){x=0,g=0,r=(C=this.buildFinalText(t.t)).length,E=t.tr/1e3*t.finalSize;var T=-1;for(e=0;e<r;e+=1)S=C[e].charCodeAt(0),i=!1," "===C[e]?T=e:13!==S&&3!==S||(g=0,i=!0,x+=t.finalLineHeight||1.2*t.finalSize),h.chars?(o=h.getCharData(C[e],b.fStyle,b.fFamily),_=i?0:o.w*t.finalSize/100):_=h.measureText(C[e],t.f,t.finalSize),g+_>w&&" "!==C[e]?(-1===T?r+=1:e=T,x+=t.finalLineHeight||1.2*t.finalSize,C.splice(e,T===e?1:0,"\r"),T=-1,g=0):(g+=_,g+=E);x+=b.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&k<x?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=C,r=t.finalText.length,A=!1)}g=-E,_=0;var M,D=0;for(e=0;e<r;e+=1)if(i=!1,13===(S=(M=t.finalText[e]).charCodeAt(0))||3===S?(D=0,y.push(g),v=g>v?g:v,g=-2*E,s="",i=!0,m+=1):s=M,h.chars?(o=h.getCharData(M,b.fStyle,h.getFontByName(t.f).fFamily),_=i?0:o.w*t.finalSize/100):_=h.measureText(s,t.f,t.finalSize)," "===M?D+=_+E:(g+=_+E+D,D=0),p.push({l:_,an:_,add:u,n:i,anIndexes:[],val:s,line:m,animatorJustifyOffset:0}),2==f){if(u+=_,""===s||" "===s||e===r-1){for(""!==s&&" "!==s||(u-=_);d<=e;)p[d].an=u,p[d].ind=c,p[d].extra=_,d+=1;c+=1,u=0}}else if(3==f){if(u+=_,""===s||e===r-1){for(""===s&&(u-=_);d<=e;)p[d].an=u,p[d].ind=c,p[d].extra=_,d+=1;u=0,c+=1}}else p[c].ind=c,p[c].extra=0,c+=1;if(t.l=p,v=g>v?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var F,I,R,L,V=l.a;n=V.length;var B=[];for(a=0;a<n;a+=1){for((F=V[a]).a.sc&&(t.strokeColorAnim=!0),F.a.sw&&(t.strokeWidthAnim=!0),(F.a.fc||F.a.fh||F.a.fs||F.a.fb)&&(t.fillColorAnim=!0),L=0,R=F.s.b,e=0;e<r;e+=1)(I=p[e]).anIndexes[a]=L,(1==R&&""!==I.val||2==R&&""!==I.val&&" "!==I.val||3==R&&(I.n||" "==I.val||e==r-1)||4==R&&(I.n||e==r-1))&&(1===F.s.rn&&B.push(L),L+=1);l.a[a].s.totalChars=L;var O,$=-1;if(1===F.s.rn)for(e=0;e<r;e+=1)$!=(I=p[e]).anIndexes[a]&&($=I.anIndexes[a],O=B.splice(Math.floor(Math.random()*B.length),1)[0]),I.anIndexes[a]=O}t.yOffset=t.finalLineHeight||1.2*t.finalSize,t.ls=t.ls||0,t.ascent=b.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var r=this.copyData({},this.data.d.k[e].s);r=this.copyData(r,t),this.data.d.k[e].s=r,this.recalculate(e),this.setCurrentData(r),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var t=Math.max,e=Math.min,r=Math.floor;function i(t,e){this._currentTextLength=-1,this.k=!1,this.data=e,this.elem=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(t),this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),this.e="e"in e?PropertyFactory.getProp(t,e.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.sm=PropertyFactory.getProp(t,e.sm||{k:100},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}return i.prototype={getMult:function(i){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var s=0,a=0,n=1,o=1;this.ne.v>0?s=this.ne.v/100:a=-this.ne.v/100,this.xe.v>0?n=1-this.xe.v/100:o=1+this.xe.v/100;var h=BezierFactory.getBezierEasing(s,a,n,o).get,l=0,p=this.finalS,c=this.finalE,f=this.data.sh;if(2===f)l=h(l=c===p?i>=c?1:0:t(0,e(.5/(c-p)+(i-p)/(c-p),1)));else if(3===f)l=h(l=c===p?i>=c?0:1:1-t(0,e(.5/(c-p)+(i-p)/(c-p),1)));else if(4===f)c===p?l=0:(l=t(0,e(.5/(c-p)+(i-p)/(c-p),1)))<.5?l*=2:l=1-2*(l-.5),l=h(l);else if(5===f){if(c===p)l=0;else{var u=c-p,d=-u/2+(i=e(t(0,i+.5-p),c-p)),m=u/2;l=Math.sqrt(1-d*d/(m*m))}l=h(l)}else 6===f?(c===p?l=0:(i=e(t(0,i+.5-p),c-p),l=(1+Math.cos(Math.PI+2*Math.PI*i/(c-p)))/2),l=h(l)):(i>=r(p)&&(l=t(0,e(i-p<0?e(c,1)-(p-i):c-i,1))),l=h(l));if(100!==this.sm.v){var y=.01*this.sm.v;0===y&&(y=1e-8);var g=.5-.5*y;l<g?l=0:(l=(l-g)/y)>1&&(l=1)}return l*this.a.v},getValue:function(t){this.iterateDynamicProperties(),this._mdf=t||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,t&&2===this.data.r&&(this.e.v=this._currentTextLength);var e=2===this.data.r?1:100/this.data.totalChars,r=this.o.v/e,i=this.s.v/e+r,s=this.e.v/e+r;if(i>s){var a=i;i=s,s=a}this.finalS=i,this.finalE=s}},extendPrototype([DynamicPropertyContainer],i),{getTextSelectorProp:function(t,e,r){return new i(t,e,r)}}}();function TextAnimatorDataProperty(t,e,r){var i={propType:!1},s=PropertyFactory.getProp,a=e.a;this.a={r:a.r?s(t,a.r,0,degToRads,r):i,rx:a.rx?s(t,a.rx,0,degToRads,r):i,ry:a.ry?s(t,a.ry,0,degToRads,r):i,sk:a.sk?s(t,a.sk,0,degToRads,r):i,sa:a.sa?s(t,a.sa,0,degToRads,r):i,s:a.s?s(t,a.s,1,.01,r):i,a:a.a?s(t,a.a,1,0,r):i,o:a.o?s(t,a.o,0,.01,r):i,p:a.p?s(t,a.p,1,0,r):i,sw:a.sw?s(t,a.sw,0,0,r):i,sc:a.sc?s(t,a.sc,1,0,r):i,fc:a.fc?s(t,a.fc,1,0,r):i,fh:a.fh?s(t,a.fh,0,0,r):i,fs:a.fs?s(t,a.fs,0,.01,r):i,fb:a.fb?s(t,a.fb,0,.01,r):i,t:a.t?s(t,a.t,0,0,r):i},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,r),this.s.t=e.s.t}function TextAnimatorProperty(t,e,r){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=r,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(r)}function ITextElement(){}TextAnimatorProperty.prototype.searchProperties=function(){var t,e,r=this._textData.a.length,i=PropertyFactory.getProp;for(t=0;t<r;t+=1)e=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,e,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:i(this._elem,this._textData.p.a,0,0,this),f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:i(this._elem,this._textData.p.r,0,0,this),p:i(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this._mdf||this._isFirstFrame||e||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var r,i,s,a,n,o,h,l,p,c,f,u,d,m,y,g,v,b,_,P=this._moreOptions.alignment.v,S=this._animatorsData,E=this._textData,x=this.mHelper,C=this._renderType,A=this.renderedLetters.length,w=t.l;if(this._hasMaskedPath){if(_=this._pathData.m,!this._pathData.n||this._pathData._mdf){var k,T=_.v;for(this._pathData.r.v&&(T=T.reverse()),n={tLength:0,segments:[]},a=T._length-1,g=0,s=0;s<a;s+=1)k=bez.buildBezierData(T.v[s],T.v[s+1],[T.o[s][0]-T.v[s][0],T.o[s][1]-T.v[s][1]],[T.i[s+1][0]-T.v[s+1][0],T.i[s+1][1]-T.v[s+1][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength;s=a,_.v.c&&(k=bez.buildBezierData(T.v[s],T.v[0],[T.o[s][0]-T.v[s][0],T.o[s][1]-T.v[s][1]],[T.i[0][0]-T.v[0][0],T.i[0][1]-T.v[0][1]]),n.tLength+=k.segmentLength,n.segments.push(k),g+=k.segmentLength),this._pathData.pi=n}if(n=this._pathData.pi,o=this._pathData.f.v,f=0,c=1,l=0,p=!0,m=n.segments,o<0&&_.v.c)for(n.tLength<Math.abs(o)&&(o=-Math.abs(o)%n.tLength),c=(d=m[f=m.length-1].points).length-1;o<0;)o+=d[c].partialLength,(c-=1)<0&&(c=(d=m[f-=1].points).length-1);u=(d=m[f].points)[c-1],y=(h=d[c]).partialLength}a=w.length,r=0,i=0;var M,D,F,I,R,L=1.2*t.finalSize*.714,V=!0;F=S.length;var B,O,$,z,G,N,j,H,q,W,U,Y,J=-1,X=o,K=f,Z=c,Q=-1,tt="",et=this.defaultPropsArray;if(2===t.j||1===t.j){var rt=0,it=0,st=2===t.j?-.5:-1,at=0,nt=!0;for(s=0;s<a;s+=1)if(w[s].n){for(rt&&(rt+=it);at<s;)w[at].animatorJustifyOffset=rt,at+=1;rt=0,nt=!0}else{for(D=0;D<F;D+=1)(M=S[D].a).t.propType&&(nt&&2===t.j&&(it+=M.t.v*st),(R=S[D].s.getMult(w[s].anIndexes[D],E.a[D].s.totalChars)).length?rt+=M.t.v*R[0]*st:rt+=M.t.v*R*st);nt=!1}for(rt&&(rt+=it);at<s;)w[at].animatorJustifyOffset=rt,at+=1}for(s=0;s<a;s+=1){if(x.reset(),z=1,w[s].n)r=0,i+=t.yOffset,i+=V?1:0,o=X,V=!1,this._hasMaskedPath&&(c=Z,u=(d=m[f=K].points)[c-1],y=(h=d[c]).partialLength,l=0),tt="",U="",q="",Y="",et=this.defaultPropsArray;else{if(this._hasMaskedPath){if(Q!==w[s].line){switch(t.j){case 1:o+=g-t.lineWidths[w[s].line];break;case 2:o+=(g-t.lineWidths[w[s].line])/2}Q=w[s].line}J!==w[s].ind&&(w[J]&&(o+=w[J].extra),o+=w[s].an/2,J=w[s].ind),o+=P[0]*w[s].an*.005;var ot=0;for(D=0;D<F;D+=1)(M=S[D].a).p.propType&&((R=S[D].s.getMult(w[s].anIndexes[D],E.a[D].s.totalChars)).length?ot+=M.p.v[0]*R[0]:ot+=M.p.v[0]*R),M.a.propType&&((R=S[D].s.getMult(w[s].anIndexes[D],E.a[D].s.totalChars)).length?ot+=M.a.v[0]*R[0]:ot+=M.a.v[0]*R);for(p=!0,this._pathData.a.v&&(o=.5*w[0].an+(g-this._pathData.f.v-.5*w[0].an-.5*w[w.length-1].an)*J/(a-1),o+=this._pathData.f.v);p;)l+y>=o+ot||!d?(v=(o+ot-l)/h.partialLength,O=u.point[0]+(h.point[0]-u.point[0])*v,$=u.point[1]+(h.point[1]-u.point[1])*v,x.translate(-P[0]*w[s].an*.005,-P[1]*L*.01),p=!1):d&&(l+=h.partialLength,(c+=1)>=d.length&&(c=0,m[f+=1]?d=m[f].points:_.v.c?(c=0,d=m[f=0].points):(l-=h.partialLength,d=null)),d&&(u=h,y=(h=d[c]).partialLength));B=w[s].an/2-w[s].add,x.translate(-B,0,0)}else B=w[s].an/2-w[s].add,x.translate(-B,0,0),x.translate(-P[0]*w[s].an*.005,-P[1]*L*.01,0);for(D=0;D<F;D+=1)(M=S[D].a).t.propType&&(R=S[D].s.getMult(w[s].anIndexes[D],E.a[D].s.totalChars),0===r&&0===t.j||(this._hasMaskedPath?R.length?o+=M.t.v*R[0]:o+=M.t.v*R:R.length?r+=M.t.v*R[0]:r+=M.t.v*R));for(t.strokeWidthAnim&&(N=t.sw||0),t.strokeColorAnim&&(G=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(j=[t.fc[0],t.fc[1],t.fc[2]]),D=0;D<F;D+=1)(M=S[D].a).a.propType&&((R=S[D].s.getMult(w[s].anIndexes[D],E.a[D].s.totalChars)).length?x.translate(-M.a.v[0]*R[0],-M.a.v[1]*R[1],M.a.v[2]*R[2]):x.translate(-M.a.v[0]*R,-M.a.v[1]*R,M.a.v[2]*R));for(D=0;D<F;D+=1)(M=S[D].a).s.propType&&((R=S[D].s.getMult(w[s].anIndexes[D],E.a[D].s.totalChars)).length?x.scale(1+(M.s.v[0]-1)*R[0],1+(M.s.v[1]-1)*R[1],1):x.scale(1+(M.s.v[0]-1)*R,1+(M.s.v[1]-1)*R,1));for(D=0;D<F;D+=1){if(M=S[D].a,R=S[D].s.getMult(w[s].anIndexes[D],E.a[D].s.totalChars),M.sk.propType&&(R.length?x.skewFromAxis(-M.sk.v*R[0],M.sa.v*R[1]):x.skewFromAxis(-M.sk.v*R,M.sa.v*R)),M.r.propType&&(R.length?x.rotateZ(-M.r.v*R[2]):x.rotateZ(-M.r.v*R)),M.ry.propType&&(R.length?x.rotateY(M.ry.v*R[1]):x.rotateY(M.ry.v*R)),M.rx.propType&&(R.length?x.rotateX(M.rx.v*R[0]):x.rotateX(M.rx.v*R)),M.o.propType&&(R.length?z+=(M.o.v*R[0]-z)*R[0]:z+=(M.o.v*R-z)*R),t.strokeWidthAnim&&M.sw.propType&&(R.length?N+=M.sw.v*R[0]:N+=M.sw.v*R),t.strokeColorAnim&&M.sc.propType)for(H=0;H<3;H+=1)R.length?G[H]+=(M.sc.v[H]-G[H])*R[0]:G[H]+=(M.sc.v[H]-G[H])*R;if(t.fillColorAnim&&t.fc){if(M.fc.propType)for(H=0;H<3;H+=1)R.length?j[H]+=(M.fc.v[H]-j[H])*R[0]:j[H]+=(M.fc.v[H]-j[H])*R;M.fh.propType&&(j=R.length?addHueToRGB(j,M.fh.v*R[0]):addHueToRGB(j,M.fh.v*R)),M.fs.propType&&(j=R.length?addSaturationToRGB(j,M.fs.v*R[0]):addSaturationToRGB(j,M.fs.v*R)),M.fb.propType&&(j=R.length?addBrightnessToRGB(j,M.fb.v*R[0]):addBrightnessToRGB(j,M.fb.v*R))}}for(D=0;D<F;D+=1)(M=S[D].a).p.propType&&(R=S[D].s.getMult(w[s].anIndexes[D],E.a[D].s.totalChars),this._hasMaskedPath?R.length?x.translate(0,M.p.v[1]*R[0],-M.p.v[2]*R[1]):x.translate(0,M.p.v[1]*R,-M.p.v[2]*R):R.length?x.translate(M.p.v[0]*R[0],M.p.v[1]*R[1],-M.p.v[2]*R[2]):x.translate(M.p.v[0]*R,M.p.v[1]*R,-M.p.v[2]*R));if(t.strokeWidthAnim&&(q=N<0?0:N),t.strokeColorAnim&&(W="rgb("+Math.round(255*G[0])+","+Math.round(255*G[1])+","+Math.round(255*G[2])+")"),t.fillColorAnim&&t.fc&&(U="rgb("+Math.round(255*j[0])+","+Math.round(255*j[1])+","+Math.round(255*j[2])+")"),this._hasMaskedPath){if(x.translate(0,-t.ls),x.translate(0,P[1]*L*.01+i,0),this._pathData.p.v){b=(h.point[1]-u.point[1])/(h.point[0]-u.point[0]);var ht=180*Math.atan(b)/Math.PI;h.point[0]<u.point[0]&&(ht+=180),x.rotate(-ht*Math.PI/180)}x.translate(O,$,0),o-=P[0]*w[s].an*.005,w[s+1]&&J!==w[s+1].ind&&(o+=w[s].an/2,o+=.001*t.tr*t.finalSize)}else{switch(x.translate(r,i,0),t.ps&&x.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:x.translate(w[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[w[s].line]),0,0);break;case 2:x.translate(w[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[w[s].line])/2,0,0)}x.translate(0,-t.ls),x.translate(B,0,0),x.translate(P[0]*w[s].an*.005,P[1]*L*.01,0),r+=w[s].l+.001*t.tr*t.finalSize}"html"===C?tt=x.toCSS():"svg"===C?tt=x.to2dCSS():et=[x.props[0],x.props[1],x.props[2],x.props[3],x.props[4],x.props[5],x.props[6],x.props[7],x.props[8],x.props[9],x.props[10],x.props[11],x.props[12],x.props[13],x.props[14],x.props[15]],Y=z}A<=s?(I=new LetterProps(Y,q,W,U,tt,et),this.renderedLetters.push(I),A+=1,this.lettersChangedFlag=!0):(I=this.renderedLetters[s],this.lettersChangedFlag=I.update(Y,q,W,U,tt,et)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty),ITextElement.prototype.initElement=function(t,e,r){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,r),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},ITextElement.prototype.createPathShape=function(t,e){var r,i,s=e.length,a="";for(r=0;r<s;r+=1)"sh"===e[r].ty&&(i=e[r].ks.k,a+=buildShapeString(i,i.i.length,!0,t));return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,r,i,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r])/2,0,0)}e.translate(i,s,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},ITextElement.prototype.validateText=function(){(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)};var emptyShapeData={shapes:[]};function SVGTextLottieElement(t,e,r){this.textSpans=[],this.renderType="svg",this.initElement(t,e,r)}function ISolidElement(t,e,r){this.initElement(t,e,r)}function NullElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initFrame(),this.initTransform(t,e,r),this.initHierarchy()}function SVGRendererBase(){}function ICompElement(){}function SVGCompElement(t,e,r){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var r="";if(e&&e.title){var i=createNS("title"),s=createElementID();i.setAttribute("id",s),i.textContent=e.title,this.svgElement.appendChild(i),r+=s}if(e&&e.description){var a=createNS("desc"),n=createElementID();a.setAttribute("id",n),a.textContent=e.description,this.svgElement.appendChild(a),r+=" "+n}r&&this.svgElement.setAttribute("aria-labelledby",r);var o=createNS("defs");this.svgElement.appendChild(o);var h=createNS("g");this.svgElement.appendChild(h),this.layerElement=h,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!(e&&!1===e.hideOnTransparent),viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable,filterSize:{width:e&&e.filterSize&&e.filterSize.width||"100%",height:e&&e.filterSize&&e.filterSize.height||"100%",x:e&&e.filterSize&&e.filterSize.x||"0%",y:e&&e.filterSize&&e.filterSize.y||"0%"},width:e&&e.width,height:e&&e.height,runExpressions:!e||void 0===e.runExpressions||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:o,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextLottieElement),SVGTextLottieElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextLottieElement.prototype.buildTextContents=function(t){for(var e=0,r=t.length,i=[],s="";e<r;)t[e]===String.fromCharCode(13)||t[e]===String.fromCharCode(3)?(i.push(s),s=""):s+=t[e],e+=1;return i.push(s),i},SVGTextLottieElement.prototype.buildShapeData=function(t,e){if(t.shapes&&t.shapes.length){var r=t.shapes[0];if(r.it){var i=r.it[r.it.length-1];i.s&&(i.s.k[0]=e,i.s.k[1]=e)}}return t},SVGTextLottieElement.prototype.buildNewText=function(){var t,e;this.addDynamicProperty(this);var r=this.textProperty.currentData;this.renderedLetters=createSizedArray(r?r.l.length:0),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.finalSize);var i=this.globalData.fontManager.getFontByName(r.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=r.fWeight,a=r.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",r.t);var n,o=r.l||[],h=!!this.globalData.fontManager.chars;e=o.length;var l=this.mHelper,p=this.data.singleShape,c=0,f=0,u=!0,d=.001*r.tr*r.finalSize;if(!p||h||r.sz){var m,y=this.textSpans.length;for(t=0;t<e;t+=1){if(this.textSpans[t]||(this.textSpans[t]={span:null,childSpan:null,glyph:null}),!h||!p||0===t){if(n=y>t?this.textSpans[t].span:createNS(h?"g":"text"),y<=t){if(n.setAttribute("stroke-linecap","butt"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("stroke-miterlimit","4"),this.textSpans[t].span=n,h){var g=createNS("g");n.appendChild(g),this.textSpans[t].childSpan=g}this.textSpans[t].span=n,this.layerElement.appendChild(n)}n.style.display="inherit"}if(l.reset(),p&&(o[t].n&&(c=-d,f+=r.yOffset,f+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(r,l,o[t].line,c,f),c+=o[t].l||0,c+=d),h){var v;if(1===(m=this.globalData.fontManager.getCharData(r.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily)).t)v=new SVGCompElement(m.data,this.globalData,this);else{var b=emptyShapeData;m.data&&m.data.shapes&&(b=this.buildShapeData(m.data,r.finalSize)),v=new SVGShapeElement(b,this.globalData,this)}if(this.textSpans[t].glyph){var _=this.textSpans[t].glyph;this.textSpans[t].childSpan.removeChild(_.layerElement),_.destroy()}this.textSpans[t].glyph=v,v._debug=!0,v.prepareFrame(0),v.renderFrame(),this.textSpans[t].childSpan.appendChild(v.layerElement),1===m.t&&this.textSpans[t].childSpan.setAttribute("transform","scale("+r.finalSize/100+","+r.finalSize/100+")")}else p&&n.setAttribute("transform","translate("+l.props[12]+","+l.props[13]+")"),n.textContent=o[t].val,n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}p&&n&&n.setAttribute("d","")}else{var P=this.textContainer,S="start";switch(r.j){case 1:S="end";break;case 2:S="middle";break;default:S="start"}P.setAttribute("text-anchor",S),P.setAttribute("letter-spacing",d);var E=this.buildTextContents(r.finalText);for(e=E.length,f=r.ps?r.ps[1]+r.ascent:0,t=0;t<e;t+=1)(n=this.textSpans[t].span||createNS("tspan")).textContent=E[t],n.setAttribute("x",0),n.setAttribute("y",f),n.style.display="inherit",P.appendChild(n),this.textSpans[t]||(this.textSpans[t]={span:null,glyph:null}),this.textSpans[t].span=n,f+=r.finalLineHeight;this.layerElement.appendChild(P)}for(;t<this.textSpans.length;)this.textSpans[t].span.style.display="none",t+=1;this._sizeChanged=!0},SVGTextLottieElement.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var t=this.layerElement.getBBox();this.bbox={top:t.y,left:t.x,width:t.width,height:t.height}}return this.bbox},SVGTextLottieElement.prototype.getValue=function(){var t,e,r=this.textSpans.length;for(this.renderedFrame=this.comp.renderedFrame,t=0;t<r;t+=1)(e=this.textSpans[t].glyph)&&(e.prepareFrame(this.comp.renderedFrame-this.data.st),e._mdf&&(this._mdf=!0))},SVGTextLottieElement.prototype.renderInnerContent=function(){if(this.validateText(),(!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){var t,e;this._sizeChanged=!0;var r,i,s,a=this.textAnimator.renderedLetters,n=this.textProperty.currentData.l;for(e=n.length,t=0;t<e;t+=1)n[t].n||(r=a[t],i=this.textSpans[t].span,(s=this.textSpans[t].glyph)&&s.renderFrame(),r._mdf.m&&i.setAttribute("transform",r.m),r._mdf.o&&i.setAttribute("opacity",r.o),r._mdf.sw&&i.setAttribute("stroke-width",r.sw),r._mdf.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),extendPrototype([BaseRenderer],SVGRendererBase),SVGRendererBase.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRendererBase.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRendererBase.prototype.createText=function(t){return new SVGTextLottieElement(t,this.globalData,this)},SVGRendererBase.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRendererBase.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRendererBase.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),void 0!==this.renderConfig.focusable&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var r=createNS("clipPath"),i=createNS("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=createElementID();r.setAttribute("id",s),r.appendChild(i),this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+s+")"),e.appendChild(r),this.layers=t.layers,this.elements=createSizedArray(t.layers.length)},SVGRendererBase.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRendererBase.prototype.updateContainerSize=function(){},SVGRendererBase.prototype.findIndexByInd=function(t){var e=0,r=this.layers.length;for(e=0;e<r;e+=1)if(this.layers[e].ind===t)return e;return-1},SVGRendererBase.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){e[t]=!0;var r=this.createItem(this.layers[t]);if(e[t]=r,getExpressionsPlugin()&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,t),this.layers[t].tt){var i="tp"in this.layers[t]?this.findIndexByInd(this.layers[t].tp):t-1;if(-1===i)return;if(this.elements[i]&&!0!==this.elements[i]){var s=e[i].getMatte(this.layers[t].tt);r.setMatte(s)}else this.buildItem(i),this.addPendingElement(r)}}},SVGRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,r=this.elements.length;e<r;){if(this.elements[e]===t){var i="tp"in t.data?this.findIndexByInd(t.data.tp):e-1,s=this.elements[i].getMatte(this.layers[e].tt);t.setMatte(s);break}e+=1}}},SVGRendererBase.prototype.renderFrame=function(t){if(this.renderedFrame!==t&&!this.destroyed){var e;null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=r-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<r;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRendererBase.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){for(var i,s=0;s<e;)this.elements[s]&&!0!==this.elements[s]&&this.elements[s].getBaseElement()&&(i=this.elements[s].getBaseElement()),s+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRendererBase.prototype.hide=function(){this.layerElement.style.display="none"},SVGRendererBase.prototype.show=function(){this.layerElement.style.display="block"},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),!this.data.xt&&e.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var r,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st),this.elements[r]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([SVGRendererBase,ICompElement,SVGBaseElement],SVGCompElement),SVGCompElement.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},extendPrototype([SVGRendererBase],SVGRenderer),SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},ShapeTransformManager.prototype={addTransformSequence:function(t){var e,r=t.length,i="_";for(e=0;e<r;e+=1)i+=t[e].transform.key+"_";var s=this.sequences[i];return s||(s={transforms:[].concat(t),finalTransform:new Matrix,_mdf:!1},this.sequences[i]=s,this.sequenceList.push(s)),s},processSequence:function(t,e){for(var r=0,i=t.transforms.length,s=e;r<i&&!e;){if(t.transforms[r].transform.mProps._mdf){s=!0;break}r+=1}if(s)for(t.finalTransform.reset(),r=i-1;r>=0;r-=1)t.finalTransform.multiply(t.transforms[r].transform.mProps.v);t._mdf=s},processSequences:function(t){var e,r=this.sequenceList.length;for(e=0;e<r;e+=1)this.processSequence(this.sequenceList[e],t)},getNewKey:function(){return this.transform_key_count+=1,"_"+this.transform_key_count}};var lumaLoader=function(){var t="__lottie_element_luma_buffer",e=null,r=null,i=null;function s(){var s,a,n;e||(s=createNS("svg"),a=createNS("filter"),n=createNS("feColorMatrix"),a.setAttribute("id",t),n.setAttribute("type","matrix"),n.setAttribute("color-interpolation-filters","sRGB"),n.setAttribute("values","0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"),a.appendChild(n),s.appendChild(a),s.setAttribute("id",t+"_svg"),featureSupport.svgLumaHidden&&(s.style.display="none"),i=s,document.body.appendChild(i),e=createTag("canvas"),(r=e.getContext("2d")).filter="url(#"+t+")",r.fillStyle="rgba(0,0,0,0)",r.fillRect(0,0,1,1))}return{load:s,get:function(i){return e||s(),e.width=i.width,e.height=i.height,r.filter="url(#"+t+")",e}}};function createCanvas(t,e){if(featureSupport.offscreenCanvas)return new OffscreenCanvas(t,e);var r=createTag("canvas");return r.width=t,r.height=e,r}var assetLoader={loadLumaCanvas:lumaLoader.load,getLumaCanvas:lumaLoader.get,createCanvas:createCanvas},registeredEffects={};function CVEffects(t){var e,r,i=t.data.ef?t.data.ef.length:0;for(this.filters=[],e=0;e<i;e+=1){r=null;var s=t.data.ef[e].ty;registeredEffects[s]&&(r=new(0,registeredEffects[s].effect)(t.effectsManager.effectElements[e],t)),r&&this.filters.push(r)}this.filters.length&&t.addRenderableComponent(this)}function registerEffect(t,e){registeredEffects[t]={effect:e}}function CVMaskElement(t,e){var r;this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i=this.masksProperties.length,s=!1;for(r=0;r<i;r+=1)"n"!==this.masksProperties[r].mode&&(s=!0),this.viewData[r]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[r],3);this.hasMasks=s,s&&this.element.addRenderableComponent(this)}function CVBaseElement(){}CVEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)},CVEffects.prototype.getEffects=function(t){var e,r=this.filters.length,i=[];for(e=0;e<r;e+=1)this.filters[e].type===t&&i.push(this.filters[e]);return i},CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var t,e,r,i,s=this.element.finalTransform.mat,a=this.element.canvasContext,n=this.masksProperties.length;for(a.beginPath(),t=0;t<n;t+=1)if("n"!==this.masksProperties[t].mode){var o;this.masksProperties[t].inv&&(a.moveTo(0,0),a.lineTo(this.element.globalData.compSize.w,0),a.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),a.lineTo(0,this.element.globalData.compSize.h),a.lineTo(0,0)),i=this.viewData[t].v,e=s.applyToPointArray(i.v[0][0],i.v[0][1],0),a.moveTo(e[0],e[1]);var h=i._length;for(o=1;o<h;o+=1)r=s.applyToTriplePoints(i.o[o-1],i.i[o],i.v[o]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);r=s.applyToTriplePoints(i.o[o-1],i.i[0],i.v[0]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5])}this.element.globalData.renderer.save(!0),a.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null};var operationsMap={1:"source-in",2:"source-out",3:"source-in",4:"source-out"};function CVShapeData(t,e,r,i){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var s,a=4;"rc"===e.ty?a=5:"el"===e.ty?a=6:"sr"===e.ty&&(a=7),this.sh=ShapePropertyFactory.getShapeProp(t,e,a,t);var n,o=r.length;for(s=0;s<o;s+=1)r[s].closed||(n={transforms:i.addTransformSequence(r[s].transforms),trNodes:[]},this.styledShapes.push(n),r[s].elements.push(n))}function CVShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(t,e,r)}function CVTextElement(t,e,r){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,r)}function CVImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.img=e.imageLoader.getAsset(this.assetData),this.initElement(t,e,r)}function CVSolidElement(t,e,r){this.initElement(t,e,r)}function CanvasRendererBase(){}function CanvasContext(){this.opacity=-1,this.transform=createTypedArray("float32",16),this.fillStyle="",this.strokeStyle="",this.lineWidth="",this.lineCap="",this.lineJoin="",this.miterLimit="",this.id=Math.random()}function CVContextData(){var t;for(this.stack=[],this.cArrPos=0,this.cTr=new Matrix,t=0;t<15;t+=1){var e=new CanvasContext;this.stack[t]=e}this._length=15,this.nativeContext=null,this.transformMat=new Matrix,this.currentOpacity=1,this.currentFillStyle="",this.appliedFillStyle="",this.currentStrokeStyle="",this.appliedStrokeStyle="",this.currentLineWidth="",this.appliedLineWidth="",this.currentLineCap="",this.appliedLineCap="",this.currentLineJoin="",this.appliedLineJoin="",this.appliedMiterLimit="",this.currentMiterLimit=""}function CVCompElement(t,e,r){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:e&&e.contentVisibility||"visible",className:e&&e.className||"",id:e&&e.id||"",runExpressions:!e||void 0===e.runExpressions||e.runExpressions},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas",this.renderConfig.clearCanvas&&(this.ctxTransform=this.contextData.transform.bind(this.contextData),this.ctxOpacity=this.contextData.opacity.bind(this.contextData),this.ctxFillStyle=this.contextData.fillStyle.bind(this.contextData),this.ctxStrokeStyle=this.contextData.strokeStyle.bind(this.contextData),this.ctxLineWidth=this.contextData.lineWidth.bind(this.contextData),this.ctxLineCap=this.contextData.lineCap.bind(this.contextData),this.ctxLineJoin=this.contextData.lineJoin.bind(this.contextData),this.ctxMiterLimit=this.contextData.miterLimit.bind(this.contextData),this.ctxFill=this.contextData.fill.bind(this.contextData),this.ctxFillRect=this.contextData.fillRect.bind(this.contextData),this.ctxStroke=this.contextData.stroke.bind(this.contextData),this.save=this.contextData.save.bind(this.contextData))}function HBaseElement(){}function HSolidElement(t,e,r){this.initElement(t,e,r)}function HShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(t,e,r),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,r){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,r)}function HCameraElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initHierarchy();var i=PropertyFactory.getProp;if(this.pe=i(this,t.pe,0,0,this),t.ks.p.s?(this.px=i(this,t.ks.p.x,1,0,this),this.py=i(this,t.ks.p.y,1,0,this),this.pz=i(this,t.ks.p.z,1,0,this)):this.p=i(this,t.ks.p,1,0,this),t.ks.a&&(this.a=i(this,t.ks.a,1,0,this)),t.ks.or.k.length&&t.ks.or.k[0].to){var s,a=t.ks.or.k.length;for(s=0;s<a;s+=1)t.ks.or.k[s].to=null,t.ks.or.k[s].ti=null}this.or=i(this,t.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=i(this,t.ks.rx,0,degToRads,this),this.ry=i(this,t.ks.ry,0,degToRads,this),this.rz=i(this,t.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}function HImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r)}function HybridRendererBase(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&!1===e.hideOnTransparent),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}function HCompElement(t,e,r){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(e&&!1===e.hideOnTransparent),filterSize:{width:e&&e.filterSize&&e.filterSize.width||"400%",height:e&&e.filterSize&&e.filterSize.height||"400%",x:e&&e.filterSize&&e.filterSize.x||"-100%",y:e&&e.filterSize&&e.filterSize.y||"-100%"},runExpressions:!e||void 0===e.runExpressions||e.runExpressions},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){if(this.data.tt>=1){this.buffers=[];var t=this.globalData.canvasContext,e=assetLoader.createCanvas(t.canvas.width,t.canvas.height);this.buffers.push(e);var r=assetLoader.createCanvas(t.canvas.width,t.canvas.height);this.buffers.push(r),this.data.tt>=3&&!document._isProxy&&assetLoader.loadLumaCanvas()}this.canvasContext=this.globalData.canvasContext,this.transformCanvas=this.globalData.transformCanvas,this.renderableEffectsManager=new CVEffects(this),this.searchEffectTransforms()},createContent:function(){},setBlendMode:function(){var t=this.globalData;if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e=getBlendMode(this.data.bm);t.canvasContext.globalCompositeOperation=e}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this),this.transformEffects=this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)},hideElement:function(){this.hidden||this.isInRange&&!this.isTransparent||(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},clearCanvas:function(t){t.clearRect(this.transformCanvas.tx,this.transformCanvas.ty,this.transformCanvas.w*this.transformCanvas.sx,this.transformCanvas.h*this.transformCanvas.sy)},prepareLayer:function(){if(this.data.tt>=1){var t=this.buffers[0].getContext("2d");this.clearCanvas(t),t.drawImage(this.canvasContext.canvas,0,0),this.currentTransform=this.canvasContext.getTransform(),this.canvasContext.setTransform(1,0,0,1,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.setTransform(this.currentTransform)}},exitLayer:function(){if(this.data.tt>=1){var t=this.buffers[1],e=t.getContext("2d");if(this.clearCanvas(e),e.drawImage(this.canvasContext.canvas,0,0),this.canvasContext.setTransform(1,0,0,1,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.setTransform(this.currentTransform),this.comp.getElementById("tp"in this.data?this.data.tp:this.data.ind-1).renderFrame(!0),this.canvasContext.setTransform(1,0,0,1,0,0),this.data.tt>=3&&!document._isProxy){var r=assetLoader.getLumaCanvas(this.canvasContext.canvas);r.getContext("2d").drawImage(this.canvasContext.canvas,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.drawImage(r,0,0)}this.canvasContext.globalCompositeOperation=operationsMap[this.data.tt],this.canvasContext.drawImage(t,0,0),this.canvasContext.globalCompositeOperation="destination-over",this.canvasContext.drawImage(this.buffers[0],0,0),this.canvasContext.setTransform(this.currentTransform),this.canvasContext.globalCompositeOperation="source-over"}},renderFrame:function(t){if(!this.hidden&&!this.data.hd&&(1!==this.data.td||t)){this.renderTransform(),this.renderRenderable(),this.renderLocalTransform(),this.setBlendMode();var e=0===this.data.ty;this.prepareLayer(),this.globalData.renderer.save(e),this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity),this.renderInnerContent(),this.globalData.renderer.restore(e),this.exitLayer(),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement,CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated,extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(t,e){var r={data:t,type:t.ty,preTransforms:this.transformsManager.addTransformSequence(e),transforms:[],elements:[],closed:!0===t.hd},i={};if("fl"===t.ty||"st"===t.ty?(i.c=PropertyFactory.getProp(this,t.c,1,255,this),i.c.k||(r.co="rgb("+bmFloor(i.c.v[0])+","+bmFloor(i.c.v[1])+","+bmFloor(i.c.v[2])+")")):"gf"!==t.ty&&"gs"!==t.ty||(i.s=PropertyFactory.getProp(this,t.s,1,null,this),i.e=PropertyFactory.getProp(this,t.e,1,null,this),i.h=PropertyFactory.getProp(this,t.h||{k:0},0,.01,this),i.a=PropertyFactory.getProp(this,t.a||{k:0},0,degToRads,this),i.g=new GradientProperty(this,t.g,this)),i.o=PropertyFactory.getProp(this,t.o,0,.01,this),"st"===t.ty||"gs"===t.ty){if(r.lc=lineCapEnum[t.lc||2],r.lj=lineJoinEnum[t.lj||2],1==t.lj&&(r.ml=t.ml),i.w=PropertyFactory.getProp(this,t.w,0,null,this),i.w.k||(r.wi=i.w.v),t.d){var s=new DashProperty(this,t.d,"canvas",this);i.d=s,i.d.k||(r.da=i.d.dashArray,r.do=i.d.dashoffset[0])}}else r.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(r),i.style=r,i},CVShapeElement.prototype.createGroupElement=function(){return{it:[],prevViewData:[]}},CVShapeElement.prototype.createTransformElement=function(t){return{transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,t.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,t,this)}}},CVShapeElement.prototype.createShapeElement=function(t){var e=new CVShapeData(this,t,this.stylesList,this.transformsManager);return this.shapes.push(e),this.addShapeToModifiers(e),e},CVShapeElement.prototype.reloadShapes=function(){var t;this._isFirstFrame=!0;var e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(t){var e,r=this.stylesList.length;for(e=0;e<r;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.push(t)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].closed||this.stylesList[t].transforms.pop()},CVShapeElement.prototype.closeStyles=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].closed=!0},CVShapeElement.prototype.searchShapes=function(t,e,r,i,s){var a,n,o,h,l,p,c=t.length-1,f=[],u=[],d=[].concat(s);for(a=c;a>=0;a-=1){if((h=this.searchProcessedElement(t[a]))?e[a]=r[h-1]:t[a]._shouldRender=i,"fl"===t[a].ty||"st"===t[a].ty||"gf"===t[a].ty||"gs"===t[a].ty)h?e[a].style.closed=!1:e[a]=this.createStyleElement(t[a],d),f.push(e[a].style);else if("gr"===t[a].ty){if(h)for(o=e[a].it.length,n=0;n<o;n+=1)e[a].prevViewData[n]=e[a].it[n];else e[a]=this.createGroupElement(t[a]);this.searchShapes(t[a].it,e[a].it,e[a].prevViewData,i,d)}else"tr"===t[a].ty?(h||(p=this.createTransformElement(t[a]),e[a]=p),d.push(e[a]),this.addTransformToStyleList(e[a])):"sh"===t[a].ty||"rc"===t[a].ty||"el"===t[a].ty||"sr"===t[a].ty?h||(e[a]=this.createShapeElement(t[a])):"tm"===t[a].ty||"rd"===t[a].ty||"pb"===t[a].ty||"zz"===t[a].ty||"op"===t[a].ty?(h?(l=e[a]).closed=!1:((l=ShapeModifiers.getModifier(t[a].ty)).init(this,t[a]),e[a]=l,this.shapeModifiers.push(l)),u.push(l)):"rp"===t[a].ty&&(h?(l=e[a]).closed=!0:(l=ShapeModifiers.getModifier(t[a].ty),e[a]=l,l.init(this,t,a,e),this.shapeModifiers.push(l),i=!1),u.push(l));this.addProcessedElement(t[a],a+1)}for(this.removeTransformFromStyleList(),this.closeStyles(f),c=u.length,a=0;a<c;a+=1)u[a].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(t,e){(t._opMdf||e.op._mdf||this._isFirstFrame)&&(e.opacity=t.opacity,e.opacity*=e.op.v,e._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var t,e,r,i,s,a,n,o,h,l=this.stylesList.length,p=this.globalData.renderer,c=this.globalData.canvasContext;for(t=0;t<l;t+=1)if(("st"!==(o=(h=this.stylesList[t]).type)&&"gs"!==o||0!==h.wi)&&h.data._shouldRender&&0!==h.coOp&&0!==this.globalData.currentGlobalAlpha){for(p.save(),a=h.elements,"st"===o||"gs"===o?(p.ctxStrokeStyle("st"===o?h.co:h.grd),p.ctxLineWidth(h.wi),p.ctxLineCap(h.lc),p.ctxLineJoin(h.lj),p.ctxMiterLimit(h.ml||0)):p.ctxFillStyle("fl"===o?h.co:h.grd),p.ctxOpacity(h.coOp),"st"!==o&&"gs"!==o&&c.beginPath(),p.ctxTransform(h.preTransforms.finalTransform.props),r=a.length,e=0;e<r;e+=1){for("st"!==o&&"gs"!==o||(c.beginPath(),h.da&&(c.setLineDash(h.da),c.lineDashOffset=h.do)),s=(n=a[e].trNodes).length,i=0;i<s;i+=1)"m"===n[i].t?c.moveTo(n[i].p[0],n[i].p[1]):"c"===n[i].t?c.bezierCurveTo(n[i].pts[0],n[i].pts[1],n[i].pts[2],n[i].pts[3],n[i].pts[4],n[i].pts[5]):c.closePath();"st"!==o&&"gs"!==o||(p.ctxStroke(),h.da&&c.setLineDash(this.dashResetter))}"st"!==o&&"gs"!==o&&this.globalData.renderer.ctxFill(h.r),p.restore()}},CVShapeElement.prototype.renderShape=function(t,e,r,i){var s,a;for(a=t,s=e.length-1;s>=0;s-=1)"tr"===e[s].ty?(a=r[s].transform,this.renderShapeTransform(t,a)):"sh"===e[s].ty||"el"===e[s].ty||"rc"===e[s].ty||"sr"===e[s].ty?this.renderPath(e[s],r[s]):"fl"===e[s].ty?this.renderFill(e[s],r[s],a):"st"===e[s].ty?this.renderStroke(e[s],r[s],a):"gf"===e[s].ty||"gs"===e[s].ty?this.renderGradientFill(e[s],r[s],a):"gr"===e[s].ty?this.renderShape(a,e[s].it,r[s].it):e[s].ty;i&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(t,e){if(this._isFirstFrame||e._mdf||t.transforms._mdf){var r,i,s,a=t.trNodes,n=e.paths,o=n._length;a.length=0;var h=t.transforms.finalTransform;for(s=0;s<o;s+=1){var l=n.shapes[s];if(l&&l.v){for(i=l._length,r=1;r<i;r+=1)1===r&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[r],l.v[r])});1===i&&a.push({t:"m",p:h.applyToPointArray(l.v[0][0],l.v[0][1],0)}),l.c&&i&&(a.push({t:"c",pts:h.applyToTriplePoints(l.o[r-1],l.i[0],l.v[0])}),a.push({t:"z"}))}}t.trNodes=a}},CVShapeElement.prototype.renderPath=function(t,e){if(!0!==t.hd&&t._shouldRender){var r,i=e.styledShapes.length;for(r=0;r<i;r+=1)this.renderStyledShape(e.styledShapes[r],e.sh)}},CVShapeElement.prototype.renderFill=function(t,e,r){var i=e.style;(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity)},CVShapeElement.prototype.renderGradientFill=function(t,e,r){var i,s=e.style;if(!s.grd||e.g._mdf||e.s._mdf||e.e._mdf||1!==t.t&&(e.h._mdf||e.a._mdf)){var a,n=this.globalData.canvasContext,o=e.s.v,h=e.e.v;if(1===t.t)i=n.createLinearGradient(o[0],o[1],h[0],h[1]);else{var l=Math.sqrt(Math.pow(o[0]-h[0],2)+Math.pow(o[1]-h[1],2)),p=Math.atan2(h[1]-o[1],h[0]-o[0]),c=e.h.v;c>=1?c=.99:c<=-1&&(c=-.99);var f=l*c,u=Math.cos(p+e.a.v)*f+o[0],d=Math.sin(p+e.a.v)*f+o[1];i=n.createRadialGradient(u,d,0,o[0],o[1],l)}var m=t.g.p,y=e.g.c,g=1;for(a=0;a<m;a+=1)e.g._hasOpacity&&e.g._collapsable&&(g=e.g.o[2*a+1]),i.addColorStop(y[4*a]/100,"rgba("+y[4*a+1]+","+y[4*a+2]+","+y[4*a+3]+","+g+")");s.grd=i}s.coOp=e.o.v*r.opacity},CVShapeElement.prototype.renderStroke=function(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||this._isFirstFrame)&&(i.da=s.dashArray,i.do=s.dashoffset[0]),(e.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=e.o.v*r.opacity),(e.w._mdf||this._isFirstFrame)&&(i.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var r=!1;t.sc&&(r=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var i,s,a,n,o,h,l,p,c,f,u,d,m=this.globalData.fontManager.getFontByName(t.f),y=t.l,g=this.mHelper;this.stroke=r,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,s=t.finalText.length;var v=this.data.singleShape,b=.001*t.tr*t.finalSize,_=0,P=0,S=!0,E=0;for(i=0;i<s;i+=1){n=(a=this.globalData.fontManager.getCharData(t.finalText[i],m.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily))&&a.data||{},g.reset(),v&&y[i].n&&(_=-b,P+=t.yOffset,P+=S?1:0,S=!1),c=(l=n.shapes?n.shapes[0].it:[]).length,g.scale(t.finalSize/100,t.finalSize/100),v&&this.applyTextPropertiesToMatrix(t,g,y[i].line,_,P),u=createSizedArray(c-1);var x=0;for(p=0;p<c;p+=1)if("sh"===l[p].ty){for(h=l[p].ks.k.i.length,f=l[p].ks.k,d=[],o=1;o<h;o+=1)1===o&&d.push(g.applyToX(f.v[0][0],f.v[0][1],0),g.applyToY(f.v[0][0],f.v[0][1],0)),d.push(g.applyToX(f.o[o-1][0],f.o[o-1][1],0),g.applyToY(f.o[o-1][0],f.o[o-1][1],0),g.applyToX(f.i[o][0],f.i[o][1],0),g.applyToY(f.i[o][0],f.i[o][1],0),g.applyToX(f.v[o][0],f.v[o][1],0),g.applyToY(f.v[o][0],f.v[o][1],0));d.push(g.applyToX(f.o[o-1][0],f.o[o-1][1],0),g.applyToY(f.o[o-1][0],f.o[o-1][1],0),g.applyToX(f.i[0][0],f.i[0][1],0),g.applyToY(f.i[0][0],f.i[0][1],0),g.applyToX(f.v[0][0],f.v[0][1],0),g.applyToY(f.v[0][0],f.v[0][1],0)),u[x]=d,x+=1}v&&(_+=y[i].l,_+=b),this.textSpans[E]?this.textSpans[E].elem=u:this.textSpans[E]={elem:u},E+=1}},CVTextElement.prototype.renderInnerContent=function(){var t,e,r,i,s,a;this.validateText(),this.canvasContext.font=this.values.fValue,this.globalData.renderer.ctxLineCap("butt"),this.globalData.renderer.ctxLineJoin("miter"),this.globalData.renderer.ctxMiterLimit(4),this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var n,o=this.textAnimator.renderedLetters,h=this.textProperty.currentData.l;e=h.length;var l,p,c=null,f=null,u=null,d=this.globalData.renderer;for(t=0;t<e;t+=1)if(!h[t].n){if((n=o[t])&&(d.save(),d.ctxTransform(n.p),d.ctxOpacity(n.o)),this.fill){for(n&&n.fc?c!==n.fc&&(d.ctxFillStyle(n.fc),c=n.fc):c!==this.values.fill&&(c=this.values.fill,d.ctxFillStyle(this.values.fill)),i=(l=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(p=l[r]).length,this.globalData.canvasContext.moveTo(p[0],p[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(p[s],p[s+1],p[s+2],p[s+3],p[s+4],p[s+5]);this.globalData.canvasContext.closePath(),d.ctxFill()}if(this.stroke){for(n&&n.sw?u!==n.sw&&(u=n.sw,d.ctxLineWidth(n.sw)):u!==this.values.sWidth&&(u=this.values.sWidth,d.ctxLineWidth(this.values.sWidth)),n&&n.sc?f!==n.sc&&(f=n.sc,d.ctxStrokeStyle(n.sc)):f!==this.values.stroke&&(f=this.values.stroke,d.ctxStrokeStyle(this.values.stroke)),i=(l=this.textSpans[t].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(a=(p=l[r]).length,this.globalData.canvasContext.moveTo(p[0],p[1]),s=2;s<a;s+=6)this.globalData.canvasContext.bezierCurveTo(p[s],p[s+1],p[s+2],p[s+3],p[s+4],p[s+5]);this.globalData.canvasContext.closePath(),d.ctxStroke()}n&&this.globalData.renderer.restore()}},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var t=createTag("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,r,i=t.getContext("2d"),s=this.img.width,a=this.img.height,n=s/a,o=this.assetData.w/this.assetData.h,h=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;n>o&&"xMidYMid slice"===h||n<o&&"xMidYMid slice"!==h?e=(r=a)*o:r=(e=s)/o,i.drawImage(this.img,(s-e)/2,(a-r)/2,e,r,0,0,this.assetData.w,this.assetData.h),this.img=t}},CVImageElement.prototype.renderInnerContent=function(){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){this.globalData.renderer.ctxFillStyle(this.data.sc),this.globalData.renderer.ctxFillRect(0,0,this.data.sw,this.data.sh)},extendPrototype([BaseRenderer],CanvasRendererBase),CanvasRendererBase.prototype.createShape=function(t){return new CVShapeElement(t,this.globalData,this)},CanvasRendererBase.prototype.createText=function(t){return new CVTextElement(t,this.globalData,this)},CanvasRendererBase.prototype.createImage=function(t){return new CVImageElement(t,this.globalData,this)},CanvasRendererBase.prototype.createSolid=function(t){return new CVSolidElement(t,this.globalData,this)},CanvasRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRendererBase.prototype.ctxTransform=function(t){1===t[0]&&0===t[1]&&0===t[4]&&1===t[5]&&0===t[12]&&0===t[13]||this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13])},CanvasRendererBase.prototype.ctxOpacity=function(t){this.canvasContext.globalAlpha*=t<0?0:t},CanvasRendererBase.prototype.ctxFillStyle=function(t){this.canvasContext.fillStyle=t},CanvasRendererBase.prototype.ctxStrokeStyle=function(t){this.canvasContext.strokeStyle=t},CanvasRendererBase.prototype.ctxLineWidth=function(t){this.canvasContext.lineWidth=t},CanvasRendererBase.prototype.ctxLineCap=function(t){this.canvasContext.lineCap=t},CanvasRendererBase.prototype.ctxLineJoin=function(t){this.canvasContext.lineJoin=t},CanvasRendererBase.prototype.ctxMiterLimit=function(t){this.canvasContext.miterLimit=t},CanvasRendererBase.prototype.ctxFill=function(t){this.canvasContext.fill(t)},CanvasRendererBase.prototype.ctxFillRect=function(t,e,r,i){this.canvasContext.fillRect(t,e,r,i)},CanvasRendererBase.prototype.ctxStroke=function(){this.canvasContext.stroke()},CanvasRendererBase.prototype.reset=function(){this.renderConfig.clearCanvas?this.contextData.reset():this.canvasContext.restore()},CanvasRendererBase.prototype.save=function(){this.canvasContext.save()},CanvasRendererBase.prototype.restore=function(t){this.renderConfig.clearCanvas?(t&&(this.globalData.blendMode="source-over"),this.contextData.restore(t)):this.canvasContext.restore()},CanvasRendererBase.prototype.configAnimation=function(t){if(this.animationItem.wrapper){this.animationItem.container=createTag("canvas");var e=this.animationItem.container.style;e.width="100%",e.height="100%";var r="0px 0px 0px";e.transformOrigin=r,e.mozTransformOrigin=r,e.webkitTransformOrigin=r,e["-webkit-transform"]=r,e.contentVisibility=this.renderConfig.contentVisibility,this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)}else this.canvasContext=this.renderConfig.context;this.contextData.setContext(this.canvasContext),this.data=t,this.layers=t.layers,this.transformCanvas={w:t.w,h:t.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(t,document.body),this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(t.layers.length),this.updateContainerSize()},CanvasRendererBase.prototype.updateContainerSize=function(t,e){var r,i,s,a;if(this.reset(),t?(r=t,i=e,this.canvasContext.canvas.width=r,this.canvasContext.canvas.height=i):(this.animationItem.wrapper&&this.animationItem.container?(r=this.animationItem.wrapper.offsetWidth,i=this.animationItem.wrapper.offsetHeight):(r=this.canvasContext.canvas.width,i=this.canvasContext.canvas.height),this.canvasContext.canvas.width=r*this.renderConfig.dpr,this.canvasContext.canvas.height=i*this.renderConfig.dpr),-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var n=this.renderConfig.preserveAspectRatio.split(" "),o=n[1]||"meet",h=n[0]||"xMidYMid",l=h.substr(0,4),p=h.substr(4);s=r/i,(a=this.transformCanvas.w/this.transformCanvas.h)>s&&"meet"===o||a<s&&"slice"===o?(this.transformCanvas.sx=r/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=r/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=i/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=i/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===l&&(a<s&&"meet"===o||a>s&&"slice"===o)?(r-this.transformCanvas.w*(i/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===l&&(a<s&&"meet"===o||a>s&&"slice"===o)?(r-this.transformCanvas.w*(i/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===p&&(a>s&&"meet"===o||a<s&&"slice"===o)?(i-this.transformCanvas.h*(r/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===p&&(a>s&&"meet"===o||a<s&&"slice"===o)?(i-this.transformCanvas.h*(r/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"===this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=r/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=i/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRendererBase.prototype.destroy=function(){var t;for(this.renderConfig.clearCanvas&&this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),t=(this.layers?this.layers.length:0)-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRendererBase.prototype.renderFrame=function(t,e){if((this.renderedFrame!==t||!0!==this.renderConfig.clearCanvas||e)&&!this.destroyed&&-1!==t){var r;this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||e,this.globalData.projectInterface.currentFrame=t;var i=this.layers.length;for(this.completeLayers||this.checkLayers(t),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&this.elements[r].prepareFrame(t-this.layers[r].st);if(this.globalData._mdf){for(!0===this.renderConfig.clearCanvas?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&this.elements[r].renderFrame();!0!==this.renderConfig.clearCanvas&&this.restore()}}},CanvasRendererBase.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!==this.layers[t].ty){var r=this.createItem(this.layers[t],this,this.globalData);e[t]=r,r.initExpressions()}},CanvasRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;)this.pendingElements.pop().checkParenting()},CanvasRendererBase.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRendererBase.prototype.show=function(){this.animationItem.container.style.display="block"},CVContextData.prototype.duplicate=function(){var t=2*this._length,e=0;for(e=this._length;e<t;e+=1)this.stack[e]=new CanvasContext;this._length=t},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.stack[this.cArrPos].opacity=1},CVContextData.prototype.restore=function(t){this.cArrPos-=1;var e,r=this.stack[this.cArrPos],i=r.transform,s=this.cTr.props;for(e=0;e<16;e+=1)s[e]=i[e];if(t){this.nativeContext.restore();var a=this.stack[this.cArrPos+1];this.appliedFillStyle=a.fillStyle,this.appliedStrokeStyle=a.strokeStyle,this.appliedLineWidth=a.lineWidth,this.appliedLineCap=a.lineCap,this.appliedLineJoin=a.lineJoin,this.appliedMiterLimit=a.miterLimit}this.nativeContext.setTransform(i[0],i[1],i[4],i[5],i[12],i[13]),(t||-1!==r.opacity&&this.currentOpacity!==r.opacity)&&(this.nativeContext.globalAlpha=r.opacity,this.currentOpacity=r.opacity),this.currentFillStyle=r.fillStyle,this.currentStrokeStyle=r.strokeStyle,this.currentLineWidth=r.lineWidth,this.currentLineCap=r.lineCap,this.currentLineJoin=r.lineJoin,this.currentMiterLimit=r.miterLimit},CVContextData.prototype.save=function(t){t&&this.nativeContext.save();var e=this.cTr.props;this._length<=this.cArrPos&&this.duplicate();var r,i=this.stack[this.cArrPos];for(r=0;r<16;r+=1)i.transform[r]=e[r];this.cArrPos+=1;var s=this.stack[this.cArrPos];s.opacity=i.opacity,s.fillStyle=i.fillStyle,s.strokeStyle=i.strokeStyle,s.lineWidth=i.lineWidth,s.lineCap=i.lineCap,s.lineJoin=i.lineJoin,s.miterLimit=i.miterLimit},CVContextData.prototype.setOpacity=function(t){this.stack[this.cArrPos].opacity=t},CVContextData.prototype.setContext=function(t){this.nativeContext=t},CVContextData.prototype.fillStyle=function(t){this.stack[this.cArrPos].fillStyle!==t&&(this.currentFillStyle=t,this.stack[this.cArrPos].fillStyle=t)},CVContextData.prototype.strokeStyle=function(t){this.stack[this.cArrPos].strokeStyle!==t&&(this.currentStrokeStyle=t,this.stack[this.cArrPos].strokeStyle=t)},CVContextData.prototype.lineWidth=function(t){this.stack[this.cArrPos].lineWidth!==t&&(this.currentLineWidth=t,this.stack[this.cArrPos].lineWidth=t)},CVContextData.prototype.lineCap=function(t){this.stack[this.cArrPos].lineCap!==t&&(this.currentLineCap=t,this.stack[this.cArrPos].lineCap=t)},CVContextData.prototype.lineJoin=function(t){this.stack[this.cArrPos].lineJoin!==t&&(this.currentLineJoin=t,this.stack[this.cArrPos].lineJoin=t)},CVContextData.prototype.miterLimit=function(t){this.stack[this.cArrPos].miterLimit!==t&&(this.currentMiterLimit=t,this.stack[this.cArrPos].miterLimit=t)},CVContextData.prototype.transform=function(t){this.transformMat.cloneFromProps(t);var e=this.cTr;this.transformMat.multiply(e),e.cloneFromProps(this.transformMat.props);var r=e.props;this.nativeContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13])},CVContextData.prototype.opacity=function(t){var e=this.stack[this.cArrPos].opacity;e*=t<0?0:t,this.stack[this.cArrPos].opacity!==e&&(this.currentOpacity!==t&&(this.nativeContext.globalAlpha=t,this.currentOpacity=t),this.stack[this.cArrPos].opacity=e)},CVContextData.prototype.fill=function(t){this.appliedFillStyle!==this.currentFillStyle&&(this.appliedFillStyle=this.currentFillStyle,this.nativeContext.fillStyle=this.appliedFillStyle),this.nativeContext.fill(t)},CVContextData.prototype.fillRect=function(t,e,r,i){this.appliedFillStyle!==this.currentFillStyle&&(this.appliedFillStyle=this.currentFillStyle,this.nativeContext.fillStyle=this.appliedFillStyle),this.nativeContext.fillRect(t,e,r,i)},CVContextData.prototype.stroke=function(){this.appliedStrokeStyle!==this.currentStrokeStyle&&(this.appliedStrokeStyle=this.currentStrokeStyle,this.nativeContext.strokeStyle=this.appliedStrokeStyle),this.appliedLineWidth!==this.currentLineWidth&&(this.appliedLineWidth=this.currentLineWidth,this.nativeContext.lineWidth=this.appliedLineWidth),this.appliedLineCap!==this.currentLineCap&&(this.appliedLineCap=this.currentLineCap,this.nativeContext.lineCap=this.appliedLineCap),this.appliedLineJoin!==this.currentLineJoin&&(this.appliedLineJoin=this.currentLineJoin,this.nativeContext.lineJoin=this.appliedLineJoin),this.appliedMiterLimit!==this.currentMiterLimit&&(this.appliedMiterLimit=this.currentMiterLimit,this.nativeContext.miterLimit=this.appliedMiterLimit),this.nativeContext.stroke()},extendPrototype([CanvasRendererBase,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var t,e=this.canvasContext;for(e.beginPath(),e.moveTo(0,0),e.lineTo(this.data.w,0),e.lineTo(this.data.w,this.data.h),e.lineTo(0,this.data.h),e.lineTo(0,0),e.clip(),t=this.layers.length-1;t>=0;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},CVCompElement.prototype.destroy=function(){var t;for(t=this.layers.length-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.layers=null,this.elements=null},CVCompElement.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},extendPrototype([CanvasRendererBase],CanvasRenderer),CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0!==this.data.bm&&this.setBlendMode()},renderElement:function(){var t=this.transformedElement?this.transformedElement.style:{};if(this.finalTransform._matMdf){var e=this.finalTransform.mat.toCSS();t.transform=e,t.webkitTransform=e}this.finalTransform._opMdf&&(t.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=BaseRenderer.prototype.buildElementParenting,extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var t;this.data.hasMask?((t=createNS("rect")).setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):((t=createTag("div")).style.width=this.data.sw+"px",t.style.height=this.data.sh+"px",t.style.backgroundColor=this.data.sc),this.layerElement.appendChild(t)},extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var t;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),t=this.svgElement;else{t=createNS("svg");var e=this.comp.data?this.comp.data:this.globalData.compSize;t.setAttribute("width",e.w),t.setAttribute("height",e.h),t.appendChild(this.shapesContainer),this.layerElement.appendChild(t)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=t},HShapeElement.prototype.getTransformedPoint=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e=t[r].mProps.v.applyToPointArray(e[0],e[1],0);return e},HShapeElement.prototype.calculateShapeBoundingBox=function(t,e){var r,i,s,a,n,o=t.sh.v,h=t.transformers,l=o._length;if(!(l<=1)){for(r=0;r<l-1;r+=1)i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[r+1]),n=this.getTransformedPoint(h,o.v[r+1]),this.checkBounds(i,s,a,n,e);o.c&&(i=this.getTransformedPoint(h,o.v[r]),s=this.getTransformedPoint(h,o.o[r]),a=this.getTransformedPoint(h,o.i[0]),n=this.getTransformedPoint(h,o.v[0]),this.checkBounds(i,s,a,n,e))}},HShapeElement.prototype.checkBounds=function(t,e,r,i,s){this.getBoundsOfCurve(t,e,r,i);var a=this.shapeBoundingBox;s.x=bmMin(a.left,s.x),s.xMax=bmMax(a.right,s.xMax),s.y=bmMin(a.top,s.y),s.yMax=bmMax(a.bottom,s.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(t,e,r,i){for(var s,a,n,o,h,l,p,c=[[t[0],i[0]],[t[1],i[1]]],f=0;f<2;++f)a=6*t[f]-12*e[f]+6*r[f],s=-3*t[f]+9*e[f]-9*r[f]+3*i[f],n=3*e[f]-3*t[f],a|=0,n|=0,0==(s|=0)&&0===a||(0===s?(o=-n/a)>0&&o<1&&c[f].push(this.calculateF(o,t,e,r,i,f)):(h=a*a-4*n*s)>=0&&((l=(-a+bmSqrt(h))/(2*s))>0&&l<1&&c[f].push(this.calculateF(l,t,e,r,i,f)),(p=(-a-bmSqrt(h))/(2*s))>0&&p<1&&c[f].push(this.calculateF(p,t,e,r,i,f))));this.shapeBoundingBox.left=bmMin.apply(null,c[0]),this.shapeBoundingBox.top=bmMin.apply(null,c[1]),this.shapeBoundingBox.right=bmMax.apply(null,c[0]),this.shapeBoundingBox.bottom=bmMax.apply(null,c[1])},HShapeElement.prototype.calculateF=function(t,e,r,i,s,a){return bmPow(1-t,3)*e[a]+3*bmPow(1-t,2)*t*r[a]+3*(1-t)*bmPow(t,2)*i[a]+bmPow(t,3)*s[a]},HShapeElement.prototype.calculateBoundingBox=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]&&t[r].sh?this.calculateShapeBoundingBox(t[r],e):t[r]&&t[r].it?this.calculateBoundingBox(t[r].it,e):t[r]&&t[r].style&&t[r].w&&this.expandStrokeBoundingBox(t[r].w,e)},HShapeElement.prototype.expandStrokeBoundingBox=function(t,e){var r=0;if(t.keyframes){for(var i=0;i<t.keyframes.length;i+=1){var s=t.keyframes[i].s;s>r&&(r=s)}r*=t.mult}else r=t.v*t.mult;e.x-=r,e.xMax+=r,e.y-=r,e.yMax+=r},HShapeElement.prototype.currentBoxContains=function(t){return this.currentBBox.x<=t.x&&this.currentBBox.y<=t.y&&this.currentBBox.width+this.currentBBox.x>=t.x+t.width&&this.currentBBox.height+this.currentBBox.y>=t.y+t.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var t=this.tempBoundingBox,e=999999;if(t.x=e,t.xMax=-e,t.y=e,t.yMax=-e,this.calculateBoundingBox(this.itemsData,t),t.width=t.xMax<t.x?0:t.xMax-t.x,t.height=t.yMax<t.y?0:t.yMax-t.y,this.currentBoxContains(t))return;var r=!1;if(this.currentBBox.w!==t.width&&(this.currentBBox.w=t.width,this.shapeCont.setAttribute("width",t.width),r=!0),this.currentBBox.h!==t.height&&(this.currentBBox.h=t.height,this.shapeCont.setAttribute("height",t.height),r=!0),r||this.currentBBox.x!==t.x||this.currentBBox.y!==t.y){this.currentBBox.w=t.width,this.currentBBox.h=t.height,this.currentBBox.x=t.x,this.currentBBox.y=t.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h);var i=this.shapeCont.style,s="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";i.transform=s,i.webkitTransform=s}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var t=createNS("g");this.maskedElement.appendChild(t),this.innerElem=t}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=this.innerElem.style,r=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)";e.fill=r,e.color=r,t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var i,s,a=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.finalSize+"px",e.lineHeight=t.finalSize+"px",a.fClass)this.innerElem.className=a.fClass;else{e.fontFamily=a.fFamily;var n=t.fWeight,o=t.fStyle;e.fontStyle=o,e.fontWeight=n}var h,l,p,c=t.l;s=c.length;var f,u=this.mHelper,d="",m=0;for(i=0;i<s;i+=1){if(this.globalData.fontManager.chars?(this.textPaths[m]?h=this.textPaths[m]:((h=createNS("path")).setAttribute("stroke-linecap",lineCapEnum[1]),h.setAttribute("stroke-linejoin",lineJoinEnum[2]),h.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[m]?p=(l=this.textSpans[m]).children[0]:((l=createTag("div")).style.lineHeight=0,(p=createNS("svg")).appendChild(h),styleDiv(l)))):this.isMasked?h=this.textPaths[m]?this.textPaths[m]:createNS("text"):this.textSpans[m]?(l=this.textSpans[m],h=this.textPaths[m]):(styleDiv(l=createTag("span")),styleDiv(h=createTag("span")),l.appendChild(h)),this.globalData.fontManager.chars){var y,g=this.globalData.fontManager.getCharData(t.finalText[i],a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(y=g?g.data:null,u.reset(),y&&y.shapes&&y.shapes.length&&(f=y.shapes[0].it,u.scale(t.finalSize/100,t.finalSize/100),d=this.createPathShape(u,f),h.setAttribute("d",d)),this.isMasked)this.innerElem.appendChild(h);else{if(this.innerElem.appendChild(l),y&&y.shapes){document.body.appendChild(p);var v=p.getBBox();p.setAttribute("width",v.width+2),p.setAttribute("height",v.height+2),p.setAttribute("viewBox",v.x-1+" "+(v.y-1)+" "+(v.width+2)+" "+(v.height+2));var b=p.style,_="translate("+(v.x-1)+"px,"+(v.y-1)+"px)";b.transform=_,b.webkitTransform=_,c[i].yOffset=v.y-1}else p.setAttribute("width",1),p.setAttribute("height",1);l.appendChild(p)}}else if(h.textContent=c[i].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked)this.innerElem.appendChild(h);else{this.innerElem.appendChild(l);var P=h.style,S="translate3d(0,"+-t.finalSize/1.2+"px,0)";P.transform=S,P.webkitTransform=S}this.isMasked?this.textSpans[m]=h:this.textSpans[m]=l,this.textSpans[m].style.display="block",this.textPaths[m]=h,m+=1}for(;m<this.textSpans.length;)this.textSpans[m].style.display="none",m+=1},HTextElement.prototype.renderInnerContent=function(){var t;if(this.validateText(),this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;if(this.isMasked&&this.finalTransform._matMdf){this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),t=this.svgElement.style;var e="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)";t.transform=e,t.webkitTransform=e}}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var r,i,s,a,n,o=0,h=this.textAnimator.renderedLetters,l=this.textProperty.currentData.l;for(i=l.length,r=0;r<i;r+=1)l[r].n?o+=1:(a=this.textSpans[r],n=this.textPaths[r],s=h[o],o+=1,s._mdf.m&&(this.isMasked?a.setAttribute("transform",s.m):(a.style.webkitTransform=s.m,a.style.transform=s.m)),a.style.opacity=s.o,s.sw&&s._mdf.sw&&n.setAttribute("stroke-width",s.sw),s.sc&&s._mdf.sc&&n.setAttribute("stroke",s.sc),s.fc&&s._mdf.fc&&(n.setAttribute("fill",s.fc),n.style.color=s.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var p=this.innerElem.getBBox();if(this.currentBBox.w!==p.width&&(this.currentBBox.w=p.width,this.svgElement.setAttribute("width",p.width)),this.currentBBox.h!==p.height&&(this.currentBBox.h=p.height,this.svgElement.setAttribute("height",p.height)),this.currentBBox.w!==p.width+2||this.currentBBox.h!==p.height+2||this.currentBBox.x!==p.x-1||this.currentBBox.y!==p.y-1){this.currentBBox.w=p.width+2,this.currentBBox.h=p.height+2,this.currentBBox.x=p.x-1,this.currentBBox.y=p.y-1,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),t=this.svgElement.style;var c="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";t.transform=c,t.webkitTransform=c}}}},extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var t,e,r,i,s=this.comp.threeDElements.length;for(t=0;t<s;t+=1)if("3d"===(e=this.comp.threeDElements[t]).type){r=e.perspectiveElem.style,i=e.container.style;var a=this.pe.v+"px",n="0px 0px 0px",o="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";r.perspective=a,r.webkitPerspective=a,i.transformOrigin=n,i.mozTransformOrigin=n,i.webkitTransformOrigin=n,r.transform=o,r.webkitTransform=o}},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,r=this._isFirstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;t<e;t+=1)r=this.hierarchy[t].finalTransform.mProp._mdf||r;if(r||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(t=e=this.hierarchy.length-1;t>=0;t-=1){var i=this.hierarchy[t].finalTransform.mProp;this.mat.translate(-i.p.v[0],-i.p.v[1],i.p.v[2]),this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),this.mat.scale(1/i.s.v[0],1/i.s.v[1],1/i.s.v[2]),this.mat.translate(i.a.v[0],i.a.v[1],i.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var s;s=this.p?[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var a=Math.sqrt(Math.pow(s[0],2)+Math.pow(s[1],2)+Math.pow(s[2],2)),n=[s[0]/a,s[1]/a,s[2]/a],o=Math.sqrt(n[2]*n[2]+n[0]*n[0]),h=Math.atan2(n[1],o),l=Math.atan2(n[0],-n[2]);this.mat.rotateY(l).rotateX(-h)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var p=!this._prevMat.equals(this.mat);if((p||this.pe._mdf)&&this.comp.threeDElements){var c,f,u;for(e=this.comp.threeDElements.length,t=0;t<e;t+=1)if("3d"===(c=this.comp.threeDElements[t]).type){if(p){var d=this.mat.toCSS();(u=c.container.style).transform=d,u.webkitTransform=d}this.pe._mdf&&((f=c.perspectiveElem.style).perspective=this.pe.v+"px",f.webkitPerspective=this.pe.v+"px")}this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null},extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(e),e.crossOrigin="anonymous",e.src=t,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)},extendPrototype([BaseRenderer],HybridRendererBase),HybridRendererBase.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;)this.pendingElements.pop().checkParenting()},HybridRendererBase.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){var i=this.layers[e];if(i.ddd&&this.supports3d)this.addTo3dContainer(r,e);else if(this.threeDElements)this.addTo3dContainer(r,e);else{for(var s,a,n=0;n<e;)this.elements[n]&&!0!==this.elements[n]&&this.elements[n].getBaseElement&&(a=this.elements[n],s=(this.layers[n].ddd?this.getThreeDContainerByPos(n):a.getBaseElement())||s),n+=1;s?i.ddd&&this.supports3d||this.layerElement.insertBefore(r,s):i.ddd&&this.supports3d||this.layerElement.appendChild(r)}}},HybridRendererBase.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.globalData,this):new SVGShapeElement(t,this.globalData,this)},HybridRendererBase.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.globalData,this):new SVGTextLottieElement(t,this.globalData,this)},HybridRendererBase.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.globalData,this),this.camera},HybridRendererBase.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.globalData,this):new IImageElement(t,this.globalData,this)},HybridRendererBase.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.globalData,this):new ISolidElement(t,this.globalData,this)},HybridRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,HybridRendererBase.prototype.getThreeDContainerByPos=function(t){for(var e=0,r=this.threeDElements.length;e<r;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}return null},HybridRendererBase.prototype.createThreeDContainer=function(t,e){var r,i,s=createTag("div");styleDiv(s);var a=createTag("div");if(styleDiv(a),"3d"===e){(r=s.style).width=this.globalData.compSize.w+"px",r.height=this.globalData.compSize.h+"px";var n="50% 50%";r.webkitTransformOrigin=n,r.mozTransformOrigin=n,r.transformOrigin=n;var o="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";(i=a.style).transform=o,i.webkitTransform=o}s.appendChild(a);var h={container:a,perspectiveElem:s,startPos:t,endPos:t,type:e};return this.threeDElements.push(h),h},HybridRendererBase.prototype.build3dContainers=function(){var t,e,r=this.layers.length,i="";for(t=0;t<r;t+=1)this.layers[t].ddd&&3!==this.layers[t].ty?("3d"!==i&&(i="3d",e=this.createThreeDContainer(t,"3d")),e.endPos=Math.max(e.endPos,t)):("2d"!==i&&(i="2d",e=this.createThreeDContainer(t,"2d")),e.endPos=Math.max(e.endPos,t));for(t=(r=this.threeDElements.length)-1;t>=0;t-=1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)},HybridRendererBase.prototype.addTo3dContainer=function(t,e){for(var r=0,i=this.threeDElements.length;r<i;){if(e<=this.threeDElements[r].endPos){for(var s,a=this.threeDElements[r].startPos;a<e;)this.elements[a]&&this.elements[a].getBaseElement&&(s=this.elements[a].getBaseElement()),a+=1;s?this.threeDElements[r].container.insertBefore(t,s):this.threeDElements[r].container.appendChild(t);break}r+=1}},HybridRendererBase.prototype.configAnimation=function(t){var e=createTag("div"),r=this.animationItem.wrapper,i=e.style;i.width=t.w+"px",i.height=t.h+"px",this.resizerElem=e,styleDiv(e),i.transformStyle="flat",i.mozTransformStyle="flat",i.webkitTransformStyle="flat",this.renderConfig.className&&e.setAttribute("class",this.renderConfig.className),r.appendChild(e),i.overflow="hidden";var s=createNS("svg");s.setAttribute("width","1"),s.setAttribute("height","1"),styleDiv(s),this.resizerElem.appendChild(s);var a=createNS("defs");s.appendChild(a),this.data=t,this.setupGlobalData(t,s),this.globalData.defs=a,this.layers=t.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRendererBase.prototype.destroy=function(){var t;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.animationItem.container=null,this.globalData.defs=null;var e=this.layers?this.layers.length:0;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRendererBase.prototype.updateContainerSize=function(){var t,e,r,i,s=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,n=s/a;this.globalData.compSize.w/this.globalData.compSize.h>n?(t=s/this.globalData.compSize.w,e=s/this.globalData.compSize.w,r=0,i=(a-this.globalData.compSize.h*(s/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,r=(s-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,i=0);var o=this.resizerElem.style;o.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+r+","+i+",0,1)",o.transform=o.webkitTransform},HybridRendererBase.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRendererBase.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRendererBase.prototype.show=function(){this.resizerElem.style.display="block"},HybridRendererBase.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,r=this.globalData.compSize.h,i=this.threeDElements.length;for(t=0;t<i;t+=1){var s=this.threeDElements[t].perspectiveElem.style;s.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(r,2))+"px",s.perspective=s.webkitPerspective}}},HybridRendererBase.prototype.searchExtraCompositions=function(t){var e,r=t.length,i=createTag("div");for(e=0;e<r;e+=1)if(t[e].xt){var s=this.createComp(t[e],i,this.globalData.comp,null);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},extendPrototype([HybridRendererBase,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(t,e){for(var r,i=0;i<e;)this.elements[i]&&this.elements[i].getBaseElement&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(t,r):this.layerElement.appendChild(t)},HCompElement.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)},extendPrototype([HybridRendererBase],HybridRenderer),HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)};var CompExpressionInterface=function(t){function e(e){for(var r=0,i=t.layers.length;r<i;){if(t.layers[r].nm===e||t.layers[r].ind===e)return t.elements[r].layerInterface;r+=1}return null}return Object.defineProperty(e,"_name",{value:t.data.nm}),e.layer=e,e.pixelAspect=1,e.height=t.data.h||t.globalData.compSize.h,e.width=t.data.w||t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e.displayStartTime=0,e.numLayers=t.layers.length,e};function _typeof$2(t){return _typeof$2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$2(t)}function seedRandom(t,e){var r=this,i=256,s=e.pow(i,6),a=e.pow(2,52),n=2*a,o=255;function h(t){var e,r=t.length,s=this,a=0,n=s.i=s.j=0,h=s.S=[];for(r||(t=[r++]);a<i;)h[a]=a++;for(a=0;a<i;a++)h[a]=h[n=o&n+t[a%r]+(e=h[a])],h[n]=e;s.g=function(t){for(var e,r=0,a=s.i,n=s.j,h=s.S;t--;)e=h[a=o&a+1],r=r*i+h[o&(h[a]=h[n=o&n+e])+(h[n]=e)];return s.i=a,s.j=n,r}}function l(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function p(t,e){var r,i=[],s=_typeof$2(t);if(e&&"object"==s)for(r in t)try{i.push(p(t[r],e-1))}catch(t){}return i.length?i:"string"==s?t:t+"\0"}function c(t,e){for(var r,i=t+"",s=0;s<i.length;)e[o&s]=o&(r^=19*e[o&s])+i.charCodeAt(s++);return f(e)}function f(t){return String.fromCharCode.apply(0,t)}e.seedrandom=function(o,u,d){var m=[],y=c(p((u=!0===u?{entropy:!0}:u||{}).entropy?[o,f(t)]:null===o?function(){try{var e=new Uint8Array(i);return(r.crypto||r.msCrypto).getRandomValues(e),f(e)}catch(e){var s=r.navigator,a=s&&s.plugins;return[+new Date,r,a,r.screen,f(t)]}}():o,3),m),g=new h(m),v=function(){for(var t=g.g(6),e=s,r=0;t<a;)t=(t+r)*i,e*=i,r=g.g(1);for(;t>=n;)t/=2,e/=2,r>>>=1;return(t+r)/e};return v.int32=function(){return 0|g.g(4)},v.quick=function(){return g.g(4)/4294967296},v.double=v,c(f(g.S),t),(u.pass||d||function(t,r,i,s){return s&&(s.S&&l(s,g),t.state=function(){return l(g,{})}),i?(e.random=t,r):t})(v,y,"global"in u?u.global:this==e,u.state)},c(e.random(),t)}function initialize$2(t){seedRandom([],t)}var propTypes={SHAPE:"shape"};function _typeof$1(t){return _typeof$1="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof$1(t)}var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null,XMLHttpRequest=null,fetch=null,frames=null,_lottieGlobal={};function resetFrame(){_lottieGlobal={}}function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function isNumerable(t,e){return"number"===t||e instanceof Number||"boolean"===t||"string"===t}function $bm_neg(t){var e=_typeof$1(t);if("number"===e||t instanceof Number||"boolean"===e)return-t;if($bm_isInstanceOfArray(t)){var r,i=t.length,s=[];for(r=0;r<i;r+=1)s[r]=-t[r];return s}return t.propType?t.v:-t}initialize$2(BMMath);var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(t,e){var r=_typeof$1(t),i=_typeof$1(e);if(isNumerable(r,t)&&isNumerable(i,e)||"string"===r||"string"===i)return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]+=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]+e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}var add=sum;function sub(t,e){var r=_typeof$1(t),i=_typeof$1(e);if(isNumerable(r,t)&&isNumerable(i,e))return"string"===r&&(t=parseInt(t,10)),"string"===i&&(e=parseInt(e,10)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]-=e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]-e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}function mul(t,e){var r,i,s,a=_typeof$1(t),n=_typeof$1(e);if(isNumerable(a,t)&&isNumerable(n,e))return t*e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]*e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t*e[i];return r}return 0}function div(t,e){var r,i,s,a=_typeof$1(t),n=_typeof$1(e);if(isNumerable(a,t)&&isNumerable(n,e))return t/e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]/e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t/e[i];return r}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t,10)),"string"==typeof e&&(e=parseInt(e,10)),t%e}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(t,e,r){if(e>r){var i=r;r=e,e=i}return Math.min(Math.max(t,e),r)}function radiansToDegrees(t){return t/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(t){return t*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);var r;e||(e=helperLengthArray);var i=Math.min(t.length,e.length),s=0;for(r=0;r<i;r+=1)s+=Math.pow(e[r]-t[r],2);return Math.sqrt(s)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,r,i=t[0],s=t[1],a=t[2],n=Math.max(i,s,a),o=Math.min(i,s,a),h=(n+o)/2;if(n===o)e=0,r=0;else{var l=n-o;switch(r=h>.5?l/(2-n-o):l/(n+o),n){case i:e=(s-a)/l+(s<a?6:0);break;case s:e=(a-i)/l+2;break;case a:e=(i-s)/l+4}e/=6}return[e,r,h,t[3]]}function hue2rgb(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function hslToRgb(t){var e,r,i,s=t[0],a=t[1],n=t[2];if(0===a)e=n,i=n,r=n;else{var o=n<.5?n*(1+a):n+a-n*a,h=2*n-o;e=hue2rgb(h,o,s+1/3),r=hue2rgb(h,o,s),i=hue2rgb(h,o,s-1/3)}return[e,r,i,t[3]]}function linear(t,e,r,i,s){if(void 0!==i&&void 0!==s||(i=e,s=r,e=0,r=1),r<e){var a=r;r=e,e=a}if(t<=e)return i;if(t>=r)return s;var n,o=r===e?0:(t-e)/(r-e);if(!i.length)return i+(s-i)*o;var h=i.length,l=createTypedArray("float32",h);for(n=0;n<h;n+=1)l[n]=i[n]+(s[n]-i[n])*o;return l}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var r,i=e.length;t||(t=createTypedArray("float32",i));var s=createTypedArray("float32",i),a=BMMath.random();for(r=0;r<i;r+=1)s[r]=t[r]+a*(e[r]-t[r]);return s}return void 0===t&&(t=0),t+BMMath.random()*(e-t)}function createPath(t,e,r,i){var s,a=t.length,n=shapePool.newElement();n.setPathData(!!i,a);var o,h,l=[0,0];for(s=0;s<a;s+=1)o=e&&e[s]?e[s]:l,h=r&&r[s]?r[s]:l,n.setTripleAt(t[s][0],t[s][1],h[0]+t[s][0],h[1]+t[s][1],o[0]+t[s][0],o[1]+t[s][1],s,!0);return n}function initiateExpression(elem,data,property){function noOp(t){return t}if(!elem.globalData.renderConfig.runExpressions)return noOp;var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,scoped_bm_rt,expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||!0!==this.data.hd,wiggle=function(t,e){var r,i,s=this.pv.length?this.pv.length:1,a=createTypedArray("float32",s),n=Math.floor(5*time);for(r=0,i=0;r<n;){for(i=0;i<s;i+=1)a[i]+=-e+2*e*BMMath.random();r+=1}var o=5*time,h=o-Math.floor(o),l=createTypedArray("float32",s);if(s>1){for(i=0;i<s;i+=1)l[i]=this.pv[i]+a[i]+(-e+2*e*BMMath.random())*h;return l}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,text,textIndex,textTotal,selectorValue;function lookAt(t,e){var r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],i=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads;return[-Math.atan2(r[1],r[2])/degToRads,i,0]}function easeOut(t,e,r,i,s){return applyEase(easeOutBez,t,e,r,i,s)}function easeIn(t,e,r,i,s){return applyEase(easeInBez,t,e,r,i,s)}function ease(t,e,r,i,s){return applyEase(easeInOutBez,t,e,r,i,s)}function applyEase(t,e,r,i,s,a){void 0===s?(s=r,a=i):e=(e-r)/(i-r),e>1?e=1:e<0&&(e=0);var n=t(e);if($bm_isInstanceOfArray(s)){var o,h=s.length,l=createTypedArray("float32",h);for(o=0;o<h;o+=1)l[o]=(a[o]-s[o])*n+s[o];return l}return(a-s)*n+s}function nearestKey(t){var e,r,i,s=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,(t*=elem.comp.globalData.frameRate)<data.k[0].t)r=1,i=data.k[0].t;else{for(e=0;e<s-1;e+=1){if(t===data.k[e].t){r=e+1,i=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(r=e+2,i=data.k[e+1].t):(r=e+1,i=data.k[e].t);break}}-1===r&&(r=e+1,i=data.k[e].t)}else r=0,i=0;var a={};return a.index=r,a.time=i/elem.comp.globalData.frameRate,a}function key(t){var e,r,i;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var s=Object.prototype.hasOwnProperty.call(data.k[t],"s")?data.k[t].s:data.k[t-1].e;for(i=s.length,r=0;r<i;r+=1)e[r]=s[r],e.value[r]=s[r];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(t,e){return"string"==typeof value?void 0===e?value.substring(t):value.substring(t,e):""}function substr(t,e){return"string"==typeof value?void 0===e?value.substr(t):value.substr(t,e):""}function posterizeTime(t){time=0===t?0:Math.floor(time*t)/t,value=valueAtTime(time)}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(t){return value=t,this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),$bm_transform=transform,transform&&(anchorPoint=transform.anchorPoint)),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,_needsRandom&&seedRandom(randSeed+time),needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,scoped_bm_rt=scoped_bm_rt.propType===propTypes.SHAPE?scoped_bm_rt.v:scoped_bm_rt)}return executeExpression.__preventDeadCodeRemoval=[$bm_transform,anchorPoint,time,velocity,inPoint,outPoint,width,height,name,loop_in,loop_out,smooth,toComp,fromCompToSurface,toWorld,fromWorld,mask,position,rotation,scale,thisComp,numKeys,active,wiggle,loopInDuration,loopOutDuration,comp,lookAt,easeOut,easeIn,ease,nearestKey,key,text,textIndex,textTotal,selectorValue,framesToTime,timeToFrames,sourceRectAtTime,substring,substr,posterizeTime,index,globalData],executeExpression}return ob.initiateExpression=initiateExpression,ob.__preventDeadCodeRemoval=[window,document,XMLHttpRequest,fetch,frames,$bm_neg,add,$bm_sum,$bm_sub,$bm_mul,$bm_div,$bm_mod,clamp,radians_to_degrees,degreesToRadians,degrees_to_radians,normalize,rgbToHsl,hslToRgb,linear,random,createPath,_lottieGlobal],ob.resetFrame=resetFrame,ob}(),Expressions=function(){var t={initExpressions:function(t){var e=0,r=[];t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer),t.renderer.globalData.pushExpression=function(){e+=1},t.renderer.globalData.popExpression=function(){0==(e-=1)&&function(){var t,e=r.length;for(t=0;t<e;t+=1)r[t].release();r.length=0}()},t.renderer.globalData.registerExpressionProperty=function(t){-1===r.indexOf(t)&&r.push(t)}}};return t.resetFrame=ExpressionManager.resetFrame,t}(),MaskManagerInterface=function(){function t(t,e){this._mask=t,this._data=e}return Object.defineProperty(t.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(t.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),100*this._mask.op.v}}),function(e){var r,i=createSizedArray(e.viewData.length),s=e.viewData.length;for(r=0;r<s;r+=1)i[r]=new t(e.viewData[r],e.masksProperties[r]);return function(t){for(r=0;r<s;){if(e.masksProperties[r].nm===t)return i[r];r+=1}return null}}}(),ExpressionPropertyInterface=function(){var t={pv:0,v:0,mult:1},e={pv:[0,0,0],v:[0,0,0],mult:1};function r(t,e,r){Object.defineProperty(t,"velocity",{get:function(){return e.getVelocityAtTime(e.comp.currentFrame)}}),t.numKeys=e.keyframes?e.keyframes.length:0,t.key=function(i){if(!t.numKeys)return 0;var s="";s="s"in e.keyframes[i-1]?e.keyframes[i-1].s:"e"in e.keyframes[i-2]?e.keyframes[i-2].e:e.keyframes[i-2].s;var a="unidimensional"===r?new Number(s):Object.assign({},s);return a.time=e.keyframes[i-1].t/e.elem.comp.globalData.frameRate,a.value="unidimensional"===r?s[0]:s,a},t.valueAtTime=e.getValueAtTime,t.speedAtTime=e.getSpeedAtTime,t.velocityAtTime=e.getVelocityAtTime,t.propertyGroup=e.propertyGroup}function i(){return t}return function(s){return s?"unidimensional"===s.propType?function(e){e&&"pv"in e||(e=t);var i=1/e.mult,s=e.pv*i,a=new Number(s);return a.value=s,r(a,e,"unidimensional"),function(){return e.k&&e.getValue(),s=e.v*i,a.value!==s&&((a=new Number(s)).value=s,r(a,e,"unidimensional")),a}}(s):function(t){t&&"pv"in t||(t=e);var i=1/t.mult,s=t.data&&t.data.l||t.pv.length,a=createTypedArray("float32",s),n=createTypedArray("float32",s);return a.value=n,r(a,t,"multidimensional"),function(){t.k&&t.getValue();for(var e=0;e<s;e+=1)n[e]=t.v[e]*i,a[e]=n[e];return a}}(s):i}}(),TransformExpressionInterface=function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity;default:return null}}var r,i,s,a;return Object.defineProperty(e,"rotation",{get:ExpressionPropertyInterface(t.r||t.rz)}),Object.defineProperty(e,"zRotation",{get:ExpressionPropertyInterface(t.rz||t.r)}),Object.defineProperty(e,"xRotation",{get:ExpressionPropertyInterface(t.rx)}),Object.defineProperty(e,"yRotation",{get:ExpressionPropertyInterface(t.ry)}),Object.defineProperty(e,"scale",{get:ExpressionPropertyInterface(t.s)}),t.p?a=ExpressionPropertyInterface(t.p):(r=ExpressionPropertyInterface(t.px),i=ExpressionPropertyInterface(t.py),t.pz&&(s=ExpressionPropertyInterface(t.pz))),Object.defineProperty(e,"position",{get:function(){return t.p?a():[r(),i(),s?s():0]}}),Object.defineProperty(e,"xPosition",{get:ExpressionPropertyInterface(t.px)}),Object.defineProperty(e,"yPosition",{get:ExpressionPropertyInterface(t.py)}),Object.defineProperty(e,"zPosition",{get:ExpressionPropertyInterface(t.pz)}),Object.defineProperty(e,"anchorPoint",{get:ExpressionPropertyInterface(t.a)}),Object.defineProperty(e,"opacity",{get:ExpressionPropertyInterface(t.o)}),Object.defineProperty(e,"skew",{get:ExpressionPropertyInterface(t.sk)}),Object.defineProperty(e,"skewAxis",{get:ExpressionPropertyInterface(t.sa)}),Object.defineProperty(e,"orientation",{get:ExpressionPropertyInterface(t.or)}),e},LayerExpressionInterface=function(){function t(t){var e=new Matrix;return void 0!==t?this._elem.finalTransform.mProp.getValueAtTime(t).clone(e):this._elem.finalTransform.mProp.applyToMatrix(e),e}function e(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.applyPoint(r,t)}function r(t,e){var r=this.getMatrix(e);return this.applyPoint(r,t)}function i(t,e){var r=this.getMatrix(e);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.invertPoint(r,t)}function s(t,e){var r=this.getMatrix(e);return this.invertPoint(r,t)}function a(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.applyToPointArray(e[0],e[1],e[2]||0)}function n(t,e){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)}return t.inversePoint(e)}function o(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}function h(){return[1,1,1,1]}return function(l){var p;function c(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return c.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return p;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return c.effect;case"ADBE Text Properties":return c.textInterface;default:return null}}c.getMatrix=t,c.invertPoint=n,c.applyPoint=a,c.toWorld=r,c.toWorldVec=e,c.fromWorld=s,c.fromWorldVec=i,c.toComp=r,c.fromComp=o,c.sampleImage=h,c.sourceRectAtTime=l.sourceRectAtTime.bind(l),c._elem=l;var f=getDescriptor(p=TransformExpressionInterface(l.finalTransform.mProp),"anchorPoint");return Object.defineProperties(c,{hasParent:{get:function(){return l.hierarchy.length}},parent:{get:function(){return l.hierarchy[0].layerInterface}},rotation:getDescriptor(p,"rotation"),scale:getDescriptor(p,"scale"),position:getDescriptor(p,"position"),opacity:getDescriptor(p,"opacity"),anchorPoint:f,anchor_point:f,transform:{get:function(){return p}},active:{get:function(){return l.isInRange}}}),c.startTime=l.data.st,c.index=l.data.ind,c.source=l.data.refId,c.height=0===l.data.ty?l.data.h:100,c.width=0===l.data.ty?l.data.w:100,c.inPoint=l.data.ip/l.comp.globalData.frameRate,c.outPoint=l.data.op/l.comp.globalData.frameRate,c._name=l.data.nm,c.registerMaskInterface=function(t){c.mask=new MaskManagerInterface(t,l)},c.registerEffectsInterface=function(t){c.effect=t},c}}(),propertyGroupFactory=function(t,e){return function(r){return(r=void 0===r?1:r)<=0?t:e(r-1)}},PropertyInterface=function(t,e){var r={_name:t};return function(t){return(t=void 0===t?1:t)<=0?r:e(t-1)}},EffectsExpressionInterface=function(){var t={createEffectsInterface:function(t,r){if(t.effectsManager){var i,s=[],a=t.data.ef,n=t.effectsManager.effectElements.length;for(i=0;i<n;i+=1)s.push(e(a[i],t.effectsManager.effectElements[i],r,t));var o=t.data.ef||[],h=function(t){for(i=0,n=o.length;i<n;){if(t===o[i].nm||t===o[i].mn||t===o[i].ix)return s[i];i+=1}return null};return Object.defineProperty(h,"numProperties",{get:function(){return o.length}}),h}return null}};function e(t,i,s,a){function n(e){for(var r=t.ef,i=0,s=r.length;i<s;){if(e===r[i].nm||e===r[i].mn||e===r[i].ix)return 5===r[i].ty?l[i]:l[i]();i+=1}throw new Error}var o,h=propertyGroupFactory(n,s),l=[],p=t.ef.length;for(o=0;o<p;o+=1)5===t.ef[o].ty?l.push(e(t.ef[o],i.effectElements[o],i.effectElements[o].propertyGroup,a)):l.push(r(i.effectElements[o],t.ef[o].ty,a,h));return"ADBE Color Control"===t.mn&&Object.defineProperty(n,"color",{get:function(){return l[0]()}}),Object.defineProperties(n,{numProperties:{get:function(){return t.np}},_name:{value:t.nm},propertyGroup:{value:h}}),n.enabled=0!==t.en,n.active=n.enabled,n}function r(t,e,r,i){var s=ExpressionPropertyInterface(t.p);return t.p.setGroupProperty&&t.p.setGroupProperty(PropertyInterface("",i)),function(){return 10===e?r.comp.compInterface(t.p.v):s()}}return t}(),ShapePathInterface=function(t,e,r){var i=e.sh;function s(t){return"Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t?s.path:null}var a=propertyGroupFactory(s,r);return i.setGroupProperty(PropertyInterface("Path",a)),Object.defineProperties(s,{path:{get:function(){return i.k&&i.getValue(),i}},shape:{get:function(){return i.k&&i.getValue(),i}},_name:{value:t.nm},ix:{value:t.ix},propertyIndex:{value:t.ix},mn:{value:t.mn},propertyGroup:{value:r}}),s},ShapeExpressionInterface=function(){function t(t,n,f){var u,d=[],m=t?t.length:0;for(u=0;u<m;u+=1)"gr"===t[u].ty?d.push(e(t[u],n[u],f)):"fl"===t[u].ty?d.push(r(t[u],n[u],f)):"st"===t[u].ty?d.push(s(t[u],n[u],f)):"tm"===t[u].ty?d.push(a(t[u],n[u],f)):"tr"===t[u].ty||("el"===t[u].ty?d.push(o(t[u],n[u],f)):"sr"===t[u].ty?d.push(h(t[u],n[u],f)):"sh"===t[u].ty?d.push(ShapePathInterface(t[u],n[u],f)):"rc"===t[u].ty?d.push(l(t[u],n[u],f)):"rd"===t[u].ty?d.push(p(t[u],n[u],f)):"rp"===t[u].ty?d.push(c(t[u],n[u],f)):"gf"===t[u].ty?d.push(i(t[u],n[u],f)):d.push((t[u],n[u],function(){return null})));return d}function e(e,r,i){var s=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return s.content;default:return s.transform}};s.propertyGroup=propertyGroupFactory(s,i);var a=function(e,r,i){var s,a=function(t){for(var e=0,r=s.length;e<r;){if(s[e]._name===t||s[e].mn===t||s[e].propertyIndex===t||s[e].ix===t||s[e].ind===t)return s[e];e+=1}return"number"==typeof t?s[t-1]:null};a.propertyGroup=propertyGroupFactory(a,i),s=t(e.it,r.it,a.propertyGroup),a.numProperties=s.length;var o=n(e.it[e.it.length-1],r.it[r.it.length-1],a.propertyGroup);return a.transform=o,a.propertyIndex=e.cix,a._name=e.nm,a}(e,r,s.propertyGroup),o=n(e.it[e.it.length-1],r.it[r.it.length-1],s.propertyGroup);return s.content=a,s.transform=o,Object.defineProperty(s,"_name",{get:function(){return e.nm}}),s.numProperties=e.np,s.propertyIndex=e.ix,s.nm=e.nm,s.mn=e.mn,s}function r(t,e,r){function i(t){return"Color"===t||"color"===t?i.color:"Opacity"===t||"opacity"===t?i.opacity:null}return Object.defineProperties(i,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",r)),e.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function i(t,e,r){function i(t){return"Start Point"===t||"start point"===t?i.startPoint:"End Point"===t||"end point"===t?i.endPoint:"Opacity"===t||"opacity"===t?i.opacity:null}return Object.defineProperties(i,{startPoint:{get:ExpressionPropertyInterface(e.s)},endPoint:{get:ExpressionPropertyInterface(e.e)},opacity:{get:ExpressionPropertyInterface(e.o)},type:{get:function(){return"a"}},_name:{value:t.nm},mn:{value:t.mn}}),e.s.setGroupProperty(PropertyInterface("Start Point",r)),e.e.setGroupProperty(PropertyInterface("End Point",r)),e.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function s(t,e,r){var i,s=propertyGroupFactory(l,r),a=propertyGroupFactory(h,s);function n(r){Object.defineProperty(h,t.d[r].nm,{get:ExpressionPropertyInterface(e.d.dataProps[r].p)})}var o=t.d?t.d.length:0,h={};for(i=0;i<o;i+=1)n(i),e.d.dataProps[i].p.setGroupProperty(a);function l(t){return"Color"===t||"color"===t?l.color:"Opacity"===t||"opacity"===t?l.opacity:"Stroke Width"===t||"stroke width"===t?l.strokeWidth:null}return Object.defineProperties(l,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},strokeWidth:{get:ExpressionPropertyInterface(e.w)},dash:{get:function(){return h}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(PropertyInterface("Color",s)),e.o.setGroupProperty(PropertyInterface("Opacity",s)),e.w.setGroupProperty(PropertyInterface("Stroke Width",s)),l}function a(t,e,r){function i(e){return e===t.e.ix||"End"===e||"end"===e?i.end:e===t.s.ix?i.start:e===t.o.ix?i.offset:null}var s=propertyGroupFactory(i,r);return i.propertyIndex=t.ix,e.s.setGroupProperty(PropertyInterface("Start",s)),e.e.setGroupProperty(PropertyInterface("End",s)),e.o.setGroupProperty(PropertyInterface("Offset",s)),i.propertyIndex=t.ix,i.propertyGroup=r,Object.defineProperties(i,{start:{get:ExpressionPropertyInterface(e.s)},end:{get:ExpressionPropertyInterface(e.e)},offset:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm}}),i.mn=t.mn,i}function n(t,e,r){function i(e){return t.a.ix===e||"Anchor Point"===e?i.anchorPoint:t.o.ix===e||"Opacity"===e?i.opacity:t.p.ix===e||"Position"===e?i.position:t.r.ix===e||"Rotation"===e||"ADBE Vector Rotation"===e?i.rotation:t.s.ix===e||"Scale"===e?i.scale:t.sk&&t.sk.ix===e||"Skew"===e?i.skew:t.sa&&t.sa.ix===e||"Skew Axis"===e?i.skewAxis:null}var s=propertyGroupFactory(i,r);return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity",s)),e.transform.mProps.p.setGroupProperty(PropertyInterface("Position",s)),e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point",s)),e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale",s)),e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation",s)),e.transform.mProps.sk&&(e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew",s)),e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle",s))),e.transform.op.setGroupProperty(PropertyInterface("Opacity",s)),Object.defineProperties(i,{opacity:{get:ExpressionPropertyInterface(e.transform.mProps.o)},position:{get:ExpressionPropertyInterface(e.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(e.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(e.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(e.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(e.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(e.transform.mProps.sa)},_name:{value:t.nm}}),i.ty="tr",i.mn=t.mn,i.propertyGroup=r,i}function o(t,e,r){function i(e){return t.p.ix===e?i.position:t.s.ix===e?i.size:null}var s=propertyGroupFactory(i,r);i.propertyIndex=t.ix;var a="tm"===e.sh.ty?e.sh.prop:e.sh;return a.s.setGroupProperty(PropertyInterface("Size",s)),a.p.setGroupProperty(PropertyInterface("Position",s)),Object.defineProperties(i,{size:{get:ExpressionPropertyInterface(a.s)},position:{get:ExpressionPropertyInterface(a.p)},_name:{value:t.nm}}),i.mn=t.mn,i}function h(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.pt.ix===e?i.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?i.outerRadius:t.os.ix===e?i.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?i.innerRoundness:null:i.innerRadius}var s=propertyGroupFactory(i,r),a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.or.setGroupProperty(PropertyInterface("Outer Radius",s)),a.os.setGroupProperty(PropertyInterface("Outer Roundness",s)),a.pt.setGroupProperty(PropertyInterface("Points",s)),a.p.setGroupProperty(PropertyInterface("Position",s)),a.r.setGroupProperty(PropertyInterface("Rotation",s)),t.ir&&(a.ir.setGroupProperty(PropertyInterface("Inner Radius",s)),a.is.setGroupProperty(PropertyInterface("Inner Roundness",s))),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(a.p)},rotation:{get:ExpressionPropertyInterface(a.r)},points:{get:ExpressionPropertyInterface(a.pt)},outerRadius:{get:ExpressionPropertyInterface(a.or)},outerRoundness:{get:ExpressionPropertyInterface(a.os)},innerRadius:{get:ExpressionPropertyInterface(a.ir)},innerRoundness:{get:ExpressionPropertyInterface(a.is)},_name:{value:t.nm}}),i.mn=t.mn,i}function l(t,e,r){function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.roundness:t.s.ix===e||"Size"===e||"ADBE Vector Rect Size"===e?i.size:null}var s=propertyGroupFactory(i,r),a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.p.setGroupProperty(PropertyInterface("Position",s)),a.s.setGroupProperty(PropertyInterface("Size",s)),a.r.setGroupProperty(PropertyInterface("Rotation",s)),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(a.p)},roundness:{get:ExpressionPropertyInterface(a.r)},size:{get:ExpressionPropertyInterface(a.s)},_name:{value:t.nm}}),i.mn=t.mn,i}function p(t,e,r){function i(e){return t.r.ix===e||"Round Corners 1"===e?i.radius:null}var s=propertyGroupFactory(i,r),a=e;return i.propertyIndex=t.ix,a.rd.setGroupProperty(PropertyInterface("Radius",s)),Object.defineProperties(i,{radius:{get:ExpressionPropertyInterface(a.rd)},_name:{value:t.nm}}),i.mn=t.mn,i}function c(t,e,r){function i(e){return t.c.ix===e||"Copies"===e?i.copies:t.o.ix===e||"Offset"===e?i.offset:null}var s=propertyGroupFactory(i,r),a=e;return i.propertyIndex=t.ix,a.c.setGroupProperty(PropertyInterface("Copies",s)),a.o.setGroupProperty(PropertyInterface("Offset",s)),Object.defineProperties(i,{copies:{get:ExpressionPropertyInterface(a.c)},offset:{get:ExpressionPropertyInterface(a.o)},_name:{value:t.nm}}),i.mn=t.mn,i}return function(e,r,i){var s;function a(t){if("number"==typeof t)return 0===(t=void 0===t?1:t)?i:s[t-1];for(var e=0,r=s.length;e<r;){if(s[e]._name===t)return s[e];e+=1}return null}return a.propertyGroup=propertyGroupFactory(a,(function(){return i})),s=t(e,r,a.propertyGroup),a.numProperties=s.length,a._name="Contents",a}}(),TextExpressionInterface=function(t){var e;function r(t){return"ADBE Text Document"===t?r.sourceText:null}return Object.defineProperty(r,"sourceText",{get:function(){t.textProperty.getValue();var r=t.textProperty.currentData.t;return e&&r===e.value||((e=new String(r)).value=r||new String(r),Object.defineProperty(e,"style",{get:function(){return{fillColor:t.textProperty.currentData.fc}}})),e}}),r};function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}var FootageInterface=(dataInterfaceFactory=function(t){function e(t){return"Outline"===t?e.outlineInterface():null}return e._name="Outline",e.outlineInterface=function(t){var e="",r=t.getFootageData();function i(t){if(r[t])return e=t,"object"===_typeof(r=r[t])?i:r;var s=t.indexOf(e);if(-1!==s){var a=parseInt(t.substr(s+e.length),10);return"object"===_typeof(r=r[a])?i:r}return""}return function(){return e="",r=t.getFootageData(),i}}(t),e},function(t){function e(t){return"Data"===t?e.dataInterface:null}return e._name="Data",e.dataInterface=dataInterfaceFactory(t),e}),dataInterfaceFactory,interfaces={layer:LayerExpressionInterface,effects:EffectsExpressionInterface,comp:CompExpressionInterface,shape:ShapeExpressionInterface,text:TextExpressionInterface,footage:FootageInterface};function getInterface(t){return interfaces[t]||null}var expressionHelpers={searchExpressions:function(t,e,r){e.x&&(r.k=!0,r.x=!0,r.initiateExpression=ExpressionManager.initiateExpression,r.effectsSequence.push(r.initiateExpression(t,e,r).bind(r)))},getSpeedAtTime:function(t){var e=this.getValueAtTime(t),r=this.getValueAtTime(t+-.01),i=0;if(e.length){var s;for(s=0;s<e.length;s+=1)i+=Math.pow(r[s]-e[s],2);i=100*Math.sqrt(i)}else i=0;return i},getVelocityAtTime:function(t){if(void 0!==this.vel)return this.vel;var e,r,i=-.001,s=this.getValueAtTime(t),a=this.getValueAtTime(t+i);if(s.length)for(e=createTypedArray("float32",s.length),r=0;r<s.length;r+=1)e[r]=(a[r]-s[r])/i;else e=(a-s)/i;return e},getValueAtTime:function(t){return t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<t?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(t,this._cachingAtTime),this._cachingAtTime.lastFrame=t),this._cachingAtTime.value},getStaticValueAtTime:function(){return this.pv},setGroupProperty:function(t){this.propertyGroup=t}};function addPropertyDecorator(){function t(t,e,r){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[l.length-1].t;if(h<=p)return this.pv;if(r?s=p-(i=e?Math.abs(p-this.elem.comp.globalData.frameRate*e):Math.max(0,p-this.elem.data.ip)):((!e||e>l.length-1)&&(e=l.length-1),i=p-(s=l[l.length-1-e].t)),"pingpong"===t){if(Math.floor((h-s)/i)%2!=0)return this.getValueAtTime((i-(h-s)%i+s)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var c=this.getValueAtTime(s/this.comp.globalData.frameRate,0),f=this.getValueAtTime(p/this.comp.globalData.frameRate,0),u=this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0),d=Math.floor((h-s)/i);if(this.pv.length){for(n=(o=new Array(c.length)).length,a=0;a<n;a+=1)o[a]=(f[a]-c[a])*d+u[a];return o}return(f-c)*d+u}if("continue"===t){var m=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(m.length)).length,a=0;a<n;a+=1)o[a]=m[a]+(m[a]-y[a])*((h-p)/this.comp.globalData.frameRate)/5e-4;return o}return m+(h-p)/.001*(m-y)}}return this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0)}function e(t,e,r){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,l=this.keyframes,p=l[0].t;if(h>=p)return this.pv;if(r?s=p+(i=e?Math.abs(this.elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-p)):((!e||e>l.length-1)&&(e=l.length-1),i=(s=l[e].t)-p),"pingpong"===t){if(Math.floor((p-h)/i)%2==0)return this.getValueAtTime(((p-h)%i+p)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var c=this.getValueAtTime(p/this.comp.globalData.frameRate,0),f=this.getValueAtTime(s/this.comp.globalData.frameRate,0),u=this.getValueAtTime((i-(p-h)%i+p)/this.comp.globalData.frameRate,0),d=Math.floor((p-h)/i)+1;if(this.pv.length){for(n=(o=new Array(c.length)).length,a=0;a<n;a+=1)o[a]=u[a]-(f[a]-c[a])*d;return o}return u-(f-c)*d}if("continue"===t){var m=this.getValueAtTime(p/this.comp.globalData.frameRate,0),y=this.getValueAtTime((p+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(m.length)).length,a=0;a<n;a+=1)o[a]=m[a]+(m[a]-y[a])*(p-h)/.001;return o}return m+(m-y)*(p-h)/.001}}return this.getValueAtTime((i-((p-h)%i+p))/this.comp.globalData.frameRate,0)}function r(t,e){if(!this.k)return this.pv;if(t=.5*(t||.4),(e=Math.floor(e||5))<=1)return this.pv;var r,i,s=this.comp.renderedFrame/this.comp.globalData.frameRate,a=s-t,n=e>1?(s+t-a)/(e-1):1,o=0,h=0;for(r=this.pv.length?createTypedArray("float32",this.pv.length):0;o<e;){if(i=this.getValueAtTime(a+o*n),this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]+=i[h];else r+=i;o+=1}if(this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]/=e;else r/=e;return r}function i(t){this._transformCachingAtTime||(this._transformCachingAtTime={v:new Matrix});var e=this._transformCachingAtTime.v;if(e.cloneFromProps(this.pre.props),this.appliedTransformations<1){var r=this.a.getValueAtTime(t);e.translate(-r[0]*this.a.mult,-r[1]*this.a.mult,r[2]*this.a.mult)}if(this.appliedTransformations<2){var i=this.s.getValueAtTime(t);e.scale(i[0]*this.s.mult,i[1]*this.s.mult,i[2]*this.s.mult)}if(this.sk&&this.appliedTransformations<3){var s=this.sk.getValueAtTime(t),a=this.sa.getValueAtTime(t);e.skewFromAxis(-s*this.sk.mult,a*this.sa.mult)}if(this.r&&this.appliedTransformations<4){var n=this.r.getValueAtTime(t);e.rotate(-n*this.r.mult)}else if(!this.r&&this.appliedTransformations<4){var o=this.rz.getValueAtTime(t),h=this.ry.getValueAtTime(t),l=this.rx.getValueAtTime(t),p=this.or.getValueAtTime(t);e.rotateZ(-o*this.rz.mult).rotateY(h*this.ry.mult).rotateX(l*this.rx.mult).rotateZ(-p[2]*this.or.mult).rotateY(p[1]*this.or.mult).rotateX(p[0]*this.or.mult)}if(this.data.p&&this.data.p.s){var c=this.px.getValueAtTime(t),f=this.py.getValueAtTime(t);if(this.data.p.z){var u=this.pz.getValueAtTime(t);e.translate(c*this.px.mult,f*this.py.mult,-u*this.pz.mult)}else e.translate(c*this.px.mult,f*this.py.mult,0)}else{var d=this.p.getValueAtTime(t);e.translate(d[0]*this.p.mult,d[1]*this.p.mult,-d[2]*this.p.mult)}return e}function s(){return this.v.clone(new Matrix)}var a=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,r){var n=a(t,e,r);return n.dynamicProperties.length?n.getValueAtTime=i.bind(n):n.getValueAtTime=s.bind(n),n.setGroupProperty=expressionHelpers.setGroupProperty,n};var n=PropertyFactory.getProp;PropertyFactory.getProp=function(i,s,a,o,h){var l=n(i,s,a,o,h);l.kf?l.getValueAtTime=expressionHelpers.getValueAtTime.bind(l):l.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(l),l.setGroupProperty=expressionHelpers.setGroupProperty,l.loopOut=t,l.loopIn=e,l.smooth=r,l.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(l),l.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(l),l.numKeys=1===s.a?s.k.length:0,l.propertyIndex=s.ix;var p=0;return 0!==a&&(p=createTypedArray("float32",1===s.a?s.k[0].s.length:s.k.length)),l._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:p},expressionHelpers.searchExpressions(i,s,l),l.k&&h.addDynamicProperty(l),l};var o=ShapePropertyFactory.getConstructorFunction(),h=ShapePropertyFactory.getKeyframedConstructorFunction();function l(){}l.prototype={vertices:function(t,e){this.k&&this.getValue();var r,i=this.v;void 0!==e&&(i=this.getValueAtTime(e,0));var s=i._length,a=i[t],n=i.v,o=createSizedArray(s);for(r=0;r<s;r+=1)o[r]="i"===t||"o"===t?[a[r][0]-n[r][0],a[r][1]-n[r][1]]:[a[r][0],a[r][1]];return o},points:function(t){return this.vertices("v",t)},inTangents:function(t){return this.vertices("i",t)},outTangents:function(t){return this.vertices("o",t)},isClosed:function(){return this.v.c},pointOnPath:function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var i,s=this._segmentsLength,a=s.lengths,n=s.totalLength*t,o=0,h=a.length,l=0;o<h;){if(l+a[o].addedLength>n){var p=o,c=r.c&&o===h-1?0:o+1,f=(n-l)/a[o].addedLength;i=bez.getPointInSegment(r.v[p],r.v[c],r.o[p],r.i[c],f,a[o]);break}l+=a[o].addedLength,o+=1}return i||(i=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),i},vectorOnPath:function(t,e,r){1==t?t=this.v.c:0==t&&(t=.999);var i=this.pointOnPath(t,e),s=this.pointOnPath(t+.001,e),a=s[0]-i[0],n=s[1]-i[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2));return 0===o?[0,0]:"tangent"===r?[a/o,n/o]:[-n/o,a/o]},tangentOnPath:function(t,e){return this.vectorOnPath(t,e,"tangent")},normalOnPath:function(t,e){return this.vectorOnPath(t,e,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([l],o),extendPrototype([l],h),h.prototype.getValueAtTime=function(t){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shapePool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<t?this._caching.lastIndex:0,this._cachingAtTime.lastTime=t,this.interpolateShape(t,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue},h.prototype.initiateExpression=ExpressionManager.initiateExpression;var p=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,r,i,s){var a=p(t,e,r,i,s);return a.propertyIndex=e.ix,a.lock=!1,3===r?expressionHelpers.searchExpressions(t,e.pt,a):4===r&&expressionHelpers.searchExpressions(t,e.ks,a),a.k&&t.addDynamicProperty(a),a}}function initialize$1(){addPropertyDecorator()}function addDecorator(){TextProperty.prototype.getExpressionValue=function(t,e){var r=this.calculateExpression(e);if(t.t!==r){var i={};return this.copyData(i,t),i.t=r.toString(),i.__complete=!1,i}return t},TextProperty.prototype.searchProperty=function(){var t=this.searchKeyframes(),e=this.searchExpressions();return this.kf=t||e,this.kf},TextProperty.prototype.searchExpressions=function(){return this.data.d.x?(this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0):null}}function initialize(){addDecorator()}function SVGComposableEffect(){}SVGComposableEffect.prototype={createMergeNode:function(t,e){var r,i,s=createNS("feMerge");for(s.setAttribute("result",t),i=0;i<e.length;i+=1)(r=createNS("feMergeNode")).setAttribute("in",e[i]),s.appendChild(r),s.appendChild(r);return s}};var linearFilterValue="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";function SVGTintFilter(t,e,r,i,s){this.filterManager=e;var a=createNS("feColorMatrix");a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","linearRGB"),a.setAttribute("values",linearFilterValue+" 1 0"),this.linearFilter=a,a.setAttribute("result",i+"_tint_1"),t.appendChild(a),(a=createNS("feColorMatrix")).setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),a.setAttribute("result",i+"_tint_2"),t.appendChild(a),this.matrixFilter=a;var n=this.createMergeNode(i,[s,i+"_tint_1",i+"_tint_2"]);t.appendChild(n)}function SVGFillFilter(t,e,r,i){this.filterManager=e;var s=createNS("feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),s.setAttribute("result",i),t.appendChild(s),this.matrixFilter=s}function SVGStrokeEffect(t,e,r){this.initialized=!1,this.filterManager=e,this.elem=r,this.paths=[]}function SVGTritoneFilter(t,e,r,i){this.filterManager=e;var s=createNS("feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","linearRGB"),s.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),t.appendChild(s);var a=createNS("feComponentTransfer");a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("result",i),this.matrixFilter=a;var n=createNS("feFuncR");n.setAttribute("type","table"),a.appendChild(n),this.feFuncR=n;var o=createNS("feFuncG");o.setAttribute("type","table"),a.appendChild(o),this.feFuncG=o;var h=createNS("feFuncB");h.setAttribute("type","table"),a.appendChild(h),this.feFuncB=h,t.appendChild(a)}function SVGProLevelsFilter(t,e,r,i){this.filterManager=e;var s=this.filterManager.effectElements,a=createNS("feComponentTransfer");(s[10].p.k||0!==s[10].p.v||s[11].p.k||1!==s[11].p.v||s[12].p.k||1!==s[12].p.v||s[13].p.k||0!==s[13].p.v||s[14].p.k||1!==s[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",a)),(s[17].p.k||0!==s[17].p.v||s[18].p.k||1!==s[18].p.v||s[19].p.k||1!==s[19].p.v||s[20].p.k||0!==s[20].p.v||s[21].p.k||1!==s[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",a)),(s[24].p.k||0!==s[24].p.v||s[25].p.k||1!==s[25].p.v||s[26].p.k||1!==s[26].p.v||s[27].p.k||0!==s[27].p.v||s[28].p.k||1!==s[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",a)),(s[31].p.k||0!==s[31].p.v||s[32].p.k||1!==s[32].p.v||s[33].p.k||1!==s[33].p.v||s[34].p.k||0!==s[34].p.v||s[35].p.k||1!==s[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",a)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(a.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(a)),(s[3].p.k||0!==s[3].p.v||s[4].p.k||1!==s[4].p.v||s[5].p.k||1!==s[5].p.v||s[6].p.k||0!==s[6].p.v||s[7].p.k||1!==s[7].p.v)&&((a=createNS("feComponentTransfer")).setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("result",i),t.appendChild(a),this.feFuncRComposed=this.createFeFunc("feFuncR",a),this.feFuncGComposed=this.createFeFunc("feFuncG",a),this.feFuncBComposed=this.createFeFunc("feFuncB",a))}function SVGDropShadowEffect(t,e,r,i,s){var a=e.container.globalData.renderConfig.filterSize,n=e.data.fs||a;t.setAttribute("x",n.x||a.x),t.setAttribute("y",n.y||a.y),t.setAttribute("width",n.width||a.width),t.setAttribute("height",n.height||a.height),this.filterManager=e;var o=createNS("feGaussianBlur");o.setAttribute("in","SourceAlpha"),o.setAttribute("result",i+"_drop_shadow_1"),o.setAttribute("stdDeviation","0"),this.feGaussianBlur=o,t.appendChild(o);var h=createNS("feOffset");h.setAttribute("dx","25"),h.setAttribute("dy","0"),h.setAttribute("in",i+"_drop_shadow_1"),h.setAttribute("result",i+"_drop_shadow_2"),this.feOffset=h,t.appendChild(h);var l=createNS("feFlood");l.setAttribute("flood-color","#00ff00"),l.setAttribute("flood-opacity","1"),l.setAttribute("result",i+"_drop_shadow_3"),this.feFlood=l,t.appendChild(l);var p=createNS("feComposite");p.setAttribute("in",i+"_drop_shadow_3"),p.setAttribute("in2",i+"_drop_shadow_2"),p.setAttribute("operator","in"),p.setAttribute("result",i+"_drop_shadow_4"),t.appendChild(p);var c=this.createMergeNode(i,[i+"_drop_shadow_4",s]);t.appendChild(c)}extendPrototype([SVGComposableEffect],SVGTintFilter),SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.linearFilter.setAttribute("values",linearFilterValue+" "+i+" 0"),this.matrixFilter.setAttribute("values",r[0]-e[0]+" 0 0 0 "+e[0]+" "+(r[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 1 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGStrokeEffect.prototype.initialize=function(){var t,e,r,i,s=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,r=0):i=1+(r=this.filterManager.effectElements[0].p.v-1),(e=createNS("g")).setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1);r<i;r+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:r});if(3===this.filterManager.effectElements[10].p.v){var a=createNS("mask"),n=createElementID();a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=createNS("g");for(o.setAttribute("mask","url("+getLocationHref()+"#"+n+")");s[0];)o.appendChild(s[0]);this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(s=this.elem.layerElement.children||this.elem.layerElement.childNodes;s.length;)this.elem.layerElement.removeChild(s[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){var e;this.initialized||this.initialize();var r,i,s=this.paths.length;for(e=0;e<s;e+=1)if(-1!==this.paths[e].m&&(r=this.elem.maskManager.viewData[this.paths[e].m],i=this.paths[e].p,(t||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute("d",r.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=.01*Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),o=.01*Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),h=i.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),c=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01,f=Math.floor(p/c);for(l=0;l<f;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01;i.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p._mdf)){var u=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bmFloor(255*u[0])+","+bmFloor(255*u[1])+","+bmFloor(255*u[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,s=i[0]+" "+r[0]+" "+e[0],a=i[1]+" "+r[1]+" "+e[1],n=i[2]+" "+r[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",s),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var r=createNS(t);return r.setAttribute("type","table"),e.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(t,e,r,i,s){for(var a,n,o=0,h=Math.min(t,e),l=Math.max(t,e),p=Array.call(null,{length:256}),c=0,f=s-i,u=e-t;o<=256;)n=(a=o/256)<=h?u<0?s:i:a>=l?u<0?i:s:i+f*Math.pow((a-t)/u,1/r),p[c]=n,c+=1,o+=256/255;return p.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,r=this.filterManager.effectElements;this.feFuncRComposed&&(t||r[3].p._mdf||r[4].p._mdf||r[5].p._mdf||r[6].p._mdf||r[7].p._mdf)&&(e=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||r[10].p._mdf||r[11].p._mdf||r[12].p._mdf||r[13].p._mdf||r[14].p._mdf)&&(e=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||r[17].p._mdf||r[18].p._mdf||r[19].p._mdf||r[20].p._mdf||r[21].p._mdf)&&(e=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||r[24].p._mdf||r[25].p._mdf||r[26].p._mdf||r[27].p._mdf||r[28].p._mdf)&&(e=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||r[31].p._mdf||r[32].p._mdf||r[33].p._mdf||r[34].p._mdf||r[35].p._mdf)&&(e=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},extendPrototype([SVGComposableEffect],SVGDropShadowEffect),SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var r=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*degToRads,s=r*Math.cos(i),a=r*Math.sin(i);this.feOffset.setAttribute("dx",s),this.feOffset.setAttribute("dy",a)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(t,e,r){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=r,r.matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGGaussianBlurEffect(t,e,r,i){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var s=createNS("feGaussianBlur");s.setAttribute("result",i),t.appendChild(s),this.feGaussianBlur=s}function TransformEffect(){}function SVGTransformEffect(t,e){this.init(e)}function CVTransformEffect(t){this.init(t)}return SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,r=_svgMatteSymbols.length;e<r;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var r=t.layerElement.parentNode;if(r){for(var i,s=r.children,a=0,n=s.length;a<n&&s[a]!==t.layerElement;)a+=1;a<=n-2&&(i=s[a+1]);var o=createNS("use");o.setAttribute("href","#"+e),i?r.insertBefore(o,i):r.appendChild(o)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var r=createElementID(),i=createNS("mask");i.setAttribute("id",e.layerId),i.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var s=t.globalData.defs;s.appendChild(i);var a=createNS("symbol");a.setAttribute("id",r),this.replaceInParent(e,r),a.appendChild(e.layerElement),s.appendChild(a);var n=createNS("use");n.setAttribute("href","#"+r),i.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,r=0,i=e.length;r<i;)e[r]&&e[r].data.ind===t&&this.setElementAsMask(this.elem,e[r]),r+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGGaussianBlurEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=.3*this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=3==r?0:e,s=2==r?0:e;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+s);var a=1==this.filterManager.effectElements[2].p.v?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",a)}},TransformEffect.prototype.init=function(t){this.effectsManager=t,this.type=effectTypes.TRANSFORM_EFFECT,this.matrix=new Matrix,this.opacity=-1,this._mdf=!1,this._opMdf=!1},TransformEffect.prototype.renderFrame=function(t){if(this._opMdf=!1,this._mdf=!1,t||this.effectsManager._mdf){var e=this.effectsManager.effectElements,r=e[0].p.v,i=e[1].p.v,s=1===e[2].p.v,a=e[3].p.v,n=s?a:e[4].p.v,o=e[5].p.v,h=e[6].p.v,l=e[7].p.v;this.matrix.reset(),this.matrix.translate(-r[0],-r[1],r[2]),this.matrix.scale(.01*n,.01*a,1),this.matrix.rotate(-l*degToRads),this.matrix.skewFromAxis(-o*degToRads,(h+90)*degToRads),this.matrix.translate(i[0],i[1],0),this._mdf=!0,this.opacity!==e[8].p.v&&(this.opacity=e[8].p.v,this._opMdf=!0)}},extendPrototype([TransformEffect],SVGTransformEffect),extendPrototype([TransformEffect],CVTransformEffect),registerRenderer("canvas",CanvasRenderer),registerRenderer("html",HybridRenderer),registerRenderer("svg",SVGRenderer),ShapeModifiers.registerModifier("tm",TrimModifier),ShapeModifiers.registerModifier("pb",PuckerAndBloatModifier),ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeModifiers.registerModifier("rd",RoundCornersModifier),ShapeModifiers.registerModifier("zz",ZigZagModifier),ShapeModifiers.registerModifier("op",OffsetPathModifier),setExpressionsPlugin(Expressions),setExpressionInterfaces(getInterface),initialize$1(),initialize(),registerEffect$1(20,SVGTintFilter,!0),registerEffect$1(21,SVGFillFilter,!0),registerEffect$1(22,SVGStrokeEffect,!1),registerEffect$1(23,SVGTritoneFilter,!0),registerEffect$1(24,SVGProLevelsFilter,!0),registerEffect$1(25,SVGDropShadowEffect,!0),registerEffect$1(28,SVGMatte3Effect,!1),registerEffect$1(29,SVGGaussianBlurEffect,!0),registerEffect$1(35,SVGTransformEffect,!1),registerEffect(35,CVTransformEffect),lottie},module.exports=factory())})(lottie$1,lottie$1.exports);var lottie=lottie$1.exports,_templateObject$1,styles=r$3(_templateObject$1||(_templateObject$1=_taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n\n  :host {\n    --lottie-player-toolbar-height: 35px;\n    --lottie-player-toolbar-background-color: transparent;\n    --lottie-player-toolbar-icon-color: #999;\n    --lottie-player-toolbar-icon-hover-color: #222;\n    --lottie-player-toolbar-icon-active-color: #555;\n    --lottie-player-seeker-track-color: #ccc;\n    --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);\n    --lottie-player-seeker-display: block;\n\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n\n  .animation {\n    width: 100%;\n    height: 100%;\n    display: flex;\n  }\n  .animation.controls {\n    height: calc(100% - 35px);\n  }\n\n  .toolbar {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    background-color: var(--lottie-player-toolbar-background-color);\n    margin: 0 5px;\n    height: 35px;\n  }\n\n  .toolbar button {\n    cursor: pointer;\n    fill: var(--lottie-player-toolbar-icon-color);\n    display: flex;\n    background: none;\n    border: 0;\n    padding: 0;\n    outline: none;\n    height: 100%;\n  }\n\n  .toolbar button:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button.active {\n    fill: var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button.active:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button:focus {\n    outline: 1px dotted var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button svg {\n  }\n\n  .toolbar button.disabled svg {\n    display: none;\n  }\n\n  .seeker {\n    -webkit-appearance: none;\n    width: 95%;\n    outline: none;\n    background-color: var(--lottie-player-toolbar-background-color);\n    display: var(--lottie-player-seeker-display);\n  }\n\n  .seeker::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-webkit-slider-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5px;\n  }\n  .seeker:focus::-webkit-slider-runnable-track {\n    background: #999;\n  }\n  .seeker::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-moz-range-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  .seeker::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-thumb {\n    border: 0;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker:focus::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n  }\n  .seeker:focus::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n  }\n\n  .error {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    align-items: center;\n  }\n"]))),name="@lottiefiles/lottie-player",version="2.0.12",description="Lottie animation and Telegram Sticker player web components.",main="dist/lottie-player.js",module="dist/lottie-player.esm.js",types="dist/lottie-player.d.ts",homepage="https://lottiefiles.com/web-player",repository="https://github.com/LottieFiles/lottie-player.git",bugs="https://github.com/LottieFiles/lottie-player/issues",author="Jawish Hameed <jawish@lottiefiles.com>",license="MIT",scripts={start:"npm run cleanup && rollup -c --watch",build:"npm run cleanup && npm run build-lottie && npm run build-tgs","build-with-coverage":"npm run cleanup && CODE_COVERAGE=true npm run build-lottie && CODE_COVERAGE=true npm run build-tgs","build-lottie":"rollup -c ","build-tgs":"rollup -c rollup-tgs.config.js","watch-lottie":"npm run cleanup && rollup -c --watch","watch-tgs":"npm run cleanup && rollup -c rollup-tgs.config.js --watch",cleanup:"shx rm -rf dist && shx mkdir dist",release:"semantic-release",lint:"eslint . --ext .ts,.tsx,.js","lint:fix":"eslint . --ext .ts,.tsx,.js --fix",serve:"node ./cypress/pages/server.js -p 8000 &","start-cypress":"yarn run cypress run && npx nyc report --reporter=text-summary","run-tests":"yarn run build-with-coverage && yarn run serve && yarn run start-cypress","postrun-tests":"kill $(lsof -t -i:8000)"},dependencies={"@types/pako":"^1.0.1",lit:"^2.1.2","lottie-web":"^5.12.2",pako:"^2.0.4","resize-observer-polyfill":"^1.5.1"},devDependencies={"@babel/core":"^7.11.0","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-proposal-decorators":"^7.10.5","@babel/preset-env":"^7.11.0","@babel/preset-typescript":"^7.10.4","@commitlint/cli":"^16.1.0","@commitlint/config-conventional":"^16.0.0","@cypress/code-coverage":"^3.9.12","@istanbuljs/nyc-config-typescript":"^1.0.2","@rollup/plugin-babel":"^5.1.0","@rollup/plugin-commonjs":"^21.0.1","@rollup/plugin-json":"^6.1.0","@rollup/plugin-node-resolve":"^13.1.3","@semantic-release/changelog":"^6.0.1","@semantic-release/commit-analyzer":"^9.0.2","@semantic-release/git":"^10.0.1","@semantic-release/github":"^8.0.2","@semantic-release/npm":"^9.0.0","@semantic-release/release-notes-generator":"^10.0.3","babel-eslint":"^10.1.0","babel-plugin-istanbul":"^6.1.1",cypress:"^9.2.1","cypress-real-events":"^1.6.0",eslint:"^7.27.0","eslint-plugin-only-warn":"^1.0.2",fastify:"^3.25.3","fastify-static":"^4.5.0",husky:">=4",lerna:"^4.0.0","lint-staged":"^12.3.2","parcel-bundler":"^1.12.4",prettier:"^2.3.0",rollup:"^2.23.0","rollup-plugin-copy":"^3.3.0","rollup-plugin-filesize":"^9.0.2","rollup-plugin-serve":"^1.0.3","rollup-plugin-terser":"^7.0.2","rollup-plugin-typescript2":"^0.31.1","rollup-plugin-uglify":"^6.0.4","rollup-plugin-visualizer":"^5.5.4","semantic-release":"^19.0.2",shx:"^0.3.4","source-map-support":"^0.5.21","ts-node":"^10.4.0",typescript:"^4.5.5","unicode-canonical-property-names-ecmascript":"^2.0.0"},files=["dist/"],keywords=["lottie","animation","lottiefiles","web component","component","lit-element","player","telegram sticker","tgs"],browserslist=["> 3%"],publishConfig={access:"public",provenance:!0},husky={hooks:{"commit-msg":"commitlint -E HUSKY_GIT_PARAMS","pre-commit":"lint-staged"}},nyc={extends:"@istanbuljs/nyc-config-typescript",all:!0},packageManager="yarn@1.22.19+sha1.4ba7fc5c6e704fce2066ecbfb0b0d8976fe62447",_package={name:name,version:version,description:description,main:main,module:module,types:types,homepage:homepage,repository:repository,bugs:bugs,author:author,license:license,scripts:scripts,dependencies:dependencies,devDependencies:devDependencies,files:files,keywords:keywords,browserslist:browserslist,publishConfig:publishConfig,husky:husky,"lint-staged":{"src/**/*.{css,scss,md}":["prettier --write"],"src/**/*.{js,jsx,ts,tsx,json}":["eslint . --ext .ts,.tsx,.js --fix"]},nyc:nyc,packageManager:packageManager},_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,PlayerState,PlayMode,PlayerEvents;function parseSrc(t){if("object"==typeof t)return t;try{return JSON.parse(t)}catch(e){return new URL(t,window.location.href).toString()}}function isLottie(t){return["v","ip","op","layers","fr","w","h"].every((e=>Object.prototype.hasOwnProperty.call(t,e)))}function fromURL(t){return _fromURL.apply(this,arguments)}function _fromURL(){return(_fromURL=_asyncToGenerator((function*(t){if("string"!=typeof t)throw new Error("The url value must be a string");var e;try{var r=new URL(t),i=yield fetch(r.toString());e=yield i.json()}catch(t){throw new Error("An error occurred while trying to load the Lottie file from URL")}return e}))).apply(this,arguments)}!function(t){t.Destroyed="destroyed",t.Error="error",t.Frozen="frozen",t.Loading="loading",t.Paused="paused",t.Playing="playing",t.Stopped="stopped"}(PlayerState||(PlayerState={})),function(t){t.Bounce="bounce",t.Normal="normal"}(PlayMode||(PlayMode={})),function(t){t.Complete="complete",t.Destroyed="destroyed",t.Error="error",t.Frame="frame",t.Freeze="freeze",t.Load="load",t.Loop="loop",t.Pause="pause",t.Play="play",t.Ready="ready",t.Rendered="rendered",t.Stop="stop"}(PlayerEvents||(PlayerEvents={}));var LottiePlayer=class extends s{constructor(){super(...arguments),this.autoplay=!1,this.background="transparent",this.controls=!1,this.currentState=PlayerState.Loading,this.description="Lottie animation",this.direction=1,this.disableCheck=!1,this.disableShadowDOM=!1,this.hover=!1,this.intermission=1,this.loop=!1,this.mode=PlayMode.Normal,this.preserveAspectRatio="xMidYMid meet",this.renderer="svg",this.speed=1,this._io=void 0,this._counter=1,this._onVisibilityChange=()=>{!0===document.hidden&&this.currentState===PlayerState.Playing?this.freeze():this.currentState===PlayerState.Frozen&&this.play()}}load(t){var e=this;return _asyncToGenerator((function*(){var r={container:e.container,loop:!1,autoplay:!1,renderer:e.renderer,rendererSettings:Object.assign({preserveAspectRatio:e.preserveAspectRatio,clearCanvas:!1,progressiveLoad:!0,hideOnTransparent:!0},e.viewBoxSize&&{viewBoxSize:e.viewBoxSize})};try{var i=parseSrc(t),s={},a="string"==typeof i?"path":"animationData";e._lottie&&e._lottie.destroy(),e.webworkers&&lottie$1.exports.useWebWorker(!0),e._lottie=lottie$1.exports.loadAnimation(Object.assign(Object.assign({},r),{[a]:i})),e._attachEventListeners(),e.disableCheck||("path"===a?(s=yield fromURL(i),a="animationData"):s=i,isLottie(s)||(e.currentState=PlayerState.Error,e.dispatchEvent(new CustomEvent(PlayerEvents.Error))))}catch(t){e.currentState=PlayerState.Error,e.dispatchEvent(new CustomEvent(PlayerEvents.Error))}}))()}getLottie(){return this._lottie}getVersions(){return{lottieWebVersion:dependencies["lottie-web"],lottiePlayerVersion:version}}play(){this._lottie&&(this._lottie.play(),this.currentState=PlayerState.Playing,this.dispatchEvent(new CustomEvent(PlayerEvents.Play)))}pause(){this._lottie&&(this._lottie.pause(),this.currentState=PlayerState.Paused,this.dispatchEvent(new CustomEvent(PlayerEvents.Pause)))}stop(){this._lottie&&(this._counter=1,this._lottie.stop(),this.currentState=PlayerState.Stopped,this.dispatchEvent(new CustomEvent(PlayerEvents.Stop)))}destroy(){this._lottie&&(this._lottie.destroy(),this._lottie=null,this.currentState=PlayerState.Destroyed,this.dispatchEvent(new CustomEvent(PlayerEvents.Destroyed)),this.remove())}seek(t){if(this._lottie){var e=/^(\d+)(%?)$/.exec(t.toString());if(e){var r="%"===e[2]?this._lottie.totalFrames*Number(e[1])/100:Number(e[1]);this.seeker=r,this.currentState===PlayerState.Playing?this._lottie.goToAndPlay(r,!0):(this._lottie.goToAndStop(r,!0),this._lottie.pause())}}}snapshot(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.shadowRoot){var e=this.shadowRoot.querySelector(".animation svg"),r=(new XMLSerializer).serializeToString(e);if(t){var i=document.createElement("a");i.href="data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(r)),i.download="download_".concat(this.seeker,".svg"),document.body.appendChild(i),i.click(),document.body.removeChild(i)}return r}}setSpeed(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._lottie&&this._lottie.setSpeed(t)}setDirection(t){this._lottie&&this._lottie.setDirection(t)}setLooping(t){this._lottie&&(this.loop=t,this._lottie.loop=t)}togglePlay(){return this.currentState===PlayerState.Playing?this.pause():this.play()}toggleLooping(){this.setLooping(!this.loop)}resize(){this._lottie&&this._lottie.resize()}static get styles(){return styles}disconnectedCallback(){this.isConnected||(this._io&&(this._io.disconnect(),this._io=void 0),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.destroy())}render(){var t=this.controls?"main controls":"main",e=this.controls?"animation controls":"animation";return $(_templateObject||(_templateObject=_taggedTemplateLiteral([' <div\n      id="animation-container"\n      class=','\n      lang="en"\n      aria-label=','\n      role="img"\n    >\n      <div\n        id="animation"\n        class=','\n        style="background:',';"\n      >\n        ',"\n      </div>\n      ","\n    </div>"])),t,this.description,e,this.background,this.currentState===PlayerState.Error?$(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<div class="error">âš ï¸</div>']))):void 0,this.controls&&!this.disableShadowDOM?this.renderControls():void 0)}createRenderRoot(){return this.disableShadowDOM&&(this.style.display="block"),this.disableShadowDOM?this:super.createRenderRoot()}firstUpdated(){"IntersectionObserver"in window&&(this._io=new IntersectionObserver((t=>{t[0].isIntersecting?this.currentState===PlayerState.Frozen&&this.play():this.currentState===PlayerState.Playing&&this.freeze()})),this._io.observe(this.container)),void 0!==document.hidden&&document.addEventListener("visibilitychange",this._onVisibilityChange),this.src&&this.load(this.src),this.dispatchEvent(new CustomEvent(PlayerEvents.Rendered))}renderControls(){var t=this.currentState===PlayerState.Playing,e=this.currentState===PlayerState.Paused,r=this.currentState===PlayerState.Stopped;return $(_templateObject3||(_templateObject3=_taggedTemplateLiteral(['\n      <div\n        id="lottie-controls"\n        aria-label="lottie-animation-controls"\n        class="toolbar"\n      >\n        <button\n          id="lottie-play-button"\n          @click=',"\n          class=",'\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="play-pause"\n        >\n          ','\n        </button>\n        <button\n          id="lottie-stop-button"\n          @click=',"\n          class=",'\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="stop"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path d="M6 6h12v12H6V6z" />\n          </svg>\n        </button>\n        <input\n          id="lottie-seeker-input"\n          class="seeker"\n          type="range"\n          min="0"\n          step="1"\n          max="100"\n          .value=',"\n          @input=","\n          @mousedown=","\n          @mouseup=",'\n          aria-valuemin="1"\n          aria-valuemax="100"\n          role="slider"\n          aria-valuenow=','\n          tabindex="0"\n          aria-label="lottie-seek-input"\n        />\n        <button\n          id="lottie-loop-toggle"\n          @click=',"\n          class=",'\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="loop-toggle"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path\n              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"\n            />\n          </svg>\n        </button>\n      </div>\n    '])),this.togglePlay,t||e?"active":"",$(t?_templateObject4||(_templateObject4=_taggedTemplateLiteral(['<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path\n                  d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"\n                />\n              </svg>'])):_templateObject5||(_templateObject5=_taggedTemplateLiteral(['<svg\n                width="24"\n                height="24"\n                aria-hidden="true"\n                focusable="false"\n              >\n                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />\n              </svg>']))),this.stop,r?"active":"",this.seeker,this._handleSeekChange,(()=>{this._prevState=this.currentState,this.freeze()}),(()=>{this._prevState===PlayerState.Playing&&this.play()}),this.seeker,this.toggleLooping,this.loop?"active":"")}_handleSeekChange(t){if(this._lottie&&!isNaN(t.target.value)){var e=t.target.value/100*this._lottie.totalFrames;this.seek(e)}}_attachEventListeners(){this._lottie.addEventListener("enterFrame",(()=>{this.seeker=this._lottie.currentFrame/this._lottie.totalFrames*100,this.dispatchEvent(new CustomEvent(PlayerEvents.Frame,{detail:{frame:this._lottie.currentFrame,seeker:this.seeker}}))})),this._lottie.addEventListener("complete",(()=>{if(this.currentState===PlayerState.Playing){if(!this.loop||this.count&&this._counter>=this.count){if(this.dispatchEvent(new CustomEvent(PlayerEvents.Complete)),this.mode!==PlayMode.Bounce)return;if(0===this._lottie.currentFrame)return}this.mode===PlayMode.Bounce?(this.count&&(this._counter+=.5),setTimeout((()=>{this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),this.currentState===PlayerState.Playing&&(this._lottie.setDirection(-1*this._lottie.playDirection),this._lottie.play())}),this.intermission)):(this.count&&(this._counter+=1),window.setTimeout((()=>{this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)),this.currentState===PlayerState.Playing&&(-1===this.direction?(this.seek("99%"),this.play()):(this._lottie.stop(),this._lottie.play()))}),this.intermission))}else this.dispatchEvent(new CustomEvent(PlayerEvents.Complete))})),this._lottie.addEventListener("DOMLoaded",(()=>{this.setSpeed(this.speed),this.setDirection(this.direction),this.autoplay&&(-1===this.direction&&this.seek("100%"),this.play()),this.dispatchEvent(new CustomEvent(PlayerEvents.Ready))})),this._lottie.addEventListener("data_ready",(()=>{this.dispatchEvent(new CustomEvent(PlayerEvents.Load))})),this._lottie.addEventListener("data_failed",(()=>{this.currentState=PlayerState.Error,this.dispatchEvent(new CustomEvent(PlayerEvents.Error))})),this.container.addEventListener("mouseenter",(()=>{this.hover&&this.currentState!==PlayerState.Playing&&this.play()})),this.container.addEventListener("mouseleave",(()=>{this.hover&&this.currentState===PlayerState.Playing&&this.stop()}))}freeze(){this._lottie&&(this._lottie.pause(),this.currentState=PlayerState.Frozen,this.dispatchEvent(new CustomEvent(PlayerEvents.Freeze)))}};__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"autoplay",void 0),__decorate([e$5({type:String,reflect:!0})],LottiePlayer.prototype,"background",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"controls",void 0),__decorate([e$5({type:Number})],LottiePlayer.prototype,"count",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"currentState",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"description",void 0),__decorate([e$5({type:Number})],LottiePlayer.prototype,"direction",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"disableCheck",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"disableShadowDOM",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"hover",void 0),__decorate([e$5()],LottiePlayer.prototype,"intermission",void 0),__decorate([e$5({type:Boolean,reflect:!0})],LottiePlayer.prototype,"loop",void 0),__decorate([e$5()],LottiePlayer.prototype,"mode",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"preserveAspectRatio",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"renderer",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"viewBoxSize",void 0),__decorate([e$5()],LottiePlayer.prototype,"seeker",void 0),__decorate([e$5({type:Number})],LottiePlayer.prototype,"speed",void 0),__decorate([e$5({type:String})],LottiePlayer.prototype,"src",void 0),__decorate([e$5({type:Boolean})],LottiePlayer.prototype,"webworkers",void 0),__decorate([i(".animation")],LottiePlayer.prototype,"container",void 0),LottiePlayer=__decorate([n$1("lottie-player")],LottiePlayer);
//# sourceMappingURL=lottie-player.esm.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(63)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function renderContent() {
  return "\n\n<link type=\"text/css\" rel=\"stylesheet\" href=\"https://pif.ftmailbox.cn/pif/css/PIF.css?v=0412241244\">\n\n<div id=\"ag\">\n\n\n<article class=\"wrapper-article article-future-of-food\">\n  \t<div class=\"cp-scrolly cp-scrolly-intro zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-intro\">\n  \t\t\t<div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--l1\"> \n  \t\t\t\t\t<figure class=\"\">\n  \t\t\t\t\t\t<picture>\n  \t\t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l1.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l1.jpg, https://pif.ftmailbox.cn/pif/media/images/i1/hero-l1@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t\t</picture>\n  \t\t\t\t\t</figure>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--l2\"> \n  \t\t\t\t\t<figure class=\"\">\n  \t\t\t\t\t\t<picture>\n  \t\t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l2.png\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l2.png, https://pif.ftmailbox.cn/pif/media/images/i1/hero-l2@2x.png 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t\t</picture>\n  \t\t\t\t\t</figure>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--l3\"> \n  \t\t\t\t\t<figure class=\"\">\n  \t\t\t\t\t\t<picture>\n  \t\t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l3.png\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l3.png, https://pif.ftmailbox.cn/pif/media/images/i1/hero-l3@2x.png 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t\t</picture>\n  \t\t\t\t\t</figure>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--l4\"> \n  \t\t\t\t\t<figure class=\"\">\n  \t\t\t\t\t\t<picture>\n  \t\t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l4.png\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l4.png, https://pif.ftmailbox.cn/pif/media/images/i1/hero-l4@2x.png 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t\t</picture>\n  \t\t\t\t\t</figure>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--overlay\"> \n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--title\"> \n  \t\t\t\t\t<h2 class=\"h1-i1\">粮食的未来</h2>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--l5\"> \n  \t\t\t\t\t<figure class=\"\">\n  \t\t\t\t\t\t<picture>\n  \t\t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l5.png\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l5.png, https://pif.ftmailbox.cn/pif/media/images/i1/hero-l5@2x.png 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t\t</picture>\n  \t\t\t\t\t</figure>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--l6\"> \n  \t\t\t\t\t<figure class=\"\">\n  \t\t\t\t\t\t<picture>\n  \t\t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l6.png\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l6.png, https://pif.ftmailbox.cn/pif/media/images/i1/hero-l6@2x.png 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t\t</picture>\n  \t\t\t\t\t</figure>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--l7\"> \n  \t\t\t\t\t<figure class=\"\">\n  \t\t\t\t\t\t<picture>\n  \t\t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l7.png\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/hero-l7.png, https://pif.ftmailbox.cn/pif/media/images/i1/hero-l7@2x.png 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t\t</picture>\n  \t\t\t\t\t</figure>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--titleboxed\"> \n  \t\t\t\t\t<div class=\"blurry-box blurry-box--center titleboxed\">\n  \t\t\t\t\t\t<h1 class=\"h2-i1 fix-orphans\">沙特踏上可持续农业新征程</h1>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--scroll\"> \n  \t\t\t\t\t<i>\n  \t\t\t\t\t\t<svg width=\"65\" height=\"65\" viewBox=\"0 0 65 65\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  \t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M31 43.4899V15.7675H34V43.4899L49.5018 27.988L51.6232 30.1094L32.5 49.2325L13.3768 30.1094L15.4982 27.988L31 43.4899Z\" fill=\"white\"/>\n  \t\t\t\t\t\t</svg>\n  \t\t\t\t\t</i>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"js-i1-intro-trigger\">\n  \t\t\t<div class=\"sticky-scroll-item first-intro\"></div>\n  \t\t</div>\n  \t\t<div class=\"sticky-scroll-item first-content\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large \">\n  \t\t\t\t<div class=\"pif-square pif-square--left\" data-top=\"50%\"></div>\n  \t\t\t\t<h2 class=\"h2-i1-larger\">从部署国际战略资产到推广水培技术，沙特持续投资农业综合企业和农业技术，应对粮食安全与可持续发展问题。</h2>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>预计到2050年，全球人口数量将达到100亿，全球粮食需求将增加50%以上。中东地区气候干旱，在以可持续、可变通的方式保障粮食供应的过程中，面临着特殊挑战。沙特耕地稀少，水资源有限，形势尤为复杂。粮食安全不仅是沙特的经济发展目标，更是其提升国家韧性的基本要素，而国家韧性更是《沙特2030愿景》(Saudi Vision 2030)计划的基石。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"sticky-scroll-item last\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large\">\n  \t\t\t\t<div class=\"p-square dont-apply-words-nowrap\">\n  \t\t\t\t\t<p>纵观历史，其他国家/地区也开创过在苛刻环境下成功发展农业的先例。荷兰不断开垦荒地，如今其全球农产品出口量<a href=\"https://www.trade.gov/country-commercial-guides/netherlands-agriculture#:~:text=The%20Dutch%20are%20excellent%20traders,products%20after%20the%20United%20States.\">仅次于美国</a>。沙特携手全球领先的主权财富基金PIF开辟全新道路，利用农业技术打造面向未来的粮食生产，为其他缺水地区提供了一个可以借鉴的模板。</p><p>PIF中东与北非(MENA)投资部门消费品和零售团队负责人Majed Alassaf介绍道：“我们从两个角度考量粮食安全：对外保障战略粮食商品，对内实现可持续发展和自给自足。”</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\n  \t<div class=\"cp-fixed zi1\">\n  \t\t<div class=\"stat stat-1\">\n  \t\t  \t<div class=\"stat__inner\">\n  \t\t\t  \t<div class=\"stat-header-25p\">\n  \t\t\t  \t\t<div class=\"pif-container\">\n  \t\t\t\t\t\t<h3 class=\"h3-i1-large\">全球农业技术普及情况如何？</h3>\n  \t\t\t  \t\t</div>\n  \t\t\t\t</div>\n  \t\t\t\t<div>\n  \t\t\t\t\t<div class=\"bar-stat bar-stat-3-entries bar-stat--horizontal\">\n  \t\t\t\t\t\t\n  \t\t\t\t\t\t<div class=\"bar-width bar-1\">\n  \t\t\t\t\t\t\t<div class=\"bar-container\">\n  \t\t\t\t\t\t\t\t<div class=\"bar bar-percent-right\" data-percentage=\"81%\">\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t<div class=\"percentage\">\n  \t\t\t\t\t\t\t\t\t<span class=\"percent\">81%</span>\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t<div class=\"label\">\n  \t\t\t\t\t\t\t\t\t<span class=\"name\"><b>大型农场</b>（5,000英亩以上）</span>\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t\t<div class=\"bar-width bar-2\">\n  \t\t\t\t\t\t\t<div class=\"bar-container\">\n  \t\t\t\t\t\t\t\t<div class=\"bar accent\" data-percentage=\"76%\">\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t<div class=\"percentage\">\n  \t\t\t\t\t\t\t\t\t<span class=\"percent\">76%</span>\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t<div class=\"label accent\">\n  \t\t\t\t\t\t\t\t\t<span class=\"name\"><b>中型农场</b>（2,000至5,000英亩）</span>\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t\t<div class=\"bar-width bar-3\">\n  \t\t\t\t\t\t\t<div class=\"bar-container\">\n  \t\t\t\t\t\t\t\t<div class=\"bar accent\" data-percentage=\"36%\">\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t<div class=\"percentage\">\n  \t\t\t\t\t\t\t\t\t<span class=\"percent\">36%</span>\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t<div class=\"label accent\">\n  \t\t\t\t\t\t\t\t\t<span class=\"name\"><b>小型农场</b>（2,000英亩以下）</span>\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\n  \t\t\t\t\t<div class=\"txt-source\">资料来源：<a href=\"https://www.mckinsey.com/industries/agriculture/our-insights/agtech-breaking-down-the-farmer-adoption-dilemma\">麦肯锡</a></div>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\n  \t<div class=\"js-cp-fixed-scroller\">\n  \t\t<div class=\"cp-fixed-scroller\"></div>\n  \t\t<div class=\"cp-fixed-scroller-small trigger-stat\" data-target=\".stat-1\"></div>\n  \t</div>\n  \t<div class=\"cp-scrolly cp-scrolly-s2 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s2\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s2\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/s2.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/s2.jpg, https://pif.ftmailbox.cn/pif/media/images/i1/s2@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"sticky-scroll-item first\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large \">\n  \t\t\t\t<h3 class=\"h3-i1\">农业创新的战略意义</h3>\n  \t\t\t\t<div class=\"p-square dont-apply-words-nowrap\">\n  \t\t\t\t\t<p>PIF的这些举措加快了沙特的农业转型，进一步提升了其自给自足水平和韧性。PIF在巴西、乌克兰和印度等主要商品市场进行投资，重点关注有利于控制关键资源的战略资产。新冠疫情导致供应链中断后，PIF专门改进了这一模式，随即沙特也重新调整了粮食安全目标。Alassaf表示：“新冠疫情告诉我们，我们需要保障我们的资源供应，确保沙特的消费者始终能够获取必需品，不受任何干扰。”如今，PIF双管齐下，对外主动建立国际合作伙伴关系，对内积极部署先进农业技术。</p><p>作为PIF的子公司，沙特农业和畜牧业投资公司(SALIC)很好地诠释了这一点。该公司一方面投资于具有技术、地理和环境比较优势的全球农业综合企业，另一方面则投资和支持当地企业建立可持续的粮食供应体系，将SALIC打造为全球农业食品行业的佼佼者和食品安全先锋。通过在南美和澳大利亚等商品资源丰富的地区收购大量资产，SALIC确保沙特能够获得牲畜等基本进口物资。这些收购不仅是为了满足眼下的需求，也是为了在危机时刻提供安全网。Alassaf称：“我们的策略是帮助保障整个价值链的安全，在出现突发事件时迅速做出反应并优先满足沙特的需求。”</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"sticky-scroll-item\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large\">\n  \t\t\t\t<div class=\"pif-square pif-square--left pif-square--t100\" data-top=\"0%\"></div>\n  \t\t\t\t<div class=\"p-square dont-apply-words-nowrap\">\n  \t\t\t\t\t<p>除国际投资外，PIF还推动国内农业创新，促进沙特的粮食安全与经济多元化。以NEOM旗下食品公司Topian为例。Topian <a href=\"https://www.neom.com/en-us/newsroom/neom-announces-topian\">开创性地使用多种可持续的粮食生产方法</a>（包括气候韧性农业和可再生农业）为沙特构筑面向未来的粮食体系。</p> <p>沙特咖啡公司(Saudi Coffee Company)也通过<a href=\"https://www.saudicoffee.com/\">推广培育本土咖啡</a>，振兴当地咖啡产业，旨在提高本土咖啡产量，推动沙特进军全球咖啡市场。<a href=\"https://amhc.com.sa/en/about-us/\">麦地那遗产公司</a>(Al Madinah Heritage Company)则致力于提高沙特各类椰枣的生产和加工水平及其在全球的市场份额。该公司通过着力于创新和可持续发展，将椰枣转化为高价值产品，不仅保护了沙特丰富的饮食遗产，也使该国成为了全球椰枣行业的领头羊。麦地那遗产公司首席执行官Bander AlQahtani指出，椰枣可乐(Milaf Cola)体现了该公司对于发掘枣类产品新潜力的追求，并且类似的案例有很多。AlQahtani还强调，该公司致力于通过战略创新提高椰枣的经济和文化价值。椰枣可乐一经问世便在社交媒体上引起强烈反响，不仅收获了广泛关注，也展示了椰枣的创新潜力。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"sticky-scroll-item s2-sticky\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large\">\n  \t\t\t\t<div class=\"pif-square pif-square--left pif-square--t100\" data-top=\"0%\"></div>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>作为乳制品的可持续替代品，Sawani公司生产的骆驼奶的产量也在节节攀升。该公司正以创新的方式振兴区域产业和传承，造福现代消费者。该市场正在不断增长，预计到2030年之前，其价值将达到<a href=\"https://www.databridgemarketresearch.com/reports/global-camel-dairy-market#:~:text=Data%20Bridge%20Market%20Research%20analyses,period%20of%202023%20to%202030.\">130亿美元以上</a>。PIF旗下清真产品开发公司（Halal Products Development Company，HPDC）则致力于在本土发展清真产品制造产业并构建全球清真产品生态系统。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"sticky-scroll-item last\">\n  \t\t\t<div class=\"blurry-box blurry-box--left blurry-box--quote\">\n  \t\t\t\t<blockquote class=\"i-quote\">\n  \t\t\t\t\t<div class=\"i-quote__inner\">\n  \t\t\t\t\t\t<i>\u201C</i>\n  \t\t\t\t\t\t<p>这些举措共同体现了PIF的综合策略，即通过建立全球合作伙伴关系和推动内部发展来巩固粮食安全，确保沙特粮食供应的韧性和多样化。</p>\n  \t\t\t\t\t</div>\n  \t\t\t\t\t<cite class=\"cite-square\">Majed Alassaf, PIF中东与北非(MENA)投资部门消费品和零售团队负责人</cite>\n  \t\t\t\t</blockquote>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\n\n  \t<div class=\"cp-scrolly cp-scrolly-s3 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s3\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s3\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/s3.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/s3.jpg, https://pif.ftmailbox.cn/pif/media/images/i1/s3@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first\">\n  \t\t\t<div class=\"blurry-box blurry-box--left blurry-box--large s3-sticky\">\n  \t\t\t\t<h3 class=\"h3-i1\">技术解决方案推动可持续农业发展</h3>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>为充分利用有限的资源，PIF开始采用可明显减少资源消耗的农业技术解决方案。Green Dunes是一家垂直农业企业，由PIF参股的塔米米市场公司（Tamimi Markets Company，一家领先的现代贸易零售商）投资。该企业的用水量比传统农业少95%，能够在非常极端的环境下成功种植作物。Pure Harvest也取得了成果，该公司背靠SALIC参股的国家农业开发公司（National Agricultural Development Company，NADEC），采用的高科技水培系统所需水量仅占传统农业的一小部分。</p><p>德勤 “粮食的未来”(Future of Food)计划负责人Randy Jagt介绍道：“粮食系统无法再承受传统的扩张方式，我们需要通过创新实现转型。”Jagt指出，在精准农业中，人工智能(AI)和数据在克服自然限制方面发挥着至关重要的作用。Jagt还补充道，农业的数字化转型终于赶上了快速增长的全球人口的需求。区块链等技术也在帮助沙特以前所未有的透明度追踪和保障粮食供应，并确保粮食生产在整个供应链中的效率、可靠性和消费者信任度。</p><p>封闭式环境和节水系统的普及表明沙特开始转向可再生农业，这一趋势对于面临气候限制的地区至关重要。Alassaf表示：“我们不拘泥于技术。我们注重结果，并尽可能利用天然优势。”这包括选择能够带来先进技术和特定气候优势的国际合作伙伴。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item last\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--quote\">\n  \t\t\t\t<div class=\"pif-square pif-square--static pif-square--top\" data-top=\"0%\"></div>\n  \t\t\t\t<div>\n  \t\t\t\t\t<blockquote class=\"i-quote\">\n  \t\t\t\t\t<div class=\"i-quote__inner\">\n  \t\t\t\t\t\t<i>\u201C</i>\n  \t\t\t\t\t\t<p>粮食系统无法再承受传统的扩张方式，我们需要通过创新实现转型</p>\n  \t\t\t\t\t</div>\n  \t\t\t\t\t<cite class=\"cite-square\">Randy Jagt, 德勤 “粮食的未来”(Future of Food)计划负责人</cite>\n  \t\t\t\t\t</blockquote>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\t\n  \t<div class=\"stat-wrapper stat-will-pin zi2\">\n  \t\t<div class=\"stat stat-3\">\n  \t\t  \t<div class=\"stat__inner\">\n  \t\n  \t\t\t  \t<div class=\"stat-header-25p\">\n  \t\t\t  \t\t<div class=\"pif-container\">\n  \t\t\t\t\t\t<h3 class=\"h3-i1-stat-title\">全球智能农业市场规模</h3>\n  \t\t\t\t\t\t<p class=\"stat-copy\">预计这一市场将从2022年的150亿美元增长到2027年的330亿美元</p>\n  \t\t\t\t\t\t<div class=\"txt-source\">资料来源：<a href=\"https://www.statista.com/statistics/720062/market-value-smart-agriculture-worldwide/\">Statista</a></div>\n  \t\t\t  \t\t</div>\n  \t\t\t\t</div>\n  \t\n  \t\t\t\t<div class=\"bar-stat bar-stat-2-entries bar-stat--horizontal\">\n  \t\t\t\t\t\n  \t\t\t\t\t<div class=\"bar-width bar-1\">\n  \t\t\t\t\t\t<div class=\"bar-container\">\n  \t\t\t\t\t\t\t<div class=\"bar bar-percent-right\" data-percentage=\"45%\">\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t<div class=\"percentage\">\n  \t\t\t\t\t\t\t\t<span class=\"percent\">$15bn</span>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t<div class=\"label\">\n  \t\t\t\t\t\t\t\t<span class=\"name\">2022</span>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t\t<div class=\"bar-width bar-2\">\n  \t\t\t\t\t\t<div class=\"bar-container\">\n  \t\t\t\t\t\t\t<div class=\"bar accent\" data-percentage=\"100%\">\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t<div class=\"percentage\">\n  \t\t\t\t\t\t\t\t<span class=\"percent\">$33bn</span>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t<div class=\"label accent\">\n  \t\t\t\t\t\t\t\t<span class=\"name\">2027</span>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"cp-fixed-scroller-small trigger-stat\" data-target=\".stat-3\"></div>\n  \t</div>\n  \t<div class=\"cp-scrolly cp-scrolly-s4 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s4\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s4\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/s4.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/s4.jpg, https://pif.ftmailbox.cn/pif/media/images/i1/s4@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large\">\n  \t\t\t\t<div class=\"pif-square pif-square--left pif-square--t100\" data-top=\"0%\"></div>\n  \t\t\t\t<h3 class=\"h3-i1\">全球影响与对未来的启示</h3>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>PIF注重农业创新，为其他面临类似环境限制的地区提供了新的框架。SALIC在巴西建立的合作伙伴关系等投资展示了全球战略联盟如何增强当地韧性和稳定性。这些合作伙伴关系还产生了积极的连锁反应，为相关地区的就业机会和基础设施建设作出了贡献。Alassaf强调，沙特整合全球资产，旨在建立互联互通的粮食安全体系：“我们将跨国企业连接到同一个价值链中，利用乘数效应让沙特和我们的合作伙伴受益。”</p><p>Randy Jagt还强调了通过价值链协作打造可扩展、可持续农业解决方案的必要性。Jagt指出，数据和透明度对于优化生产和确保成效至关重要。他还补充道，跨行业的合作伙伴关系有助于新技术顺利进入更广阔的市场。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"sticky-scroll-item last\">\n  \t\t\t<div class=\"blurry-box blurry-box--left blurry-box--quote\">\n  \t\t\t\t<blockquote class=\"i-quote\">\n  \t\t\t\t\t<div class=\"i-quote__inner\">\n  \t\t\t\t\t\t<i>\u201C</i>\n  \t\t\t\t\t\t<p>数据和透明度对于优化生产和确保成效至关重要</p>\n  \t\t\t\t\t</div>\n  \t\t\t\t\t<cite class=\"cite-square\">Randy Jagt, 德勤 “粮食的未来”(Future of Food)计划负责人</cite>\n  \t\t\t\t</blockquote>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\t\n  \t<div class=\"cp-scrolly cp-scrolly-s5 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s5\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s5\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i1/s5.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i1/s5.jpg, https://pif.ftmailbox.cn/pif/media/images/i1/s5@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--quote\">\n  \t\t\t\t<blockquote class=\"i-quote\">\n  \t\t\t\t\t<div class=\"i-quote__inner\">\n  \t\t\t\t\t\t<i>\u201C</i>\n  \t\t\t\t\t\t<p>PIF不仅仅是在保障眼下的粮食供应，更是在为子孙后代打造一个生态系统。</p>\n  \t\t\t\t\t</div>\n  \t\t\t\t\t<cite class=\"cite-square\">Majed Alassaf, PIF中东与北非(MENA)投资部门消费品和零售团队负责人</cite>\n  \t\t\t\t</blockquote>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item number\">\n  \t\t\t<div class=\"stat-number stat-number--2030 stat-number--2030-sticky js-trigger-lottie js-trigger-lottie-2030\"  data-start=\"top 50%\">\n  \t\t\t\t<img class=\"spacer spacer-2030\" src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201007%20319'%3E%3C/svg%3E\" alt=\"\">\n  \t\t\t\t<lottie-player src=\"https://pif.ftmailbox.cn/pif/media/images/i1/lottie-2030.json\" background=\"transparent\"  speed=\"1\" class=\"lottie3 anim\"></lottie-player>\n  \t\t\t</div>\t\t\n  \t\t</div>\t\t\n  \t\n  \t\t<div class=\"sticky-scroll-item last \">\n  \t\t\t<div class=\"blurry-box blurry-box--left blurry-box--large \">\n  \t\t\t\t<div class=\"pif-square pif-square--bottomright\" data-top=\"100%\"></div>\n  \t\t\t\t<h3 class=\"h3-i1\">《沙特2030愿景》以及更远的未来</h3>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>未来，沙特将瞄准全球可持续发展目标继续推动农业转型，而PIF对技术进步和生态系统伙伴关系的承诺将成为干旱地区提升粮食系统韧性的蓝图。在环境压力加剧的背景下，全球粮食需求持续增长，而节水农业和气候适应性合作伙伴关系的发展表明，一旦经济韧性与环境管理相结合，一切皆有可能。</p><p>Alassaf表示：“PIF不仅仅是在保障眼下的粮食供应，更是在为子孙后代打造一个生态系统。”这与《沙特2030愿景》不谋而合，反映了与实现多元化和可持续经济相关的更广泛目标。在其他地区面临类似压力之际，这种融合了创新、资源效率和战略合作伙伴关系的模式，为未来农业的安全和可持续发展提供了宝贵的经验。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\n\t<div class=\"end-page-cta\">\n\t\t<div class=\"pif-container\">\n\t\t\t<div class=\"end-page-cta__inner\">\n\t\t\t\t<h2 class=\"end-page-cta-title\">更多来自PIF</h2>\n\t\t\t\t<a href=\"https://www.pif.gov.sa/en/\" class=\"end-page-cta-btn\" target=\"_blank\">Learn more</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n </article>\n\t\n\n\t\n\n</div>\n\t\t\t\t\t\n";
}

exports.default = renderContent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function renderContent() {
  return "\n\n<link type=\"text/css\" rel=\"stylesheet\" href=\"https://pif.ftmailbox.cn/pif/css/PIF.css?v=0412241244\">\n\n<div id=\"ag\">\n\n<article class=\"wrapper-article article-future-of-sport\">\n  \t<div class=\"cp-scrolly cp-scrolly-intro zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-intro\">\n  \t\t\t<div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--l1\"> \n  \t\t\t\t\t<figure class=\"\">\n  \t\t\t\t\t\t<picture>\n  \t\t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i2/hero-l1.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i2/hero-l1.jpg, https://pif.ftmailbox.cn/pif/media/images/i2/hero-l1@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t\t</picture>\n  \t\t\t\t\t</figure>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--title\"> \n  \t\t\t\t\t<h2 class=\"h1-i2\">The <span>体育</span>的未来</h2>\n  \t\t\t\t\t<h1 class=\"h2-i2 fix-orphans\">沙特体育事业蓬勃发展的动力源自何处？</h1>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--l2\"> \n  \t\t\t\t\t<figure class=\"\">\n  \t\t\t\t\t\t<picture>\n  \t\t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i2/hero-l2.png\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i2/hero-l2.png, https://pif.ftmailbox.cn/pif/media/images/i2/hero-l2@2x.png 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t\t</picture>\n  \t\t\t\t\t</figure>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"sticky-content--layer cp-scrolly-intro--scroll\"> \n  \t\t\t\t\t<i>\n  \t\t\t\t\t<svg width=\"65\" height=\"65\" viewBox=\"0 0 65 65\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  \t\t\t\t\t<g filter=\"url(#filter0_b_3562_1434)\">\n  \t\t\t\t\t<rect width=\"65\" height=\"65\" rx=\"32.5\" fill=\"white\" fill-opacity=\"0.3\"/>\n  \t\t\t\t\t<path d=\"M32.5 16.8281V48.1719M32.5 48.1719L14.4375 30.1094M32.5 48.1719L50.5625 30.1094\" stroke=\"white\" stroke-width=\"3\"/>\n  \t\t\t\t\t</g>\n  \t\t\t\t\t<defs>\n  \t\t\t\t\t<filter id=\"filter0_b_3562_1434\" x=\"-6\" y=\"-6\" width=\"77\" height=\"77\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n  \t\t\t\t\t<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n  \t\t\t\t\t<feGaussianBlur in=\"BackgroundImageFix\" stdDeviation=\"3\"/>\n  \t\t\t\t\t<feComposite in2=\"SourceAlpha\" operator=\"in\" result=\"effect1_backgroundBlur_3562_1434\"/>\n  \t\t\t\t\t<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_backgroundBlur_3562_1434\" result=\"shape\"/>\n  \t\t\t\t\t</filter>\n  \t\t\t\t\t</defs>\n  \t\t\t\t\t</svg>\n  \t\t\t\t\t</i>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"js-i2-intro-trigger\">\n  \t\t\t<div class=\"sticky-scroll-item first-intro\"></div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first-content\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large \">\n  \t\t\t\t<div class=\"pif-square pif-square--left\" data-top=\"50%\"></div>\n  \t\t\t\t<h2 class=\"h2-i2-larger\">从全民运动到国际顶级赛事，体育投资已成为沙特经济多元化的重要组成部分。</h2>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>在2022年世界杯C组首轮小组赛中，沙特战胜了最终夺冠的阿根廷，这场胜利极大激发了沙特的民族自豪感与爱国热情。随着国际足球巨星纷纷加盟沙特足球俱乐部，球迷们在欢迎国家队凯旋时展现出前所未有的热情。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item last\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large\">\n  \t\t\t\t<div class=\"pif-square pif-square--static pif-square--topright\" data-top=\"50%\"></div>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>沙特公共投资基金(PIF)中东与北非投资部体育业务负责人Feras Sheraiff表示：“足球运动在沙特拥有深厚的群众基础，但过去我们只能通过亲临国际赛事现场或观看电视比赛感受其魅力。发展本土赛事和培养本土运动明星至关重要。”沙特确实涌现了众多优秀的本土运动员。24岁的心理学学生兼拳击手Ziyad “Zizo” Almaayouf已赢得六场职业比赛，保持全胜纪录，其目标是成为世界冠军；18岁的小将Mashael Alayed则在2024年巴黎奥运会上成为沙特首位奥林匹克游泳运动员。 </p><p>在《沙特2030愿景》(Saudi Vision 2030)中，沙特设定了到2030年实现<a href=\"https://www.vision2030.gov.sa/media/rc0b5oy1/saudi_vision203.pdf\">40%</a>人口参与体育锻炼的目标，这些本土运动名将的成功无疑将激励更多人积极参与体育运动，对于实现这一目标至关重要。一个幸福、健康的国民群体，不仅关乎沙特经济多元化的长期发展，更是让沙特在世界舞台展露风采的关键因素。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\n  \t<div class=\"stat-wrapper stat-wrapper--dark stat-will-pin zi2\">\n  \t\t<div class=\"stat stat-i2 stat-i2-1\">\n  \t\t\t<div class=\"pif-container\">\n  \t\t  \t\t<div class=\"stat__inner\">\n  \t\t\t\t  \t<div class=\"stat__copy\">\n  \t\t\t\t\t\t<h3 class=\"h3-i2-stat-title\">数据要点：沙特63%的人口年龄在30岁以下，国民对体育的热情日益高涨，这一人口结构提升了赛事的广泛参与度与观众的观赛热情。</h3>\n  \t\t\t\t\t\t<div class=\"txt-source txt-source--i2\">资料来源：<a href=\"https://www.stats.gov.sa/en\">沙特统计局(GASTAT)</a></div>\n  \t\t\t  \t\t</div>\n  \t\t\t\t\t<div class=\"stat__circles ivanimr-circles\">\n  \t\t\t\t\t\t<div class=\"stat-circle-inner\">\n  \t\t\t\t\t\t\t<div class=\"stat-circle-content\">\n  \t\t\t\t\t\t\t\t<svg class=\"spacer\" width=\"490\" height=\"490\" viewBox=\"0 0 490 490\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n  \t\t\t\t\t\t\t\t<div class=\"c100p\"></div>\n  \t\t\t\t\t\t\t\t<div class=\"c63p\">\n  \t\t\t\t\t\t\t\t\t<div class=\"c63p-blur\"></div>\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t<span class=\"t63 txt-i2-circle-stat\">63%</span>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"cp-fixed-scroller-small trigger-stat\" data-target=\".stat-i2-1\"></div>\n  \t</div>\n  \t<div class=\"cp-scrolly cp-scrolly-s2 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s2\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s2\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i2/s1.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i2/s1.jpg, https://pif.ftmailbox.cn/pif/media/images/i2/s1@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large \">\n  \t\t\t\t<h3 class=\"h3-i2\">体育世界的成就</h3>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>在<a href=\"https://www.pif.gov.sa/en/\">PIF</a>的大力支持下，沙特逐步融入全球体育基础设施网络，迅速崛起成为全球体育中心。皇家马德里(Real Madrid)、国际米兰(Inter Milan)等欧洲顶级足球俱乐部已与沙特建立全国范围的合作伙伴关系。2023年6月，PIF联手沙特非营利组织将四个沙特足球队（阿赫利、希拉尔、伊蒂哈德和纳斯尔）纳入旗下管理，通过现代化体育设施、基础设施和基层体育项目，为其长期发展注入强劲动力。凭借这一势头，沙特阿拉伯已被确认为2034年男子足球世界杯的主办国。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item last\">\n  \t\t\t<div class=\"blurry-box blurry-box--large\">\n  \t\t\t\t<div class=\"pif-square pif-square--left pif-square--t100\" data-top=\"0%\"></div>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>PIF对体育的重视也为其带来建立国际合作的新机遇。2024年8月，PIF与中北美洲及加勒比海足球协会(CONCACAF)达成合作协议，此举有助于增加沙特各地区青年赛事的数量，提升体育参与度。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\t\n  \t<div class=\"stat-wrapper stat-wrapper--dark stat-will-pin zi2\">\n  \t\t<div class=\"stat stat-i2 stat-i2-2\">\n  \t\t\t<div class=\"pif-container\">\n  \t\t  \t\t<div class=\"stat__inner\">\n  \t\t\t\t  \t<div class=\"stat__copy\">\n  \t\t\t\t\t\t<h3 class=\"h3-i2-stat-title\">数据要点：每一美元体育项目投资，其社会价值回报在3至124美元之间，凸显了基层民众体育投资的经济与社会效益。</h3>\n  \t\t\t\t\t\t<div class=\"txt-source txt-source--i2\">资料来源：<a href=\"https://golab.bsg.ox.ac.uk/knowledge-bank/resource-library/impact-investment-in-sport/\">联合国教科文组织(UNESCO)</a></div>\n  \t\t\t  \t\t</div>\n  \t\t\t  \t\t<div class=\"stat__circles ivanimr-circles\">\n  \t\t\t\t\t\t<div class=\"stat-circle-inner\">\n  \t\t\t\t\t\t\t<div class=\"stat-circle-content\">\n  \t\t\t\t\t\t\t\t<svg class=\"spacer\" width=\"432\" height=\"432\" viewBox=\"0 0 432 432\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n  \t\t\t\t\t\t\t\t<svg class=\"c100p\" viewBox=\"0 0 432 432\">\n  \t\t\t\t\t\t\t\t    <circle cx=\"216\" cy=\"216\" r=\"214\" />\n  \t\t\t\t\t\t\t  \t</svg>\n  \t\t\t\t\t\t\t\t<div class=\"c3p\">\n  \t\t\t\t\t\t\t\t\t<div class=\"c3p-blur\"></div>\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t<span class=\"t3\">$3</span>\n  \t\t\t\t\t\t\t\t<span class=\"t124\">$124</span>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"cp-fixed-scroller-small trigger-stat\" data-target=\".stat-i2-2\"></div>\n  \t</div>\n  \t<div class=\"cp-scrolly cp-scrolly-s3 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s2\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s2\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i2/s2.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i2/s2.jpg, https://pif.ftmailbox.cn/pif/media/images/i2/s2@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first last\">\n  \t\t\t<div class=\"blurry-box blurry-box--left blurry-box--large\">\n  \t\t\t\t<h3 class=\"h3-i2\">发展体育事业</h3>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>PIF同样将基层体育运动视为赋能社会全员的有力方式。自2021年以来，沙特职业女性足球运动员数量<a href=\"https://www.saff.com.sa/en/news.php?id=2804\">激增</a>195%。在地方层面，女性体育运动参与率仅比男性<a href=\"https://www.vision2030.gov.sa/en/media/articles/hrh-ambassador-reema-bandar-al-saud\">低2%</a>。为进一步提升女性体育运动参与率，2023年，PIF创建了女性运动与健康公司<a href=\"https://www.pif.gov.sa/en/our-investments/our-portfolio/kayanee/\">Kayanee</a>，为沙特女性提供线上及线下健身、营养等课程与学习资源。</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\t\n  \t<div class=\"stat-number stat-number--dark stat-number--195 js-trigger-lottie js-trigger-lottie-195\"  data-start=\"top 50%\">}\n  \t\t<img class=\"spacer spacer-195\" src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201500%20468'%3E%3C/svg%3E\" alt=\"\">\n  \t\n  \t\t<lottie-player src=\"https://pif.ftmailbox.cn/pif/media/images/i2/lottie-195.json\" background=\"transparent\"  speed=\"1\" class=\"lottie3 anim\"></lottie-player>\n  \t</div>\t\n  \t<div class=\"cp-scrolly cp-scrolly-s4 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s2\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s2\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i2/s3.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i2/s3.jpg, https://pif.ftmailbox.cn/pif/media/images/i2/s3@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first\">\n  \t\t\t<div class=\"blurry-box blurry-box--left blurry-box--large\">\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>To become a cornerstone of women\u2019s sport, PIF is focusing heavily on global events. In February 2024, they announced a partnership with the Association of Tennis Professionals, and became the official naming partner of the PIF ATP Rankings. In May 2024, a partnership was established with the Women\u2019s Tennis Association (WTA), making it the first official naming partner of the PIF WTA Rankings. \u201CSupporting the rankings fits really well with PIF\u2019s ambition to support players through every stage of their tennis careers,\u201D says Marina Storti, CEO of WTA Ventures, the organisation\u2019s commercial arm, adding that spotlighting these stories and personalities is a way to engage people in issues outside of tennis.</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"sticky-scroll-item last\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large\">\n  \t\t\t\t<div class=\"pif-square pif-square--left\" data-top=\"50%\"></div>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>\u201CThe partnership also demonstrates the long-term commitment to the wider growth of tennis,\u201D explains Storti, pointing to the 2024 WTA Finals in Riyadh, where tennis legend Martina Hingis, PIF\u2019s ambassador at the WTA Finals, and other WTA legends and players, conducted a number of tennis clinics, designed to share players\u2019 knowledge with young people and boost grassroots engagement in the sport.</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\t\n  \t<div class=\"stat-wrapper stat-wrapper--dark stat-will-pin zi2\">\n  \t\t<div class=\"stat stat-i2 stat-i2-3\">\n  \t\t\t<div class=\"pif-container\">\n  \t\t  \t\t<div class=\"stat__inner\">\n  \t\t\t\t  \t<div class=\"stat__copy\">\n  \t\t\t\t\t\t<h3 class=\"h3-i2-stat-title\">Saudi Arabia is home to 177 tennis clubs, up 146 per cent since 2019. Over the past four years, the number of registered players has increased by 46 per cent, to 2,300; and under-14 players by 100 per cent from 500 to 1,000+</h3>\n  \t\t\t\t\t\t<div class=\"txt-source txt-source--i2\">Source: <a href=\"https://tennissaudi.sa/en/news/news-details/27/rafa-nadal-sets-new-target-to-grow-tennis-and-sport-in-saudi-arabia.html\">Saudi Tennis Federation</a></div>\n  \t\t\t  \t\t</div>\n  \t\t\t\t\t<div class=\"stat__circles ivanimr-circles\">\n  \t\t\t\t\t\t<div class=\"stat-circle-inner\">\n  \t\t\t\t\t\t\t<div class=\"stat-circle-content\">\n  \t\t\t\t\t\t\t\t<svg class=\"spacer\" width=\"432\" height=\"432\" viewBox=\"0 0 432 432\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n  \t\n  \t\t\t\t\t\t\t\t<svg class=\"c100p\" viewBox=\"0 0 432 432\">\n  \t\t\t\t\t\t\t\t    <circle cx=\"216\" cy=\"216\" r=\"214\" />\n  \t\t\t\t\t\t\t  \t</svg>\n  \t\t\t\t\t\t\t\t<div class=\"c40p\"></div>\n  \t\t\t\t\t\t\t\t<span class=\"t2019\">2019</span>\n  \t\t\t\t\t\t\t\t<span class=\"t2024\"><strong>177 tennis clubs</strong>2024</span>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\t<div class=\"cp-fixed-scroller-small trigger-stat\" data-target=\".stat-i2-3\"></div>\n  \t</div>\n\n  \t<div class=\"cp-scrolly cp-scrolly-s5 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s5\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s5\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i2/s4.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i2/s4.jpg, https://pif.ftmailbox.cn/pif/media/images/i2/s4@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first last\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large\">\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>Providing new opportunities for Saudi Arabia\u2019s young population to connect and engage is essential to the country\u2019s economic diversification. Backed by PIF, Savvy Games Group is driving this effort in the esports sector. This includes its acquisition of US games publisher Scopely, as well as developing state-of-the-art esports infrastructure such as gaming hubs and event venues. By hosting international tournaments and promoting gaming as a cultural and economic force, these efforts aim to establish Saudi Arabia as a global leader in the gaming industry while creating jobs, encouraging innovation and enhancing social interaction.</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\t\n  \t<div class=\"cp-scrolly cp-scrolly-s6 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s6\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s6\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i2/s5.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i2/s5.jpg, https://pif.ftmailbox.cn/pif/media/images/i2/s5@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first\">\n  \t\t\t<div class=\"blurry-box blurry-box--left blurry-box--large\">\n  \t\t\t\t<div class=\"pif-square pif-square--right\" data-top=\"50%\"></div>\n  \t\t\t\t<h3 class=\"h3-i2\">Electrifying sport</h3>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>Sport is also a vehicle to drive change in other areas. Take PIF\u2019s Electric 360 partnership, serving Formula E (auto) and E1 powerboat racing, which supports EV technology, as well as Extreme E offroad SUV racing \u2014 set to be rebranded as Extreme H \u2014 which is focused on hydrogen fuel.</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item\">\n  \t\t\t<div class=\"blurry-box blurry-box--left blurry-box--quote\">\n  \t\t\t\t<blockquote class=\"i-quote\">\n  \t\t\t\t\t<div class=\"i-quote__inner\">\n  \t\t\t\t\t\t<i>\u201C</i>\n  \t\t\t\t\t\t<p>This partnership is about a lot more than motorsport. It\u2019s about developing new ways of mobility</p>\n  \t\t\t\t\t</div>\n  \t\t\t\t\t<cite class=\"cite-square\">Alejandro Agag, Chairman of Formula E and E1 Series, and CEO of Extreme E</cite>\n  \t\t\t\t</blockquote>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large\">\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>To win Formula E championships, competitors have developed batteries that can keep their car moving at up to 300km/h for 45 minutes without overheating or weighing the vehicle down. Each incremental improvement has implications for the wider automotive industry. \u201CThey test new things on the race cars and then they use them for the road cars,\u201D explains Agag. \u201CThat\u2019s what gives Formula E its role as a laboratory for EV technology.\u201D</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item\">\n  \t\t\t  \t<div class=\"stat-wrapper stat-wrapper--dark zi2\">\n  \t\t\t  \t\t<div class=\"stat stat-i2 stat-i2-4\">\n  \t\t\t  \t\t\t<div class=\"pif-container\">\n  \t\t\t  \t\t  \t\t<div class=\"stat__inner\">\n  \t\t\t  \t\t\t\t  \t<div class=\"stat__copy\">\n  \t\t\t  \t\t\t\t\t\t<h3 class=\"h3-i2-stat-title\">Formula E has increased global fanbase to an average of 374mn for Season 10 (2024), an increase of 23 per cent from the previous season</h3>\n  \t\t\t  \t\t\t\t\t\t<div class=\"txt-source txt-source--i2\">Source: <a href=\"https://www.fiaformulae.com/en/news/508140\">FIA Formula E</a></div>\n  \t\t\t  \t\t\t  \t\t</div>\n  \t\t\t  \t\t\t\t\t<div class=\"stat__circles ivanimr-circles\">\n  \t\t\t  \t\t\t\t\t\t<div class=\"stat-circle-inner\">\n  \t\t\t  \t\t\t\t\t\t\t<div class=\"stat-circle-content\">\n  \t\t\t  \t\t\t\t\t\t\t\t<svg class=\"spacer\" width=\"615\" height=\"400\" viewBox=\"0 0 615 400\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"></svg>\n  \t\t\t  \t\t\t\t\t\t\t\t<div class=\"c311p\"></div>\n  \t\t\t  \t\t\t\t\t\t\t\t<div class=\"c374p\">\n  \t\t\t  \t\t\t\t\t\t\t\t\t<div class=\"c374p-blur\">\n  \t\t\t  \t\t\t\t\t\t\t\t\t</div>\n  \t\t\t  \t\t\t\t\t\t\t\t</div>\n  \t\t\t  \t\t\t\t\t\t\t\t<span class=\"t2023\">2023 <strong>311mn</strong></span>\n  \t\t\t  \t\t\t\t\t\t\t\t<span class=\"t2024\">2024 <strong>374mn</strong></span>\n  \t\t\t  \t\t\t\t\t\t\t</div>\n  \t\t\t  \t\t\t\t\t\t</div>\n  \t\t\t  \t\t\t\t\t</div>\n  \t\t\t  \t\t\t\t</div>\n  \t\t\t  \t\t\t</div>\n  \t\t\t  \t\t</div>\n  \t\t\t  \t\t<div class=\"cp-fixed-scroller-small trigger-stat\" data-target=\".stat-i2-4\"></div>\n  \t\t\t  \t</div>\n  \t\t\t  \t\n  \t\t\t  \t\n  \t\t\t  \t\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item last\">\n  \t\t\t<div class=\"blurry-box blurry-box--left blurry-box--large\">\n  \t\t\t\t<div class=\"pif-square pif-square--right pif-square--t100\" data-top=\"0%\"></div>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>SURJ Sports Investment, a PIF company specialising in sports investments, is pioneering advances in sports technology, transforming both professional performance and fan experiences. \"Tech is a very big part of what we do,\" says Sheraiff. \"When we look at SURJ, one of the areas they focus on is sports tech \u2014 addressing both professional and fan-level needs.\" With partners like Saudi Company for Artificial Intelligence (SCAI), SURJ leverages data to enhance athletes' performance and optimise team dynamics. Collaborations with PIF portfolio companies such as SCAI ensure fans enjoy seamless experiences, whether attending games or engaging remotely. \"It's about improving the journey \u2014 for both users of tech and participants \u2014 making sports more interactive and impactful,\" Sheraiff adds.</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\t\n  \t\n  \t<div class=\"number\">\n  \t\t<div class=\"stat-number stat-number--dark stat-number--2030 js-trigger-lottie js-trigger-lottie-2030\"  data-start=\"top 50%\">\n  \t\t\t<img class=\"spacer spacer-2030\" src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201007%20319'%3E%3C/svg%3E\" alt=\"\">\n  \t\n  \t\t\t<lottie-player src=\"https://pif.ftmailbox.cn/pif/media/images/i2/lottie-2030.json\" background=\"transparent\"  speed=\"1\" class=\"lottie3 anim\"></lottie-player>\n  \t\t</div>\t\t\n  \t</div>\t\n  \t<div class=\"cp-scrolly cp-scrolly-s2 zi2\">\n  \t\t<div class=\"sticky-content js-sticky-scrolly-s2\">\n  \t\t\t<div class=\"sticky-content--layer cp-scrolly-s2\"> \n  \t\t\t\t<figure class=\"\">\n  \t\t\t\t\t<picture>\n  \t\t\t\t\t\t<img src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20910'%3E%3C/svg%3E\" data-src=\"https://pif.ftmailbox.cn/pif/media/images/i2/s6.jpg\" data-srcset=\"https://pif.ftmailbox.cn/pif/media/images/i2/s6.jpg, https://pif.ftmailbox.cn/pif/media/images/i2/s6@2x.jpg 2x\" class=\"lazyload\" alt=\"Futuristic illustration\">\n  \t\t\t\t\t</picture>\n  \t\t\t\t</figure>\n  \t\t\t</div>\n  \t\t</div>\n  \t\n  \t\t<div class=\"sticky-scroll-item first last\">\n  \t\t\t<div class=\"blurry-box blurry-box--right blurry-box--large\">\n  \t\t\t\t<div class=\"pif-square pif-square--left pif-square--t100\" data-top=\"0%\"></div>\n  \t\t\t\t<h3 class=\"h3-i2\">New era for sport</h3>\n  \t\t\t\t<div class=\"p-square\">\n  \t\t\t\t\t<p>Over the longer term, investment in sport will support the country\u2019s broader economic diversification strategy. PIF-owned Sela, for example, has already brought to life hundreds of experiences across the sports and recreational sector, supporting a variety of innovative industries, while <a href=\"https://qiddiya.com/en/\">Qiddiya</a>, a visionary hub for world-class entertainment, sports, and culture, is set to include an esports district, a 45,000-seat stadium and a Speed Park Track. Sports infrastructure will play a big role in meeting Saudi Arabia\u2019s target of welcoming 150mn visitors per year by 2030. </p><p>With Saudi Arabia set to become one of the world\u2019s top 10 tourist destinations before 2040, according to a <a href=\"https://www.thinkwithgoogle.com/intl/en-emea/consumer-insights/consumer-trends/future-of-travel-2040-insights/\">Google study</a>, sport is critical to keeping the region on the world stage. \u201CWe're bringing the region together,\u201D says Sheraiff. \u201CNot only by finding our own national heroes, but celebrating the regional heroes as well.\u201D</p>\n  \t\t\t\t</div>\n  \t\t\t</div>\n  \t\t</div>\n  \t</div>\t\n\t<div class=\"end-page-cta\">\n\t\t<div class=\"pif-container\">\n\t\t\t<div class=\"end-page-cta__inner\">\n\t\t\t\t<h2 class=\"end-page-cta-title\">More from PIF</h2>\n\t\t\t\t<a href=\"https://www.pif.gov.sa/en/\" class=\"end-page-cta-btn\" target=\"_blank\">Learn more</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>  \n</article>\n\n\n</div>\t\t\t\n";
}

exports.default = renderContent;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l1.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l1@2x.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l2.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l2@2x.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l3.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l3@2x.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l4.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l4@2x.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l5.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l5@2x.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l6.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l6@2x.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l7.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/hero-l7@2x.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/lottie-2030.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/lottie-432m.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s1.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s1@2x.jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s2.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s2@2x.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s3.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s3@2x.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s4.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s4@2x.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s5.jpg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i1/s5@2x.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/hero-l1.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/hero-l1@2x.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/hero-l2.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/hero-l2@2x.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/lottie-195.svg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/lottie-2030.svg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s1.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s1@2x.jpg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s2.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s2@2x.jpg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s3.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s3@2x.jpg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s4.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s4@2x.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s5.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s5@2x.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s6.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/i2/s6@2x.jpg";

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSPlugin; });
/* unused harmony export default */
/* unused harmony export _getBBox */
/* unused harmony export _createElement */
/* unused harmony export checkPrefix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__ = __webpack_require__(6);
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style,
      cache = target._gsap;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = _reverting();

    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

        cache.zOrigin = 0;
        cache.renderTransform();
      }

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["a" /* gsap */].core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && properties.split(",").forEach(function (p) {
    return saver.save(p);
  });
  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["a" /* gsap */].core.reverting;
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style,
        first2Chars;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);

      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* PropTween */](plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["y" /* _ticker */].time && !cache.uncache) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }

    if (horizontal && toPercent) {
      cache = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["z" /* _getCache */])(parent);
      cache.time = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["y" /* _ticker */].time;
      cache.width = parent[measureProperty];
    }
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["A" /* _getProperty */])(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* PropTween */](this._pt, target.style, prop, 0, 1, __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["B" /* _renderComplexString */]),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }

  a = [start, end];

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["C" /* _colorStringFilter */])(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["D" /* _numWithUnitExp */]) || [];
  endValues = end.match(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["D" /* _numWithUnitExp */]) || [];

  if (endValues.length) {
    while (result = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["D" /* _numWithUnitExp */].exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["E" /* _parseRelative */])(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["D" /* _numWithUnitExp */].lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["F" /* _config */].units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["G" /* _relExp */].test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* PropTween */](plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["H" /* _numExp */]).map(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */]);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["z" /* _getCache */])(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["I" /* GSCache */](target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(Math.sqrt(a * a + b * b + c * c));
      scaleY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(scaleX);
  cache.scaleY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(scaleY);
  cache.rotation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(rotation) + deg;
  cache.rotationX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(rotationX) + deg;
  cache.rotationY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["F" /* _config */].force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["J" /* getUnit */])(start);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(a11);
    a21 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(a21);
    a12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(a12);
    a22 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(tx + xPercent / 100 * temp.width);
    ty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["x" /* _round */])(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["K" /* _isString */])(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* PropTween */](plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["J" /* getUnit */])(startValue);
      endUnit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["J" /* getUnit */])(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* PropTween */](plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["L" /* _forEachName */])("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["M" /* _plugins */][p] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["N" /* _checkPlugin */])(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["O" /* _replaceRandom */])(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["P" /* _colorExp */].lastIndex = 0;

        if (!__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["P" /* _colorExp */].test(startValue)) {
          // colors don't have units
          startUnit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["J" /* getUnit */])(startValue);
          endUnit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["J" /* getUnit */])(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["K" /* _isString */])(startValue) && ~startValue.indexOf("random(") && (startValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["O" /* _replaceRandom */])(startValue));
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["J" /* getUnit */])(startValue + "") || startValue === "auto" || (startValue += __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["F" /* _config */].units[p] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["J" /* getUnit */])(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* PropTween */](this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* PropTween */](this._pt, cache, "scaleY", cache.scaleY, (relative ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["E" /* _parseRelative */])(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["E" /* _parseRelative */])(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["J" /* getUnit */])(endValue) || (p in __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["F" /* _config */].units ? __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["F" /* _config */].units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["w" /* PropTween */](this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["E" /* _parseRelative */])(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["Q" /* _missingPlugin */])(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["R" /* _sortPropTweensByPriority */])(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["S" /* _isUndefined */])(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["T" /* _getSetter */])(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["a" /* gsap */].utils.checkPrefix = _checkPropPrefix;
__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["a" /* gsap */].core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["L" /* _forEachName */])(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["L" /* _forEachName */])(rotation, function (name) {
    __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["F" /* _config */].units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["L" /* _forEachName */])(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["L" /* _forEachName */])("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["F" /* _config */].units[name] = "px";
});

__WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["a" /* gsap */].registerPlugin(CSSPlugin);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Observer; });
/* unused harmony export default */
/* unused harmony export _isViewport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _scrollers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _getScrollFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getProxyProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _proxies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _getVelocityProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _vertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _horizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _getTarget; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _clamp,
    _win,
    _doc,
    _docEl,
    _body,
    _isTouch,
    _pointerType,
    ScrollTrigger,
    _root,
    _normalizer,
    _eventTypes,
    _context,
    _getGSAP = function _getGSAP() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _startup = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime = Date.now,
    _bridge = function _bridge(name, value) {
  return value;
},
    _integrate = function _integrate() {
  var core = ScrollTrigger.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;

  _bridge = function _bridge(name, value) {
    return data[name](value);
  };
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _isViewport = function _isViewport(el) {
  return !!~_root.indexOf(el);
},
    _addListener = function _addListener(element, type, func, passive, capture) {
  return element.addEventListener(type, func, {
    passive: passive !== false,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll = function _onScroll() {
  return _normalizer && _normalizer.isPressed || _scrollers.cache++;
},
    _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
  var cachingFunc = function cachingFunc(value) {
    // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
    if (value || value === 0) {
      _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.

      var isNormalizing = _normalizer && _normalizer.isPressed;
      value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!

      f(value);
      cachingFunc.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
    } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
      cachingFunc.cacheID = _scrollers.cache;
      cachingFunc.v = f();
    }

    return cachingFunc.v + cachingFunc.offset;
  };

  cachingFunc.offset = 0;
  return f && cachingFunc;
},
    _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  })
},
    _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  })
},
    _getTarget = function _getTarget(t, self) {
  return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;
  // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
  _isViewport(element) && (element = _doc.scrollingElement || _docEl);

  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs

  var prev = _scrollers[i + offset],
      func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  func.target = element;
  prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.

  return func;
},
    _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
  var v1 = value,
      v2 = value,
      t1 = _getTime(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
    var t = _getTime();

    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value;
    } else {
      // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
      v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }
  },
      reset = function reset() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  },
      getVelocity = function getVelocity(latestValue) {
    var tOld = t2,
        vOld = v2,
        t = _getTime();

    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
  };

  return {
    update: update,
    reset: reset,
    getVelocity: getVelocity
  };
},
    _getEvent = function _getEvent(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
},
    _getAbsoluteMax = function _getAbsoluteMax(a) {
  var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
},
    _setScrollTrigger = function _setScrollTrigger() {
  ScrollTrigger = gsap.core.globals().ScrollTrigger;
  ScrollTrigger && ScrollTrigger.core && _integrate();
},
    _initCore = function _initCore(core) {
  gsap = core || _getGSAP();

  if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    _root = [_win, _doc, _docEl, _body];
    _clamp = gsap.utils.clamp;

    _context = gsap.core.context || function () {};

    _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

    _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function () {
      return _startup = 0;
    }, 500);

    _setScrollTrigger();

    _coreInitted = 1;
  }

  return _coreInitted;
};

_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }

  var _proto = Observer.prototype;

  _proto.init = function init(vars) {
    _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance,
        dragMinimum = vars.dragMinimum,
        type = vars.type,
        target = vars.target,
        lineHeight = vars.lineHeight,
        debounce = vars.debounce,
        preventDefault = vars.preventDefault,
        onStop = vars.onStop,
        onStopDelay = vars.onStopDelay,
        ignore = vars.ignore,
        wheelSpeed = vars.wheelSpeed,
        event = vars.event,
        onDragStart = vars.onDragStart,
        onDragEnd = vars.onDragEnd,
        onDrag = vars.onDrag,
        onPress = vars.onPress,
        onRelease = vars.onRelease,
        onRight = vars.onRight,
        onLeft = vars.onLeft,
        onUp = vars.onUp,
        onDown = vars.onDown,
        onChangeX = vars.onChangeX,
        onChangeY = vars.onChangeY,
        onChange = vars.onChange,
        onToggleX = vars.onToggleX,
        onToggleY = vars.onToggleY,
        onHover = vars.onHover,
        onHoverEnd = vars.onHoverEnd,
        onMove = vars.onMove,
        ignoreCheck = vars.ignoreCheck,
        isNormalizer = vars.isNormalizer,
        onGestureStart = vars.onGestureStart,
        onGestureEnd = vars.onGestureEnd,
        onWheel = vars.onWheel,
        onEnable = vars.onEnable,
        onDisable = vars.onDisable,
        onClick = vars.onClick,
        scrollSpeed = vars.scrollSpeed,
        capture = vars.capture,
        allowClicks = vars.allowClicks,
        lockAxis = vars.lockAxis,
        onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = gsap.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
        onStopDelayedCall,
        dragged,
        moved,
        wheeled,
        locked,
        axis,
        self = this,
        prevDeltaX = 0,
        prevDeltaY = 0,
        passive = vars.passive || !preventDefault,
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollX = scrollFuncX(),
        scrollY = scrollFuncY(),
        limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
        // for devices that accommodate mouse events and touch events, we need to distinguish.
    isViewport = _isViewport(target),
        ownerDoc = target.ownerDocument || _doc,
        deltaX = [0, 0, 0],
        // wheel, scroll, pointer/touch
    deltaY = [0, 0, 0],
        onClickTime = 0,
        clickCapture = function clickCapture() {
      return onClickTime = _getTime();
    },
        _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
      return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    },
        onStopFunc = function onStopFunc() {
      self._vx.reset();

      self._vy.reset();

      onStopDelayedCall.pause();
      onStop && onStop(self);
    },
        update = function update() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;

      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }

      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }

      if (moved || dragged) {
        onMove && onMove(self);

        if (dragged) {
          onDrag(self);
          dragged = false;
        }

        moved = false;
      }

      locked && !(locked = false) && onLockAxis && onLockAxis(self);

      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }

      id = 0;
    },
        onDelta = function onDelta(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;

      self._vx.update(x);

      self._vy.update(y);

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }

      if (axis !== "y") {
        deltaX[2] += x;

        self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.

      }

      if (axis !== "x") {
        deltaY[2] += y;

        self._vy.update(y, true);
      }

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        _onDrag = function _onDrag(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
      self.x = x;
      self.y = y;

      if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
        onDrag && (dragged = true);
        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
        isDragging || onDragStart && onDragStart(self);
      }
    },
        _onPress = self.onPress = function (e) {
      if (_ignoreCheck(e, 1) || e && e.button) {
        return;
      }

      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;

      self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.


      self._vy.reset();

      _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);

      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    },
        _onRelease = self.onRelease = function (e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

      var isTrackingDrag = !isNaN(self.y - self.startY),
          wasDragging = self.isDragging,
          isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
      eventData = _getEvent(e);

      if (!isDragNotClick && isTrackingDrag) {
        self._vx.reset();

        self._vy.reset(); //if (preventDefault && allowClicks && self.isPressed) { // check isPressed because in a rare edge case, the inputObserver in ScrollTrigger may stopPropagation() on the press/drag, so the onRelease may get fired without the onPress/onDrag ever getting called, thus it could trigger a click to occur on a link after scroll-dragging it.


        if (preventDefault && allowClicks) {
          gsap.delayedCall(0.08, function () {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }

      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, isDragNotClick);
    },
        _onGestureStart = function _onGestureStart(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    },
        _onGestureEnd = function _onGestureEnd() {
      return (self.isGesturing = false) || onGestureEnd(self);
    },
        onScroll = function onScroll(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = scrollFuncX(),
          y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    },
        _onWheel = function _onWheel(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    },
        _onMove = function _onMove(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      onStop && onStopDelayedCall.restart(true);
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    },
        _onHover = function _onHover(e) {
      self.event = e;
      onHover(self);
    },
        _onHoverEnd = function _onHoverEnd(e) {
      self.event = e;
      onHoverEnd(self);
    },
        _onClick = function _onClick(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };

    onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;

    _context(this);

    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);

        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, passive, capture);

          _addListener(ownerDoc, _eventTypes[2], _onRelease);

          _addListener(ownerDoc, _eventTypes[3], _onRelease);

          allowClicks && _addListener(target, "click", clickCapture, true, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }

        self.isEnabled = true;
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }

      return self;
    };

    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        if (self.isPressed) {
          self._vx.reset();

          self._vy.reset();

          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }

        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

        _removeListener(target, "wheel", _onWheel, capture);

        _removeListener(target, _eventTypes[0], _onPress, capture);

        _removeListener(ownerDoc, _eventTypes[2], _onRelease);

        _removeListener(ownerDoc, _eventTypes[3], _onRelease);

        _removeListener(target, "click", clickCapture, true);

        _removeListener(target, "click", _onClick);

        _removeListener(ownerDoc, "gesturestart", _onGestureStart);

        _removeListener(ownerDoc, "gestureend", _onGestureEnd);

        _removeListener(target, _pointerType + "enter", _onHover);

        _removeListener(target, _pointerType + "leave", _onHoverEnd);

        _removeListener(target, _pointerType + "move", _onMove);

        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };

    self.kill = self.revert = function () {
      self.disable();

      var i = _observers.indexOf(self);

      i >= 0 && _observers.splice(i, 1);
      _normalizer === self && (_normalizer = 0);
    };

    _observers.push(self);

    isNormalizer && _isViewport(target) && (_normalizer = self);
    self.enable(event);
  };

  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);

  return Observer;
}();
Observer.version = "3.12.5";

Observer.create = function (vars) {
  return new Observer(vars);
};

Observer.register = _initCore;

Observer.getAll = function () {
  return _observers.slice();
};

Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};

_getGSAP() && gsap.registerPlugin(Observer);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTrigger", function() { return ScrollTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observer_js__ = __webpack_require__(58);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _normalizer,
    _ignoreMobileResize,
    _baseScreenHeight,
    _baseScreenWidth,
    _fixIOSBug,
    _context,
    _scrollRestoration,
    _div100vh,
    _100vh,
    _isReverted,
    _clampingMax,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _parseClamp = function _parseClamp(value, type, self) {
  var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  self["_" + type + "Clamp"] = clamp;
  return clamp ? value.substr(6, value.length - 7) : value;
},
    _keepClamp = function _keepClamp(value, clamp) {
  return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
},
    _rafBugFix = function _rafBugFix() {
  return _enabled && requestAnimationFrame(_rafBugFix);
},
    // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
_pointerDownHandler = function _pointerDownHandler() {
  return _pointerIsDown = 1;
},
    _pointerUpHandler = function _pointerUpHandler() {
  return _pointerIsDown = 0;
},
    _passThrough = function _passThrough(v) {
  return v;
},
    _round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getViewportDimension = function _getViewportDimension(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["a" /* _getProxyProp */])(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _100vh;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
  var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
  return (a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["a" /* _getProxyProp */])(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~__WEBPACK_IMPORTED_MODULE_0__Observer_js__["b" /* _proxies */].indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref2) {
  var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["a" /* _getProxyProp */])(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _endAnimation = function _endAnimation(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
},
    _callback = function _callback(self, func) {
  if (self.enabled) {
    var result = self._ctx ? self._ctx.add(function () {
      return func(self);
    }) : func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
},
    _abs = Math.abs,
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
  var position = _getComputedStyle(element).position;

  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
  var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
    return a - b;
  });
  return a ? function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var i;

    if (!direction) {
      return snap(value);
    }

    if (direction > 0) {
      value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  } : function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _wheelListener = function _wheelListener(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler;

  if (scrollFunc) {
    func(el, "wheel", scrollFunc);
    func(el, "touchmove", scrollFunc);
  }
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["a" /* _getProxyProp */])(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */] ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _rafID,
    _sync = function _sync() {
  return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
},
    _onScroll = function _onScroll() {
  // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
  if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
    // if the user is dragging the scrollbar, allow it.
    __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].cache++;

    if (_normalizer) {
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
    } else {
      _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110

    }

    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _setBaseDimensions = function _setBaseDimensions() {
  _baseScreenWidth = _win.innerWidth;
  _baseScreenHeight = _win.innerHeight;
},
    _onResize = function _onResize() {
  __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].cache++;
  !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25) && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (trigger && (!media || trigger._ctx === media)) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert(true, true);
      }
    }
  }

  _isReverted = true;
  media && _revertRecorded(media);
  media || _dispatch("revert");
},
    _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
  // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
  __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].cache++;
  (force || !_refreshingAll) && __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].forEach(function (obj) {
    return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
  });
  _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
},
    _refreshingAll,
    _refreshID = 0,
    _queueRefreshID,
    _queueRefreshAll = function _queueRefreshAll() {
  // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function () {
      return id === _refreshID && _refreshAll(true);
    });
  }
},
    _refresh100vh = function _refresh100vh() {
  _body.appendChild(_div100vh);

  _100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;

  _body.removeChild(_div100vh);
},
    _hideAllMarkers = function _hideAllMarkers(hide) {
  return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (el) {
    return el.style.display = hide ? "none" : "block";
  });
},
    _refreshAll = function _refreshAll(force, skipRevert) {
  if (_lastScrollTime && !force && !_isReverted) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  _refresh100vh();

  _refreshingAll = ScrollTrigger.isRefreshing = true;

  __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].forEach(function (obj) {
    return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
  }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away


  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes

      obj(0);
    }
  });

  _triggers.slice(0).forEach(function (t) {
    return t.refresh();
  }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.


  _isReverted = false;

  _triggers.forEach(function (t) {
    // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
          original = t.pin[prop];
      t.revert(true, 1);
      t.adjustPinSpacing(t.pin[prop] - original);
      t.refresh();
    }
  });

  _clampingMax = 1; // pinSpacing might be propping a page open, thus when we .setPositions() to clamp a ScrollTrigger's end we should leave the pinSpacing alone. That's what this flag is for.

  _hideAllMarkers(true);

  _triggers.forEach(function (t) {
    // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
    var max = _maxScroll(t.scroller, t._dir),
        endClamp = t.vars.end === "max" || t._endClamp && t.end > max,
        startClamp = t._startClamp && t.start >= max;

    (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
  });

  _hideAllMarkers(false);

  _clampingMax = 0;
  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && requestAnimationFrame(function () {
        return obj.target.style.scrollBehavior = "smooth";
      });
      obj.rec && obj(obj.rec);
    }
  });

  _clearScrollMemory(_scrollRestoration, 1);

  _resizeDelay.pause();

  _refreshID++;
  _refreshingAll = 2;

  _updateAll(2);

  _triggers.forEach(function (t) {
    return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
  });

  _refreshingAll = ScrollTrigger.isRefreshing = false;

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _primary,
    _updateAll = function _updateAll(force) {
  if (force === 2 || !_refreshingAll && !_isReverted) {
    // _isReverted could be true if, for example, a matchMedia() is in the process of executing. We don't want to update during the time everything is reverted.
    ScrollTrigger.isUpdating = true;
    _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

    var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();

    _direction = _lastScroll > scroll ? -1 : 1;
    _refreshingAll || (_lastScroll = scroll);

    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;

        _dispatch("scrollEnd");
      }

      _time2 = _time1;
      _time1 = time;
    }

    if (_direction < 0) {
      _i = l;

      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }

      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }

    ScrollTrigger.isUpdating = false;
  }

  _rafID = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  var cache = pin._gsap;

  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }

  pin._gsap.swappedIn = false;
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.flexBasis = cs.flexBasis || "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */]) + _px;
    spacerStyle[_height] = _getSize(pin, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */]) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];

    if (pin.parentNode !== spacer) {
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }

    pin._gsap.swappedIn = true;
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
  containerAnimation && containerAnimation.seek(0);
  isNaN(value) || (value = +value); // convert a string number like "45" to an actual number

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = (value || "0").split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
    element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(trigger, self) || _body;
    bounds = _getBounds(element) || {};

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else {
    containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
    markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (clampZeroProp) {
    self[clampZeroProp] = value || -0.001;
    value < 0 && (value = 0);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    p1 = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }

  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
},
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue,
      last2 = last1;
  return function (value) {
    var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.

    if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
      // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
      value = current;
      onInterrupt && onInterrupt();
    }

    last2 = last1;
    last1 = value;
    return value;
  };
},
    _shiftMarker = function _shiftMarker(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value;
  gsap.set(marker, vars);
},
    // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["g" /* _getScrollFunc */])(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    initialValue = initialValue || getScroll();

    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function () {
      tween.kill();
      getTween.tween = 0;
    });

    change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    vars[prop] = scrollTo;
    vars.inherit = false;
    vars.modifiers = modifiers;

    modifiers[prop] = function () {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    };

    vars.onUpdate = function () {
      __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].cache++;
      getTween.tween && _updateAll(); // if it was interrupted/killed, like in a context.revert(), don't force an updateAll()
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;

  getScroll.wheelHandler = function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };

  _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.


  ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
  return getTween;
};

var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");

    _context(this);

    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        pinSpacer = _vars.pinSpacer,
        containerAnimation = _vars.containerAnimation,
        fastScrollEnd = _vars.fastScrollEnd,
        preventOverlaps = _vars.preventOverlaps,
        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */] : __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */],
        isToggle = !scrub && scrub !== 0,
        scroller = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(vars.scroller || _win),
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = ("pinType" in vars ? vars.pinType : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["a" /* _getProxyProp */])(scroller, "pinType") || isViewport && "fixed") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        lastSnap = 0,
        lastRefresh = 0,
        prevProgress = 0,
        scrollFunc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["g" /* _getScrollFunc */])(scroller, direction),
        tweenTo,
        pinCache,
        snapFunc,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        executingOnRefresh,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        pinMoves,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevScroll,
        prevAnimProgress,
        caMarkerSetter,
        customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.


    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;

    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }

    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */]),
      left: _getTweenCreator(scroller, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */])
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    self.scrubDuration = function (value) {
      scrubSmooth = _isNumber(value) && value;

      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          inherit: false,
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };

    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://gsap.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010

      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    if (snap) {
      // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }

      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].forEach(function (o) {
        return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
      }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters


      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
            refreshedRecently = _getTime() - lastRefresh < 500,
            tween = tweenTo.tween;

        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
              totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
              velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
              naturalEnd = progress + (snap.inertia === false ? 0 : change1),
              endValue,
              endScroll,
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete;
          endValue = snapFunc(naturalEnd, self);
          _isNumber(endValue) || (endValue = naturalEnd); // in case the function didn't return a number, fall back to using the naturalEnd

          endScroll = Math.round(start + endValue * change);

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            if (snap.inertia === false) {
              change1 = endValue - progress;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();

                if (animation) {
                  // the resolution of the scrollbar is limited, so we should correct the scrubbed animation's playhead at the end to match EXACTLY where it was supposed to snap
                  scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                }

                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)

      self.pin = pin;
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }

        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];

      var content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["a" /* _getProxyProp */])(scroller, "content") || scroller);

      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

      if (!useFixedPosition && !(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["b" /* _proxies */].length && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["a" /* _getProxyProp */])(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
          oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }

    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };

    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };

    self.revert = function (revert, temp) {
      if (!temp) {
        return self.kill(true);
      } // for compatibility with gsap.context() and gsap.matchMedia() which call revert()


      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });

        if (r) {
          _refreshing = self;
          self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
        }

        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }

        r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.

        _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.

        self.isReverted = r;
      }
    };

    self.refresh = function (soft, force, position, pinOffset) {
      // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;

      if (tweenTo.tween && !position) {
        // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }

      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.revert({
        kill: false
      }).invalidate();
      self.isReverted || self.revert(true, true);
      self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
          isFirstRefresh = change <= 0.01,
          offset = 0,
          otherPinOffset = pinOffset || 0,
          parsedEnd = _isObject(position) ? position.end : vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          pinnedContainer = self.pinnedContainer = vars.pinnedContainer && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(vars.pinnedContainer, self),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted,
          revertedPins,
          forcedOverflow,
          markerStartOffset,
          markerEndOffset;

      if (markers && _isObject(position)) {
        // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
        markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
      }

      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;

        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert(true, true);
        }

        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }

      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);

          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }

          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._startClamp && (self._startClamp += offset);

      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -0.001;
        end = Math.min(end, _maxScroll(scroller, direction));
      }

      change = end - start || (start -= 0.01) && 0.001;

      if (isFirstRefresh) {
        // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
        prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
      }

      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
        cs = _getComputedStyle(pin);
        isVertical = direction === __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */];
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;

        if (!max && end > 1) {
          // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://gsap.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
          forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };

          if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["g" /* _getScrollFunc */])(scroller, isVertical ? __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */] : __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */])();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;

          if (i) {
            spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

            spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }

          _setState(spacerState);

          if (pinnedContainer) {
            // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
            _triggers.forEach(function (t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }

          useFixedPosition && scrollFunc(prevScroll);
        } else {
          i = _getSize(pin, direction);
          i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);

          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }

        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity

      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }

      self.revert(false, true);
      lastRefresh = _getTime();

      if (snapDelayedCall) {
        lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
        // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.

        snapDelayedCall.restart(true);
      }

      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();

      if (!isNaN(markerStartOffset)) {
        // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
        markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);

        _shiftMarker(markerStartTrigger, direction, markerStartOffset);

        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));

        _shiftMarker(markerEndTrigger, direction, markerEndOffset);

        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }

      isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.

      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };

    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);

      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };

    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };

    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
          a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

      return (_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };

    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }

      var scroll = _refreshingAll === true ? prevScroll : self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled,
          isAtMax,
          isTakingAction;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
        if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.0001;
        } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) {
          clipped = 0.9999;
        }
      }

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }

        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, _body, bounds.top + (direction === __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */] ? _offset : 0) + _px, bounds.left + (direction === __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */] ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || isAtMax ? pinActiveState : pinState);

            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }

          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);

            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }

      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };

    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        isViewport || _addListener(scroller, "scroll", _onScroll);
        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }

        refresh !== false && self.refresh();
      }
    };

    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };

    self.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (containerAnimation) {
        // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
        var st = containerAnimation.scrollTrigger,
            duration = containerAnimation.duration(),
            _change = st.end - st.start;

        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }

      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };

    self.adjustPinSpacing = function (amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;

        _setState(spacerState);
      }
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert(true, true);
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          isViewport || _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;

      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });

      i || _refreshingAll || (self.scroll.rec = 0);

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }

      vars.onKill && vars.onKill(self);
    };

    _triggers.push(self);

    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);

    if (animation && animation.add && !change) {
      // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
      var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().

      self.update = function () {
        self.update = updateFunc;
        start || end || self.refresh();
      };

      gsap.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }

    pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();
      _windowExists() && window.document && ScrollTrigger.enable();
      _coreInitted = _enabled;
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }

    return _defaults;
  };

  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;

    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });

    _removeListener(_win, "wheel", _onScroll);

    _removeListener(_doc, "scroll", _onScroll);

    clearInterval(_syncInterval);

    _removeListener(_doc, "touchcancel", _passThrough);

    _removeListener(_body, "touchstart", _passThrough);

    _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

    _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

    _resizeDelay.kill();

    _iterateAutoRefresh(_removeListener);

    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].length; i += 3) {
      _wheelListener(_removeListener, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */][i], __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */][i + 1]);

      _wheelListener(_removeListener, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */][i], __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */][i + 2]);
    }
  };

  ScrollTrigger.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;

    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || _passThrough;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
      _scrollRestoration = _win.history.scrollRestoration || "auto";
      _lastScroll = _win.pageYOffset;
      gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (_body) {
        _enabled = 1;
        _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.

        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";

        _refresh100vh();

        _rafBugFix();

        __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */].register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */].isTouch;
        _fixIOSBug = __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */].isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503

        _ignoreMobileResize = __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */].isTouch === 1;

        _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.


        _root = [_win, _doc, _docEl, _body];

        if (gsap.matchMedia) {
          ScrollTrigger.matchMedia = function (vars) {
            var mm = gsap.matchMedia(),
                p;

            for (p in vars) {
              mm.add(p, vars[p]);
            }

            return mm;
          };

          gsap.addEventListener("matchMediaInit", function () {
            return _revertAll();
          });
          gsap.addEventListener("matchMediaRevert", function () {
            return _revertRecorded();
          });
          gsap.addEventListener("matchMedia", function () {
            _refreshAll(0, 1);

            _dispatch("matchMedia");
          });
          gsap.matchMedia("(orientation: portrait)", function () {
            // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
            _setBaseDimensions();

            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }

        _setBaseDimensions();

        _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


        var bodyStyle = _body.style,
            border = bodyStyle.borderTopStyle,
            AnimationProto = gsap.core.Animation.prototype,
            bounds,
            i;
        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)

        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(_body);
        __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */].m = Math.round(bounds.top + __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */].sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */].m = Math.round(bounds.left + __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */].sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.

        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function () {
          return _startup = 0;
        });

        _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


        _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://gsap.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


        _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

        _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

        _transformProp = gsap.utils.checkPrefix("transform");

        _stateProps.push(_transformProp);

        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function () {
          var w = _win.innerWidth,
              h = _win.innerHeight;

          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];

        _iterateAutoRefresh(_addListener);

        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });

        for (i = 0; i < __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].length; i += 3) {
          _wheelListener(_removeListener, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */][i], __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */][i + 1]);

          _wheelListener(_removeListener, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */][i], __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */][i + 2]);
        }
      }
    }
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(target),
        i = __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].indexOf(t),
        isViewport = _isViewport(t);

    if (~i) {
      __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].splice(i, isViewport ? 6 : 2);
    }

    if (vars) {
      isViewport ? __WEBPACK_IMPORTED_MODULE_0__Observer_js__["b" /* _proxies */].unshift(_win, vars, _body, vars, _docEl, vars) : __WEBPACK_IMPORTED_MODULE_0__Observer_js__["b" /* _proxies */].unshift(t, vars);
    }
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function (t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };

  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(element) : element).getBoundingClientRect(),
        offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };

  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(element));
    var bounds = element.getBoundingClientRect(),
        size = bounds[horizontal ? _width : _height],
        offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };

  ScrollTrigger.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function (t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });

    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function (f) {
        return f();
      });
    }
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.12.5";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 5);

      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
    }
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};

ScrollTrigger.update = function (force) {
  return ++__WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].cache && _updateAll(force === true ? 2 : 0);
};

ScrollTrigger.clearScrollMemory = _clearScrollMemory;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */] : __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */]);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["g" /* _getScrollFunc */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(element), horizontal ? __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */] : __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */]);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.


ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.snapDirectional = _snapDirectional;

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).


var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
},
    _allowNativePanning = function _allowNativePanning(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (__WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */].isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
  }

  target === _docEl && _allowNativePanning(_body, direction);
},
    _overflow = {
  auto: 1,
  scroll: 1
},
    _nestedScroll = function _nestedScroll(_ref5) {
  var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;

  var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || gsap.core.getCache(node),
      time = _getTime(),
      cs;

  if (!cache._isScrollT || time - cache._isScrollT > 2000) {
    // cache for 2 seconds to improve performance.
    while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
      node = node.parentNode;
    }

    cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }

  if (cache._isScroll || axis === "x") {
    event.stopPropagation();
    event._gsapAllow = true;
  }
},
    // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
  return __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */].create({
    target: target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type: type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener(_doc, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */].eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener(_doc, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */].eventTypes[0], _captureInputs, true);
    }
  });
},
    _inputExp = /(input|label|select|textarea)/i,
    _inputIsFocused,
    _captureInputs = function _captureInputs(e) {
  var isInput = _inputExp.test(e.target.tagName);

  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
},
    _getScrollNormalizer = function _getScrollNormalizer(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";

  var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      onRelease = _vars2.onRelease,
      self,
      maxY,
      target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(vars.target) || _docEl,
      smoother = gsap.core.globals().ScrollSmoother,
      smootherInstance = smoother && smoother.get(),
      content = _fixIOSBug && (vars.content && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["f" /* _getTarget */])(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
      scrollFuncY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["g" /* _getScrollFunc */])(target, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */]),
      scrollFuncX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Observer_js__["g" /* _getScrollFunc */])(target, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */]),
      scale = 1,
      initialScale = (__WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */].isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth,
      wheelRefresh = 0,
      resolveMomentumDuration = _isFunction(momentum) ? function () {
    return momentum(self);
  } : function () {
    return momentum || 2.8;
  },
      lastRefreshID,
      skipTouchMove,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
    return skipTouchMove = false;
  },
      scrollClampX = _passThrough,
      scrollClampY = _passThrough,
      updateClamps = function updateClamps() {
    maxY = _maxScroll(target, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */]);
    scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */])));
    lastRefreshID = _refreshID;
  },
      removeContentOffset = function removeContentOffset() {
    content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
    scrollFuncY.offset = scrollFuncY.cacheID = 0;
  },
      ignoreDrag = function ignoreDrag() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);

      var offset = _round(self.deltaY / 2),
          scroll = scrollClampY(scrollFuncY.v - offset);

      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;

        var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);

        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
        content._gsap.y = y + "px";
        scrollFuncY.cacheID = __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].cache;

        _updateAll();
      }

      return true;
    }

    scrollFuncY.offset && removeContentOffset();
    skipTouchMove = true;
  },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
    // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
    updateClamps();

    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };

  content && gsap.set(content, {
    y: "+=0"
  }); // to ensure there's a cache (element._gsap)

  vars.ignoreCheck = function (e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };

  vars.onPress = function () {
    skipTouchMove = false;
    var prevScale = scale;
    scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };

  vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
    scrollFuncY.offset && removeContentOffset();

    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */].cache++; // make sure we're pulling the non-cached value
      // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)

      var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;

      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["e" /* _horizontal */]));
        tween.vars.scrollX = scrollClampX(endScroll);
      }

      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)

      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, __WEBPACK_IMPORTED_MODULE_0__Observer_js__["c" /* _vertical */]));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);

      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
        gsap.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }

    onRelease && onRelease(self);
  };

  vars.onWheel = function () {
    tween._ts && tween.pause();

    if (_getTime() - wheelRefresh > 1000) {
      // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };

  vars.onChange = function (self, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

    if (dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy,
          y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
          yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y);
      scrollFuncY(yClamped);
    }

    (dy || dx) && _updateAll();
  };

  vars.onEnable = function () {
    _allowNativePanning(target, normalizeScrollX ? false : "x");

    ScrollTrigger.addEventListener("refresh", onResize);

    _addListener(_win, "resize", onResize);

    if (scrollFuncY.smooth) {
      scrollFuncY.target.style.scrollBehavior = "auto";
      scrollFuncY.smooth = scrollFuncX.smooth = false;
    }

    inputObserver.enable();
  };

  vars.onDisable = function () {
    _allowNativePanning(target, true);

    _removeListener(_win, "resize", onResize);

    ScrollTrigger.removeEventListener("refresh", onResize);
    inputObserver.kill();
  };

  vars.lockAxis = vars.lockAxis !== false;
  self = new __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */](vars);
  self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.

  _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.

  _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping

  onStopDelayedCall = self._dc;
  tween = gsap.to(self, {
    ease: "power4",
    paused: true,
    inherit: false,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function () {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.

  return self;
};

ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};

ScrollTrigger.observe = function (vars) {
  return new __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */](vars);
};

ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }

  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }

  if (vars === false) {
    _normalizer && _normalizer.kill();
    _normalizer = vars;
    return;
  }

  var normalizer = vars instanceof __WEBPACK_IMPORTED_MODULE_0__Observer_js__["h" /* Observer */] ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};

ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: __WEBPACK_IMPORTED_MODULE_0__Observer_js__["i" /* _getVelocityProp */],
  _inputObserver: _inputObserver,
  _scrollers: __WEBPACK_IMPORTED_MODULE_0__Observer_js__["d" /* _scrollers */],
  _proxies: __WEBPACK_IMPORTED_MODULE_0__Observer_js__["b" /* _proxies */],
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gsap", function() { return gsapWithCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gsapWithCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return TweenMaxWithCSS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CSSPlugin_js__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return __WEBPACK_IMPORTED_MODULE_1__CSSPlugin_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Quad", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Cubic", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Quart", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Quint", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["u"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["v"]; });


var gsapWithCSS = __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["a" /* gsap */].registerPlugin(__WEBPACK_IMPORTED_MODULE_1__CSSPlugin_js__["a" /* CSSPlugin */]) || __WEBPACK_IMPORTED_MODULE_0__gsap_core_js__["a" /* gsap */],
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__(62);
} else {
  module.exports = require('./patch.dev');
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* noop */


/***/ }),
/* 63 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./images/i1/hero-l1.jpg": 13,
	"./images/i1/hero-l1@2x.jpg": 14,
	"./images/i1/hero-l2.png": 15,
	"./images/i1/hero-l2@2x.png": 16,
	"./images/i1/hero-l3.png": 17,
	"./images/i1/hero-l3@2x.png": 18,
	"./images/i1/hero-l4.png": 19,
	"./images/i1/hero-l4@2x.png": 20,
	"./images/i1/hero-l5.png": 21,
	"./images/i1/hero-l5@2x.png": 22,
	"./images/i1/hero-l6.png": 23,
	"./images/i1/hero-l6@2x.png": 24,
	"./images/i1/hero-l7.png": 25,
	"./images/i1/hero-l7@2x.png": 26,
	"./images/i1/lottie-2030": 1,
	"./images/i1/lottie-2030 copy": 0,
	"./images/i1/lottie-2030 copy.json": 0,
	"./images/i1/lottie-2030.json": 1,
	"./images/i1/lottie-2030.svg": 27,
	"./images/i1/lottie-432m": 3,
	"./images/i1/lottie-432m copy": 2,
	"./images/i1/lottie-432m copy.json": 2,
	"./images/i1/lottie-432m.json": 3,
	"./images/i1/lottie-432m.svg": 28,
	"./images/i1/s1.jpg": 29,
	"./images/i1/s1@2x.jpg": 30,
	"./images/i1/s2.jpg": 31,
	"./images/i1/s2@2x.jpg": 32,
	"./images/i1/s3.jpg": 33,
	"./images/i1/s3@2x.jpg": 34,
	"./images/i1/s4.jpg": 35,
	"./images/i1/s4@2x.jpg": 36,
	"./images/i1/s5.jpg": 37,
	"./images/i1/s5@2x.jpg": 38,
	"./images/i2/hero-l1.jpg": 39,
	"./images/i2/hero-l1@2x.jpg": 40,
	"./images/i2/hero-l2.png": 41,
	"./images/i2/hero-l2@2x.png": 42,
	"./images/i2/lottie-195": 4,
	"./images/i2/lottie-195.json": 4,
	"./images/i2/lottie-195.svg": 43,
	"./images/i2/lottie-2030": 5,
	"./images/i2/lottie-2030.json": 5,
	"./images/i2/lottie-2030.svg": 44,
	"./images/i2/s1.jpg": 45,
	"./images/i2/s1@2x.jpg": 46,
	"./images/i2/s2.jpg": 47,
	"./images/i2/s2@2x.jpg": 48,
	"./images/i2/s3.jpg": 49,
	"./images/i2/s3@2x.jpg": 50,
	"./images/i2/s4.jpg": 51,
	"./images/i2/s4@2x.jpg": 52,
	"./images/i2/s5.jpg": 53,
	"./images/i2/s5@2x.jpg": 54,
	"./images/i2/s6.jpg": 55,
	"./images/i2/s6@2x.jpg": 56
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 64;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(7);


/***/ })
/******/ ]);
//# sourceMappingURL=PIF.js.map