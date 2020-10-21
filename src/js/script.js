//навигационная область с главным меню:
const menuZone = $('.nav');
//кнопка открытия главного меню на мобильных устройствах:
const menuToggle = $('.nav__mobile-btn');

$(document).ready(function() {
  //открытие мобильного меню:
  menuToggle.click(function () {
    menuZone.toggleClass('nav--open');
  });
});

$(window).on('load resize', function () {
  if ($(window).width() > 1024) {
    if (menuZone.hasClass('nav--open')) {
      menuZone.removeClass('nav--open');
    }
  }
});
