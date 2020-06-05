$(document).ready(function() {
  $('.form-link__reg').click(function() {
    // $('form').animate({height: "toggle", opacity: "toggle"}, "show");
    $('.form-reset').slideToggle();
    $('.form-auth').slideToggle();
    $('.form-reg').slideToggle();
    $('.form').addClass( "form--reg" );
 });
  $('.form-link__reset').click(function() {
    $('.form-reset').slideToggle();
    $('.form-auth').slideToggle();
  });
});