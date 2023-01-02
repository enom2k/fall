
//swiper slider
var default_slide6 = new Swiper('.swiper-container.swipefade', {

    slidesPerView: 1,
    effect: 'fade',

      navigation: {
        nextEl: '.sw6_next',
        prevEl: '.sw6_prev',
      },

    loop: true,
    speed: 500, 

    autoplay: {
        delay: 1500
    },
});
        


AOS.init({
  easing: 'ease-out-back',
  duration: 1500
});



hljs.initHighlightingOnLoad();

$('.hero__scroll').on('click', function(e) {
  $('html, body').animate({
    scrollTop: $(window).height()
  }, 1200);
});


$(document).ready(function(){
  var owl = $('.owl-carousel');
  
  owl.owlCarousel({
      loop: true,
      items: 1, 
      autoplay: true,
      slideTransition: 'linear',
      autoplaySpeed: 1500,
      smartSpeed: 1500,
      center: true,
  });    

  jQuery('.owl-carousel').trigger('play.owl.autoplay',[2000]);

function setSpeed(){
  jQuery('.owl-carousel').trigger('play.owl.autoplay',[4000]);
}

setTimeout(setSpeed, 1000);
  
});
