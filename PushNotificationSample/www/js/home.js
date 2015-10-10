$(document).ready(function(){
	$("#nav1").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#flight").offset().top},
	        'slow');
	});	
	$("#nav2").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#food").offset().top},
	        'slow');
	});	
	$("#nav3").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#cab").offset().top},
	        'slow');
	});	
	$("#flightButton").click(function(){
		window.location.href = "foodList.html"

	
	});
	$("#foodButton").click(function(){
		window.location.href = "foodList.html"

	
	});$("#cabButton").click(function(){
		window.location.href = "foodList.html"

	
	});
});
