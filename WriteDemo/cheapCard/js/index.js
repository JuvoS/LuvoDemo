$(document).ready(function(){
    $(".my-rocket").hover(function(){
        $(".my-rocket").removeClass("animated bounceInRight");
        $(".my-rocket").addClass("animated pulse");
    },function(){
        $(".my-rocket").removeClass("animated pulse");
        $(".my-rocket").add("animated bounceInRight");
    })


    $(".the-btn-1").hover(function(){
        $(".the-btn-1").addClass("animated pulse");
    },function(){
        $(".the-btn-1").removeClass("animated pulse");
    })

    $(".the-btn-2").hover(function(){
        $(".the-btn-2").addClass("animated pulse");
    },function(){
        $(".the-btn-2").removeClass("animated pulse");
    })

    $(".the-btn-3").hover(function(){
        $(".the-btn-3").addClass("animated pulse");
    },function(){
        $(".the-btn-3").removeClass("animated pulse");
    })
});