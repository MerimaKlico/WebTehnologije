<?php

session_start();
function test_input($d) {
            $d = trim($d);
            $d = stripslashes($d);
            //  $data = htmlspecialchars($data);
            return $d; }
			
function isValidEmail($email){ 
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}
function rest_get($request, $data) {
	
	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$upit = $veza->prepare("SELECT * FROM korisnici WHERE admin=1");
	//$upit->bindValue(1, PDO::PARAM_INT);
	$upit->execute();
	print "{ \"list\": " . json_encode($upit->fetchAll()) . "}";

 }
function rest_post($request, $data) {
	
	if (!isset($_SESSION["admin"]))
	{
		$username=$password="";
		$x=true;

		$username=test_input($data['username']);
		$password=test_input($data['password']);		
		if(empty($username) || $username=="" || empty($password) || $password=="") { $x=false; echo "Prazan username ili password"; }
		
		if($x==true) {
		
		$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
		$veza->exec("set names utf8");
		
		ob_start();
		
		$brojac = 0;
		$korisnik_query="select * from korisnici where username=?";  
		$result=$veza->prepare($korisnik_query);
		$result->execute(array($username));
		
		while ($row = $result->fetch()) {
			$brojac = $brojac +1;
		}
		if($brojac != 0){ print "Korisnik sa tim imenom postoji"; }	 
		  
		else if ($brojac==0)
		{
			$query="INSERT INTO `muzej`.`korisnici` (`username`, `password`, `email`, `admin`) VALUES ('".$username."', '".$password."', NULL, '0')";
				$dodajKorisnika=$veza->query($query);
			
				if (!$dodajKorisnika) {
					$greska = $veza->errorInfo();
					print "SQL greška: " . $greska[2];
					exit();
				}
				else { 	echo "Uspješno ste se registrovali. "; echo $username; $_SESSION["korisnik"]=$username;}	
			
		}
	}
}
	
	else if(isset($_SESSION["admin"])) {
	$username=$password=$email="";
	$x=true;

	$username=test_input($data['username']);
	$password=test_input($data['password']);
	$email=test_input($data['email']);

	if(empty($username) || $username=="" || empty($password) || $password=="") { $x=false; echo "Prazan username ili password"; }
    if(!isValidEmail($email)) { $x=false; echo "Email nije validan"; }
	

	if($x==true) {
		
		$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
		$veza->exec("set names utf8");
		
		ob_start();
		
		$brojac = 0;
		$korisnik_query="select * from korisnici where username=?";  
		$result=$veza->prepare($korisnik_query);
		$result->execute(array($username));
	
		while ($row = $result->fetch()) {
			$brojac = $brojac +1;
		}
		if($brojac != 0){ print "Korisnik sa tim imenom postoji"; }	 
		  
		else if ($brojac==0)
			{
				$jedan=1;
				//$query="INSERT INTO korisnici SET username=?, password=?, email=? , admin=?";
				//$dodajKorisnika=$veza->prepare($query);
				//$dodajKorisnika->execute( array($username, $password, $email, $jedan) );
				
				$query="INSERT INTO `muzej`.`korisnici` (`username`, `password`, `email`, `admin`) VALUES ('".$username."', '".$password."', '".$email."', '1')";
				$dodajKorisnika=$veza->query($query);
			
				if (!$dodajKorisnika) {
					$greska = $veza->errorInfo();
					print "SQL greška: " . $greska[2];
					exit();
				}
				else { 	echo "Uspješno ste dodali admina";	}			
			}  
	 ob_end_flush();
		}
	} 
}
function rest_delete($request, $data) { 
	
	if (isset($_SESSION["admin"])) {
	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$stmt = $veza->prepare('DELETE FROM korisnici WHERE username =?');
	$stmt->execute( array($data['id']) );
	}
	else echo "Niste logovani kao admin";
}
function rest_put($request, $data) { 

		if(isset($_SESSION["admin"]))
{
	$username=$data["username"];
	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
    $veza->exec("set names utf8");
			
	$password=$email="";
	$password=test_input($data["password"]);
	$email=test_input($data["email"]);
				
		if((!isValidEmail($email))|| empty($password)) {
			if(empty($email)) echo "Prazan email. ";
			if(!isValidEmail($email)) echo "Email nije validan. ";
			if(empty($password)) echo "Prazan password. ";
		}
		else 
		{
			$update=$veza->query("UPDATE korisnici SET password='".$password."', email='".$email."' where username='".$username."' LIMIT 1");
			if (!$update) {
			$greska = $veza->errorInfo();
			print "SQL greška: " . $greska[2];
			exit();
			}
			else {
				echo "Uspjesno ste editovali admina";
			}
		}
		
	} else echo "Niste logovani kao admin";
	
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
