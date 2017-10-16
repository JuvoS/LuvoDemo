$(window).resize(function () {
    var winH = $(window).height();
    $(".floatBar").css("height", winH + "px");
});
$(function () {
        // 左侧浮动
    var winH = $(window).height();
    $(".floatBar").css("height", winH + "px");
    $(".floatBar li").hover(function () {
        $(this).addClass("on");
        $(this).find("span").animate({"left": "-135px"}, {duration: 100, easing: 'easeInBounce'});
    }, function () {
        $(this).find("span").animate({"left": "82px"}, {duration: 100, easing: 'easeInBounce'});
        $(this).removeClass("on");
    });
	/*返回顶部*/
    if ($(this).scrollTop() == 0) {
        $(".floatBar li.n7").hide();
    }
    $(window).scroll(function (event) {
        if ($(this).scrollTop() == 0) {
            $(".floatBar li.n7").hide();
        }
        if ($(this).scrollTop() != 0) {
            $(".floatBar li.n7").show();
        }
    });
    $(".floatBar li.n7").click(function () {
        $("html,body").animate({
                scrollTop: "0px"
            },
            200
        )
    });
    var _footer_scroll = 0;
    // 底部浮动
    $(window).scroll(function () {
    	if(_footer_scroll == 0){
            if ($(this).scrollTop() > 150) {
                $(".channel-footer-box").css({"left": "0"});
                $(".channel-show-btn").css({"left": "-220px"});
                $(".channel-bottom-fixed").fadeIn();
            } else {
                $(".channel-footer-box").css({"left": "-100%"});
                $(".channel-show-btn").css({"left": "100%"});
                $(".channel-bottom-fixed").fadeOut();
            }
		}
    });

    $(".bottom_close").click(function () {
        _footer_scroll =1;
        $(".channel-footer-box").animate({"left": "-100%"}, {duration: 300, easing: 'easeOutQuad'});
        $(".channel-show-btn").delay(100).animate({"left": "100%"}, {duration: 200, easing: 'easeInQuad'});
        $(".channel-bottom-fixed").fadeOut();

    });

    $(".channel-show-btn").click(function () {
        _footer_scroll = 0;
        $(".channel-footer-box").animate({"left": "0"}, {duration: 300, easing: 'easeInQuad'});
        $(".channel-show-btn").animate({"left": "-220px"}, {duration: 200, easing: 'easeOutQuad'});
        $(".channel-bottom-fixed").fadeIn();
    });
})



