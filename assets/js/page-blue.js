function loader( ){
	var divValue = $('#value');
	var loaderTl = new TimelineMax();
	loaderTl.to(".loader-track", 2, {width:"100%", onUpdate: function(){ 
		// divValue.text(Math.floor(parseInt(this._targets[0].style.width,10)/10)*10+'%'); } // percentagem 10 em 10%
		divValue.text(parseInt(this._targets[0].style.width,10)+'%'); }
	})
	.to(".loader", 0.8, {opacity:0, display:"none", ease:Back.easeOut}, "+=0.15");
}

// page-blue.html
$(document).ready(function() {
	// $('.loader-track').verticalCenter();

	// loader();

	var tloader = new TimelineMax({delay:1});
		tloader.set(".loader-container .top", {skewY:"-30deg", scale: 5, top:"-100%"})
		.set(".loader-container .bottom", {skewY:"-30deg", scale: 5, bottom:"-100%"})
		.to(".loader-container .top", 1.5, { left: "-100%", autoAlpha:0, ease:Back.easeOut})
		.to(".loader-container .bottom", 1.5, { right: "-100%", autoAlpha:0, ease:Back.easeOut}, 0)
		.set(".loader-container", {display:"none"})
		

	
});