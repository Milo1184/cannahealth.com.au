// JavaScript Document

var $ = jQuery.noConflict();

$(document).ready(function() {
	"use strict";

	// Smooth Scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: target.offset().top
		  }, 1000);
		  return false;
		}
	  }
	});

	$('#patent-forms').click(function() {
		$('#state-pdfs').slideToggle('fast');

		return false;
	});
});
