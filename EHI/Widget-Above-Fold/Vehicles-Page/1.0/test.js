if ((document.querySelectorAll(ele).length > 0) && ( 960 < $(window).width() < 1100)) {
	$('section.band.vehicle-page-heading').attr('id','expand-height');
		if((document.querySelectorAll(ele).length > 0) && ($(window).width() > 960)){

		}
} else {
	isoTest.expTestTimer = window.setTimeout(function(){isoTest.resWidgetExpansionTest(ele);}, 100);
}