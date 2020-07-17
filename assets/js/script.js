// Iniciando o nosso jQuery
$(function () {
  // abre e fecha menu
  $('.nav-toggle, .nav-close').click(function (event) {
    event.preventDefault();
    $('nav').toggleClass('active');
  });

  // fixar header quando rolar a página
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  });

});