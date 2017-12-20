
//banner 滚动
jQuery(".banner").slide({mainCell:".bd ul",effect:"top",autoPlay:true});
//考试辅导滚动
jQuery(".kyfd-l .bd1").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
//igcse滚动
jQuery(".igcse-r").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
// a-level菜单
jQuery(".sfqmenu").slide({titCell:"h3", targetCell:"ul",defaultIndex:1,effect:"slideDown",delayTime:300,returnDefault:true});
//AP 课程滚动
jQuery(".ap-ban").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
//ACT 课程滚动
jQuery(".act-ban").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
//banner2滚动
jQuery(".ban-con").slide({mainCell:".bd ul",effect:"top",autoPlay:true});
//教师资源滚动
jQuery(".te-banner").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:4});
//banner3滚动
jQuery(".ban3").slide({mainCell:".bd ul",effect:"top",autoPlay:true});
//课程分类菜单
jQuery(".flmenu").slide({titCell:"h3", targetCell:"ul",defaultIndex:1,effect:"slideDown",delayTime:300,returnDefault:true});
//课程分类选项卡特效
$(function () {
    var $dd = $('.fl-nav3 dd');
    $dd.click(function () {
        $(this).addClass("selected")
        .siblings().removeClass('selected');
        var index = $dd.index(this);
       $('.tab-box-con')
       .eq(index).show()
       .siblings().hide();
       return false;
    });
})


$(function () {
	//入学考试效果
	$('.rx-list .img').hover(function() {
		$(this).find('.mask').fadeIn(500);
	}, function() {
		$(this).find('.mask').fadeOut(500);
	});

    //师资团队
    $('.piclist a').stop().hover(function() {
		$(this).find('.mask').slideDown(500);
	}, function() {
		$(this).find('.mask').slideUp(500);
	});
   //新导航优势
   $('.ys-list a').stop().hover(function() {
		$(this).find('.ys-mask ol').fadeIn(500);
	}, function() {
		$(this).find('.ys-mask ol').fadeOut(500);
	});
    //search select
     $('.search .dropdown').easyDropDown();
    //mask select
     $('.kczy .dropdown').easyDropDown();

    //回到顶部
    $('.top-r-t').click(function() {
	 		$('html,body').stop().animate({scrollTop:'0px'},1000);
	 	});
    //滚动条
    if($('.zcwd .txt').size()>0){
         $('.zcwd .txt').niceScroll({
                cursorcolor: "#6c6c6c",//#CC0071 光标颜色
                cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
                touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
                cursorwidth: "5px", //像素光标的宽度
                cursorborder: "0", //   游标边框css定义
                cursorborderradius: "5px",//以像素为光标边界半径
                autohidemode: false, //是否隐藏滚动条
                background: "#cdcdc5",

            });
    }
   



});
//获取验证码倒计时
$(function () {
     $('.kczy-btn .btn').click(function () {
     	settime(this)
     });
     var countdown = 60;
     function settime(obj) {
     	if(countdown == 0){
     		obj.removeAttribute('disabled');
     		obj.value = "获取验证码";
     		countdown = 60;
     		return;
     	}else{
     		obj.setAttribute("disabled",true);
     		obj.value = "" + countdown + "秒后再获取";
            countdown--;
     	}
     	setTimeout(function () {
                    settime(obj)
         }, 1000)
     }
	
});
//滚动监听(对象,偏移,改变的样式,非活动时隐藏对象)
$(function(){ 
    $(window).bind("scroll",function(){ 
        $('.top-l li').each(function(){
            var top=$(window).scrollTop();
            //当前导航所指向的块元素id（#abc）
            var id = $(this).find('a').attr('href');
            if($(id).size() > 0){
                var thisOffsetTop =$(id).offset().top;  
            }
            if (thisOffsetTop -top<200){
                $('.top-l li').removeClass('on').find('a').removeClass('on');
                $(this).addClass("on").find('a').addClass('on');
            };
        });

        $('.top-l li').click(function () {
            var id = $(this).find('a').attr('href');
            var top =$(id).offset().top;
            $('html,body').stop().animate({'scrollTop':top});
            return false;
        })
    }); 

})