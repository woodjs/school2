$(document).ready(function() {
  // $('.form-image').css('display','none');
  $('.form-link__reg').click(function() {
    $('.form-image').hide();
    $('form').animate({height: "toggle", opacity: "toggle"}, "show");
    // $('.form-auth').slideToggle();
    // $('.form-reg').slideToggle();
    $('.form').addClass( "form--reg" );
 });
});