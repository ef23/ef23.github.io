$(window).on("load", function() {
    function fade(pageLoad) {
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).innerHeight();
        var min = 0.01;
        var max = 1;
        var threshold = 0.01;
        $(".fadein").each(function() {
            var divHeight = $(this).outerHeight();
            var divTop = $(this).offset().top;
            var divBottom = $(this).offset().top + divHeight;
            if (divTop < windowTop) {
                if (divBottom > windowTop) {
                    $(this).fadeTo(0, min + ((max - min) * ((divBottom - windowTop) / divHeight)));
                } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
                    $(this).fadeTo(0, min);
                }
            } else if (divBottom > windowBottom) {
                if (divTop < windowBottom) {
                    $(this).fadeTo(0, min + ((max - min) * ((windowBottom - divTop) / divHeight)));
                } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
                    $(this).fadeTo(0, min);
                }
            } else if ($(this).css("opacity") <= max - threshold || pageLoad) {
                $(this).fadeTo(0, max);
            }
        });
    }
    fade(true);
    $(window).scroll(function() {
        fade(false);
    });
});
