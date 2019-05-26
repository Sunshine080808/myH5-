//实现按钮播放功能
function btn (){
    //获取需要操作的元素
    $_btn = $('.btn1');
    console.log($_btn);
    $_audio = $('#audio')
    //创建一个开关判断现在是否在旋转
    let isRunning = true;
    //给按钮绑定触摸事件
    // $_audio[0].play();
    $_btn.on('click',function(){
        
        if(isRunning){
            $(this).css({animationPlayState:'paused'});
            console.log(isRunning);
            isRunning = false;
            $_audio[0].pause();
        }else{
            $(this).css({animationPlayState:'running'});
            isRunning = true;
            $_audio[0].play();
            setTime();
        }
        // $_audio[0].play();
    })
    function setTime(){
        timer = setInterval(() =>{
        if($_audio[0].ended){
            clearInterval(timer);
            isRunning = false;
            $_btn.css({
                animationPlayState:'pause'
            })
        }
        },300)
    }
   
}
btn();

// //添加轮播图
var swiper = new Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    on:{
    
            init: function(){
              swiperAnimateCache(this); //隐藏动画元素 
              swiperAnimate(this); //初始化完成开始动画
            }, 
            slideChangeTransitionEnd: function(){ 
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
              //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            } 
          } 
    
})
