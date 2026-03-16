$(function(){
	$('#anchor a').click(function(){
		var target = $(this.hash);
		if(target) {
			$('html, body').animate({ scrollTop: target.offset().top }, 400, "easeInOutQuart");
			return false;
		}
	});

	var anchor = $("#anchor");
	var offset = anchor.offset();
	$(window).scroll(function () {
		if($(window).scrollTop() > offset.top && $(window).scrollLeft() <= 15) {
			anchor.addClass('fixed');
		} else {
			anchor.removeClass('fixed');
		}
	});
});