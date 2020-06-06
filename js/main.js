$(document).ready(function() {
  let myCalendar = new VanillaCalendar({
    selector: '#Calendar',
    date: new Date(),
    todaysDate: new Date()
  });
  $('.change-password').click(function() {
    $('.modal').show();
  });
  $('.modal-close').click(function() {
    $('.modal').hide();
  });
});