
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
     }


$(function () {
		$('.list_img').click(function (){
			
			if($(this).hasClass('on')){
				return false;
			}
			
			if($('.list_img.on').size()>=3){
				$('.mask').fadeIn(1000);
				return false;
			}
			
			$(this).addClass('on');
			
			$('#num').html(3-$('.list_img.on').size());
			
			// setTimeout(function(){
			// 	$('.mask').addClass('on');
			// },1000);
			$('.mask').fadeIn(1000);
		})

			setTimeout(function () {
				$('.pop').addClass('on')
			},1000);
			
		
		$('.mask, .pop button').click(function(){
			// $('.mask').removeClass('on');
			$('.mask').fadeOut();
		})
	})
	

