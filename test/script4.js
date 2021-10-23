var zmn = jQuery.noConflict()

zmn(document).ready(function(){
	zmn("#btn1").click(function(){
		zmn("#header").removeClass("no_hover");
		zmn("#header").addClass("hover");
	});
	zmn("#btn2").click(function(){
		zmn("#header").removeClass("hover");
		zmn("#header").addClass("no_hover");
	});
});