$(document).ready(function() {
    
    //call function everytime there is a scroll
    $(window).scroll( function(){
    
        //check location
        $('.fadein').each( function(i){
            
            var bottomOfDiv = $(this).offset().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            
            //only fade in if the div is completely visible
            if( bottomOfWindow > bottomOfDiv){
                if ($(this).css("opacity")==0)
                    $(this).animate({'opacity':'1'},500);
            } else {
                if ($(this).css("opacity")==1)
                    $(this).animate({'opacity':'0'},500);
            }
        }); 
    }).scroll();
});