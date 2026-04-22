$(document).ready(function () {

    $("#input-zone").focus(function () {
        $(this)
            .stop(true, false)              // stop animation in progress
            .animate({ width: "500px" }, 6000); // expand
    });

    $("#input-zone").blur(function () {
        $(this)
            .stop(true, false)              // stop animation in progress
            .animate({ width: "100px" }, 6000); // shrink back
    });

});