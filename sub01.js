var didScroll;
var lastScrollTop=0;
var delta=5;
var navbarHeight=$("#hdr_wrap").outerHeight();

$(window).scroll(function(event){
    didScroll=true;
	
})
 
setInterval(function(){ 
    if(didScroll){
        hasScrolled();
        didScroll=false;
    }
},400);

function hasScrolled(){
    var st=$(this).scrollTop();
     
    if(st>lastScrollTop && st>navbarHeight){
        $("#hdr_wrap").addClass("hdrup");
    }else{
        if(st+$(window).height()<$(document).height()){
            $("#hdr_wrap").removeClass("hdrup");
        }
    }
    lastScrollTop=st;
}


/*------------------------------상단*/

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

/*---------------------메뉴바*/

$(document).ready(function(){
    var $searchBar=$(".search_bar");
    var $searchImg=$searchBar.find("img.click");
    $searchImg.on("click",onBar);
    
    mainAni();
    
    function onBar(){
       $searchBar.children("div").stop();
		$searchImg.stop();
        $searchBar.children("div").animate({"left":"0"},400);
        $searchImg.animate({"left":"460"},400);
		
		$searchBar.on("focusout",outBar);

    }
    
    function outBar(){
         $searchBar.children("div").animate({"left":"-500"},400);
        $searchImg.animate({"left":"0"},400);
    }
    
    /*====================================메인 애니메이션*/
    
    
    
    function mainAni(){
    var scrollHeight=$(window).scrollTop();
    var openWidth;
    var $imgNum01=$(".visual_img").children().eq(0);
    var $imgNum02=$(".visual_img").children().eq(1);
    var $imgNum03=$(".visual_img").children().eq(2);
    var $imgNum04=$(".visual_img").children().eq(3);
    var $imgNum05=$(".visual_img").children().eq(4);
    var $imgNum06=$(".visual_img").children().eq(5);
    var $visualTxt=$("#visual_txt");
    var timer;
    
    
    
    setTimeout(openIntroTxt,1300);
    setTimeout(openIntro01,300);
    setTimeout(openIntro02,0);
    setTimeout(openIntro03,700);
    setTimeout(openIntro04,500);
    setTimeout(openIntro05,600);
    setTimeout(openIntro06,300);
    
    

    function openIntroTxt(){
        $visualTxt.animate({"top":"100","opacity":"1",},1000);
        
    }
    function openIntro01(){
        $imgNum01.animate({"top":"500","opacity":"1"},1200);
    }
    function openIntro02(){
        $imgNum02.animate({"top":"74","opacity":"1"},1000);
    }
    function openIntro03(){
        $imgNum03.animate({"top":"300","opacity":"1"},1200);
    }
    function openIntro04(){
        $imgNum04.animate({"top":"400","opacity":"1"},1200);
    }
    function openIntro05(){
        $imgNum05.animate({"top":"40","opacity":"1"},900);
    }
    function openIntro06(){
        $imgNum06.animate({"top":"580","opacity":"1"},1200);
    }
    
    }

})

//비주얼-------------------------------

$(document).ready(function(){
    var $miniSelet=$("#list_txt").find("ul");
    var $miniNum=$miniSelet.children();
    
	
    $miniNum.on("click",miniOver);
    
	
    /*if사용해야하는데 모르겟음*/
    function miniOver(){
        $miniNum.css({"color":"#737373","border":"none","font-weight":"normal"});
		$(this).css({"color":"#3cb1ff","border-bottom":"solid 1px #3cb1ff","font-weight":"bold"});

		return false;
    }
    
})

/*메뉴선택바--------------------------*/

$(document).ready(function(){
	$(window).on("scroll",onScroll);


	function onScroll(){
		var $list_01=$("#list_01").find(".img_box");
		var scrollHeight=$(window).scrollTop();
		var $list_02=$("#list_02").find(".img_box");
		var $list_03=$("#list_03").find(".img_box");
		var $list_04=$("#list_04").find(".img_box");
		
		//-------------------------리스트효과 시작
		if(scrollHeight>=1000){
			$list_01.stop();
			$("#list_01").find(".right_01").stop();
			
			
			$list_01.animate({"opacity":"1","top":"0"},500);
			$("#list_01").find(".right_01").animate({"opacity":"1","top":0},500);
		}else{
			$list_01.stop();
			$("#list_01").find(".right_01").stop();
			
			
			$list_01.animate({"opacity":"0","top":"50"},500);
			$("#list_01").find(".right_01").animate({"opacity":"0","top":"50"},500);
		}
		//===========list01
		
		if(scrollHeight>=2100){
			$list_02.stop();
			$("#list_02").find(".left_02").stop();
			
			
			
			$list_02.animate({"opacity":"1","top":"0"},500);
			$("#list_02").find(".left_02").animate({"opacity":"1","top":0},500);
		}else{
			$list_02.stop();
			$("#list_02").find(".left_02").stop();
			
			
			$list_02.animate({"opacity":"0","top":"50"},500);
			$("#list_02").find(".left_02").animate({"opacity":"0","top":50},500);
		}
		//===========list02
		
		if(scrollHeight>3400){
			$list_03.stop();
			$("#list_03").find(".right_03").stop();
			
			$list_03.animate({"opacity":"1","top":0},500);
			$("#list_03").find(".right_03").animate({"opacity":"1","top":0},500);
		}else{
			$list_03.stop();
			$("#list_03").find(".right_03").stop();
			
			$list_03.animate({"opacity":"0","top":50},500);
			$("#list_03").find(".right_03").animate({"opacity":"0","top":50},500);
		}
		//---------------list03
		
		if(scrollHeight>=4600){
			$list_04.stop();
			$("#list_04").find(".left_04").stop();
			$list_04.animate({"opacity":"1","top":0},500);
			$("#list_04").find(".left_04").animate({"opacity":"1","top":0},500);
		}else{
			$list_04.stop();
			$("#list_04").find(".left_04").stop();
			$list_04.animate({"opacity":"0","top":50},500);
			$("#list_04").find(".left_04").animate({"opacity":"0","top":50},500);
		}
		
	}
})

/*리스트 전체 효과----------------------*/

$(document).ready(function(){
	
	
    var $list01=$(".list_01");
    var $totalImg=$(".list_01").children();
    var $imgWidth=300;
    var imgNum=0;
    var timer;

    
    onPlay()
    
    
    $list01.children().last().appendTo($list01);
    $list01.css({"left":-$imgWidth})
    
    $totalImg.on("mouseenter",onStop);
    $totalImg.on("mouseleave",onPlay);
    
    
    
    
    function onSlide(){
        var currentPosition = $list01.position().left;
        //imgNum++;
        $list01.stop().animate({"left":currentPosition-$imgWidth},400,function(){
        $list01.children().first().appendTo($list01);
        $list01.css({"left":-$imgWidth})
        });
    }
    function onStop(){
        clearInterval(timer);
        $(this).children(".over").stop().animate({"opacity":"0.6"},300);
    }
    function onPlay(){
        timer = setInterval(onSlide,3000);
        $(this).children(".over").stop().animate({"opacity":"0"},300);
    }
    
    
})


$(document).ready(function(){
    var $list02=$(".list_02");
    var $totalImg=$(".list_02").children();
    var $imgWidth=300;
    var imgNum=0;
    var timer;

    
    onPlay();
    
    
    $list02.children().first().prependTo($list02);
    $list02.css({"left":-1180+$imgWidth});
    
    $totalImg.on("mouseenter",onStop);
    $totalImg.on("mouseleave",onPlay);
    
    
    
    
    function onSlide(){
        var currentPosition = $list02.position().left;
        //imgNum++;
        $list02.stop().animate({"left":currentPosition+$imgWidth},400,function(){
        $list02.children().last().prependTo($list02);
        $list02.css({"left":-1180+$imgWidth})
        });
    }
    function onStop(){
        clearInterval(timer);
        $(this).children(".over").stop().animate({"opacity":"0.6"},300);
    }
    function onPlay(){
        timer = setInterval(onSlide,3000);
        $(this).children(".over").stop().animate({"opacity":"0"},300);
    }
    
    
})

$(document).ready(function(){
    var $list03=$(".list_03");
    var $totalImg=$(".list_03").children();
    var $imgWidth=300;
    var imgNum=0;
    var timer;

    
    onPlay()
    
    
    $list03.children().last().appendTo($list03);
    $list03.css({"left":-$imgWidth})
    
    $totalImg.on("mouseenter",onStop);
    $totalImg.on("mouseleave",onPlay);
    
    
    
    
    function onSlide(){
        var currentPosition = $list03.position().left;
        //imgNum++;
        $list03.stop().animate({"left":currentPosition-$imgWidth},400,function(){
        $list03.children().first().appendTo($list03);
        $list03.css({"left":-$imgWidth})
        });
    }
    function onStop(){
        clearInterval(timer);
        $(this).children(".over").stop().animate({"opacity":"0.6"},300);
    }
    function onPlay(){
        timer = setInterval(onSlide,3000);
        $(this).children(".over").stop().animate({"opacity":"0"},300);
    }
    
    
})

$(document).ready(function(){
    var $list04=$(".list_04");
    var $totalImg=$(".list_04").children();
    var $imgWidth=300;
    var imgNum=0;
    var timer;

    
    onPlay();
    
    
    $list04.children().first().prependTo($list04);
    $list04.css({"left":-1160+$imgWidth});
    
    $totalImg.on("mouseenter",onStop);
    $totalImg.on("mouseleave",onPlay);
    
    
    
    
    function onSlide(){
        var currentPosition = $list04.position().left;
        //imgNum++;
        $list04.stop().animate({"left":currentPosition+$imgWidth},400,function(){
        $list04.children().last().prependTo($list04);
        $list04.css({"left":-1160+$imgWidth})
        });
    }
    function onStop(){
        clearInterval(timer);
        $(this).children(".over").stop().animate({"opacity":"0.6"},300);
    }
    function onPlay(){
        timer = setInterval(onSlide,3000);
        $(this).children(".over").stop().animate({"opacity":"0"},300);
    }
    
    
})


