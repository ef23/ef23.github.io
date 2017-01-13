$(window).on("load",function() {
  function fade(pageLoad) {
    var windowTop  =  $(window).scrollTop();
    var windowBottom  =  windowTop + $(window).innerHeight();
    var min = 0.01; 
    var max = 1;
    var threshold = 0.01;
    
    $(".fadein").each(function() {
      
        var divHeight = $(this).outerHeight();
        var divTop = $(this).offset().top;
        var divBottom = $(this).offset().top + divHeight;
          
        //set opacity of the element based on the percentage of its visibility
        if (divTop < windowTop) {
            //calculate based off of how much of upper part of the div is visible
            if (divBottom > windowTop) {
                $(this).fadeTo(0, min + ((max - min) * ((divBottom - windowTop) / divHeight)));
            }
            //if not within the page boundaries
            else if ($(this).css("opacity") >= min + threshold || pageLoad) {
                $(this).fadeTo(0,min);
            }
        //vice versa
        } else if (divBottom > windowBottom) {
            if (divTop < windowBottom) {
                $(this).fadeTo(0, min + ((max - min)* ((windowBottom - divTop) / divHeight)));
            }
            else if ($(this).css("opacity") >= min + threshold || pageLoad) {
                $(this).fadeTo(0,min);
            }
        } else if ($(this).css("opacity") <= max-threshold || pageLoad) {
            $(this).fadeTo(0,max);
        }
    });
  } fade(true); //fade once the page is loaded
  $(window).scroll(function(){
        fade(false);
    }); //fade elements on scroll
});