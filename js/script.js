$(document).ready(function() {


$('.content, .footertext').fadeIn(400);



$('a').click(function(event) {

event.preventDefault();

newLocation = this.href;

$('.content, .footertext').fadeOut(400, newpage);

});



function newpage() {

window.location = newLocation;

}

});
