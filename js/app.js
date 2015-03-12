$(document).ready(function(){

	$(window).scroll(function(e) {
     currentposition = $(document).scrollTop();//aktualna pozycja względem początku          
     bannerheight = $("#navigation").height();//wysokość elementu, po którym menu ma stać się białe
      if(currentposition>690)
       {         
        $("#navigation").addClass("navbar_scroll");

        $('.page-scroll').stop().animate({
          bottom: '28px'
        }, 150);

        $('.jambur_nav').stop().animate({
          opacity: 1
        }, 100);
       }
       else
       {
        $("#navigation").removeClass("navbar_scroll");

        $('.page-scroll').stop().animate({
          bottom: '0px'
        }, 150);

        $('.jambur_nav').stop().animate({
          opacity: 0
        }, 100);
       }
  });
  
  $('#arrow_header').hover(function(){
    $('#img_header').attr('src', 'img/gory.jpg')
    $('#navigation').stop().animate({
      opacity: 0
    }, 1000);
  }, function(){
    $('#img_header').attr('src', 'img/gory_szary.jpg');
      $('#navigation').stop().animate({
        opacity: .7
      }, 1000);
  });

  $('#arrow_header').hover(function(){
  	$(this).stop().animate({
  		fontSize: '92px'
  	}, 700);
  }, function(){
  	$(this).stop().animate({
  		fontSize: '68px'
  	}, 700);
  });

  $('.carousel').carousel({
    interval: 5000 
  });

});