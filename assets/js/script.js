// Iniciando o nosso jQuery
$(function () {
  // abre e fecha menu
  $('.nav-toggle, .nav-close').click(function (event) {
    event.preventDefault();
    $('nav').toggleClass('active');
  });
});