$(document).ready(function(){
  
    $("#input-zone").focus(function() {
        $(this).animate({width: '+=1300px'},8000)
    });

    $("#input-zone").blur(function() {
        $(this).animate({width: '-=1300px'},8000)
    });

});

