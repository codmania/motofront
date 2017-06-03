$(document).ready(function () {
    "use strict";
    /**
     * loading page
     * smooth scroll
     * animate slider
     * video
     * scroll top
     * wow plugin -> http://mynameismatthieu.com/WOW/
     * mixItUp plugin -> https://www.kunkalabs.com/mixitup/
     * magnificPopup plugin ->http://dimsemenov.com/plugins/magnific-popup/
     * counter plugin ->https://github.com/bfintal/Counter-Up
     * progress-circle plugin ->https://github.com/pguso/jquery-plugin-circliful
     **/
        //loading page
    $(window).on("load",(function () {
        $(".loading-page .loader-inner ").fadeOut(1000, function () {
            $(this).parent().fadeOut(1000, function () {
                (this).remove();
             $("body").css("overflow-y", "auto");
            });
        });
    }));

    //smooth scroll to div
    $('.navbar-nav .nav-item a').on("click",(function () {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    }));

    //navbar-fixed
    var resize = $(".top-fixed-navbar .navbar");
    $(window).on("scroll",(function () {
        $(this).scrollTop() >= 100 ? resize.addClass("resize") : resize.removeClass("resize")
    }));

    var navTop = $(".bottom-fixed-navbar .navbar");
    $(window).on("scroll",(function () {
        $(this).scrollTop() >= 700 ? navTop.addClass("navbar-fixed-top resize") : navTop.removeClass("navbar-fixed-top resize")
    }));

    //sub-navTop
    var sub = $(".nav-top .navbar");
    $(window).on("scroll",(function () {
        $(this).scrollTop() >= 20 ? sub.addClass("resize") : sub.removeClass("resize")
    }));
    //Function to animate slider captions
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $('#carousel-example-with-caption'),
        $firstAnimatingElems = $myCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel();

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Pause carousel
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });
    $('.navbar-nav .nav-item').on("click",(function () {
        $(this).addClass('active').siblings().removeClass('active');
    }));

    //video
    $(".video .details").on('click', function () {
        $(this).parentsUntil('.video').css('display', 'none')
    });

//scroll top      
    var ScrollButton = $("#scroll-top");
    $(window).scroll(function () {
        $(this).scrollTop() >= 900 ? ScrollButton.show() : ScrollButton.hide();
    });
    ScrollButton.on("click",(function () {
        $("html,body").animate({scrollTop: 0}, 1000);

    }));
    /******blugins******/
        //wow
    new WOW().init();
    //mixItUp
    $('.grid').mixItUp();
    //portfolio
    $('.portfolio-popup').magnificPopup({
        delegate: 'a.img-link',// child items selector, by clicking on it popup will open
        type: 'image',
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
            }
        },

        gallery: {
            enabled: true
        }
        // other options
    });
    $(".shuffle li").on("click",(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    }));
    //counter
    $('.counter').counterUp({
        delay: 3,
        time: 1000
    });
    //progress-circle
    //progress-wordpress
    $("#progress-wordpress").circliful({
        animation: 1,  // if the circle should be animated initialy
        animationStep: 1,// how fast or slow the animation from 0 to 100
        foregroundBorderWidth: 15, // width of foreground circle border
        backgroundBorderWidth: 15, // width of background circle border
        percent: 90, // from 0 to 100
        text: 'wordpress',
        textBelow: true,
        textStyle: 'font-size: 12px',
        textColor: '#fff',  // font color
        fontColor: '#fff',   // font color
        foregroundColor: '#ffca61', // width of foreground circle border
        backgroundColor: 'rgba(107, 109, 111, 0.5)',
        animateInView: true,// animate circle on scroll into view
    });
    //progress-Joomla
    $("#progress-JoomIa").circliful({
        animation: 1,  // if the circle should be animated initialy
        animationStep: 1,// how fast or slow the animation from 0 to 100
        foregroundBorderWidth: 15, // width of foreground circle border
        backgroundBorderWidth: 15, // width of background circle border
        percent: 80, // from 0 to 100
        text: 'JoomIa',
        textBelow: true,
        textStyle: 'font-size: 12px',
        textColor: '#fff',  // font color
        fontColor: '#fff',   // font color
        foregroundColor: '#d1e573', // width of foreground circle border
        backgroundColor: 'rgba(107, 109, 111, 0.5)',
        animateInView: true,// animate circle on scroll into view
    });
    //progress-eCommerse   
    $("#progress-eCommerse").circliful({
        animation: 1,  // if the circle should be animated initialy
        animationStep: 1,// how fast or slow the animation from 0 to 100
        foregroundBorderWidth: 15, // width of foreground circle border
        backgroundBorderWidth: 15, // width of background circle border
        percent: 70, // from 0 to 100
        text: 'eCommerse',
        textBelow: true,
        textStyle: 'font-size: 12px',
        textColor: '#fff',  // font color
        fontColor: '#fff',   // font color
        foregroundColor: '#7bc4f6', // width of foreground circle border
        backgroundColor: 'rgba(107, 109, 111, 0.5)',
        animateInView: true,// animate circle on scroll into view
    });
    //progress-Html5    
    $("#progress-html5").circliful({
        animation: 1,  // if the circle should be animated initialy
        animationStep: 1,// how fast or slow the animation from 0 to 100
        foregroundBorderWidth: 15, // width of foreground circle border
        backgroundBorderWidth: 15, // width of background circle border
        percent: 60, // from 0 to 100
        text: 'HTML5',
        textBelow: true,
        textStyle: 'font-size: 12px',
        textColor: '#fff',  // font color
        fontColor: '#fff',   // font color
        foregroundColor: '#5ddf94', // width of foreground circle border
        backgroundColor: 'rgba(107, 109, 111, 0.5)',
        animateInView: true,// animate circle on scroll into view
    });
    //progress-css3    
    $("#progress-css3").circliful({
        animation: 1,  // if the circle should be animated initialy
        animationStep: 1,// how fast or slow the animation from 0 to 100
        foregroundBorderWidth: 15, // width of foreground circle border
        backgroundBorderWidth: 15, // width of background circle border
        percent: 40, // from 0 to 100
        text: 'CSS3',
        textBelow: true,
        textStyle: 'font-size: 12px',
        textColor: '#fff',  // font color
        fontColor: '#fff',   // font color
        foregroundColor: '#fc5b4d', // width of foreground circle border
        backgroundColor: 'rgba(107, 109, 111, 0.5)',
        animateInView: true,// animate circle on scroll into view
    });


   //map
    $(".map").on("click",(function() {
	    $(".map iframe").css("pointer-events", "auto");
    }));
 
     $(".maps").on("mouseleave",(function() {
        $(".map iframe").css("pointer-events", "none");
    }));

});