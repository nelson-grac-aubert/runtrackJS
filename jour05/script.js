function togglePasswordVisibility() {

    var x = $("#password-input-zone")[0];

    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}

function togglePasswordConfirmationVisibility() {

    var x = $("#confirm-password-input-zone")[0];

    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}

$("#show-password").on("click", function() { 
    togglePasswordVisibility()
});

$("#show-confirm-password").on("click", function() { 
    togglePasswordConfirmationVisibility()
});