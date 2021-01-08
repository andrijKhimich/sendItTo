$(document).ready(function () {

  function setPanePosition(element, pane) {
    const mapBlock = $('.map-img');
    const positionY = element.offset().top - mapBlock.offset().top;
    const positionX = element.offset().left - mapBlock.offset().left;
    pane.css({
      top: positionY + 15 + 'px',
      left: positionX + 15 + 'px'
    });
  }

  if ($('.map-svg').length > 0) {
    setPanePosition($('.position1'), $('.pane1'));
    setPanePosition($('.position2'), $('.pane2'));
    setPanePosition($('.position3'), $('.pane3'));
    setPanePosition($('.position4'), $('.pane4'));
    setPanePosition($('.position5'), $('.pane5'));
  }


  $('.custom-select').niceSelect();
  $('.send-form__box .send-select').niceSelect();
  $('.phone-select').niceSelect();

  showContent();

  $(".form-tab").click(function () {
    $(".form-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".form-tab__item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

});

function showContent() {
  $(".main-wrapper").removeClass("js-fadeIn");
}

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