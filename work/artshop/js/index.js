//banner滚动
if($('.ban-l').size()>0){
	jQuery(".ban-l").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
}

//回到顶部
$(function () {
	//回到顶部
	$('.top').click(function () {
		$('html,body').stop().animate({scrollTop:'0px'},1000);
		return false;
	});
    $(window).bind('scroll',function(){
        var h = $(window).scrollTop();
        //console.log(h);
        if(h>200){
            $('.top').fadeIn();
        }
        else{
            $('.top').fadeOut();
        }
    });

    //pro-list
    $('.pro-list .list1 li').hover(function() {
        $(this).addClass('on');
    }, function() {
        $(this).removeClass('on');
    });












	$('.pro-list li').hover(function(){
		$(this).find('.a-t-car').show();
		
	}, function() {
		$(this).find('.a-t-car').hide();
	});

   // 底部菜单
     $('.foot-top a').click(function () {
         if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.footer2').animate({height: '335',}, 500);
         }else{
            $(this).addClass('on');
            $('.footer2').animate({height: '80',}, 500);
         }
     })
   
  

    //下拉菜单
    $('.transit .a-bg').hover(function() {
    	$(this).find('dl').stop().slideDown();
    }, function() {
    	$(this).find('dl').stop().slideUp();
    });
    
    //close 关闭
    $('.banner2-s .close').click(function () {
        $('.banner2-s').hide(400);
    })
    //color
   $('.pro-r .color ul li').click(function () {
      $(this).addClass('on').siblings().removeClass('on');
   })
    
})
//banner-b滚动
if($('.banner2-b').size()>0){
    jQuery(".banner2-b").slide({mainCell:".bd ul",effect:"left",autoPlay:true});
}


//banner-s滚动
$(function(){
            
            function nextjs(){
                $('#banner3').stop().animate({'margin-left':-300},function(){
                    $('#banner3 li:first').appendTo('#banner3').parent().css('margin-left',0);
                    
                });
            }
            $('.banner2-s .next').click(function(){
                nextjs();
            })
            $('.banner2-s .prev').click(function(){
                $('#banner3 li:last').prependTo('#banner3').parent().css('margin-left',-300);
                $('#banner3').stop().animate({'margin-left':0});
            })
            
            var __auto = setInterval(nextjs,2000)
            
            $('#banner3').hover(function(){
                clearInterval(__auto);
            },
            function(){
                __auto = setInterval(nextjs,2000);
            })
            
});
//cart check
$(function(){
        
        $('#box4, #box1').on('change',function(){
            
            if($(this).is(":checked")){
                
                $('.cart input[type=checkbox]').prop('checked','checked');
            }
            else{
                $('.cart input[type=checkbox]').removeAttr('checked');
            }
        })
        
        $('.frame input[type=checkbox]').change(function(){
            
             if($('.frame input[type=checkbox]:checked').size() == $('.frame input[type=checkbox]').size()){
                $('#box1,#box4').prop('checked','checked');
             }
             else{
                $('#box1,#box4').removeAttr('checked');
             }
            
        })
        
    })
//favorites
$(function(){
        
        $('#box5, #box9').on('change',function(){
            
            if($(this).is(":checked")){
                
                $('.favorites .frame input[type=checkbox]').prop('checked','checked');
            }
            else{
                $('.favorites .frame input[type=checkbox]').removeAttr('checked');
            }
        })
        
        $('.favorites .frame input[type=checkbox]').change(function(){
            
             if($('.favorites .frame input[type=checkbox]:checked').size() == $('.favorites .frame input[type=checkbox]').size()){
                $('#box5,#box9').prop('checked','checked');
             }
             else{
                $('#box5,#box9').removeAttr('checked');
             }
            
        })
        
    })

$(function(){
        //初始化
        $('#bigimg').attr('src',$('#smallimgs li:first img').data('big'));
        
//      $('#smallimgs li').click(function(){
//          $('#bigimg').attr('src',$(this).find('img').data('big'));
//      })

        $('#smallimgs li').each(function(){
            $(this).click(function(){
                $('#bigimg').attr('src',$(this).find('img').data('big'));
            })
        })
     })



