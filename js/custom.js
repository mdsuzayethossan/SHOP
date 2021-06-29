$(function (){
       // banner slider
   $('#banner').slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
});
       // banner slider
   $('#banner_2').slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
});
  //new slider
   $('.new_main').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

var containerEl = document.querySelector('.category_mix_main');
var mixer = mixitup(containerEl);




$('.feedback_details_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.feedback_main'
  });
  $('.feedback_main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feedback_details_main',
    centerMode: true,
    focusOnSelect: true,
    centerPadding: false,
    vertical: true,
    arrows:true,
    prevArrow:'.fup',
    nextArrow:'.fdown',
    autoplay:true
  });
  // scrolling

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if (scrolling > 150) {
    $('nav').addClass('bg');
  }
  else {
    $('nav').removeClass('bg');
  }

});

      

});