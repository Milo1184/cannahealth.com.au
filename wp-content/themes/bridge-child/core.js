// JavaScript Document

var $ = jQuery.noConflict();

$(document).ready(function() {
	"use strict";

	// Smooth Scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		var subed;
		  subed = target.length ? true : false; 
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			if(subed) {
			  $('html, body').animate({
				scrollTop: target.offset().top
			  }, 1000);
			} else {
			  $('html, body').animate({
				scrollTop: target.offset().top - 6000
			  }, 1000);
			}
		  return false;
		}
	  } else {
		  var target = $(this).attr("href");
	$('html,body').animate(
	   {
		   scrollTop: $(target).offset().top
	   },2000,function()
	   {
		   location.hash = target;
	   });		  
	  }
		
	});
	
	$('.access-forms').click(function() {
		$('#state-pdfs').slideToggle('fast');

		return false;
	});
});
