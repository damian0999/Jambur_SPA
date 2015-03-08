$(document).ready(function(){
	$('.navbar').animate({
    opacity: .7
  }, 100);

  $('#arrow_header').hover(function(){
    $('#img_header').attr('src', 'img/gory.jpg');
  }, function(){
    $('#img_header').attr('src', 'img/gory_szary.jpg')
  });

  $('#arrow_header').hover(function(){
  	$(this).stop().animate({
  		fontSize: '92px'
  	}, 700)
  }, function(){
  	$(this).stop().animate({
  		fontSize: '68px'
  	}, 700)
  });

  $('arrow_header').hover(function(){
  	$(this).animate({

  	}, 1500);
  }, function(){
  	$(this).animate({

  	}, 1500);
  });

  $("#lightSlider").lightSlider({
    loop:true,
    controls: false
  });

  $('.carousel').carousel({
    interval: 5000 
  });

});