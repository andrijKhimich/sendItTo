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
  $('.send-form__box .send-select').niceSelect();
  $('.phone-select').niceSelect();
  showContent();

  $(".form-tab").click(function () {
    $(".form-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".form-tab__item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
});

$('.testimonials-slider').slick({
  slidesToShow: 1,
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

svg4everybody();