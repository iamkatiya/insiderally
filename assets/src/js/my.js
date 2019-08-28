if ($('.owl-photos')) {
    var carouselFirst = $('.owl-photos').owlCarousel({
        loop: true,
        mouseDrag: true,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5,
                margin: 30,
            }
        }
    });
};
$('.new_items .next_prev_icons .carousel-control-next-icon').click(function() {
    carouselFirst.trigger('next.owl.carousel');
});
$('.new_items .next_prev_icons .carousel-control-prev-icon').click(function () {
    carouselFirst.trigger('prev.owl.carousel');
});
$(function (){
    new WOW().init();
    $('.owl-photos').owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5,
                margin: 30,
            }
        }
    });
    $(".slider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
    });
});

$(document).on('click', function(e) {
    if(e.target.closest('.nav-link')) {
        var navLink = e.target.closest('.nav-link').getAttribute("href");
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(navLink).offset().top
        }, 2000);
    }
});