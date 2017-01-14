<?php
  $name = $email = $message = "";
  $nameErr = $emailErr = $messageErr = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
      $nameErr = "Name is required.";
    } else {
      $test_input($_POST["name"]);
      if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
        $nameErr = "Only letters and spaces allowed.";
      }
    }

    if (empty($_POST["email"])) {
      $emailErr = "Email required.";
    } else {
      $email = test_input($_POST["email"]);
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format.";
      }
    }

    if (empty($_POST["message"])) {
      $messageErr = "A message is required.";
    } else {
      $message = test_input($_POST["message"]);
    }
  }

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  $to = "contact@joshuanelson.me";

  $subject = "Message received from $name";

  $message  = "Name: $name\r\n";
  $message .= "Email: $email\r\n";
  $message .= "$message";

  $headers  = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "From: $name <$email>\r\n";
  $headers .= "X-Priority: 1\r\n";
  $headers .= "X-MSMail-Priority: High\r\n\r\n";

  if (mail($to, $subject, $message, $headers)) {
    echo "success";
  } else {
    echo "Failed to send the message.";
  }
 ?>
