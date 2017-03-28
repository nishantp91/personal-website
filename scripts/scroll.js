$('.scroll_down').click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 200
  }, 1000);
  return false; //doesnt show #href link in url
});

