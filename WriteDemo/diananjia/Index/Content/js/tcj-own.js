/*元素垂直居中
 $(".cp_details_content").eleMiddle({//.cp_details_content下的div居中
 ele:"div"
 });
 */
;(function($, window, document, undefined) {
    var tcjEleMiddle = function(ele, opt) {
        this.$el = ele,
            this.defaults = {
                ele:""//子元素
            },
            this.opt = $.extend({}, this.defaults, opt);
    }
    tcjEleMiddle.prototype = {
        init: function () {
            this.methord();
        },
        methord: function () {
            var tcj=this;
            //父元素高度
            var allHeight=parseInt($(tcj.$el.selector).css("height"));
            //子元素高度
            var eleHeight=parseInt($(tcj.$el.selector).children(tcj.opt.ele).css("height"));
            //子元素垂直居中
            $(tcj.$el.selector).children(tcj.opt.ele).css("margin-top",(allHeight-eleHeight)/2);
        }
    }
    $.fn.eleMiddle = function(opt) {
        var eleMiddle = new tcjEleMiddle(this, opt);
        return eleMiddle.init();
    }
})(jQuery,window,document);
/*移到小图片上显示大图
 * 多图片示例
*$.tcjImgFullScreen({
*	elements:".tcj-fullScreen1,.tcj-fullScreen2,.tcj-fullScreen3,.tcj-fullScreen4,.tcj-fullScreen5",
*	imgSrc:"img/extension_certificate1.png,img/extension_certificate2.png,img/extension_certificate3.png,img/extension_certificate4.png,img/extension_certificate5.png"
*});
* 单图片示例
* $.tcjImgFullScreen({
*   elements:".tcj-fullScreen1",
*   imgSrc:"img/extension_certificate1.png"
*}); 
*/
;(function($,window,document,undefined){
	var tcjImgFullScreen=function(ele,opt){
		this.$el=ele,
		this.defaults={
			elements:"",//鼠标移入的元素
			imgSrc:""//图片路径
		},
		this.opt=$.extend({},this.defaults,opt);
	}
	
	tcjImgFullScreen.prototype={
		init:function(){
			this.methord();
		},
		methord:function(){
			var tcj=this;
			//当前浏览器可视区域的高度
			var wHeight=$(window).height()-200;
			
			//判断是否是多个元素
			if((tcj.opt.elements).indexOf(",")==-1){//单个
				imgfullscreen(tcj.opt.elements,tcj.opt.imgSrc);
			}else{//多个
				var single=(tcj.opt.elements).split(",");
				var singleSrc=(tcj.opt.imgSrc).split(",");
				for(var i=0;i<single.length;i++){
					imgfullscreen(single[i],singleSrc[i])
				}
			}
			
			function imgfullscreen(ele,src){
				var test="<div class='tcj-imgfullscreen'></div><div class='tcj-imgfullscreen-ct'><div class='tcj-imgfullscreen-remove'><span class='tcj-imgfullscreen-removeEle'>×</span></div><img class='tcj-imgfullscreen-img' style='width:100%' src='"+src+"' /></div>";
				$(ele).off("mouseover").on("mouseover",function(){
					$("body").append(test);
					$(".tcj-imgfullscreen-removeEle").off("click").on("click",function(){
						$(".tcj-imgfullscreen,.tcj-imgfullscreen-ct").remove();
					});
				})
			}
			
		}
	}
	$.tcjImgFullScreen=function(opt){
		var ImgFullScreen = new tcjImgFullScreen(this, opt);
        return ImgFullScreen.init();
	}
	
})(jQuery,window,document);
/*div轮播
 * html示例
 <div class="cp_index_Carousel">
	 <div class="cp_index_bannerContainer">
		 <div>1111</div>
		 <div>2222</div>
		 <div>3333</div>
	 </div>
 </div>
 *js调用示例
 $.tcjBannerChange({
 effects:1,//播放效果
 times:3000//停留时间
 })
 */
;(function($,window,document,undefined){
    $.Carousel={
        defaults:{
            ele:".cp_index_Carousel",//最外层div的class
            test:function(){
            	return this;
            }
        },

        realize:function(opt){
            var tcj=this;

            if($(tcj.defaults.ele+">div:first-child>div").length==1){//如果只有一个div则不轮播
                return false;
            }

            //自动根据banner数量添加按钮
            $(tcj.defaults.ele).append("<div></div>");
            for(var li=0;li<$(tcj.defaults.ele+">div:first-child>a").length;li++){
                $(tcj.defaults.ele+">div:nth-child(2)").append("<div></div>");
            }

            //初始化第一个按钮样式
            $(tcj.defaults.ele+">div:nth-child(2)>div:first-child").addClass("cp_index_active");

            //显示按钮居中
            var mlwidth=($(tcj.defaults.ele+">div:nth-child(2)").width()/2-51)+"px";
            $(tcj.defaults.ele+">div:nth-child(2)").css("margin-left",mlwidth);

            //设置图片宽度
            var winowH=$(window).width();
            $(".cp_index_bannerContainer>a").css("width",winowH);

            //初始化轮播
            tcj.bean.bannernum=0;
            var timer = setInterval(function(){changes(tcj.bean.bannernum)}, opt.times);

            //点击按钮重置轮播
            $(tcj.defaults.ele+">div:nth-child(2)>div").off("click").on("click",function(){
                var zhe=$(this);
                if(zhe.hasClass("cp_index_active")){//如果按钮已被选中则不能再次被选中
                    return false;
                }
                clearInterval(timer);
				opt.test(zhe.index()-1);
                $(tcj.defaults.ele+">div:nth-child(2)>div").removeClass("cp_index_active");
                $(tcj.defaults.ele+">div:nth-child(2)>div").eq(zhe.index()).addClass("cp_index_active");
                if(opt.effects==1){
                    $(tcj.defaults.ele+">div:first-child>a").fadeOut().eq(zhe.index()).fadeIn();
                }else if(opt.effects==2){
                    $(tcj.defaults.ele+">div:first-child>a").slideUp().eq(zhe.index()).slideDown();
                }else if(opt.effects==3){
                    $(tcj.defaults.ele+">div:first-child>a").hide().eq(zhe.index()).show();
                }else if(opt.effects==4){
                    var leftval="-"+(winowH*zhe.index())+"px";
                    $(".cp_index_bannerContainer").css({
                        "left":leftval,
                        "transition":"left .3s linear"
                    });
                }else{
                    alert("没有第"+opt.effects+"种切换效果！")
                }

                tcj.bean.bannernum=zhe.index();
                timer = setInterval(function(){changes(tcj.bean.bannernum)}, opt.times);
            });

            function changes(index){
            	opt.test(index);
                index=(index==$(tcj.defaults.ele+">div:first-child>a").length-1) ? 0 : index+=1;
                tcj.bean.bannernum=index;
                //某个div显示，其他的隐藏
                $(tcj.defaults.ele+">div:nth-child(2)>div").removeClass("cp_index_active");
                $(tcj.defaults.ele+">div:nth-child(2)>div").eq(index).addClass("cp_index_active");
                if(opt.effects==1){
                    $(tcj.defaults.ele+">div:first-child>a").fadeOut().eq(index).fadeIn();
                }else if(opt.effects==2){
                    $(tcj.defaults.ele+">div:first-child>a").slideUp().eq(index).slideDown();
                }else if(opt.effects==3){
                    $(tcj.defaults.ele+">div:first-child>a").hide().eq(index).show();
                }else if(opt.effects==4){
                    var leftval="-"+(winowH*index)+"px";
                    //$(".cp_index_bannerContainer").css({
                    //    "left":leftval,
                    //    "transition":"left .3s linear"
                    //});
                    $(".cp_index_bannerContainer").animate({
                        "left":leftval
                    },300)
                }else{
                	alert("没有第"+opt.effects+"种切换效果！")
                    return false;
                }
            }

        },
        bean:{
            bannernum:""
        }
    }
    $.tcjBannerChange = function(opt) {
        $.Carousel.realize(opt)
    }
})(jQuery,window,document);
/*数字自增
 * 使用示例
 * $.eleNumberAdd({
	    	ele:".J-shopDeal",//number父元素的类名或ID
	    	initval:0,//初始值
	    	endval:1769,//最终值
	    	increasing:20,//每次增加数量
	    	times:1500//在多少毫秒内执行完毕
	    });
 */
;(function($, window, document, undefined) {
    var tcjNumberAdd = function(ele, opt) {
        this.$el = ele,
            this.defaults = {
                ele:"",//number父元素的类名或ID
                initval:"",//初始值
                endval:"",//最终值
                increasing:"",//递增数量
                times:2000//在多少毫秒内执行完毕
            },
            this.opt = $.extend({}, this.defaults, opt);
    }
    tcjNumberAdd.prototype = {
        init: function () {
            this.methord();
        },
        methord: function () {
        	var tcj=this;
            var endval2=tcj.opt.endval-10;
			function numAutoAdd(){
				var start=setInterval(function(){
					if(tcj.opt.initval<endval2){
						$(tcj.opt.ele).text(tcj.opt.initval);
						numAutoAdd();
						clearInterval(start);
						if((tcj.opt.initval+10)>=tcj.opt.endval){
							clearInterval(start);
							var second=setInterval(function(){
								if(endval2<=tcj.opt.endval){
									$(tcj.opt.ele).text(endval2);
								}
								endval2++;
							},100);
						}
					}else{
						clearInterval(start);
						return false;
					}
				},tcj.opt.times/(parseInt(endval2/tcj.opt.increasing)));
				tcj.opt.initval+=tcj.opt.increasing;
			}
			numAutoAdd();
        }
    }
    $.eleNumberAdd = function(opt) {
        var eleNumberAdd = new tcjNumberAdd(this, opt);
        return eleNumberAdd.init();
    }
})(jQuery,window,document);