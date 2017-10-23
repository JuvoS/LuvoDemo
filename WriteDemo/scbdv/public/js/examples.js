$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});



	 $(function(){
        $('#myContainer').fullpage({
            navigation:true,
            afterLoad: function(anchorLink, index){
                if(index == 1){
                   	$(".logo").css("top","-15%").css("opacity",1 );
					$("#l1").css("margin-top","3%").css("opacity",1 );
					$("#l2").css("margin-top","3%").css("opacity",1 );
					$("#l3").css("margin-top","3%").css("opacity",1 );
					$("#l4").css("margin-top","3%").css("opacity",1 );
					$("#l5").css("margin-top","3%").css("opacity",1 );
					$("#l6").css("margin-top","3%").css("opacity",1 );
					$("#l7").css("margin-top","3%").css("opacity",1 );
					$("#l8").css("margin-top","3%").css("opacity",1 );
					$(".bn").css("left","0").css("opacity",1 );
                }
				if(index === 2){
                	$(".t-left").addClass("on");
					$(".jj").addClass("on");
					$(".sdys").addClass("on");
                }
  
                if(index === 3){
                	$(".des").addClass("on");
					$(".zb").addClass("on");
					$(".yb").addClass("on");
                }
                if(index == 4){
                	$("#t1").addClass("on");
                	$("#t2").addClass("on");
                	$("#t3").addClass("on");
                	$("#t4").addClass("on");
                	$("#t5").addClass("on");
                	$("#t6").addClass("on");
                	$("#t7").addClass("on");
                	$("#t8").addClass("on");
                	$(".ckgdt").addClass("on");
                }
                if(index == 5){
                	$(".multipleColumn .bd").addClass("on");
                }
            },
            onLeave: function(index, direction){
                if(index == '1'){
                    
                   	$(".logo").css("top","-100%").css("opacity",0);
					$("#l1").css("margin-top","-3%").css("opacity",0 );
					$("#l2").css("margin-top","-3%").css("opacity",0 );
					$("#l3").css("margin-top","-3%").css("opacity",0 );
					$("#l4").css("margin-top","-3%").css("opacity",0 );
					$("#l5").css("margin-top","-3%").css("opacity",0 );
					$("#l6").css("margin-top","-3%").css("opacity",0 );
					$("#l7").css("margin-top","-3%").css("opacity",0 );
					$("#l8").css("margin-top","-3%").css("opacity",0 );
					$(".bn").css("left","-100%").css("opacity",0 );
                }
				if(index === 2){
                	$(".t-left").removeClass("on");
					$(".jj").removeClass("on");
					$(".sdys").removeClass("on");
                }
                if(index == '3'){
                	$(".des").removeClass("on");
					$(".zb").removeClass("on");
					$(".yb").removeClass("on");
                }
                if(index == '4'){
                	$(".ckgdt").removeClass("on");
                	$("#t1").removeClass("on");
                	$("#t2").removeClass("on");
                	$("#t3").removeClass("on");
                	$("#t4").removeClass("on");
                	$("#t5").removeClass("on");
                	$("#t6").removeClass("on");
                	$("#t7").removeClass("on");
                	$("#t8").removeClass("on");
                }
                if(index == '5'){

                	
                	$(".multipleColumn .bd").removeClass("on");
                }
            }
        });
    });
		
		
		
		
		

$(document).ready(function(){
	jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,easing:"easeInOutCirc",effect:"leftLoop",delayTime:500,});
});

$(document).ready(function(){
	jQuery(".qh").slide({mainCell:".qhs ul",autoPlay:false,easing:"easeInOutCirc",effect:"left",delayTime:500,});
});

$(document).ready(function(){
	jQuery(".xw").slide({mainCell:".bd ul",autoPlay:true,easing:"easeInOutCirc",effect:"leftLoop",delayTime:500,});
});








 