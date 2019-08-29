if ($('.owl-photos')) {
    var carouselFirst = $('.owl-photos').owlCarousel({
        loop: true,
        mouseDrag: true,
        dots: true,
        nav: false,
        responsive: {
            200: {
                items: 2,
                center: true,
                dots: true,
                loop: true
            },
            1000: {
                items: 5,
                margin: 30,
                dots: false,
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
    $('.dg-container').gallery();
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




if ($('.owl-photos1')) {
    var carouselFirst = $('.owl-photos1').owlCarousel({
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
                items: 4,
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
    $('.owl-photos1').owlCarousel({
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
                items: 4,
                margin: 30,
            }
        }
    });
});

