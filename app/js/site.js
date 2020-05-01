$(document).ready(function(){
    /* Слайдер */

    $('.about_slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.equipment_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    /* Ползунок */


    $(".js-range-slider").ionRangeSlider({
        //skin: "big",
        min: 0,
        max: 1000,
        grid: true,
        // values: [0, 100, 300, 500, 1000],
        step: 10,
        from: 580,
        postfix: "<span> м<sup>2</sup></span>"
    });

    $(document).on("click", ".skv-btn", function(){
        $("input.skv").val($(".irs-single").text());
    });


    /* Модальное окно политики */

    $('body').on('click','.politic, .order_politic, .questions_politic, .politic-modal', function(){

        $.fancybox.open({
            src  : '#modal-polit-fancybox',
            type : 'inline',
            smallBtn: false,
            buttons: ""
        });

        return false;
    });


    /* Переход по якорям */

    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 1500);

    });

    /*  Анимация AOS  */

    aos_onload();

    function aos_onload(){
        setTimeout(function() {
            AOS.init();

            AOS.init({
                duration: 800,
                once: true
            });
        }, 10);
    }

    // window.onload = function() {
    //     aos_onload();
    // };


    $('body').on('click','.menu-item, .modal-close-form', function(){
        if (window.innerWidth <= 1200) {
            $(".nav-mobile-block").click();
        }

    });

    /* Тултип */

    $('.service_item').tooltipster({
        theme: 'tooltipster-noir',
        contentCloning: true,
        interactive: true,
        maxWidth: 400,
        trigger: 'hover'
    });


});

/* Маска телефона */

$('input[type="tel"]').mask("+7 (999) 999-99-99");


/* Библиотека alertify */

alertify.set('notifier', 'position', 'bottom-right');
alertify.set('notifier', 'delay', 10);

document.addEventListener('wpcf7mailsent', function( event ) {
    alertify.success(event.detail.apiResponse.message);
}, false);

document.addEventListener('wpcf7invalid', function( event ) {
    alertify.warning(event.detail.apiResponse.message);
}, false);

document.addEventListener('wpcf7mailfailed', function( event ) {
    alertify.error(event.detail.apiResponse.message);
}, false);


$(document).on('click', '.wpcf7-submit', function(e){
    if( $('.ajax-loader').hasClass('is-active') ) {
        e.preventDefault();
        return false;
    }
});


    /* Мобильная навигация */


$(document).mouseup(function (e){ // событие клика по веб-документу
    if ($(".header .nav-mobile-block").hasClass("active-menu")) {
        var div = $(".mobile-menu-fixed"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $("header .nav-mobile-block").click();
        }
    }
});

$('body').on('click','.nav-mobile-block', function(){
    if ($(this).hasClass("active-menu")) {
        $(this).removeClass("active-menu");
        $('.mobile-menu-fixed').stop().css({
            "right" : "-300px"
        });
        $("body, html").removeClass("no-scroll");
    }else{
        $(this).addClass("active-menu");
        $('.mobile-menu-fixed').stop().css({
            "right" : "0px"
        });
        $("body, html").addClass("no-scroll");
    }
});



