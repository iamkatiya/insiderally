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

$('.owl-photos').owlCarousel({
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

$(".form-send-block").on('submit', function (e) {
    e.preventDefault();
    var infoData = $(this).serialize();
    console.log(infoData);
    $.ajax({
        type: "POST",
        url: "send.php",
        data: infoData,
    }).done(function() {
        $('#exampleModal1').modal('hide');
        $('#exampleModal3').modal('show');
    });
});

$('input[name="dzen"]').on('change', function(){
    console.log($(this).attr('value'));
    if ($(this).attr('value')==='Своё Авто') {
        $('.form-send-block .button_go_on').text("ИТОГО: 20'000 РУБ");
    } else {
        $('.form-send-block .button_go_on').text("ИТОГО: 59'000 РУБ");
    }
});