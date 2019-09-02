$('.owl-photos1').owlCarousel({
    mouseDrag: true,
    nav: false,
    responsive: {
        0: {
            items: 2,
            dots: true,
            loop: true,
            margin: 25,
        },
        600: {
            items: 3,
            dots: true,
            loop: true,
        },
        1000: {
            items: 4,
            margin: 30,
            dots: true,
            loop: false,
        }
    }
});

$('.gallery .owl-photos').owlCarousel({
    loop: true,
    mouseDrag: true,
    dots: true,
    nav: false,
    responsive: {
        200: {
            items: 2,
            margin: 25,
            center: true,
            dots: true,
            loop: true
        },
        1000: {
            items: 5,
            margin: 30,
            dots: true,
        }
    }
});

$('.friends .owl-photos').owlCarousel({
    loop: true,
    mouseDrag: true,
    dots: true,
    nav: false,
    responsive: {
        200: {
            items: 2,
            center: false,
            dots: true,
            loop: true
        },
        1000: {
            items: 5,
            margin: 30,
            dots: true,
        }
    }
});




$(function () {
    new WOW().init();
    $('.dg-container').gallery();
    $('.toggle').on('click', function () {
        $('.menu').addClass('active');
    });
    $('.close').on('click', function () {
        $('.menu').removeClass('active');
    });
});

$(document).on('click', function (e) {
    if (e.target.closest('.nav-link')) {
        var navLink = e.target.closest('.nav-link').getAttribute("href");
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(navLink).offset().top
        }, 2000);
    }
});

