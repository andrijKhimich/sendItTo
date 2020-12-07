const humburger = $(".js-humburger");
const headerMenu = $(".menu");
const scrollBtn = $(".scroll-btn");
const header = $(".header");
const logoImg = $(".logo img");

function setInnerHeader() {
  logoImg.attr("src", logoBlackUrl);
  header.addClass("header_inner");
}

function setHomeHeader() {
  logoImg.attr("src", logoMainUrl);
  header.removeClass("header_inner");
}


function showContent() {
  $(".main-wrapper").removeClass("js-fadeIn");
}

$(document).ready(function () {
  $('.custom-select').niceSelect();
  // $('.selectpicker').selectpicker();
  // if ($('.inner-page').length > 0) {
  //   setInnerHeader();
  // } else {
  //   setHomeHeader();
  // }
  showContent();

  // humburger.click(function () {
  //   if ($(this).hasClass('open')) {
  //     closeMenu();
  //   } else {
  //     openMenu();
  //   }
});

// slow scroll to id

//   scrollBtn.click(function (e) {
//     e.preventDefault();
//     let link = $($(this).attr('href'))
//     $('html, body').animate({
//       scrollTop: link.offset().top
//     }, 1000);
//   });

//   showOnScroll($(window).scrollTop());

//   $(window).scroll(function () {
//     const scrollValue = $(this).scrollTop();
//     showOnScroll(scrollValue);
//     scrollValue >= 1 ? closeMenu() : null;

//     if (scrollValue > 1) {
//       header.addClass('sticky');
//     } else {
//       header.removeClass('sticky');
//       // logoImg.attr("src", logoColorUrl);
//     }
//   });

$('.testimonials-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  prevArrow: $('.slider-btn_prev'),
  nextArrow: $('.slider-btn_next'),
  responsive: [{
    breakpoint: 768,
    settings: {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});
// $('.testimonials-slider__wrapper').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000,
//   arrows: true,
//   prevArrow: $('.testimonials-slider_prev'),
//   nextArrow: $('.testimonials-slider_next')
// });
// });
svg4everybody();