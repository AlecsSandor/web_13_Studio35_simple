/*==================== LOADER ====================*/
function fade() {
    $(".loader").fadeOut();
}
setTimeout(fade,3000);

$(window).on('load', function(){ 
    $(".loader").fadeOut(); 
});