$(document).ready(function () {
	$('.nav-link,a').click(function () {
		var t = $(this).attr('href');
		var st = $(t).offset().top - 30;
		$('html,body').animate({
			scrollTop: st
		}, 500);
	});
	$('#sub').click(function () {
		location.reload();
	})
	$('#clickchange,#clickchange，#clickchange').click(function () {
		$('#clickchange,#clickchange,#clickchange').removeClass("cl-bg");
		$(this).addClass("cl-bg");
	})
	$('#gotop').click(function () {
		$('html,body').animate({
			scrollTop: 0
		})
		return false;
	})
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('#gotop').fadeIn();
		} else {
			$('#gotop').fadeOut();
		}
	})
});