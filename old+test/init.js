


$(function ($) {



    $("#stats-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,

        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
		transitionStyle : "backSlide",
        autoPlay: false,
        autoHeight: true,
		autoWidth: true,
      });
     



});







  
