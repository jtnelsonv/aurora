$(function() {
  //Get contact form
  var form = $('#contactForm');

  //Get the messages div
  var formMessages = $('#messages');

  //Event listener for form submit
  $(form).submit(function(event) {
    //Stops form submission by browser
    event.preventDefault();

    //Serialize form data
    var formData = $(form).serialize();

    //Submits form data to server
    $.ajax( {
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })

    //Success method
    .done(function(response) {
      //formMessage div success class
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      //Set message text
      $(formMessages).text(response);

      //Clear form
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');

    })

    //Fail method
    .fail(function(data) {
      //formMessage div error class
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      //Set message text
      if(data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('An error occured. Your message could not be sent.');
      }

    });

  });

});
