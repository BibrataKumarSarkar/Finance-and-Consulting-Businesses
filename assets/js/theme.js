/*-----------------------------------------------------------------------------------
    
    Template Name: Convis - Business & Consulting HTML Template
    Template URI: site.com
    Description: Convis is a clean, modern and professional Consulting & Financial HTML Template built for Consulting, Finance, Business, Corporate, Financial Advisors, Accountants, Consultants, Accountant, Startup companies, Finance businesses, and Consulting firms.
    Author: WebTend 
    Author URI: https://webtend.net/
    Version: 1.0

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Main Menu
    ## Document Ready
    ## Nav Overlay
    ## Preloader
    ## Sticky
    ## Back to top
    ## Counter
    ## Magnific-popup js
    ## Slick Slider
    ## Isotope Js
    ## WOW Js
    
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Main Menu

    function mainMenu() {

        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.consio-nav-menu'),
            navMenuLi = $('.consio-nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');

        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });

        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });

        // adds toggle button to li items that have children
        navMenu.find("li a").each(function() {
            if ($(this).children('.dd-trigger').length < 1) {
                if ($(this).next().length > 0) {
                    $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>')
                }
            }
        });

        // expands the dropdown menu on each click
        navMenu.find(".dd-trigger").on('click', function(e) {
            e.preventDefault();
            $(this).parent().parent().siblings().children('ul.sub-menu').slideUp();
            $(this).parent().next('ul.sub-menu').stop(!0, !0).slideToggle(350);
            $(this).toggleClass('sub-menu-open')
        });

        // check browser width in real-time
        function breakpointCheck() {
            var windowWidth = window.innerWidth;
            if (windowWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };

    // Document Ready
    $(document).ready(function() {
        mainMenu();
    });


    // Nav Overlay On

    $(".navbar-toggler,.nav-overlay").on('click', function(e) {
        $(".nav-overlay").toggleClass("active");
    });
    $(".nav-overlay").on('click', function(e) {
        $(".navbar-toggler").removeClass("active");
        $(".consio-nav-menu").removeClass("menu-on");
    });

    // Panel Widget

    var panelIcon = $('.offcanvas-toggle'),
        panelClose = $('.panel-close,.panel-overlay'),
        panelWrap = $('.offcanvas-panel');
    panelIcon.on('click', function(e) {
        panelWrap.toggleClass('panel-on');
        e.preventDefault();
    });
    panelClose.on('click', function(e) {
        panelWrap.removeClass('panel-on');
        e.preventDefault();
    });

    //===== Preloader

    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })

    //===== Sticky

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top

    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //===== Counter js

    if ($('.count').length) {
        $('.count').counterUp({
            delay: 100,
            time: 4000
        });
    }

    //===== Magnific-popup js

    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }

    if ($('.img-popup').length) {
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }

    //===== Slick slider js

    $('.hero-slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $('.hero-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
    if ($('.hero-slider').length) {
        $('.hero-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            fade: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><span><i class="far fa-arrow-left"></i>Prev</span></div>',
            nextArrow: '<div class="next"><span>Next<i class="far fa-arrow-right"></i></span></div>',
            responsive: [{
                breakpoint: 1100,
                settings: {
                    arrows: false
                }
            }]
        });
    }
    if ($('.hero-slider-two').length) {
        var sliderDots = $('.hero-dots');
        $('.hero-slider-two').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            fade: true,
            appendDots: sliderDots,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><span><i class="far fa-arrow-left"></i>Prev</span></div>',
            nextArrow: '<div class="next"><span>Next<i class="far fa-arrow-right"></i></span></div>',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });
    }
    if ($('.services-slider-one').length) {
        $('.services-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.case-slider').length) {
        var sliderArrows = $('.case-arrows');
        var sliderDots = $('.case-dots');
        $('.case-slider').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 800,
            appendDots: sliderDots,
            appendArrows: sliderArrows,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><span><i class="far fa-arrow-left"></i></span></div>',
            nextArrow: '<div class="next"><span><i class="far fa-arrow-right"></i></span></div>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.case-slider-two').length) {
        $('.case-slider-two').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><span><i class="far fa-arrow-left"></i>Prev</span></div>',
            nextArrow: '<div class="next"><span>Next<i class="far fa-arrow-right"></i></span></div>',
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.gallery-slider').length) {
        $('.gallery-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><span><i class="far fa-arrow-left"></i></span></div>',
            nextArrow: '<div class="next"><span><i class="far fa-arrow-right"></i></span></div>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }]
        });
    }
    if ($('.testimonial-slider-one').length) {
        $('.testimonial-slider-one').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false
                }
            }]
        });
    }
    if ($('.testimonial-slider-two').length) {
        var sliderDots = $('.testimonial-dots');
        $('.testimonial-slider-two').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            appendDots: sliderDots,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><span><i class="far fa-arrow-left"></i>Prev</span></div>',
            nextArrow: '<div class="next"><span>Next<i class="far fa-arrow-right"></i></span></div>'
        });
    }
    if ($('.product-big-slider').length) {
        $('.product-big-slider').slick({
            dots: false,
            arrows: false,
            speed: 800,
            autoplay: true,
            fade: true,
            asNavFor: '.product-thumb-slider',
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
        });
    }
    if ($('.product-thumb-slider').length) {
        $('.product-thumb-slider').slick({
            dots: false,
            arrows: false,
            speed: 800,
            autoplay: true,
            asNavFor: '.product-big-slider',
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>'
        });
    }
    if ($('.related-product-slider').length) {
        $('.related-product-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><span><i class="far fa-arrow-left"></i></span></div>',
            nextArrow: '<div class="next"><span><i class="far fa-arrow-right"></i></span></div>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                },
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }
    if ($('.clients-slider-one').length) {
        $('.clients-slider-one').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    //====== Isotope js

    $('.filter-nav-items li').on('click', function() {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $('.isotope-grid').isotope({
            filter: filterValue
        });
        $('.isotope-masonry-grid').isotope({
            filter: filterValue
        });
    });

    if ($('.consio-isotope').length) {
        $('.consio-isotope').imagesLoaded(function() {
            $('.isotope-grid').isotope({
                itemSelector: '.isotope-filter-item',
                layoutMode: 'fitRows'
            })
            $('.isotope-masonry-grid').isotope({
                itemSelector: '.isotope-filter-item',
                percentPosition: true,
                masonry: {
                    columnWidth: 1
                }
            })
        });
    }


    //===== Wow js

    new WOW().init();

})(window.jQuery);