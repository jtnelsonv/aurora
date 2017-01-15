$("#contactForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        formError();
        formStatus(false, "The form is not filled out properly.");
    } else {
        event.preventDefault();
        submitForm();
    }
});

function submitForm() {
    //Initiate variables with form content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    //AJAX
    $.ajax({
        type: "POST",
        url: "../php/process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success: function(text) {
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                formStatus(false, text);
            }
        }
    });
}

function formSuccess() {
    $("#contactForm")[0].reset();
    formStatus(true, "Message sent!");
}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function formStatus(valid, msg) {
    if (valid) {
        msgClass = "h3 text-center tada animated text-success";
    } else {
        msgClass = "h3 text-center text-danger";
    }
    $("#formStatus").removeClass().addClass(msgClass).text(msg);
}
