<?php

  if($_SERVER["REQUEST_METHOD"] == "POST") {
    //Get form fields and remove white space
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    //Check that data was sent
    if(empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
      //Set 400 (bad request) response code
      http_response_code(400);
      echo "There was a problem with your message. Please complete the form and try again.";
      exit;
    }

    //Recipient email
    $recipient = "contact@joshuanelson.me";

    //Email subject
    $subject = "New Message From $name";

    //Email format
    $content = "Name: $name\n";
    $content = "Email: $email\n\n";
    $content = "Message:\n$message\n";

    //Email headers
    $headers = "From: $name <$email>";

    //Send email
    if(mail($recipient, $subject, $content, $headers)) {
      //Set 200 (okay) response code
      http_response_code(200);
      echo "Your message has been sent!";
    } else {
      //Set 500 (internal server error) response code
      http_response_code(500);
      echo "Your message could not be sent due to a server error.";
    }
  } else {
    //If not a POST request, set 403 (forbidden) response code
    http_response_code(403);
    echo "There was an issue with your submission, please try again.";
  }
?>
