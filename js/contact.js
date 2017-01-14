$("#contactForm").submit(function(event) {
  if (even.isDefaultPrevented()) {
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
  $.ajax( {
    type: "POST",
    url: "../php/process.php",
    data: "name=" + name + "&email=" + email + "&message=" + message,
    success : function(text) {
      if (text == "success") {
        formSuccess();
      } else {
        formError();
        formStatus(false,text);
      }
    }
  });
}

function formSuccess() {
  $("#contactForm")[0].reset();
  formStatus(true, "Message sent!");
}

function formError() {
  $("#contactForm").removeClass().addClass('text-danger');
}

function formStatus(valid, msg) {
  var msgClass;
  if(valid) {
    msgClass = "text-success";
  } else {
    msgClass = "text-danger";
  }
  $("#formStatus").removeClass().addClass(msgClass).text(msg);
}
