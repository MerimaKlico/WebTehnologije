<?php		

function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}

function rest_post($request, $data)
{
	//include('dobijPodatke.php');
	//require_once('PHPMailer_5.2.0/class.phpmailer.php');
	//include("PHPMailer_5.2.0/class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded
	require 'PHPMailer/PHPMailerAutoload.php';
	
	$ime=$prezime=$mjesto=$opcina=$email=$tel=$datum=$poruka="";
	$ime=$data["firstName"];
	$prezime=$data["lastName"];
	$mjesto=$data["mjesto"];
	$opcina=$data["opcina"];
	$email=$data["email"];
	$tel=$data["tel"];
	$datum=$data["datum"];
	$poruka=$data["message"];
	
	$mail = new PHPMailer();

	$mail->ContentType = 'text/plain'; 
    $mail->IsHTML(false);
	
	$body = "Podaci sa kontakt forme \r\nIme: " .$ime. "\r\nPrezime: ". $prezime. 
			"\r\nMjesto: " .$mjesto. "\r\nOpcina: ".$opcina. 
			"\r\nEmail: " .$email. "\r\nTelefon: ".$tel.
			"\r\nDatum rođenja: " .$datum. "\r\nPoruka: " .$poruka;
			
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

function rest_error($request) { }

$method  = $_SERVER['REQUEST_METHOD'];
$request = $_SERVER['REQUEST_URI'];

switch($method) {
    case 'PUT':
        parse_str(file_get_contents('php://input'), $put_vars);
        zag(); $data = $put_vars; rest_put($request, $data); break;
    case 'POST':
        zag(); $data = $_POST; rest_post($request, $data); break;
    case 'GET':
    	zag(); $data = $_GET; rest_get($request, $data); break;
    case 'DELETE':
       parse_str(file_get_contents('php://input'), $delete_vars);
       zag(); $data = $delete_vars; rest_delete($request, $data); break;
    default:
        header("{$_SERVER['SERVER_PROTOCOL']} 404 Not Found");
        rest_error($request); break;
}
		
?>