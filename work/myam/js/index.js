$(function () {
	 $(window).scroll(function () {
	 	var h = $(window).scrollTop();
	 	if(h>300){
	 		$('.top').show();
	 	}else{$('.top').hide();}

	 	$('.top').click(function() {
	 		$('html,body').stop().animate({scrollTop:'0px'},1000);
	 	});
	 	
	 });
	 $('.gb').click(function(){
		
		if($('body').hasClass('on')){
			$('body').removeClass('on');
		}
		else{
			$('body').addClass('on');
		}
		
		return false;
	})

})
