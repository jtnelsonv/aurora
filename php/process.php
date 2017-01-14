<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];

	$EmailTo = "contact@joshuanelson.me";
	$Subject = "New Contact Form Message";

	$body .= "Name: ";
	$body .= $name;
	$body .= "\n";

	$body .= "Email: ";
	$body .= $email;
	$body .= "\n";

	$body .= "Message: ";
	$body .= $message;
	$body .= "\n";

	//Send email
	$success = mail($EmailTo, $Subject, $body, "From:".$email);

	//Redirect to success page
	if ($success) {
		echo "success";
	} else {
		echo "invalid";
	}

 ?>
