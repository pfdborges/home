// Landing Page
$(document).ready(function() {

	// function animInnerCircle1(){
		
	// }

// 	var workLinks = [".work-link-1", ".work-link-2", ".work-link-3", ".work-link-4"];
// 	var workLinksStagged = [".work-link-1 .stagged", ".work-link-2 .stagged", ".work-link-3 .stagged", ".work-link-4 .stagged"];


// 	// Link Work 1
// 	$(".work-link-1").mouseenter(function() {
// 		TweenMax.set(".work-link-1 .stagged", {y:50})
// 		TweenMax.staggerTo(".work-link-1 .stagged", 0.3, {y:0, opacity:1, ease:Back.easeOut}, 0.1);
// 		TweenMax.to(".work-img.nr-1", 0.3, {scale:1.1, opacity:0.4, ease:Linear.easeInOut});
// 	});

// 	$(".work-link-1").mouseleave(function() {
// 		TweenMax.to(".work-link-1 .stagged", 0.3, {y:50, opacity:0, ease:Back.easeOut});
// 		TweenMax.to(".work-img.nr-1", 0.3, {scale:1, opacity:1, ease:Linear.easeOut});
// 	});

// 	// Link Work 2
// 	$(".work-link-2").mouseenter(function() {
// 		TweenMax.set(".work-link-2 .stagged", {y:50})
// 		TweenMax.staggerTo(".work-link-2 .stagged", 0.3, {y:0, opacity:1, ease:Back.easeOut}, 0.1);
// 		TweenMax.to(".work-img.nr-2", 0.3, {scale:1.1, opacity:0.4, ease:Linear.easeInOut});
// 	});

// 	$(".work-link-2").mouseleave(function() {
// 		TweenMax.to(".work-link-2 .stagged", 0.3, {y:50, opacity:0, ease:Back.easeOut});
// 		TweenMax.to(".work-img.nr-2", 0.3, {scale:1, opacity:1, ease:Linear.easeOut});
// 	});

// 	// Link Work 3
// 	$(".work-link-3").mouseenter(function() {
// 		TweenMax.set(".work-link-3 .stagged", {y:50})
// 		TweenMax.staggerTo(".work-link-3 .stagged", 0.3, {y:0, opacity:1, ease:Back.easeOut}, 0.1);
// 		TweenMax.to(".work-img.nr-3", 0.3, {scale:1.1, opacity:0.4, ease:Linear.easeInOut});
// 	});

// 	$(".work-link-3").mouseleave(function() {
// 		TweenMax.to(".work-link-3 .stagged", 0.3, {y:50, opacity:0, ease:Back.easeOut});
// 		TweenMax.to(".work-img.nr-3", 0.3, {scale:1, opacity:1, ease:Linear.easeOut});
// 	});

// 	// Link Work 4
// 	$(".work-link-4").mouseenter(function() {
// 		TweenMax.set(".work-link-4 .stagged", {y:50})
// 		TweenMax.staggerTo(".work-link-4 .stagged", 0.3, {y:0, opacity:1, ease:Back.easeOut}, 0.1);
// 		TweenMax.to(".work-img.nr-4", 0.3, {scale:1.1, opacity:0.4, ease:Linear.easeInOut});
// 	});

// 	$(".work-link-4").mouseleave(function() {
// 		TweenMax.to(".work-link-4 .stagged", 0.3, {y:50, opacity:0, ease:Back.easeOut});
// 		TweenMax.to(".work-img.nr-4", 0.3, {scale:1, opacity:1, ease:Linear.easeOut});
// 	});

// });

	// center container in the middle of the page
	//$('.container').center();

// 	var imgRight;
// 	var imgLeft = new TimelineMax();

// 	imgLeft.to(".red-bg", 40, {scale:1.5, ease:Linear.easeInOut, repeat:-1, yoyo:true});

// 	TweenMax.to(".inner-container", 1, {opacity:1, ease:Back.easeOut});
// 	TweenMax.to(".left .tittle", 1, {opacity:1, left:"-87px", ease:Back.easeOut, delay:0.2});
// 	TweenMax.to(".right .tittle", 1, {opacity:1, right:"-87px", ease:Back.easeOut, delay:0.2});

// 	// left link
// 	$( ".inner-container.left" ).mouseenter(function() {
// 		var leftOver = new TimelineMax();
// 		leftOver.to(".left .back-box", 0.5, {alpha:1, left: "0", ease:Back.easeOut}, 'flag-left')
// 		  		.to(".left .tittle", 0.5, {alpha:1, left:"3px", ease:Back.easeOut}, 'flag-left')
// 	  	  		.to(".left .tittle", 0.02, {color: "#1a1924", ease:Back.easeOut}, 'flag-left')
// 	  	  		.to(".left .tittle em", 0.02, {color: "#ffffff", ease:Back.easeOut}, 'flag-left');
		
// 	  	$('.red-bg').addClass('active');
// 		$('.blue-bg').removeClass('active');
// 		imgLeft.play();

// 		if (!imgRight) { imgRight = new TimelineMax(); }
// 		imgRight.pause();
		

// 	});

// 	$( ".inner-container.left" ).mouseleave(function() {
// 		var leftMouseOut = new TimelineMax();
// 		leftMouseOut.to(".left .back-box", 1, {opacity:0, ease:Back.easeOut}, 'flag-leftMouseOut')
// 					.to(".left .tittle", 0.7, {left:"-87px", color: "#ffffff", ease:Back.easeOut}, 'flag-leftMouseOut')
// 					.to(".left .tittle em", 0.2, {color: "#c72137", ease:Back.easeOut}, 'flag-leftMouseOut');
// 	});


// 	// right link
// 	$( ".inner-container.right" ).mouseenter(function() {
// 		if (!imgRight) { imgRight = new TimelineMax(); }
// 		imgRight.to(".blue-bg", 40, {scale:1.5, ease:Linear.easeInOut, repeat:-1, yoyo:true});

// 		var rightOver = new TimelineMax();
// 		rightOver.to(".right .back-box", 0.5, {opacity:1, right: "0", ease:Back.easeOut}, 'flag-right')
// 			 .to(".right .tittle", 0.7, {opacity:1, right:"30px", ease:Back.easeOut}, 'flag-right')
// 	  		 .to(".right .tittle", 0.02, {color: "#1a1924", ease:Back.easeOut}, 'flag-right')
// 	  		 .to(".right .tittle em", 0.02, {color: "#ffffff", ease:Back.easeOut}, 'flag-right');

// 	  	$('.blue-bg').addClass('active');
// 		$('.red-bg').removeClass('active');
// 		imgRight.play();
// 		imgLeft.pause();
// 	});

// 	$( ".inner-container.right" ).mouseleave(function() {
// 		var rightMouseOut = new TimelineMax();
// 		rightMouseOut.to(".right .back-box", 1, {opacity:0, ease:Back.easeOut})
// 					 .to(".right .tittle", 0.7, {right:"-87px", color: "#ffffff", ease:Back.easeOut}, 0)
// 					 .to(".right .tittle em", 0.2, {color: "#0086e5", ease:Back.easeOut}, 0);
// 	});

// 	$( ".box.rght" ).click(function(ev) {
// 		var rightBoxClick = new TimelineMax();
// 		rightBoxClick.to(".box.lft", 0.5, {left: "-100px", autoAlpha:0, ease:Back.easeOut})
// 			   .to(".box.rght", 0.5, {left: "-50%", ease:Back.easeOut}, 0)
// 			   .to(".right .tittle", 0.7, {opacity:0, ease:Back.easeOut}, 0)
// 			   .to(".right .back-box", 0.5, {opacity:1, rotationY:180, perspective:500, transformOrigin:"50% 50% 100%", ease: Linear.easeIn}, 0)
// 			   .to(".right .back-box", 0.5, { scale:10, ease:Back.easeOut, onComplete: goToPageBlue}, "-=0.25");

// 		//rightBoxClick.timeScale(0.1);

// 		return false;
// 	});

// 	// media queries
// 	var mq = window.matchMedia('all and (max-width: 700px)');
// 	if(mq.matches) {
// 	    // the width of browser is more then 700px
// 	} else {
// 	    // the width of browser is less then 700px
// 	}

// function goToPageBlue(){
// 	goToPage('a.box.rght');
// }

// function goToPageRed(){
// 	goToPage('a.box.lft');
// }

// function goToPage( className ){
// 	window.location = $(className).attr('href');
// }

// });


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
	