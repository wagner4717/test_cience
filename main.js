$(document).ready(function() {

	$(function() {
		main_top = $('.main').offset().top;
		$(window).scroll(function () {             
	    	if ($(window).scrollTop() > main_top) { 
	    		$('.icon1').addClass('animate__bounceInLeft');
	    		$('.icon2').addClass('animate__fadeInDownBig');
	    		$('.icon3').addClass('animate__backInRight');   
	    	} else {                                
	      		$('.icon1').removeClass('animate__bounceInLeft');
	      		$('.icon2').removeClass('animate__fadeInDownBig');
	    		$('.icon3').removeClass('animate__backInRight');  
	      	}	
	    });
	});
});