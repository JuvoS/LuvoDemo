$(function(){
    // 视频弹窗
    $(".play-video").click(function () {
        $("body").append("<div class='overlay'><div class='content'><div class='video-frame' ><a href='javascript:;' class='close-overlay'></a><video  width='100%'  controls='controls' autoplay='autoplay'> <source src='http://cdn.yuzhua.com/yuzhua.mp4' type='video/mp4' /> <object data='http://cdn.yuzhua.com/yuzhua.mp4' width='100%' ><embed src='http://cdn.yuzhua.com/yuzhua.swf' width='100%' /></object></video></div></div></div>");
    });
    $(document).on("click", ".close-overlay", function () {
        $(".overlay").remove();
    });
});