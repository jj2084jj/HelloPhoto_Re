var didScroll;
var lastScrollTop=0;
var delta = 5;
var  navbarHeight=$("#hdr_wrap").outerHeight();

$(window).scroll(function(event){
    didScroll=true;
})

setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll=false;
    }
},250);

function hasScrolled(){
    var st=$(this).scrollTop();
    
    if(Math.abs(lastScrollTop-st)<=delta)
        return;
    
    if(st>lastScrollTop && st>navbarHeight){
        $("#hdr_wrap").addClass("hdrup");
    }else{
        if(st+$(window).height()<$(document).height()){
            $("#hdr_wrap").removeClass("hdrup");
        }
    }
    lastScrollTop=st;
}

/*헤더부분-------------------------------*/




$(document).ready(function(){
    var $searchCk=$("#search_box").find("input");
    var $searchIcon=$searchCk.next("img");
    var $searchCkwrap=$("#search_box").children("a");
    //기본값
    var $visualwrap=$("#visual_wrap");
   
    
    
    $searchCk.css({"opacity":"0","display":"none"});
    $searchCkwrap.css({"opacity":"0.4"});
    
    $searchCkwrap.on("click",onOver);
    $visualwrap.on("mouseleave",outOver);
    
    function onOver(){
        
            $searchCk.css({"opacity":"1","display":"block"});
            $searchCkwrap.css({"opacity":"1"});
        $searchIcon.stop().animate({"right":"2%"},300);
           
        
    }
    function outOver(){
        
            $searchCk.css({"opacity":"0","display":"none"});
            $searchCkwrap.css({"opacity":"0.4"});
         $searchIcon.stop().animate({"right":"47%"},300);
       
    }
    
    
    
       
    })





/*검색창 부분------------------------------*/


$(document).ready(function(){
    var $menuHvr=$(".menu_main");
    var $menuBg=$(".menu_bg");
    var $subMenuSize=$(".menu_list").children();
    var $subMenuHg=$(".menu_list").children("li").innerHeight();
    
    
    $menuBg.hide();
    $(".menu_list").hide();
    
    
    $menuHvr.on("mouseenter",menuOver);
    $menuHvr.on("mouseleave",menuOut);
    
    function menuOver(){
        //alert($subMenuSize);
       var $menuHeight= $(this).children().next().children().size();
       //alert($menuHeight);
       $(this).children(".menu_list").css({"opacity":1,"display":"block","height":$menuHeight*45});
        
       
    }
    function menuOut(){
        $menuBg.css({"opacity":0,"display":"none"});
        
    }
     
})


/*비주얼 부분--------------------------------------------------------------*/

$(document).ready(function(){
    var $right_bg=$(".right_visual");
    var $left_bg=$(".left_visual");
    var $right_txt=$right_bg.find(".right");
    var $left_txt=$left_bg.find(".left");
    
    
    
    var $right_pst=$right_bg.children("a");
    var $left_pst=$left_bg.children("a");
    
    
    
    
    $right_bg.on("mouseenter",rightMoving);
    $right_bg.on("mouseleave",rightOut);
    $left_bg.on("mouseenter",leftMoving);
    $left_bg.on("mouseleave",leftOut);
    
    //alert($right_txt);
    
    function rightMoving(){
        //alert("left");
        $right_txt.css({"left":"65%","transition-duration":"0.4s"});
        $right_pst.css({"width":"130%","transition-duration":"0.4s"});
        $left_pst.css({"width":"70%","transition-duration":"0.4s"})
        $left_txt.css({"opacity":0.2,"left":"30%","transition-duration":"0.4s"});
    }
    
    function rightOut(){
        $right_txt.css({"left":"50%","transition-duration":"0.4s"});
        $right_pst.css({"width":"100%","transition-duration":"0.4s"});
        $left_pst.css({"width":"100%","transition-duration":"0.4s"})
        $left_txt.css({"opacity":1});
         $left_txt.css({"opacity":1,"left":"50%","transition-duration":"0.4s"});
    }
        
    function leftMoving(){
         $left_txt.css({"left":"35%","transition-duration":"0.4s"});
        $left_pst.css({"width":"130%","transition-duration":"0.4s"});
        $right_pst.css({"width":"70%","transition-duration":"0.4s","z-index":1});
        $right_txt.css({"opacity":0.2,"left":"70%","transition-duration":"0.4s"});
    }
    function leftOut(){
        $left_txt.css({"left":"50%","transition-duration":"0.4s"});
        $left_pst.css({"width":"100%","transition-duration":"0.4s"});
        $right_pst.css({"width":"100%","transition-duration":"0.4s"});
        $right_txt.css({"opacity":1,"left":"50%","transition-duration":"0.4s"});
    }
    
    
    
    
})

/*스크롤러 이미지-------------------------------*/


$(document).ready(function(){
    var scrollHeight=$(window).scrollTop();
    var openWidth;
    var $trot_img=$(".trot_img")
    var $left_img=$(".trot_img").find("a.left");
    var $center_img=$(".trot_img").find("a.center"); 
    var $right_img=$(".trot_img").find("a.right");
    var $tit=$(".trot_tit");
    var $sTit=$(".subject_tit")
    var $sj_left=$(".subject_img").find("a.left")
    var $sj_center=$(".subject_img").find("a.center")
    var $sj_right=$(".subject_img").find("a.right")
    

    
    $(window).on("scroll",onScroll);
    
    function onScroll(){
        
        scrollHeight=$(window).scrollTop();
        
        
        
        if(scrollHeight>=400){
            $left_img.stop();
            $left_img.animate({"opacity":"1","top":0+scrollHeight*0.05,"left":-220+scrollHeight*0.05},1000);
            
            $right_img.stop();
            $right_img.animate({"opacity":"1","top":-70+(scrollHeight*0.05),"left":1200+scrollHeight*-0.05},1000);
            
            $center_img.stop();
            $center_img.animate({"opacity":"1","top":60+scrollHeight*-0.05},1000);
            
            $tit.stop();
            $tit.animate({"opacity":"1","top":30+scrollHeight*-0.05,"left":0+scrollHeight*0.01},1000);
        }else{
            $left_img.stop();
            $left_img.animate({"opacity":"0","top":0+scrollHeight*0.05,"left":-220+scrollHeight*0.05},1000);
            
            $right_img.stop();
            $right_img.animate({"opacity":"0","top":-70+(scrollHeight*0.05),"left":1200+scrollHeight*-0.05},1000);
            
            $center_img.stop();
            $center_img.animate({"opacity":"0","top":60+scrollHeight*-0.05},1000);
            
            $tit.stop();
            $tit.animate({"opacity":"0","top":30+scrollHeight*-0.05,"left":0+scrollHeight*0.01},1000);
        }
        
        
        
        
        if(scrollHeight>=1400){
            $sj_left.stop();
            $sj_left.animate({"opacity":"1","top":0+scrollHeight*-0.05,"left":-200+scrollHeight*0.05},1000);
            
            $sj_right.stop();
            $sj_right.animate({"opacity":"1","top":200+(scrollHeight*-0.05),"left":1100+scrollHeight*-0.05},1000);
            
            $sj_center.stop();
            $sj_center.animate({"opacity":"1","top":60+scrollHeight*-0.05},1000);
            
            $sTit.stop();
            $sTit.animate({"opacity":"1","top":30+scrollHeight*-0.05,"left":0+scrollHeight*0.01},1000);
        }else{
           $sj_left.stop();
            $sj_left.animate({"opacity":"0","top":0+scrollHeight*-0.05,"left":-200+scrollHeight*0.05},1000);
            
            $sj_right.stop();
            $sj_right.animate({"opacity":"0","top":200+(scrollHeight*-0.05),"left":1100+scrollHeight*-0.05},1000);
            
            $sj_center.stop();
            $sj_center.animate({"opacity":"0","top":60+scrollHeight*-0.05},1000);
            
            $sTit.stop();
            $sTit.animate({"opacity":"0","top":30+scrollHeight*-0.05,"left":0+scrollHeight*0.01},1000);
        }
        
        
    }})
 /*-----------------------------------------*/


$(document).ready(function(){
        var $imgBox=$("#img_box");
        var $imgPoint=$("#img_box div");
        
        
        $imgBox.on("mouseenter",pointUp);
        $imgBox.on("mouseleave",pointOut);
        
        function pointUp(){
           //alert("00");
           $imgPoint.addClass("select");
        }
        function pointOut(){
           //alert("00");
           $imgPoint.removeClass("select");
        }
        
    })

 /*작가더보기 효과----------------------------*/  
    
$(document).ready(function(){
    var $controllBox=$(".theme_control");
    var $controllItem=$("#control_box>ul>li").size();
    //li 갯수
    var $controllHeight=$("#control_box>ul>li").innerHeight();
    //li 너비
    var $controllList=$("#control_box>ul>li");
    var $controllTop=$controllList.position().top;
    var $controllBoxHeight=$(".theme_control").innerHeight();
    //부모 너비
    
    
    var $slide=$("#left_slide_wrap>div");
    var $left=$slide.innerWidth();
    var $slideSize=$slide.find("li").size();
    var $slideWidth=$slide.find("li").innerWidth();
    //var currentPosition=$slide.position().left;
    
    
    var scrollEvent=false;
    var idx=0;
    
    $slide.css({"width":$slideSize*($slideWidth+20)});
 
    
    
    
    //alert($controllTop);
    
    
    $controllBox.on("mousewheel DOMMouseScorll",onWheel);
    //$controll.on("mouseenter",hey);
    
    /*function hey(){
        alert("00");
    }*/
    
    
    
    
    function onWheel(e){
        e.preventDefault(); 
        
        var deltaY = e.originalEvent; 
        
        delta=0;
       
        
        if(deltaY.detail){
            
            delta=deltaY.detail*40;
            
        }else{
          
            delta=deltaY.wheelDelta;
            
            
        };
        
        
        
        
        
        if(delta<0 && $controllTop>($controllItem-1)*-$controllHeight && !scrollEvent){
            
            
            var currentPosition=$slide.position().left;
            
            idx ++;
            
            scrollEvent=true;
            
           $controllList.stop().animate({"top":$controllTop+= -$controllHeight},300,"easeOutCubic",function(){
                scrollEvent=false;
            })
            
            $slide.stop().animate({"left":currentPosition-772},300,"easeOutCubic");
            
            //======================================
          
           
            //$("#control_box div ul li").first().appendTo("#control_box div ul li");
            //$("#control_box ul").css{("top","0"});
            
            
        }
        else if(delta>0 && $controllTop < 0 && !scrollEvent){
            var currentPosition=$slide.position().left;
            idx --;
            scrollEvent=true;
            
           console.log(delta);
            $controllList.stop().animate({"top":$controllTop+=$controllHeight},300,"easeOutCubic",function(){
                
                scrollEvent=false;
            })
            $slide.stop().animate({"left":currentPosition+772},300,"easeOutCubic");
        }
    }
    
    
})

/*-마우스 휠 효과-------------------------------------------*/

$(document).ready(function(){
    var $tooltipbg=$(".tooltipbg");
    var $tooltip=$(".tooltip");
    
    $tooltip.css({"opacity":"0","display":"none"});
    
    $tooltipbg.on("mouseenter",ontoolOver);
    $tooltipbg.on("mousemove",ontoolMove);
    $tooltipbg.on("mouseleave",ontoolOut);
    
    function ontoolOver(e){
        $tooltip.stop();
        $tooltip.css({"left":e.pageX,"top":e.pageY,"opacity":"0.8","display":"block"});
    }
    function ontoolMove(e){
        $tooltip.stop();
        $tooltip.css({"left":e.pageX,"top":e.pageY,"opacity":"0.8"});
    }
    function ontoolOut(){
        $tooltip.stop();
        $tooltip.css({"opacity":"0","display":"none"});
    }
    
})


/*스크롤러 효과=========================*/

