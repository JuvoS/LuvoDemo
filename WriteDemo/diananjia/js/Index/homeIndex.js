
    $(function () {
        //banner下面的数字自增
        //网店成交数量
        $.eleNumberAdd({
            ele: ".J-shopDeal",//number父元素的类名或ID
            initval: 0,//初始值
            endval: sealCount,//最终值
            increasing: 20,//每次增加数量
            times: 1500//在多少毫秒内执行完毕
        });
        //代售网店数
        $.eleNumberAdd({
            ele: ".J-consigneeShop",
            initval: 20,
            endval: storeCount,
            increasing: 80,
            times: 1500
        });
        //今日生成测评报告
        $.eleNumberAdd({
            ele: ".J-evaluationReport",
            initval: 0,
            endval: reportCount,
            increasing: 5,
            times: 1500
        });
        //求购信息
        $.eleNumberAdd({
            ele: ".J-buyNews",
            initval: 0,
            endval: askBuy,
            increasing: 1,
            times: 1500
        });
        //累计服务会员
        $.eleNumberAdd({
            ele: ".J-serviceMember",
            initval: 0,
            endval: memberCount,
            increasing: 200,
            times: 1500
        });
       
        //function banercr(index, times) {
        //    var settime = setTimeout(function () {
        //        if (index == 1) {
        //            $(".trading-data").removeClass("trading-data-blue1").addClass("trading-data-blue2");
        //        } else {
        //            $(".trading-data").removeClass("trading-data-blue2").addClass("trading-data-blue1");
        //        }
        //    }, times);
        //}
        //$.tcjBannerChange({
        //    effects: 4,//播放效果,一共只有1-4共4种效果
        //    times: 4000,//停留时间
        //    test: function (index) {
        //        banercr(index, 400);
        //    }
        //});

        //网店推荐轮播
        jQuery(".multipleColumn").slide({
            titCell: ".hd ul",
            mainCell: ".bd .ulWrap",
            autoPage: true,
            effect: "leftLoop",
            autoPlay: true,
            vis: 3
        });

      
    });
    $(document).ready(function () {
        //七夕弹窗js start
      
        ///立即领取
        $(".t-qixi-submit").off("click").on("click", function () {
            if (!$.trim($(".t-qixi-contentPhoneNum").val()).match(/(1[3-9]\d{9}$)/)) {//判断手机号码格式
                alert("手机号码格式不正确！");
                $(".t-qixi-contentPhoneNum").focus();
                return false;
            } else if ($.trim($(".t-qixi-contentPhoneCode").val()) == "") {//判断验证码是否为空
                alert("验证码不能为空！");
                $(".t-qixi-contentPhoneCode").focus();
                return false;
            }
            else
            {
                getCoupon();
            }
        });

        //获取验证码
        $(".J-qixi-getCode").off("click").on("click", function () {
            //判断手机号码格式
            if (!$.trim($(".t-qixi-contentPhoneNum").val()).match(/(1[3-9]\d{9}$)/)) {
                alert("手机号码格式不正确！");
                $(".t-qixi-contentPhoneNum").focus();
                return false;
            }
            else
            {
                countDown();
            }
            //60秒倒数计时
          
            function countDown() {
                $(".t-qixi-getCode").attr("disabled", "disabled");
                var time = 60;//从60开始倒数计时
                send();
                var numReduce = setInterval(function () {
                    if (time > -1) {
                        $(".t-qixi-getCode").text(time + "秒后重发").addClass("t-qixi-codeBg");
                    } else if (time == -1) {
                        $(".t-qixi-getCode").text("获取验证码").removeAttr("disabled").removeClass("t-qixi-codeBg");
                        clearInterval(numReduce);
                    }
                    time--;
                }, 1000);
            }
        });
        //关闭弹窗
        $(".J-qixi-close").off("click").on("click", function () {
            $("body").css("overflow", "auto");
            $(".t-qixi-mask,.t-qixi-content").fadeOut();
        });

        //if (parseInt(listHave)<1) {
        //    $(".t-qixi-mask,.t-qixi-content").show();
        //    $(document.body).css('overflow', 'hidden');
        //}
        //else
        //{
        //    $(".t-qixi-mask,.t-qixi-content").hide();
        //    $(document.body).css('overflow', 'auto');
        //}


        ////首页banner轮播 start
        //function banercr(index, times) {
        //    var settime = setTimeout(function () {
        //        if (index % 5 == 1) {
        //            $(".trading-data").removeClass("trading-data-blue1 trading-data-red3").addClass("trading-data-blue2");
        //        } else if (index % 5 == 2) {
        //            $(".trading-data").removeClass("trading-data-blue1 trading-data-blue2").addClass("trading-data-red3");
        //        } else if (index % 5 == 3) {
        //            $(".trading-data").removeClass("trading-data-blue2 trading-data-red3").addClass("trading-data-blue1");
        //        } else if (index % 5 == 4) {
        //            $(".trading-data").removeClass("trading-data-blue2 trading-data-red3").addClass("trading-data-blue1");
        //        } else if (index % 5 == 0) {
        //            $(".trading-data").removeClass("trading-data-blue1 trading-data-red3").addClass("trading-data-blue2");
        //        }
        //    }, times);
        //}

        //首页banner轮播 start
        function banercr(index, times) {
            var settime = setTimeout(function () {
                if (index % 4 == 1) {
                    $(".trading-data").removeClass("trading-data-blue1 trading-data-red3").addClass("trading-data-blue2");
                } else if (index % 4 == 2) {
                    $(".trading-data").removeClass("trading-data-blue2 trading-data-red3").addClass("trading-data-blue1");
                } else if (index % 4 == 3) {
                    $(".trading-data").removeClass("trading-data-blue2 trading-data-red3").addClass("trading-data-blue1");
                } else if (index % 4 == 0) {
                    $(".trading-data").removeClass("trading-data-blue1 trading-data-red3").addClass("trading-data-blue2");
                }
            }, times);
        }

        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 4000,//轮播时间
            autoplayDisableOnInteraction: false,
            onSlideChangeEnd: function (swiper) {
                banercr(swiper.activeIndex, 20);
            }
        });
        //首页banner轮播 end

    });
  

//真假客服验证
$('.kefu-yanz').click(function () {
    $('.mask').show();
    $('.mask_kf').hide();
});
//弹窗关闭
$('.mask b').click(function () {
    $('.mask').hide();
});
//判断真假客服
function checkKF() {
    var checkNum = $('#kf_num').val().trim();
    if ($('#kf_num').val().trim() != '') {

        $.ajax({
            url: "/home/chekckf",
            type: "Post",
            async: false,
            data:
                {

                    checkNum: checkNum
                },
            dataType: "json",
            success: function (data) {
                if (data.flag == false) {
                    $('.kefu-num').find('b').html(checkNum);
                    $('.kefu-num').find('span').html('为假客服！');
                    $('.kefu-noctice').html('此号码为假客服，若您在交易中遇到，请立即停止交易');
                    $('.mask img').attr('src', '/content/icon/jiakefu.png')
                }
                else {
                    $('.kefu-num').find('b').html(checkNum);
                }
            },
            error: function () {
            }
        });


    }
    else {
        alert('请输入验证客服号');
    }
}

var bottommaskFlag = false;
//底部咨询弹框
$(window).scroll(function () {
    if (bottommaskFlag == true) {
        var $this = $(this);
        var targetTop = $(this).scrollTop();
        var height = $(window).height();
        if (685 <= targetTop && targetTop <= 1715) {
            $('.bottom-mask').show();
        }
        else {
            $('.bottom-mask').hide();
        }
    }

})
//底部弹窗关闭
$('.bottom-close').click(function () {
    $('.bottom-mask').hide();
    bottommaskFlag = false;
});
//底部表单验证
$('.bottom-form button').click(function () {
    var regMobile = /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/; //手机号正则
    if (!$('.bottom-form input').eq(0).val()) {
        alert('请输入姓名！');
    }
    else {
        if (!regMobile.test($('.bottom-form input').eq(1).val())) {
            alert('请输入正确手机号！');
            $('.bottom-form input').eq(1).focus();
        }
        else {
              
            $.ajax({
                url: "/buyshop/submit",
                type: "Post",
                data:
                    {
                        UserName: $('.bottom-form input').eq(0).val(),
                        Description: "",
                        Predict: datetime,
                        TelNum: $('.bottom-form input').eq(1).val()
                    },
                dataType: "json",
                success: function (data) {
                    alert("提交成功，我会尽快为您提供合适的店铺！");
                    $('.bottom-form input').eq(1).val("");
                    $('.bottom-form input').eq(1).val("");
                },
                error: function () {
                    alert("网络错误，请稍后再试");
                }
            });
        }
    }
});

$('.rmd-navsub').hover(function () {
    $('.index-btn').fadeIn();
}, function () {
    $('.index-btn').fadeOut();
});



//红包弹窗


$('.coupon-submit').click(function () {
    var regMobile = /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/; //手机号正则
    var mobile = $("#cphonenum").val();
    if (!mobile) {
        alert('请输入手机号码！');
    }
    else if (!regMobile.test(mobile)) {
        alert('手机号码格式错误！');
    }
    else {
        if (!$('#checkCode').val()) {
            alert('请输入验证码！');
        }
        else {
            getCoupon();
        }
    }

});
   
//if (parseInt(listHave) > 0) {
//    $('.coupon-close').parents('.coupon-mask').hide();
//    $(document.body).css('overflow', 'auto');
//}
//else {

//    $('#coupon').click(function () {
//        $('.coupon-mask').fadeIn();
//        $(document.body).css('overflow', 'hidden');
//    });
//}
//关闭红包弹窗
//$('.coupon-close').click(function () {
//    $(this).parents('.coupon-mask').hide();
//    $(document.body).css('overflow', 'auto');
//});
//获取验证码
//$('.getcode').click(function () {
//    var regMobile = /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/; //手机号正则
//    var mobile = $("#cphonenum").val();
//    if (!mobile) {
//        alert('请输入手机号码！');
//        $("#cphonenum").focus();
//    }
//    else if (!regMobile.test(mobile)) {
//        alert('手机号码格式错误！');
//        $("#cphonenum").focus();
//    }
//    else {
//        var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
//        if (reg.test($('#cphonenum').val())) {

//            $('.getcode').hide();
//            $('.resetcode').show();
//            $('#second').html('60');
//            send();
//            var second = 60;
//            timer = null;
//            timer = setInterval(function () {
//                second--;
//                if (second > 0) {

//                    $('#second').html(second);
//                }
//                else {
//                    clearInterval(timer);
//                    $('.getcode').show();
//                    $('.resetcode').hide();
//                }
//            }, 1000);

//        }
//    }
//});


function send() {
    debugger;
    var regMobile = /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/; //手机号正则
    var mobile = $("#cphonenum").val();
    if (!mobile) {
        alert('请输入手机号码！');
        $('#cphonenum').focus();
    }
    else if (!regMobile.test(mobile)) {
        alert('手机号码格式错误！');
        $('#cphonenum').focus();
    }
    else {
        $.ajax({
            type: "post",
            url: "/Member/SendMobileCode",
            data: { "telNum": mobile },
            dataType: "json",
            success: function (data) {
                alert(data.msg);
            }
        });

    }

}


function getCoupon() {
    var mobile = $("#cphonenum").val();
    var checkCode = $("#checkCode").val();
    var regMobile = /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/; //手机号正则
    var mobile = $("#cphonenum").val();
    if (!mobile) {
        alert('请输入手机号码！');
        $('#cphonenum').focus();
        return false;
    }
    else if (!regMobile.test(mobile)) {
        alert('手机号码格式错误！');
        $('#cphonenum').focus();
        return false;
    }
    else if (!checkCode) {
        alert('请输入验证码！');
        $('#checkCode').focus();
        return false;
    }
    else {
        $.ajax({
            type: "post",
            url: "/Member/SenCoupon",
            data: { mobile: mobile, checkCode: checkCode },
            dataType: "json",
            success: function (data) {
                if (data.flag = true) {

                    var confirmText = confirm("恭喜您优惠券领取成功，是否去个人中心查看？");
                    if (confirmText) {
                        window.location.href = "/Leaguer/coupon";
                    }
                    else {
                        $('.coupon-mask').hide();
                        $(document.body).css('overflow', 'auto');
                        window.location.reload();
                    }


                }
                else {
                    alert(data.msg);
                }

            }
        });

    }

}
