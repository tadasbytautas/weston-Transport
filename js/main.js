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

// $(document).ready(function() {
//
//   var scrollLink = $('.scroll');
//
//   // Smooth scrolling
//   scrollLink.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1000 );
//   });
//
//   // Active link switching
//   $(window).scroll(function() {
//     var scrollbarLocation = $(this).scrollTop();
//
//     scrollLink.each(function() {
//
//       var sectionOffset = $(this.hash).offset().top - 20;
//
//       if ( sectionOffset <= scrollbarLocation ) {
//         $(this).parent().addClass('active');
//         $(this).parent().siblings().removeClass('active');
//       }
//     })
//
//   })
//
// })
