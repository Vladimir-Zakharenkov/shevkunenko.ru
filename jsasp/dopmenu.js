

jQuery(document).ready(function($) {

	var $dopmenu = $('.dop-menu');
	var	$menuaside = $('aside');
	/*$sidebarArrow = $('.sidebar-menu-arrow');*/

	// Hamburger button

	$dopmenu.on('click', function () {
		$(this).toggleClass('open-menu');
		$menuaside.toggleClass('aside-open');
	});


	// Sidebar navigation arrows

	//$sidebarArrow.click(function() {
	//	$(this).next().slideToggle(300);
	//});

});
