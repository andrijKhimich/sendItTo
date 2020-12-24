const humburger = $(".js-humburger");
const headerMenu = $(".menu");
const scrollBtn = $(".scroll-btn");
const header = $(".header");
const logoImg = $(".logo img");


const pane1 = $(".pane1");
const position1Y = $(".position1").offset().top - $('.map-img').offset().top;
const position1X = $(".position1").offset().left - $('.map-img').offset().left;
pane1.css({
  top: position1Y,
  left: position1X
});

// const pane2 = $(".pane2");
// const position2Y = $(".position2").offset().top - $('.map-img').offset().top;
// const position2X = $(".position2").offset().left - $('.map-img').offset().left;
// pane2.css({
//   top: position2Y,
//   left: position2X
// });


function setPanePosition(element, pane) {
  const mapBlock = $('.map-img');
  const positionY = element.offset().top - mapBlock.offset().top;
  const positionX = element.offset().left - mapBlock.offset().left;
  pane.css({
    top: positionY + 15 + 'px',
    left: positionX + 15 + 'px'
  });
}

setPanePosition($('.position1'), $('.pane1'));
setPanePosition($('.position2'), $('.pane2'));
setPanePosition($('.position3'), $('.pane3'));
setPanePosition($('.position4'), $('.pane4'));
setPanePosition($('.position5'), $('.pane5'));




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