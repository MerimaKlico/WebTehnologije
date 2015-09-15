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

$username=$password=$email="";
$x=true;

if (isset($_POST['username'])) $username=test_input($_POST['username']);
if (isset($_POST['password'])) $password=test_input($_POST['password']);
if(isset($_SESSION['admin'])) if (isset($_POST['email']))  $email=test_input($_POST['email']);

if(empty($username) || empty($password)) { $x=false; echo "<br>Prazan username ili password"; }
if(isset($_SESSION['admin'])) 
{
	if(empty($email)) { $x=false; echo "<br>Prazan email"; }
	if(!isValidEmail($email)) { $x=false; echo "<br>Email nije validan"; }
}

if($x==true) {
	
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$veza->exec("set names utf8");
	
	ob_start();
    
	$brojac = 0;
    $korisnik_query="select * from korisnici where username=?";  
	$result=$veza->prepare($korisnik_query);
	
	if ($result->execute(array($username))) 
    while ($row = $result->fetch()) {
        $brojac = $brojac +1;
    }
    if($brojac != 0){
      echo "Korisnik sa tim imenom postoji";
    }	 
	  
    else if ($brojac==0){
		
		if(isset($_SESSION['admin'])) 
		{
			$query="INSERT INTO `muzej`.`korisnici` (`username`, `password`, `email`, `admin`) VALUES ('".$username."', '".$password."', '".$email."', '1')";
			$dodajKorisnika=$veza->query($query);
		
			if (!$dodajKorisnika) {
				$greska = $veza->errorInfo();
				print "SQL greška: " . $greska[2];
				exit();
			}
			else {
				echo "Uspješno ste dodali admina";
				//header('Location:adminPanel.php');
			}			
		}
		
		else 
		{
			$query="INSERT INTO `muzej`.`korisnici` (`username`, `password`) VALUES ('".$username."', '".$password."')";
			$dodajKorisnika=$veza->query($query);
		
			if (!$dodajKorisnika) {
				$greska = $veza->errorInfo();
				print "SQL greška: " . $greska[2];
				exit();
			}
			else {
				$_SESSION['korisnik']= $username;
				echo "Uspješna registracija";
				header('Location:index.php');
			}
		}
		
		
	}  
	 ob_end_flush();
}
	
?>