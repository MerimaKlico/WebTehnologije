<?php

session_start();
function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            //  $data = htmlspecialchars($data);
            return $data; }

$username=$password="";

if (isset($_POST['username'])) $username=test_input($_POST['username']);
if (isset($_POST['password'])) $password=test_input($_POST['password']);

if(empty($username) || empty($password)) echo "Prazan username ili sifra";

else {
	
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$veza->exec("set names utf8");
	
	ob_start();

    $korisnik_query = $veza->prepare("SELECT username, password FROM korisnici where username = ?");
    if ($korisnik_query->execute(array($_POST['username']))) {
    while ($row = $korisnik_query->fetch()) {
    if($row['password']===$password){
      $_SESSION['korisnik'] = $username;
	  header('Location:index.php');
			}
    }
  }
    
		echo "Korisničko ime ili šifra su pogrešni";
	
	 ob_end_flush();
}
	
?>