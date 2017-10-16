$(function () {
    //关闭通栏广告
    $(".ad_close").click(function () {
        $(this).hide();
        $(this).parents(".ad").hide();
    });
    //左侧text-align: right
    var link_length = $(".nav_box .links").children().length;
    for (var i = 0; i < link_length; i++) {
        if (i % 2 == 1) {
            $(".nav_box .links").children().eq(i).css("text-align", "right");
        }
    }
    //左侧展开栏
    var li_length = $(".nav_box .box_li").children().length;
    for (var i = 0; i < li_length; i++) {
        if (i % 2 == 1) {
            $(".nav_box .box_li").children().eq(i).css({
                "padding-left": "15px",
                "padding-right": "30px",
                "width": "242px"
            });
        }
    }
    //展开左侧栏
    $(".home_nav .nav_icon").hover(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    }, function () {
        $(this).removeClass("on");
        $(".nav_icon0").addClass("on");
    });
    //商标交易切换内容
    $(".side1 .main_fr .fr_tab li").click(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        $(this).find(".brand_box .brand:lt(3)").css({
            "border-top": "none"
        });
    });
    //去掉border
    $(".side1 .main_fr .fr_tab li.on .brand_box .brand:lt(3)").css({
        "border-top": "none"
    });
    var brand_length = $(".brand_box").children().length;
    for (var i = 0; i < brand_length; i++) {
        if (i % 3 == 0) {
            $(".brand_box").children().eq(i).css({
                "border-left": "1px solid transparent"
            });
        }
    }
    //去掉side2中margin-left
    var btns_length = $(".side2 .main_fr .btns").children().length;
    for (var i = 0; i < btns_length; i++) {
        if (i % 2 == 0) {
            $(".side2 .main_fr .btns").children().eq(i).css("margin-left", "0");
        }
    }
    //点击给li增加on
    $(".side5 .main_fr .info_show li").hover(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    }, function () {
        $(this).removeClass("on");
        $(".side5 .main_fr .info_show li:first-child").addClass("on");
    });
});