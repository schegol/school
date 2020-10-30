//навигационная область с главным меню:
const menuZone = $('.nav');
//кнопка открытия главного меню на мобильных устройствах:
const menuToggle = $('.nav__mobile-btn');

$(document).ready(function() {
  //открытие мобильного меню:
  menuToggle.click(function() {
    menuZone.toggleClass('nav--open');
    if ($(this).parents('body').find('.menu-overlay').length) {
      $('.menu-overlay').remove();
    } else {
      $('.visible-content').append('<div class="menu-overlay"></div>');
    };
  });

  $('body').on('click', '.menu-overlay', function() {
    menuZone.removeClass('nav--open');
    $('.menu-overlay').remove();
  });

  //сворачивание подменю в навигационной области:
  const submenuToggle = $('.nav__parent-button');
  submenuToggle.click(function() {
    $(this).toggleClass('nav__parent-button--closed');
    $(this).parent('.nav__menu-item--parent').children('.nav__submenu').slideToggle(200);
  });

  $(document).keydown(function(event) {
    if (event.keyCode == 27) {
      if (menuZone.hasClass('nav--open')) {
        menuZone.removeClass('nav--open');
        $('.menu-overlay').remove();
      };
    };
  });

  //слайдер новостей на главной:
  const indexSlider = $('.index-news__slider');
  indexSlider.slick({
    prevArrow: $('.index-news .btn--arrow-prev'),
    nextArrow: $('.index-news .btn--arrow-next'),
    autoplay: false,
    autoplaySpeed: 5000,
    adaptiveHeight: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //открытие-заекрытие модалок:
  const openModal = function() {
    $('body').addClass('modal-open');
    $('body').find('.modal').addClass('modal--open');
  };

  const closeModal = function() {
    $('body').removeClass('modal-open');
    $('body').find('.modal--open').removeClass('modal--open');
  };

  const journalModalToggle = $('.journal__month-toggle');
  journalModalToggle.click(function(e) {
    e.preventDefault();
    openModal();
  });

  const modalCloseBtn = $('.modal__close-btn');
  const modalOverlay = $('.modal');
  const modalBox = $('.modal__box');

  modalCloseBtn.click(function() {
    closeModal();
  });

  modalOverlay.click(function (e) {
      if (!modalBox.is(e.target) && modalBox.has(e.target).length === 0) {
          closeModal();
      };
  });

  $(document).keydown(function(e) {
      if (e.keyCode == 27) {
          closeModal();
      };
  });
});

$(window).on('load resize', function() {
  if ($(window).width() > 1024) {
    if (menuZone.hasClass('nav--open')) {
      menuZone.removeClass('nav--open');
    };

    $('.menu-overlay').remove();
  }
});
