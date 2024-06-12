//Detect Mobile Browser in Javascript
//

var gtag;
var ge = {};
var players = [];
var clientWebsite = "KSA";
var isMobile = false;
var ga;
var ytemb = new RegExp('(http|https)?:\/\/(www[\.]|)?[\.]?youtube[\.]?com\/embed\/.*$');
var cURL;

if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

var shareObj;
var shareHeight;
var bttObj;


$(document).ready(function () {
    
	
		function reveal() {
		  var reveals = document.querySelectorAll(".reveal , .article-inner p, .standfirst .line, .quotemark, cite, .blockquote-container hr, .article-cols p, .column-image, .cta-container, #content .fic-header h2");

		  for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 50;

			if (elementTop < windowHeight - elementVisible) {
			  reveals[i].classList.add("active");
			} else {
			  reveals[i].classList.remove("active");
			}
		  }
		}

		window.addEventListener("scroll", reveal);
	
	
	
		
	
		  $('.listing-carousel').slick({
		  appendArrows:$('.carousel-nav'),
		  appendDots:$('.carousel-nav'),
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true,
			infinite: false,
		    dots: true,
			speed: 500,
			asNavFor: '.cover-carousel',
		    dotsClass: 'custom_paging',
		    customPaging: function (slider, i) {
		        console.log(slider);
		        return  (i + 1) + '/' + slider.slideCount;}
			});
	
	
			$('.cover-carousel').slick({
			  infinite: false,
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  dots: false,
			  arrows: false,
			  fade: true,
			  speed: 1000,
			  asNavFor: '.listing-carousel'
			});	
	

    cURL = window.location.href.replace("?", "QQ").replace("&", "-AND-").replace("&", "-AND-").replace("&", "-AND-").replace("&", "-AND-").replace("&", "-AND-");
	
    checkMobileImages();
    
    
    $(".o-cookie-message__action axx").click(function (e) {

        var t = $(this).html()
        var href = $(this).attr("href");
        
        setTimeout(function(){ 
            if (t.indexOf("Accept") > 0) {
                window.location = "/_templates/process-cookies.aspx?pageID=1&r=" + cURL;
            } else {
                window.location = href;
            }
        }, 500);
        
        //console.log(t);
        //console.log(href);
        
		e.preventDefault();
    });

		
	
	
    $('.share-container-inner p').click(function(){

        $('.share-box-container ul').toggle();

    });
	
	$(".play-page-video").click(function (e) {

        var t = $(this);
        var tid = t.attr("data-id");
        var video;
		
		if(tid != null && tid.length > 0){
			RestartAllVideos();
			t.hide();
			video = document.getElementById(tid);
			PlayVideo(video);
		}
		
		e.preventDefault();
    });
	
	
    //Cookie Policy
    $(".cookieBar .acceptBtn").click(function (e) {
        $(this).parent().slideUp();
        e.preventDefault();
    });
    //

    //Social Sharing
    $(".share-toggle").click(function (e) {
        $(".share-lightbox").fadeToggle();
        e.preventDefault();
    });

    $(".share-fade").click(function () {
        $(".share-lightbox").fadeToggle();
    });
    //

	
	
});






$(document).on("click", ".accordion-expand", function(event) { 
	
    // expand Accordion
    var url = window.location.href;
    var t = $(this).data("label")
    console.log("expand" + t);
    
    eventAction = "Expand Accordion: " + t;
    eventValue = t;
    eventCategory = "Accordion Click";
    eventLabel = url;

    
    AM_TrackEvent(eventAction, eventCategory, eventLabel, eventValue);
    
    
});

$(document).on("click", ".accordion-collapse", function(event) { 
     
    // collapse Accordion
    var url = window.location.href;
    var t = $(this).data("label")
    console.log("collapse" + t);
    
    eventAction = "Collapse Accordion: " + t;
    eventValue = t;
    eventCategory = "Accordion Click";
    eventLabel = url;

    
    AM_TrackEvent(eventAction, eventCategory, eventLabel, eventValue);
    
    	 
});



$(window).on('resize', function(){
    checkMobileImages();
});


$(window).on("load", function () {

});

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


function PlayVideo(video) {

    //Function that plays a HTML5 video when the play button is clicked
    //
    //Add the controls to the video and start playing.
    video.setAttribute("controls", "controls");
    video.play();
}

function RestartVideo(video) {

    //Function that restarts the video once it has finished playing.
    //
    //Once the video as finished reload it so it can be played again.
    var restartVideo = document.getElementById(video);
    restartVideo.removeAttribute("controls");
    restartVideo.load();
    $(".play-page-video[data-id=" + video + "]").show();
}

function RestartAllVideos() {

    //Function that loops through each video on the page that is NOT a background video, and stops them playing and reloads ready to play again.
    //
    $("video.video-html5").each(function () {
        $(this)[0].load();
        $(this)[0].removeAttribute("controls");
        $(this).prev(".play-page-video").show();
    });

}

function checkMobileImages() {
    
    
        var windowWidth = window.innerWidth;
        var mobileBreakPoint = "768";
    
        // Loop through all divs we want to check
        //
        $(".mobile-image-switch").each(function(i) {
            
            
            var useThisImage;

            var desktopImage = $(this).data("desktopimage");
            var mobileImage = $(this).data("mobileimage");
            var currImage = $(this).css("background-image");
            
            if (mobileImage.length<1) {
                mobileImage = desktopImage;
            }


            if (windowWidth < mobileBreakPoint) {
                // Mobile
                useThisImage = mobileImage;
            } else {
                // Desktop
                useThisImage = desktopImage;
            }
            
            useThisImage = "url('" + useThisImage + "')";
                    
            // If needed switch the image
            //
            if (useThisImage!=currImage) {
                $(this).css("background-image", useThisImage);
            }
            
        });
    
}
