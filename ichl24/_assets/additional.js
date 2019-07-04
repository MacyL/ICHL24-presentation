


$( document ).ready(function() {
  setInterval(function(){
    $('.nav_active').removeClass("nav_active");
    if($('.present section').children('.lc').length > 0) {
        $('#lc').addClass("nav_active");
     } else if($('.present section').children('.calc').length > 0) {
        $('#calc').addClass("nav_active");
     } else if($('.present section').children('.cs').length > 0) {
        $('#cs').addClass("nav_active");
     } else if($('.present section').children('.results').length > 0) {
        $('#results').addClass("nav_active");
     } else if($('.present section').children('.outlook').length > 0) {
        $('#outlook').addClass("nav_active");
     }
   }, 800);
});
