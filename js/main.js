// Initiate carousel

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
    autoplayHoverPause: false
});

$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})

$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})

// Transition effect for navbar
$(document).ready(function() {
    $(window).scroll(function() {
        // checks if window is scrolled more than 100px, adds/removes solid class
        if ($(this).scrollTop() > 100) {
            $('.navbar').removeClass('bg-transparent').addClass('bg-light');
        } else {
            $('.navbar').addClass('bg-transparent');
        }
    });
});

// Solid color navbar on mobile
$(document).ready(function() {
    if ($(window).width() < 992) {
       $('.navbar').removeClass('bg-transparent').addClass('bg-light');
    }
    else {
       // $('.navbar').addClass('bg-transparent');
    }
});
