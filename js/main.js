$(function () {

    $('.header_slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider_arrows slider_arrows_left" src="images/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider_arrows slider_arrows_right" src="images/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider_dotshead'
    });

    $('.slider_dotshead').slick({

        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header_slider',
        responsive: [
            {
                breakpoint: 961,
                settings: "unslick"
            },
        ]
    });

    $('.serf_slider').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider_arrows slider_arrows_left" src="images/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider_arrows slider_arrows_right" src="images/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider_map',
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ]
    });

    $('.slider_map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.serf_slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1103,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
        ]
    });

    $('.travel_slider, .shop_slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider_arrows slider_arrows_left" src="images/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider_arrows slider_arrows_right" src="images/arrows-right.svg" alt=""></img>',
    });
    // Кнопки "+" и "-"
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });


    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);

    $('.quantity').on('click', function () {

        var parents = $(this).parents('.slick-current');
        let summ = $('.nights', parents).val() * $('.summ', parents).data('nights') + ($('.guests', parents).val() - 1) * $('.summ', parents).data('guests');
        $('.summ', parents).html('$' + summ);
    })

    $('.surfboard_box_circle').on('click', function () {

        $(this).toggleClass('active')

    });

    $('.menu_btn').on('click', function () {
        $('.menu').toggleClass('active');
    });



    $('.slider_dots').on('click', function () {
        $('.slider_dots_content').toggleClass('active');
    });


    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - 30
        }, 700);
    });


    new WOW().init();

});