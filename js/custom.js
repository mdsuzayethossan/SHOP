$(function (){
       // banner slider
   $('#banner').slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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