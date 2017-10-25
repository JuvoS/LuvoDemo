(function($) {
    $.scrollUp = function(options) {
        var settings = {
            scrollName: "scrollUp",
            topDistance: "400",
            topSpeed: 300,
            animation: "fade",
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: "",
            activeOverlay: false
        };
        if (options)
            var settings = $.extend(settings, options);
        var sn = "#" + settings.scrollName, an = settings.animation, os = settings.animationOutSpeed, is = settings.animationInSpeed, td = settings.topDistance, st = settings.scrollText, ts = settings.topSpeed, ao = settings.activeOverlay;
        $("<a/>", {
            id: settings.scrollName,
            href: "#top",
            title: st,
            text: st
        }).appendTo("body");
        $(sn).css({
            "display": "block",
            "position": "fixed",
            "z-index": "2147483647"
        });
        if (ao) {
            $("body").append("<div id='" + settings.scrollName + "-active'></div>");
            $(sn + "-active").css({
                "position": "fixed",
                "top": td + "px",
                "width": "100%",
                "border-top": "1px dotted " + ao,
                "z-index": "2147483647"
            })
        }
      
        $(sn).click(function(event) {
            $("html, body").animate({
                scrollTop: 0
            }, ts);
            return false
        })
    }
})(jQuery);