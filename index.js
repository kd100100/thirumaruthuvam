$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>0) {
            $("header").css({"background-color" : "#e0e0e2"})
        }
        else {
            $("header").css({"background-color" : "rgba(224, 224, 224,0.5)"})
        }
    })
})