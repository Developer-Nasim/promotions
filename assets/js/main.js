(function($) {
  "use strict";
    
 
  // owlCarousel
  $(".hero-all-items").owlCarousel({
    loop: true, 
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: true,
    dots: true, 
  });
 
  // Nice Select
  $('select').niceSelect(); 



  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  }); 




})(jQuery);
