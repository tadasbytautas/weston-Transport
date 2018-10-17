// Initiate carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:5,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:2000,
    autoplayHoverPause:false
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
