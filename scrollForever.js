(function($) {
    console.log(09)
    $.fn.scrollForever = function(options) {
        var divs=document.getElementById(options);       
        var txt1="<ul></ul>"; 
        $(divs).append(txt1);
        var speed= 50;//速度设置
        var colee1=divs.getElementsByTagName("ul")[0];
        var colee2=divs.getElementsByTagName("ul")[1];
        var colee=divs;  
        colee2.innerHTML=colee1.innerHTML; //克隆colee1为colee2
        console.log(colee2,colee1)
        function Marquee1(){        
            //当滚动至colee1与colee2交界时
            if(colee2.offsetTop-colee.scrollTop<=0){
                console.log(colee.scrollTop)
                console.log(colee1.offsetHeight)
                colee.scrollTop=colee.scrollTop-colee1.offsetHeight; //colee跳到最顶端  
                console.log(colee.scrollTop)

            }else{     
                console.log(colee2.offsetTop)
                  
                colee.scrollTop++               
            }
        }
        var MyMar1=setInterval(Marquee1,speed)//设置定时器
    
        //鼠标移上时清除定时器达到滚动停止的目的            
        colee.onmouseover=function() {clearInterval(MyMar1)}
        //鼠标移开时重设定时器
        colee.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)}
    }
})(jQuery);
