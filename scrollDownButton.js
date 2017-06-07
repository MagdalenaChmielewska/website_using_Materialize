$(function() {
	$('.arrow').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $('article').offset().top}, 500, 'linear');
	});
});
