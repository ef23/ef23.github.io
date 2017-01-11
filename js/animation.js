$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    var windowTop = $(this).scrollTop();
    $(".fadein").each(function() {
      
      var divBottom = $(this).offset().top + $(this).outerHeight()/1.5;
      var divTop = $(this).offset().top + $(this).outerHeight()/1.5;
      
      //if the element is mostly visible, fade it in, otherwise fade out
      if (divBottom < windowBottom && divTop > windowTop) { 
        if ($(this).css("opacity")==0.1) {$(this).fadeTo(300,1);}
      } else if (divTop < windowTop){ 
        if ($(this).css("opacity")==1) {$(this).fadeTo(300, 0.1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(300,0.1);}
      }
    });
  }).scroll(); //scoll handler upon loading page
});