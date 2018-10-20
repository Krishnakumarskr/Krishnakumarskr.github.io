
// Scroll
// $(document).on('click', 'a[href^="#"]', function (event) {
//   event.preventDefault();

//   $('html, body').animate({
//       scrollTop: $($.attr(this, 'href')).offset().top
//   }, 500);
// });

$('a[href*=#]').click(function(event){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  event.preventDefault();
});


// var skillsDiv = $('#skill');

// $(window).on('scroll', function(){
// 	var winT = $(window).scrollTop(),
//   	winH = $(window).height(),
//   	skillsT = skillsDiv.offset().top;
//   if(winT + winH  > skillsT){
//   	$('.skillbar').each(function(){
//       $(this).find('.skillbar-bar').animate({
//         width:$(this).attr('data-percent')
//       },2500);
//       return true;
//     });
//   }
// });


(function($){
  $(function(){

    $('.sidenav').sidenav();
   

  }); // end of document ready
})(jQuery); // end of jQuery name space
