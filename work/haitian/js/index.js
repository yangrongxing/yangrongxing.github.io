









$(function () {
    //list切换
        $('.list ul li').mouseover(function() {
         $(this).addClass('on').siblings().removeClass('on');
         $(this).find('div.txt').addClass('bg')
        .end().siblings().find('div.txt').removeClass('bg');
         		
        });



    $('.p_list li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        
    })
         	
});

//产业布局滚动条
$('.ind_img ul').niceScroll({
                 cursorcolor: "#fff",
                autohidemode: false 

            });

//产品介绍滚动条
$('.pro_img ul').niceScroll({
                cursorcolor: "#fff",
                autohidemode: false 

            });
//新闻滚动条
$('.newcontent').niceScroll({
                 cursorcolor: "#fff",
                autohidemode: false 

            });
//关于海天滚动条
$('.haicon').niceScroll({
                cursorcolor: "#fff",
                autohidemode: false 

            });
