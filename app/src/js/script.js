const humburger = $('#humburger');
const headerContent = $('#headerContent');

function openMenu() {
  humburger.addClass('open');
  headerContent.addClass('open');
}

function closeMenu() {
  humburger.removeClass('open');
  headerContent.removeClass('open');
}

$(document).ready(function () {


  humburger.click(function () {
    if ($(this).hasClass('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  $(window).scroll(function () {
    const scrollValue = $(this).scrollTop();
    scrollValue >= 1 ? closeMenu() : null;
  });

  function setPanePosition(position, pane) {
    var windowWidth = $(window).width();
    if (($('.map-img').length > 0) && (windowWidth >= 768)) {
      const mapBlock = $('.map-img');
      const positionY = position.offset().top - mapBlock.offset().top;
      const positionX = position.offset().left - mapBlock.offset().left;
      pane.css({
        top: positionY + 15 + 'px',
        left: positionX + 15 + 'px'
      });
    } else {
      pane.css({
        top: "",
        left: ""
      });
    }

  }

  // if (($('.map-img').length > 0) && ($(window).width() >= 768)) {
  setPanePosition($('.position1'), $('.pane1'));
  setPanePosition($('.position2'), $('.pane2'));
  setPanePosition($('.position3'), $('.pane3'));
  setPanePosition($('.position4'), $('.pane4'));
  setPanePosition($('.position5'), $('.pane5'));
  // }

  $(window).on('resize', function () {
    // if (($(window).width() >= 768)) {
    setPanePosition($('.position1'), $('.pane1'));
    setPanePosition($('.position2'), $('.pane2'));
    setPanePosition($('.position3'), $('.pane3'));
    setPanePosition($('.position4'), $('.pane4'));
    setPanePosition($('.position5'), $('.pane5'));
    // }
  });

  if ($('.testimonials-slider').length > 0) {
    initTestimonialsSlider();
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

function initTestimonialsSlider() {

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
}


svg4everybody();