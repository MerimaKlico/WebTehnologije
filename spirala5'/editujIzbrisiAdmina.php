<?php

session_start();
function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data, ENT_QUOTES, "UTF-8");
            return $data; }
function isValidEmail($email){ 
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ($_SERVER["REQUEST_METHOD"]=="POST")
	if(isset($_SESSION["admin"]))
{
	$username=$_POST["korisnickiUsername"];
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
    $veza->exec("set names utf8");
			
	if(isset($_POST["editujAdmina"]))
	{
		$password=$email="";
		
		$password=test_input($_POST["korisnickiPassword"]);
		$email=test_input($_POST["korisnickiEmail"]);
				
		if((!isValidEmail($email))|| empty($password)) {
			if(empty($email)) echo "<br>Prazan email";
			if(!isValidEmail($email)) echo "<br>Email nije validan";
			if(empty($password)) echo "<br>Prazan password";
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
		
	}
	
	if(isset($_POST["izbrisiAdmina"]))	
		{
			$query="DELETE FROM `muzej`.`korisnici` WHERE username='".$username."'";
			$izbaci=$veza->query($query);
				
			if (!$izbaci) {
				$greska = $veza->errorInfo();
				print "SQL greška: " . $greska[2];
				exit();
				}	
			else {
				echo "Uspjesno ste izbrisali admina";
				}
		}
	
	
}

else echo "Morate se logovati kao admin";

?>