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
});
