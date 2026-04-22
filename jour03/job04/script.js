$(document).ready(function(){
  
    $("#input-zone").focus(function() {
        $(this).css("height", "50px");
        $(this).css("width", "200px");
    });

    $("#input-zone").blur(function() {
        $(this).css("height", "20px");
        $(this).css("width", "80px");
    });

});