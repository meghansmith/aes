$(document).ready(function(){
	

	$("#menuButton").click(function(){
		$(".menuHide").slideToggle('fast');
		
	});
	$('a').click(function(){
	   $('html, body').animate({
	       scrollTop: $( $.attr(this, 'href') ).offset().top
	   }, 500);
	   return false;
	});


});
