<?php
$errorMsg = ""; //Variable for error messages

// Checks server request method is post

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// Name

	if (empty($_POST["name"])) {
		$errorMsg = "Your name is required.";
	}
	else {
		$name = validate($_POST["name"]);

		// Checks to make sure name contains only letters

		if (!preg_match("/^[a-zA-Z]*$/", $name)) {
			$errorMsg = "Name may only contain letters.";
		}
	}

	// Email

	if (empty($_POST["email"])) {
		$errorMsg.= "A valid email is required.";
	}
	else {
		$email = validate($_POST["email"]);

		// Checks email format

		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errorMsg = "Invalid email format.";
		}
	}

	// Message

	if (empty($_POST["message"])) {
		$errorMsg.= "Please include a message.";
	}
	else {
		$message = validate($_POST["message"]);
		if (!preg_match("/^[a-zA-Z0-9]*$/", $message)) {
			$errorMsg = "Your message may only contain letters and numbers.";
		}
	}

	// Email info and formatting

	$emailTo = "contact@joshuanelson.me";
	$subject = "New Contact Form Message";
	$body.= "Name: ";
	$body.= $name;
	$body.= "\n";
	$body.= "Email: ";
	$body.= $email;
	$body.= "\n";
	$body.= "Message: ";
	$body.= $message;
	$body.= "\n";

	// Send email

	$success = mail($emailTo, $subject, $body, "From:" . $email);

	// Redirect to success page

	if ($success && errorMsg == "") {
		echo "success";
	}
	else {
		if ($errorMsg == "") {
			echo "Something didn't work quite right.";
		}
		else {
			echo $errorMsg;
		}
	}
}

// Function to validate form fields

function validate($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

?>
