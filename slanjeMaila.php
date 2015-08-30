<?php		

if(isset($_POST['button_pressed']))
{
	include('dobijPodatke.php');
	//require_once('PHPMailer_5.2.0/class.phpmailer.php');
	//include("PHPMailer_5.2.0/class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded
	require 'PHPMailer/PHPMailerAutoload.php';
	$mail = new PHPMailer();

	$mail->ContentType = 'text/plain'; 
    $mail->IsHTML(false);
	
	$body = "Podaci sa kontakt forme \r\nIme: " .$ime. "\r\nPrezime: ". $prezime. 
			"\r\nMjesto: " .$mjesto. "\r\nOpcina: ".$opcina. 
			"\r\nEmail: " .$email. "\r\nTelefon: ".$tel.
			"\r\nDatum rođenja: " .$datum. "\r\nStudent: " .$student.
			"\r\nFakultet: " .$fakultet. "\r\nPoruka: " .$poruka;
	$mail->IsSMTP(); // telling the class to use SMTP
	//$mail->Host       = "mail.yourdomain.com"; // SMTP server
	$mail->SMTPDebug  = 2;                     // enables SMTP debug information (for testing)
	// 1 = errors and messages
	// 2 = messages only
	$mail->SMTPAuth   = true;                  // enable SMTP authentication
	$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
	$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
	$mail->Port       = 465;                   // 587 set the SMTP port for the GMAIL server
	$mail->Username   = "test.mklico1@gmail.com";  // GMAIL username
	$mail->Password   = "commonwordsareeasytoguess";            // GMAIL password
	$mail->SetFrom('test.mklico1@gmail.com', 'Mailer');
	$mail->AddReplyTo($email);
	$mail->Subject    = "Muzej kulture i pozorišne umjetnosti - Podaci sa kontakt forme";
	//$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test
	//$mail->MsgHTML($body);
	$mail->CharSet = 'UTF-8';
	$mail->Body = $body;
	$address = "mklico1@etf.unsa.ba";
	$mail->AddAddress($address, "Merima Klico");
	$mail->AddCC('merimaxyz@yahoo.com');
	//$mail->AddAttachment("images/phpmailer.gif");      // attachment
	//$mail->AddAttachment("images/phpmailer_mini.gif"); // attachment

	if(!$mail->Send()) {
		echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
		echo "Zahvaljujemo se što ste nas kontaktirali";
		}
}
		
		?>