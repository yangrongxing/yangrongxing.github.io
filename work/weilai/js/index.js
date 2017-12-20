// 适应移动设备
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 640 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}






$(function () {
	//进度加载
var images =new Array(),count = 0;

$('html,body').find('img').each(function(i) {
	images[i]=$(this).attr('src');
});
for (var i = 0; i < images.length; i++) {
	img = new Image;
	img.src = images[i];
	img.onload = function() {
		count++;
		var per = Math.floor(count/images.length*100);
		
		$('#loading h2').html('正在加载'+per+'%');
		if(count==images.length)
		{           
			$('#loading').fadeOut();
			$('.layout').fadeIn();	
		}
	}
 };
})
