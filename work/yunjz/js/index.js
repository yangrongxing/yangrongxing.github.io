

//适应移动端
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);
}


//图片轮播
$(function () {
	
    var currentIndex;//当前索引值
    var picTotal = $('.show_img img').length;//当前照片数量
    var ToDisplayPicNumber = 0;//当前自动轮播值
   
    

    var l = setInterval(autoDisplayPic,3000);//定时器

    function autoDisplayPic() {//轮播代码
    	ToDisplayPicNumber = (ToDisplayPicNumber + 1) % picTotal;
    	$('.show_img img').eq(ToDisplayPicNumber).fadeIn()
    	.siblings().hide()
    	.parent().siblings('ul').find('li').eq(ToDisplayPicNumber)
    	.addClass('currentNum').siblings().removeClass('currentNum');

    }


    $('.show_img img').mouseover(function () {//鼠标移入图片清除定时器
    	clearInterval(l);
    }).mouseout(function () {//鼠标移出图片恢复定时器
    	l = setInterval(autoDisplayPic,2000);
    })


});


//  选项卡特效
$(function () {
    
	var $div_li = $('.tab_menu ul li');
	$div_li.click(function () {
		$(this).addClass('selected')
		.siblings().removeClass('selected');
    var index = $div_li.index(this);
    $('div.tab_boxs > div').eq(index).show().
    siblings().hide();
    });
});





// 展开与收起
$(function () {
	var $btn = $('.resume_btn button');
	    $btn.click(function () {
		var $con = $('.content');
		var height = $con.height();
		//console.log(height);
		if(height == 680){
			$con.animate({height:"1150px"});
			$btn.html("收起更多模块")
			.addClass('btn_bg');
			
		}else{
			$con.animate({height:"680px"});
			$btn.html("展开更多模块")
			.removeClass('btn_bg');
		}
	})
})



//收藏

$(function () {
	
	$('.collect a').click(function () {
		
		if(! $('.collect').hasClass('collect_bg')){
		
		$('.collect').addClass('collect_bg');
	}else{
		   $('.collect').removeClass('collect_bg')
         }
	})
	
})