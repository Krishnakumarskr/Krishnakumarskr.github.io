(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
//Scroll
/*$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
<<<<<<< HEAD
});


var skillsDiv = jQuery('#skill');

jQuery(window).on('scroll', function() {
  var winT = jQuery(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
  if (winT +winH > skillsT) {
    jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
      }, 2500);
    });
  }
});

=======
});*?
>>>>>>> 064f938bf5e806902e0f30491af88cc5d64fb216
