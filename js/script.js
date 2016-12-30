$(document).ready(function() {


$('body').fadeIn(400);



$('a').click(function(event) {

event.preventDefault();

newLocation = this.href;

$('body').fadeOut(400, newpage);

});



function newpage() {

window.location = newLocation;

}

});
