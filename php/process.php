<?php
$errorMsg = ""; //Variable for error messages

//Name
if(empty($_POST["name"])) {
	$errorMsg = "Your name is required.";
} else {
	$name = $_POST["name"];
}

//Email
if(empty($_POST["email"])) {
	$errorMsg = "A valid email is required.";
} else {
	$email = $_POST["email"];
}

//Message
if(empty($_POST["message"])) {
	$errorMsg = "Please include a message.";
} else {
	$message = $_POST["message"];
}

//Email info and formatting
	$emailTo = "contact@joshuanelson.me";
	$subject = "New Contact Form Message";

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
	$success = mail($emailTo, $subject, $body, "From:".$email);

	//Redirect to success page
	if ($success && $errorMsg == "") {
		echo "success";
	} else {
		if($errorMsg == "") {
			echo "Something didn't work quite right.";
		} else {
			echo $errorMsg;
		}
	}

 ?>
