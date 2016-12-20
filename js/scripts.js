
jQuery(document).ready(function($) {

    // menu

    // $("ul.menu").superfish({
    //     hoverClass: "sfHover",
    //     delay: 800,
    //     animation: {
    //         opacity: "show"
    //     },
    //     animationOut: {
    //         opacity: "hide"
    //     },
    //     speed: "normal",
    //     speedOut: "fast",
    //     cssArrows: true
    // });

    $("ul.topLink").superfish({
        hoverClass: "sfHover",
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: 0,
        speedOut: "fast",
        cssArrows: true
    });

    // slider

    $(".sliderBox > div").responsiveSlides({
        namespace: "slider",
        auto: true,
        speed: 800,
        timeout: 5000,
        pager: true,
        nav: true,
        random: false,
        pause: false,
        pauseControls: true,
        prevText: "&#xe8eb;",
        nextText: "&#xe8ec;",
        maxwidth: ""
    });
    $(".slider a").attr("href", "javascript:;");
    $(".slider_nav.prev").addClass("fontIcon icon-angle-left");
    $(".slider_nav.next").addClass("fontIcon icon-angle-right");
    var sliderImageLoad = [];
    $(".sliderBox img").each(function() {
        var sliderImage = $.Deferred();
        $(this).load(sliderImage.resolve);
        sliderImageLoad.push(sliderImage);
    });
    $.when.apply(null, sliderImageLoad).done(function() {
        $(".fontIconLoading").remove();
    });

    // cover

    $(".cover01").each(function() {
        $(this).hover(function() {
            $(".coverBackground", this).stop().animate({
                opacity: '.75'
            }, {
                queue: false,
                duration: 200
            });
            $(".coverTitle", this).stop().animate({
                bottom: '55%'
            }, {
                queue: false,
                duration: 300
            });
            $(".coverButton", this).stop().animate({
                top: '55%'
            }, {
                queue: false,
                duration: 300
            });
        }, function() {
            $(".coverBackground", this).stop().animate({
                opacity: '0'
            }, {
                queue: false,
                duration: 200
            });
            $(".coverTitle", this).stop().animate({
                bottom: '100%'
            }, {
                queue: false,
                duration: 300
            });
            $(".coverButton", this).stop().animate({
                top: '100%'
            }, {
                queue: false,
                duration: 300
            });
        });
    });

    $(".cover02").each(function() {
        var cover02Offset01 = $(this).height();
        var cover02Offset02 = $(".coverBox", this).innerHeight();
        $(this).css("height", cover02Offset01);
        $(this).hover(function() {
            $(".imgBox img", this).stop().animate({
                marginTop: -cover02Offset02 / 2
            }, {
                queue: false,
                duration: 300
            });
            $(".coverBox", this).stop().animate({
                top: cover02Offset01 - cover02Offset02
            }, {
                queue: false,
                duration: 300
            });
        }, function() {
            $(".imgBox img", this).stop().animate({
                marginTop: '0'
            }, {
                queue: false,
                duration: 300
            });
            $(".coverBox", this).stop().animate({
                top: '100%'
            }, {
                queue: false,
                duration: 300
            });
        });
    });

    // masonry

    // var $container = $('.masonryBox');
    // $container.imagesLoaded( function(){
    //     $container.masonry({
    //         itemSelector: '.masonryGroup',
    //         fitWidth: true
    //     });
    // });

    // fancy box

    $(".fancybox").fancybox({
        helpers: {
            padding: 10,
            margin: 15,
            title : {
                type : 'outside'
            }
        }
    });

    // parallax

    $(".parallaxText").each(function() {
        var parallaxTextOffset = $(".parallaxText").height();
        $(this).css("margin-top", -parallaxTextOffset / 2);
    });

    // images scroll

    // $('.imageScrollBox-X').cxScroll({
    //     direction: 'right',
    //     step: 5,
    //     accel: 400,
    //     speed: 800,
    //     time: 4000,
    //     auto: false,
    //     hoverLock: true,
    //     prevBtn: true,
    //     nextBtn: true
    // });

    // anchor

    $(".anchor").click(function() {
        var id = '#' + $(this).attr("rel");
        $("html, body").animate({
            scrollTop: $(id).offset().top
        }, 600);
    });

    // form

    var formFix = $(".table_form").width();
    // $(".table_form .input-text").css("width", formFix);
    $(".table_form tr:last td:first").css("display", "none");
    $(".table_form div.submit").addClass("animatedParent animateOnce");
    $(".table_form #dosubmit").addClass("animated fadeInUpShort");

});
