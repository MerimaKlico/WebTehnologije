<?php
header('Content-type: text/plain; charset=utf-8');
session_start();
function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            //  $data = htmlspecialchars($data);
            return $data; }

if (isset($_POST["admin_login"]))
{
$username=$password="";

if (isset($_POST['username'])) $username=test_input($_POST['username']);
if (isset($_POST['password'])) $password=test_input($_POST['password']);

if(empty($username) || empty($password)) echo "Prazan username ili šifra";

else {
	
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$veza->exec("set names utf8");
	
	ob_start();

    $korisnik_query = $veza->prepare("SELECT * FROM korisnici where username = ?");
	$korisnik = $korisnik_query->execute(array($_POST['username']));
    if ($korisnik) {
		while ($row = $korisnik_query->fetch()) {
				if($row['password']===$password){
					if ($row['admin']==1) {
						  $_SESSION['admin'] = $username;
						  //header('Location:adminPanel.php');
								}
							else //if ($row['admin']===0)
							{
								echo "Nemate administratorske privilegije";
							}
						}
					else echo "Pogresan username ili sifra";
				}
				
				echo "Korisničko ime ili šifra su pogrešni";
	}
    
	 
	
	 ob_end_flush();
}
}

	if (isset($_POST["resetujPassword"]))
	{
		function randomPassword() {
		$alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
		$pass = array(); //remember to declare $pass as an array
		$alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
		for ($i = 0; $i < 8; $i++) {
			$n = rand(0, $alphaLength);
			$pass[] = $alphabet[$n];
		}
		return implode($pass); //turn the array into a string
		}
		
		$username="";
		$email="";
		
		if (isset($_POST['username'])) $username=test_input($_POST['username']);
		if(empty($username)) echo "Morate unijeti username";
		
		else 
		{
			$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
			$veza->exec("set names utf8");
			ob_start();

			$korisnik_query = $veza->prepare("SELECT * FROM korisnici where username = ?");
			$korisnik = $korisnik_query->execute(array($_POST['username']));
			if ($korisnik) {
				while ($row = $korisnik_query->fetch()) {
			       
				   if ($row['admin']==1) 
				   {
					   $email=$row['email'];
					   $sifra=randomPassword();
					   $update=$veza->query("UPDATE korisnici SET password='".$sifra."' where username='".$username."' LIMIT 1");
						if (!$update) {
						$greska = $veza->errorInfo();
						print "SQL greška: " . $greska[2];
						exit();
						}
					  
					    require 'PHPMailer/PHPMailerAutoload.php';
						$mail = new PHPMailer();

						$mail->ContentType = 'text/plain'; 
						$mail->IsHTML(false);
					    
						$body = "Vaša nova šifra: " .$sifra;
						$mail->IsSMTP(); // telling the class to use SMTP
						//$mail->Host       = "mail.yourdomain.com"; // SMTP server
						//$mail->SMTPDebug  = 2;                     // enables SMTP debug information (for testing)
						// 1 = errors and messages
						// 2 = messages only
						$mail->SMTPAuth   = true;                  // enable SMTP authentication
						$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
						$mail->Host       = "smtp.gmail.com";      // sets GMAIL as the SMTP server
						$mail->Port       = 465;                   // 587 set the SMTP port for the GMAIL server
						$mail->Username   = "test.mklico1@gmail.com";  // GMAIL username
						$mail->Password   = "commonwordsareeasytoguess";            // GMAIL password
						$mail->SetFrom('test.mklico1@gmail.com', 'Mailer');
						$mail->AddReplyTo('test.mklico1@gmail.com');
						$mail->Subject    = "Reset sifre";
						//$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test
						//$mail->MsgHTML($body);
						$mail->CharSet = 'UTF-8';
						$mail->Body = $body;
						$address = $email;
						$mail->AddAddress($address, "Admin");

						if(!$mail->Send()) {
							echo "Mailer Error: " . $mail->ErrorInfo;
							} else {
							echo "Sifra uspjesno resetovana i poslana na adresu ".$email;
							}
				   }
					else //if ($row['admin']==0) 
						echo "Nemate administratorske privilegije"; 
								
					}
						
			}
			else echo "Pogresan username";
			
			 ob_end_flush();
		}
		
	}
?>