(function changRem(){
	var scale = 1 / devicePixelRatio;  
	document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	
	//flexible中定义<html>font-size
	var width = document.documentElement.getBoundingClientRect().width;  
	if (width / devicePixelRatio > 540) {  
	    width = 540 * devicePixelRatio;
	}
	var rem = width / 10;
	document.documentElement.style.fontSize = rem + 'px';
})()

var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'vertical',
		    loop: true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	          swiperAnimateCache(swiper); //隐藏动画元素 
	          swiperAnimate(swiper); //初始化完成开始动画
	        }, 
	        onSlideChangeEnd: function(swiper){ 
	          swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	        }
		})   
		
		$("#music").click(function(){
        //animationPlayState   
        if($("#music").css("animationPlayState") == "running"){
            $(this).css('animationPlayState', 'paused');
            $("#img").attr("src","img/audio2.png")
            $("audio")[0].pause();
        }else{
            $(this).css('animationPlayState', 'running');
            $("#img").attr("src","img/music.png")
            $("audio")[0].play();
        }
    })  