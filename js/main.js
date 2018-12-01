// Initiate carousel

$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplaySpeed: 2000,
  autoplayHoverPause: false
});

$(".play").on("click", function() {
  owl.trigger("play.owl.autoplay", [1000]);
});

$(".stop").on("click", function() {
  owl.trigger("stop.owl.autoplay");
});

// SMOOTH SCROLL

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        600,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// SCROLL DOWN BUTTON

$(document).ready(function() {
  $(window).scroll(function() {
    if (
      $("body").height() <=
      $(window).height() + $(window).scrollTop() - 500
    ) {
      $("#section10").fadeOut();
    } else {
      $("#section10").fadeIn();
    }
  });
});

$(function() {
  $("a[href*=#]").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
