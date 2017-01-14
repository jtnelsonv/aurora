$("#contactForm").submit(function(event) {
  // cancels the form submission
  event.preventDefault();
  submitForm();
});

function submitForm() {
  //Initiate variables with form content
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  $.ajax( {
    type: "POST",
    url: "../php/process.php",
    data: "name=" + name + "&email=" + email + "&message=" + message,
    success : function(text) {
      if (text == "success") {
        formSuccess();
      }
    }
  });
}

function formSuccess() {
  $("#formStatus").removeClass("hidden");
}
