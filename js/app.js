$('a[href^="#"]').on('click', function(event) {
  ///console.log('click');
  var target = $(this.getAttribute('data-target'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 2000);
  }
});