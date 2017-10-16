$(function () {
    /*头部导航下拉*/
    $(".header_menu li").delay(100).hover(function () {
        $(this).find(".hmenu_bd").show();
    }, function () {
        $(this).find(".hmenu_bd").hide();
    });
    //搜索下拉选择
    $(".choose_item").each(function () {
        $(this).find(".choose_item_hd").click(function () {
            $(this).parents().children(".choose_item_bd").slideDown({duration: 500, easing: 'easeOutBack'});
        });
        var sel_con = $(this).find(".choose_item_hd .sel_con");
        var choose_item_bd = $(this).find(".choose_item_bd");
        $(this).find(".choose_item_bd li").each(function () {
            $(this).find("a").click(function () {
                var avalue = $(this).html();
                sel_con.val(avalue);
                choose_item_bd.hide();
            });
        });
        $(this).find(".choose_item_bd").mouseleave(function () {
            $(".choose_item_bd").hide();
        });
    });
    /*搜索切换*/
    $(".search_tab li").click(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        var index = $(this).index();
        switch (index) {
            case 0:
                $(".search_show").eq(0).addClass("on");
                $(".search_show:not(:eq(0))").removeClass("on");
                break;
            case 1:
                $(".search_show").eq(1).addClass("on");
                $(".search_show:not(:eq(1))").removeClass("on");
                break;
            case 2:
                $(".search_show").eq(2).addClass("on");
                $(".search_show:not(:eq(2))").removeClass("on");
                break;
            case 3:
                $(".search_show").eq(3).addClass("on");
                $(".search_show:not(:eq(3))").removeClass("on");
                break;
            case 4:
                $(".search_show").eq(4).addClass("on");
                $(".search_show:not(:eq(4))").removeClass("on");
                break;
            case 5:
            $(".search_show").eq(5).addClass("on");
            $(".search_show:not(:eq(5))").removeClass("on");
                break;
        }
    });
});