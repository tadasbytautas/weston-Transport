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
// $(document).ready(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 100) {
//             $('.navbar').removeClass('bg-transparent').addClass('bg-light');
//         } else {
//             $('.navbar').addClass('bg-transparent');
//         }
//     });
// });
