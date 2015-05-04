// adding motion on page elements
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visibles = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

jQuery(document).ready(function($){
	$(".top-img").addClass("animated-slow fadeIn delay");
	$(".intro-text .logo").addClass("animated fadeInUp delay");
	$(".intro-text h1").addClass("animated fadeInUp delay2x");
	$(".intro-text .self-promo").addClass("animated fadeInUp delay3x");
	$(".intro-text .divisor").addClass("animated fadeIn delay3x");
});

$(window).scroll(function(event) {
	$(".who-am-i .pgf-one").addClass("animated fadeInUp pgf-delay1x");
	$(".who-am-i .pgf-two").addClass("animated fadeInUp pgf-delay2x");
	$(".who-am-i .pgf-three").addClass("animated fadeInUp pgf-delay3x");
	$(".who-am-i .pgf-four").addClass("animated fadeInUp pgf-delay4x");
	$(".who-am-i .btn-resume").addClass("animated fadeIn pgf-delay5x");

	// specialities section
	var specialItems = $('.speciality-content li .icon');
	specialItems.each(function(i, el) {
		var el = $(el);
		if (el.visibles(true)) {
		  el.addClass("animated fadeInUp pgf-delay1x"); 
		} 
	});

	// work section
	var workItem1 = $('.work .work-link-1');
	workItem1.each(function(i, el) {
		var el = $(el);
		if (el.visibles(true)) {
		  el.addClass("animated fadeIn delay1x"); 
		} 
	});
	var workItem2 = $('.work .work-link-2');
	workItem2.each(function(i, el) {
		var el = $(el);
		if (el.visibles(true)) {
		  el.addClass("animated fadeIn delay2x"); 
		} 
	});
	var workItem3 = $('.work .work-link-3');
	workItem3.each(function(i, el) {
		var el = $(el);
		if (el.visibles(true)) {
		  el.addClass("animated fadeIn delay3x"); 
		} 
	});
	var workItem4 = $('.work .work-link-4');
	workItem4.each(function(i, el) {
		var el = $(el);
		if (el.visibles(true)) {
		  el.addClass("animated fadeIn delay4x"); 
		} 
	});
	var workItem5 = $('.work .link-external');
	workItem5.each(function(i, el) {
		var el = $(el);
		if (el.visibles(true)) {
		  el.addClass("animated fadeIn delay5x"); 
		} 
	});

	var legendTittle = $('.section-legend h6');
	legendTittle.each(function(i, el) {
		var el = $(el);
		if (el.visibles(true)) {
		  el.addClass("animated fadeInUp delay2x"); 
		} 
	});
	var legendDivisor = $('.section-legend .divisor');
	legendDivisor.each(function(i, el) {
		var el = $(el);
		if (el.visibles(true)) {
		  el.addClass("animated fadeIn delay3x"); 
		} 
	});

	// toolKit section
	var toolkitItems = $('.toolkit ul li .tool');
	toolkitItems.each(function(i, el) {
		var el = $(el);
		if (el.visibles(true)) {
		  el.addClass("animated fadeInUp pgf-delay2x"); 
		} 
	});
	
});



// 	// media queries
// 	var mq = window.matchMedia('all and (max-width: 700px)');
// 	if(mq.matches) {
// 	    // the width of browser is more then 700px
// 	} else {
// 	    // the width of browser is less then 700px
// 	}


// Show and Hide fixed navbar
// $(document).scroll(function(){
//     var currentPos = $(this).scrollTop();
//     if (currentPos > 584) {
//         $('.holder-submenu-fixed').fadeIn();
//     } else {
//         $('.holder-submenu-fixed').fadeOut();
//     }
// });


// // Click event to scroll to top
// $('.scrollToTop').click(function(){
//     $('html, body').animate({scrollTop : 0},400);
//     return false;
// });








