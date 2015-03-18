$(document).ready(function(){
	$('#arrow').hover(function(){
		$('#img_header').attr('src', 'img/gory.jpg');
		$('#arrow').stop().animate({
			fontSize: '92px'
		}, 700);
		$('#navigation').stop().animate({
			opacity: 0
		}, 1000);
	}, function(){
		$('#img_header').attr('src', 'img/gory_szary.jpg');
		$('#arrow').stop().animate({
			fontSize: '68px'
		}, 700);
		$('#navigation').stop().animate({
			opacity: .7
		}, 1000);
	});
});