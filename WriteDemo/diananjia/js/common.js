/*获取正文nav-item宽度*/
function assign(selector) {
    var arr = [];
    $(selector).each(function (index) {
        arr.push($(this).width());
    });
    return arr;
}

/*正文nav-item激活状态设置*/
function setWidth(selectorline, seletornavsub, optionclass, arr, activeclass, selem, activeem, t) {
    var activeli = $(selectorline).siblings().children().eq(index);
    $(activeli).addClass(activeclass).siblings().removeClass(activeclass);
    $(activeli).find(selem).addClass(activeem);
    $(activeli).siblings().find(selem).removeClass(activeem);
    $(selectorline).width(arr[index]);
    $(seletornavsub + ':eq(' + index + ')').addClass(optionclass).siblings().removeClass(optionclass);
    switch (index) {
        case 0:
            $(selectorline).animate({ left: index + index * t }, 1);
            break;
        case 1:
            $(selectorline).animate({ left: arr[index - 1] + index * t }, 1);
            break;
        case 2:
            $(selectorline).animate({ left: arr[index - 1] + arr[index - 2] + index * t }, 1);
            break;
        case 3:
            $(selectorline).animate({ left: arr[index - 1] + arr[index - 2] + arr[index - 3] + index * t }, 1);
            break;

        case 4:
            $(selectorline).animate({ left: arr[index - 1] + arr[index - 2] + arr[index - 3] + arr[index - 4] + index * t }, 1);
            break;

        case 5:
            $(selectorline).animate({ left: arr[index - 1] + arr[index - 2] + arr[index - 3] + arr[index - 4] + arr[index - 5] + index * t }, 1);
            break;

        case 6:
            $(selectorline).animate({ left: arr[index - 1] + arr[index - 2] + arr[index - 3] + arr[index - 4] + arr[index - 5] + arr[index - 6] + index * t }, 1);
            break;

        case 7:
            $(selectorline).animate({ left: arr[index - 1] + arr[index - 2] + arr[index - 3] + arr[index - 4] + arr[index - 5] + arr[index - 6] + arr[index - 7] + index * t }, 1);
            break;
    }

}

/*下拉选项框*/
function hover_select(selector, classname) {
    $(selector).hover(function () {
        $(this).addClass(classname).siblings().removeClass(classname);
    });
}
//我的店安家下拉框
function hover_select_person(selector, classname) {
    $(selector).hover(function () {
        $(this).addClass(classname).siblings().removeClass(classname).parent().siblings().children().removeClass(classname);
    });
}

function click_select_search(selector, selectorspan) {
    $(selector).click(function () {
        $(this).parent().siblings(selectorspan).html($(this).html());
        var nowId = $(this).attr("id");
        $(this).parent().siblings(selectorspan).attr("value", nowId);
        $(this).parent().slideUp();
    });
}

function hover_select_search(parentsel, childsel) {
    $(parentsel).hover(function () {
        $(this).find(childsel).filter(':not(:animated)').slideDown();
    }, function () {
        $(this).find(childsel).slideUp();
    });
}

//列表页表单提交
function click_select(parentsel, childsel1, childsel2, childsel3, activeclass1, activeclass2, activeclass3, parentactive) {
    $(parentsel).click(function () {

        $(parentsel).find(childsel2).removeClass(activeclass2);
        $(parentsel).find(childsel3).removeClass(activeclass3);
        if ($(this).hasClass(parentactive)) {
            $(this).removeClass(parentactive);
            $(this).find(childsel1).hide();
            $(this).find(childsel2).removeClass(activeclass2);
            $(this).find(childsel3).removeClass(activeclass3);
        }
        else {
            $(this).addClass(parentactive);
            $(this).find(childsel1).show();
            $(this).find(childsel2).addClass(activeclass2);
            $(this).find(childsel3).addClass(activeclass3);
        }
    });
}
//列表页表单提交
function click_select_form(selector, selectorspan, selectorh2) {
    $(selector).click(function () {
        $(this).parent().siblings(selectorspan).html($(this).html());
        // var nowId = $(this).attr("id");
        // $(this).parent().siblings(selectorspan).attr("value", nowId);
        $(this).parent().slideUp();
        var nowId = $(this).attr("id");
        $(this).parent().siblings(selectorspan).attr("value", nowId);
        if ($(this).parent().siblings(selectorspan).html() == '我是卖家') {
            $(this).parent().parent().siblings(selectorh2).html('给您的网站做个测评吧');
        }
        else if ($(this).parent().siblings(selectorspan).html() == '我是买家') {
            $(this).parent().parent().siblings(selectorh2).html('给中意的网店做个测评吧');
        }
    });
}
/*侧导航手风琴按钮*/
function menuSwitch(selector1, selector2) {

    $(selector1).hover(function () {
        $(selector2).filter(':not(:animated)').slideDown(300);
    }, function () {
        $(selector2).slideUp(300);
    });

}
/*//条件筛选
function condition_choose(sela, selected, selectall, selectnum, parentsel, appendem) {
    $(sela).click(function () {
        $(this).addClass(selected).siblings().removeClass(selected);
        if ($(this).hasClass(selectall)) {
            $(selectnum).remove();
        }
        else {
            var copyThisA = $(this).clone();
            copyThisA.append(appendem);
            if ($(selectnum).length > 0) {

                $(selectnum).html($(this).text()).append(appendem);
            }
            else {
                $(parentsel).append(copyThisA.attr("id", selectnum.split('#')[1]));
            }
        }
    });
}
function condition_choose_del(selem, selall, selected) {
    $(selem).live("click",
     function () {
         $(this).parent().remove();
         $(selall).addClass(selected).siblings().removeClass(selected);
     });
}
function condition_choose_select(selli, selectnum, parentsel, appendem) {
    $(selli).click(function () {
        var copyThisA = $('<a href="#"></a>')
        copyThisA.html($(this).text()).append(appendem);
        if ($(selectnum).length > 0) {

            $(selectnum).html($(this).text()).append(appendem);
        }
        else {
            $(parentsel).append(copyThisA.attr("id", selectnum.split('#')[1]));
        }
    });
}
function condition_choose_selectd(selem) {
    $(selem).live("click",
     function () {
         $(this).parent().remove();
     });
}
//*/
//收藏网店
function collection(selector, classactive) {
    $(selector).click(function () {
        if ($(this).hasClass(classactive)) {
            //debugger;
            $(this).removeClass(classactive);
            haveSave(this);
        }
        else {
            //debugger;
            notSave(this);           
            $(this).addClass(classactive);
        }
    });
}

//快速出售网店
function sale_window(selsale, selsub, selnotice, selmsg, selfooter, selinput, seltextarea, classclose, classsubon) {
  
    $(".option-on").click(function () {      
        var Isdisplay = $('.sale-subon').css('display');
        if (!Isdisplay)
        {
            $(selsub).show().addClass(classsubon).animate({ width: '420px', height: '274px', padding: '19px 31px 9px' }, 400);
            $(selnotice).show();
            $(selmsg).show();
            $(selfooter).show();
            $(this).removeClass(classclose);
        }
        else
        {
            $(selsub).removeClass(classsubon).animate({ width: 0, height: 0, padding: 0 }, 400);
            $(selnotice).hide();
            $(selmsg).hide();
            $(selfooter).hide();
            $(this).addClass(classclose);
            $(selinput).val('');
            $(seltextarea).val('');
        }

    });

    $(document).mouseup(function (e) {
        var _con = $('.sale-subon');   // 设置目标区域
        var _con1 = $('.quick-sale');
        if (!_con.is(e.target) && _con.has(e.target).length === 0 && !_con1.is(e.target) && _con1.has(e.target).length === 0) {
                $(selsub).removeClass(classsubon).animate({ width: 0, height: 0, padding: 0 }, 400);
                $(selnotice).hide();
                $(selmsg).hide();
                $(selfooter).hide();
                $(this).addClass(classclose);
                $(selinput).val('');
                $(seltextarea).val('');
        };
    });

}


//快速出售网店重置
function salemsg_reset(selreset, selinput, seltextarea) {
    $(selreset).click(function () {
        $(selinput).val('');
        $(seltextarea).val('');
    });
}
//立即出售网店提交信息
function shopmsg_submit(selsub, selsubmit, selname, selphone, selmsg, seltextarea) {
    $(selsubmit).click(function () {
        if ($(selname).val().trim() == '') {
            alert('请输入旺旺名或店铺名');
        }
        else {
            var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
            if ($(selphone).val().trim() == '') {
                alert('请输入正确的手机号');
            }
            else if (reg.test($(selphone).val())) {
                var data = { name: '', address: '', phone: '', qq: '', description: '' }
                $(selmsg).each(function (index) {
                    if (index == 0) {
                        data.name = $(this).val();
                    }
                    if (index == 1) {
                        data.address = $(this).val();
                    }
                    if (index == 2) {
                        data.phone = $(this).val();
                    }
                    if (index == 3) {
                        data.qq = $(this).val();
                    }
                });
                data.description = $(seltextarea).val();
             //   debugger;
                //牟鹏添加js

                $.ajax({
                    url: "/buyshop/submitSeal",
                    type: "Post",
                    data:
                        {
                            name: data.name,
                            address: data.address,
                            phone: data.phone,
                            qq: data.qq,
                            description: data.description
                        },
                    dataType: "json",
                    success: function (data) {
                        alert('【挂售信息已经提交成功啦！】稍后会有客服与您取得联系咨询店铺详细情况,录入信息越完善咨询的人会越多，请您保持电话畅通哦！^_^ ^_^ ^_^');
                        $(selsub).hide();
                    },
                    error: function () {
                        alert("网络错误，请稍后再试！");
                    }
                });
            }
            else {
                alert('请输入正确的手机号');
            }
        }
    });
}
//提交网店测评--牟鹏添加JS 2017年6月16日16:21:09
function submitTest() {

    var UserType = $("#userType").attr("value");
    var storeName = $("#storeName").val();
    var telNum = $("#telNum").val();

    if (!storeName) {
        alert("请输入网店网址或旺旺号！");
        $("#storeName").focus();
        return false;
    }
    else if (!telNum) {
        alert("您的手机或QQ号！");
        $("#telNum").focus();
        return false;
    }
    else {
        $.ajax({
            url: "/buyshop/submitTest",
            type: "Post",
            data:
                {
                    UserType: UserType,
                    storeName: storeName,
                    telNum: telNum
                },
            dataType: "json",
            success: function (data) {
                alert("提交成功，网店测评报告会在一天之内发给您！");
                $("#storeName").val("");
                $("#telNum").val("");

            },
            error: function () {
                alert("网络错误，请稍后再试！");
            }
        });
    }
}
function haveSave(self) {
//  debugger;
    var id = $(self).attr("value");
    $.ajax({
        url: "/buyshop/haveSave",
        type: "Post",
        data:
            {
                id: id
            },
        dataType: "json",
        success: function (data) {          
            if (data.flag==false) {               
                window.location.href = data.url;
            }
            else
            {
                $(self).html("<b></b>收藏此网店");
            }
            
        },
        error: function () {

        }
    });
}

function notSave(self) {
//  debugger;
    var id = $(self).attr("value");
    $.ajax({
        url: "/buyshop/notSave",
        type: "Post",
        data:
            {
                id: id
            },
        dataType: "json",
        success: function (data) {
            if (data.flag == false) {
                window.location.href = data.url;
            }
            else {
                $(self).html("<b></b>已收藏");
            }
          
           
        },
        error: function () {

        }
    });
}

/*侧导航手风琴按钮*/
menuSwitch('.menu', '.menu ul');

$(function () {

    //判断浏览器是否支持placeholder属性
    supportPlaceholder = 'placeholder' in document.createElement('input'),

    placeholder = function (input) {

        var text = input.attr('placeholder'),
        defaultValue = input.defaultValue;
        if (!defaultValue) {

            input.val(text).addClass("phcolor");
        }

        input.focus(function () {
            if (input.val() == text) {
            	
            	if(input.val()=='输入密码'){
                	 $(this).hide();
                	 $('#pwd').show().focus();
                }
            	if(input.val()=='再次输入密码'){
                	 $(this).hide();
                	 $('#repeatpwd').show().focus();
                }
            	if(input.val()=='密码'){
                	 $(this).hide();
                	 $('#userpwd').show().focus();
                }
                $(this).val("");
                
            }
        });

        input.blur(function () {

            if (input.val() == "") {
                $(this).val(text).addClass("phcolor");
            }
        });
        
        function pwd_blur(sel,sel01){
        	$(sel).blur(function(){
        		if($(this).val()==''){
        			$(this).siblings(sel01).show();
		         	$(this).siblings(sel01).val($(this).attr('placeholder'));
		        	$(this).hide();
        		}
         	
         });
        }
        pwd_blur('#pwd','#pwd01');
        pwd_blur('#repeatpwd','#repeatpwd01')
        pwd_blur('#userpwd','#userpwd01')
        

        //输入的字符不为灰色
        input.keydown(function () {

            $(this).removeClass("phcolor");
        });
    };

    //当浏览器不支持placeholder属性时，调用placeholder函数
    if (!supportPlaceholder) {

        $('input').each(function () {

            text = $(this).attr("placeholder");

            if ($(this).attr("type") == "text") {
                 var inputheight=$(this).height();
                 $(this).css({'line-height':inputheight+'px'});
                 placeholder($(this));
                
            }
            
        });
    }
    else{
    	$('#pwd01').remove();
    	$('#repeatpwd01').remove();
    	$('#userpwd01').remove();
    	$('#pwd').show();
    	$('#repeatpwd').show();
    	$('#userpwd').show();
    }
  
});


//判断浏览器是否支持placeholder属性
supportPlaceholder = 'placeholder' in document.createElement('textarea'),

placeholder = function (textarea) {

    var text = textarea.attr('placeholder'),
    defaultValue = textarea.defaultValue;

    if (!defaultValue) {

        textarea.val(text).addClass("phcolort");
    }

    textarea.focus(function () {

        if (textarea.val() == text) {

            $(this).val("");
        }
    });


    textarea.blur(function () {

        if (textarea.val() == "") {

            $(this).val(text).addClass("phcolort");
        }
    });

    //输入的字符不为灰色
    textarea.keydown(function () {

        $(this).removeClass("phcolort");
    });
};

//当浏览器不支持placeholder属性时，调用placeholder函数
if (!supportPlaceholder) {

    $('textarea').each(function () {

        text = $(this).attr("placeholder");
        placeholder($(this));
    });
}

//牟鹏添加js
$(document).ready(function () {
    $(".select-list").find("li").click(function () {
        var url = $(this).find("a").attr("href");
        if (url) {
            window.location.href = url;
        }
    });
    setTimeout(function () {
        $('.leftside').fadeIn(2000);
    }, 25000);

    //网店截图第一张图片默认显示
    $('.screenshots-sub .ss-item').eq(0).addClass('ss-item-on');
});

function AddMsg( ClickName, LocalUrl, LocalDes,  AskContent,AskIp)
{
    $.ajax({
        url: "/Member/AddMsg",
        type: "POST",
        data: {
            ClickName: ClickName,
            LocalUrl: LocalUrl,
            LocalDes: LocalDes,
            AskContent: AskContent,
            AskIp: AskIp
           
        },
        success: function (data) {
           
        },
        dataType: "json",
        error: function (data) {
           
        }
    });
}
function AddMsgDetail(ClickName, LocalUrl, LocalDes, AskContent,urlText, AskIp) {
    $.ajax({
        url: "/Member/AddMsg",
        type: "POST",
        async:false,
        data: {
            ClickName: ClickName,
            LocalUrl: LocalUrl,
            LocalDes: LocalDes,
            AskContent: AskContent,
            AskIp: AskIp

        },
        success: function (data) {
            window.open(urlText);
        },
        dataType: "json",
        error: function (data) {

        }
    });
}

$(document).on("keydown paste", "input.onlynumber", function (event) {
    var key = event.keyCode;
    if (event.ctrlKey || event.shiftKey || event.altKey) { return false; }
    if ((key < 48 || key > 57) && key != 8 && key != 37 && key != 39) { //键盘开放删除，和左右键
        if (key < 96 || key > 105) //小键盘
        {
            return false;
        }
    }
});

//在线咨询提示信息跳动
var consultshow=setInterval(consultShow,1000);
var consulthide=setInterval(consultHide,1400);
function consultShow(){
	$('.consult b').show();
}
function consultHide(){
	$('.consult b').hide();
}

//点击左右切换轮播
function clickCarousel(btnnext,btnprev,carouselsel,carouselselon,othersel,othersel1){
	var carouselclass=carouselsel.split('.')[1];
	var carouselclasson=carouselselon.split('.')[1];
	$(carouselsel).eq(0).addClass(carouselclasson);
	function autoMove(){
	  		var maxindex=$(carouselsel).length;
	        if($(carouselsel).hasClass(carouselclasson)){
	        	index=$(carouselselon).index();
	        	if(index==maxindex-1){
	            	$(carouselselon).removeClass(carouselclasson);
	            	$(carouselsel).eq(0).addClass(carouselclasson);
	            	$(othersel).eq(0).show().siblings(othersel).hide();
	            	$(othersel1).eq(0).show().siblings(othersel1).hide();
	        	}
	        	else{
	            	$(carouselselon).removeClass(carouselclasson);
	            	$(carouselsel).eq(index+1).addClass(carouselclasson);
	                $(othersel).eq(index+1).show().siblings(othersel).hide();
	                $(othersel1).eq(index+1).show().siblings(othersel1).hide();
	        	}
	        }
	}
	 $(btnnext).click(function () {
	  	autoMove();
   });
	  
    $(btnprev).click(function () {
    	if($(carouselsel).hasClass(carouselclasson)){
        	index=$(carouselselon).index();
        	$(carouselselon).removeClass(carouselclasson);
        	$(carouselsel).eq(index-1).addClass(carouselclasson);
        	$(othersel).eq(index-1).show().siblings(othersel).hide();
        	$(othersel1).eq(index-1).show().siblings(othersel1).hide();
        }
    });
    var auto=setInterval(autoMove,3000);
    $('.form').on('mouseover',function(){
    	clearInterval(auto);
    }).on('mouseleave',function(){
    	auto=setInterval(autoMove,3000);
    });
}

//回到顶部
$(function () {
    $('#gotop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    });
});

$(document).ready(function () {
    //客户评价轮播
    multipleCarousel('.ly-carouselc', '.ly-carouselc > div', '.L-prevbtn', '.L-nextbtn', 300);
});
//客户评价轮播
function multipleCarousel(parentsel, childsel, prevbtn, nextbtn, speed) {
    var moveleft = $(parentsel).children().eq(0).outerWidth(true);
    var length = $(parentsel).children().length;
    $(childsel).each(function () {
        $(parentsel).append($(this).clone());
    });
    $(parentsel).prepend($(childsel).eq(length - 1).clone());

    $(prevbtn).click(function () {
        var left = parseInt($(parentsel).css('left'));
        if (!$(parentsel).is(':animated')) {
            $(parentsel).animate({ 'left': left + moveleft }, speed, function () {
                if (left == (-moveleft)) {
                    $(parentsel).css('left', left - moveleft * (length - 1));
                }
            });
        }
    });
    $(nextbtn).click(function () {
        rightMove();
    });

    //自动轮播
    var timer;
    timer = setInterval(rightMove, 2000);
    $('.ly-contaierc').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(rightMove, 2000);
    });

    function rightMove() {
        var left = parseInt($(parentsel).css('left'));
        if (!$(parentsel).is(':animated')) {
            $(parentsel).animate({ 'left': left - moveleft }, speed, function () {
                if (left == (-moveleft * length)) {
                    $(parentsel).css('left', -moveleft);
                }
            });
        }
    }
}





