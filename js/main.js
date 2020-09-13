$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    if ($(window).width() > 991) {
        $(window).scroll(function () {
            $(this).scrollTop() >= 500 ? $(".Arro-top").fadeIn(500) : $(".Arro-top").fadeOut(500);
        });


        $(".Arro-top").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1500);
        });
    }
    $('a[data-scroll]').click(function (e) {
        e.preventDefault();
        //Set Offset Distance from top to account for fixed nav
        var target = ('#' + $(this).data('scroll'));
        var $target = $(target);
        //Animate the scroll to, include easing lib if you want more fancypants easings
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 1000, 'swing');
    });
    new WOW().init();
    ///////// **nums** /////////
    if ($("div").hasClass("state-cont")) {
        var a = 0;
        $(window).scroll(function () {
            if (a == 0 && $(this).scrollTop() >= ($(".state-cont").offset().top) - 500) {
                $('.state-num span').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a++
            }
        });
    }

    ///////// **Select** /////////
    if ($(window).width() > 991) {
        $('.advanced-select').select2({});
        $('.bil-select.country-select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('#biling-country')
        });
        $('.bil-select.city-select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('#biling-city')
        });

        $('.log-select.country-select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('#log-country')
        });
        $('.log-select.city-select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('#log-city')
        });
    }

    if ($(window).width() <= 991) {
        $(".advanced-select").addClass("mobile-select");
        $(".advanced-select").wrap('<div class="mobile-select-cont"></div>');
        $(".bil-select").addClass("mobile-bil");
        $(".bil-select").wrap('<div class="mobile-bil-cont"></div>');
        $(".log-select").addClass("mobile-log");
        $(".log-select").wrap('<div class="mobile-log-cont"></div>');
    }

    ///////// **feats Slider** /////////
    if ($(window).width() <= 991) {
        $(".feats").addClass("feats-slider");
        $(".feats").addClass("swiper-container");
        $(".feats").removeClass("feats");
        $(".feats-slider .feat").wrap('<div class="swiper-slide"></div>');
        $(".feats-slider .swiper-slide").wrapAll('<div class="swiper-wrapper"></div>');
        var featsswiper = new Swiper('.feats-slider.swiper-container', {
            spaceBetween: 10,
            loop: true,
            speed: 500,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.feats-slider .swiper-pagination',
                clickable: true,
            },
        });
    }
    ///////// **subjects Slider** /////////
    if ($(window).width() <= 991) {
        $(".sub-imgs").addClass("sub-imgs-slider");
        $(".sub-imgs").addClass("swiper-container");
        $(".sub-imgs").removeClass("sub-imgs");
        $(".sub-imgs-slider .sub-img").wrap('<div class="swiper-slide"></div>');
        $(".sub-imgs-slider .swiper-slide").wrapAll('<div class="swiper-wrapper"></div>');
        var subimgsswiper = new Swiper('.sub-imgs-slider.swiper-container', {
            spaceBetween: 10,
            loop: true,
            speed: 500,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.sub-imgs-slider .swiper-pagination',
                clickable: true,
            },
        });
    }
    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        // autoplay: {
        //     delay: 5000,
        // },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
    });
    ///////// **bestseller Slider** /////////
    var bestsellerswiper = new Swiper('.bestseller .swiper-container', {
        spaceBetween: 31,
        loop: true,
        pagination: {
            el: '.bestseller .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bestseller .swiper-button-next',
            prevEl: '.bestseller .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    });
    ///////// **newArrival Slider** /////////
    var newArrivalswiper = new Swiper('.newArrival .swiper-container', {
        spaceBetween: 31,
        loop: true,
        pagination: {
            el: '.newArrival .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.newArrival .swiper-button-next',
            prevEl: '.newArrival .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    });
    ///////// **blog Slider** /////////
    var blogswiper = new Swiper('.blog-slider .swiper-container', {
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.blog-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.blog-slider .swiper-button-next',
            prevEl: '.blog-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    ///////// **videos Slider** /////////
    var videosswiper = new Swiper('.videos-slider .swiper-container', {
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.videos-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.videos-slider .swiper-button-next',
            prevEl: '.videos-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });

    ///////// **news Slider** /////////
    var newsswiper = new Swiper('.news-slider .swiper-container', {
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.news-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.news-slider .swiper-button-next',
            prevEl: '.news-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    ///////// **search btn** /////////
    if ($(window).width() <= 767) {
        $('.search-icon').click(function () {
            $(".search-cont").fadeIn(300);
            $(".search-form").addClass("open");
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.search-cont').click(function () {
            $("body").removeClass("overflow");
            $(".search-form").removeClass("open");
            $(".search-cont").fadeOut(400);
        });
        $('.search-form').click(function (e) {
            e.stopPropagation();
        });
    }
    ///////// **menu** /////////
    if ($(window).width() <= 1199) {
        $(".sub-display").unwrap()
        $(".sub-display").addClass("mo-panel")
        $(".sub-link .nav-a").addClass("mo-accordion")
        $(".xs-nav .drop-span").addClass("mo-accordion")
        $(".xs-nav .drop-ul").addClass("mo-panel")
        $(".sub-link .nav-a").removeAttr("href");
        ///////////////////////////////////////////////////
        $('.menu-btn').click(function () {
            $("nav").fadeIn(400);
            $(".nav-cont").addClass("nav-in");
            $("body").toggleClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.menu-close').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
    }
    ///////// **fltrs** /////////
    if ($(window).width() <= 991) {
        $('.fltr-btn').click(function () {
            $(".side-fltrs").toggleClass("open");
        });
    }
    ///////// **footer** /////////
    if ($(window).width() <= 991) {
        $(".footer-head").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }

    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).parent().find(".mo-panel").css('display') == 'none') {
            $(this).parent().find(".mo-panel").slideDown(500);
        } else {
            $(this).parent().find(".mo-panel").slideUp(500);
        }
        $(".mo-accordion").not(this).parent().find(".mo-panel").slideUp(500);
    })


    $('.collapse').on('show.bs.collapse', function () {
        $(this).siblings('div').addClass('active');
    });

    $('.collapse').on('hide.bs.collapse', function () {
        $(this).siblings('div').removeClass('active');
    });
    ///////// **check box** /////////
    $('.product-check input').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().parent().addClass("product-checked")
        } else {
            $(this).parent().parent().removeClass("product-checked")
        }
    });
    ///////// **related Slider** /////////
    if ($(window).width() <= 991) {
        $(".related-items").addClass("swiper-container");
        $(".related-item").wrap('<div class="swiper-slide"></div>');
        $(".related-items .swiper-slide").wrapAll('<div class="swiper-wrapper"></div>');
        var relatedswiper = new Swiper('.related-items.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: true,
            speed: 500,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.related-items .swiper-pagination',
                clickable: true,
            },
        });
    }
    ///////// **Range Slider** /////////
    if ($('div').hasClass("slider")) {
        var slider = document.getElementById('slider');
        var Max = slider.getAttribute("maxValue");
        var Min = slider.getAttribute("minValue");
        noUiSlider.create(slider, {
            start: [Min, Max],
            connect: true,
            tooltips: [true, true],
            format: {
                from: Number,
                to: function (value) {

                    if (document.dir == 'rtl') {
                        return (parseInt(value) + "<span>ريال </span>");
                    } else {
                        return (parseInt(value) + "<span> SAR</span>");
                    }

                }
            },
            range: {
                'min': 0,
                'max': 500
            }
        });
    }

    /////////QTY/////////
    var minVal = 1, maxVal = 100; // Set Max and Min values
    // Increase product quantity on cart page
    $(".qty-increas").on('click', function () {
        var $parentElm = $(this).parents(".qty-control");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qty-input").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qty-input").val(value);
    });
    // Decrease product quantity on cart page
    $(".qty-decreas").on('click', function () {
        var $parentElm = $(this).parents(".qty-control");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qty-input").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qty-input").val(value);
    });


    $(".input-ico .icon").on('click', function () {
        var input = $(this).siblings(input);
        $(this).toggleClass("active")

        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });


});