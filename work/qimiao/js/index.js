//banner循环
jQuery(".banner").slide({mainCell:".bd ul",effect:"top",autoPlay:true});
//新闻
jQuery(".newshow").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
//底部广告
jQuery(".imgr_bd").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
//底部左边
$(function () {
	function nextjs() {
		$('.imgl_bd ul').stop().animate({'margin-left':-235},function () {
			$('.imgl_bd ul li:first').appendTo('.imgl_bd ul').parent()
			.css('margin-left',0);
		});
	}
	$('.imgl_bd .next').click(function () {
		nextjs();
	})
	$('.imgl_bd .prev').click(function () {
		$('.imgl_bd ul li:last').prependTo('.imgl_bd ul').parent()
		.css('margin-left',-235);
		$('.imgl_bd ul').stop().animate({'margin-left':0});
	})

	var l = setInterval(nextjs,2000);

	$('.imgl_bd').hover(function() {
		clearInterval(l);
		
	}, function() {
		l = setInterval(nextjs,2000);

	});
})