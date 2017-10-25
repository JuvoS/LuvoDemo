
    $(function () {
        var arr_shopnav = assign('.rmd-nav01 li');
        var arr_newsnav = assign('.news-nav li');
        var arr_tmallnav = assign('.tmall-nav li');
        /*网店推荐*/
        $('.rmd-nav01 .line').width(arr_shopnav[0]);/*默认激活*/

        $('.rmd-nav01 li').hover(function () {
            index = $(this).index();
            setWidth('.rmd-nav01 .line', '.rmd-navsub01', 'on', arr_shopnav, 'activeli', null, null, 24);
        });
        //天猫新店
        $('.tmall-nav .line').width(arr_tmallnav[0]);/*默认激活*/

        $('.tmall-nav li').hover(function () {
            index = $(this).index();
            setWidth('.tmall-nav .line', '.tmall-navsub', 'on', arr_tmallnav, 'activeli', null, null, 24);
        });

        /*网站公告*/
        $('.news-nav .line').width(arr_newsnav[0]);/*默认激活*/

        $('.news-nav li').hover(function () {
            index = $(this).index();
            setWidth('.news-nav .line', '.news-msg ', 'news-msg-on', arr_newsnav, 'activeli', null, null, 24);
        });


        /*侧导航手风琴按钮*/
        menuSwitch('.menu-head', '.menu ul', 1);   //1表示侧导航为展开状态

        //banner轮播
        $('#dowebok').smoothSlides();
        //var bodywidth=$(window).width();
        //$('.banner').width(bodywidth);
       

    });
/*网站公告*/
$(".news .news-msg a").each(function (index) {
    if (index % 2 != 0) {
        $(this).addClass('even');
    }
});

//回到顶部
$.scrollUp();
