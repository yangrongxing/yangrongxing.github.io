$(function () {
	$(window).scroll(function () {
		var a = $(window).scrollTop();
		var b = $(document).height();
		var c = $(window).height();
         console.log(a+'----'+b+'----'+c);
		 if(a+c >= b){
		 	$('.upload').fadeIn();
		 	$('.result ul').append('<li class="list_con">'+
						'<div class="list_img">'+
							'<img src="images/11.png" alt="" />'+
						'</div>'+ 
						'<div class="list_type">'+
							'<a href="#">百度外卖推广员</a>'+
							'<div class="time">06.20~06.25</div>'+
							'<div class="map">海淀区知春里</div>'+
						'</div>'+
						'<div class="list_pay">'+
							'<p>160元/天</p>'+
							'<div>'+
								'<img src="images/12.png" alt="" />'+
								'<img src="images/17.png" alt="" />'+ 
							'</div>'+
						'</div>'+
					'</li>');
		 }

	})
})