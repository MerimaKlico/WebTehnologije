<?php

function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data, ENT_QUOTES, "UTF-8");
            return $data; }
			
if ($_SERVER["REQUEST_METHOD"] == "GET") 
{
	$naslov=$autor=$test=$slika="";
	
	$naslov=test_input($_GET["naslov"]); 
	$autor=test_input($_GET["autor"]);
	$slika=test_input($_GET["slika"]);
	$tekst=test_input($_GET["tekst"]);
	
	if(empty($naslov)|| empty($tekst) || empty($autor) || empty($slika)) {	
		if(empty($naslov)) echo "Prazan naslov";
		if(empty($autor)) echo "Prazan autor";
		if(empty($slika)) echo "Prazan slika";
		if(empty($tekst)) echo "Prazan tekst";
	}
	
		
	else {
		
		$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
		$veza->exec("set names utf8");
		$query="INSERT INTO `muzej`.`vijest` (`id`, `tekst`, `naslov`, `autor`, `vrijeme`, `slika`) VALUES (NULL, '".$tekst."', '".$naslov."', '".$autor."', CURRENT_TIMESTAMP, '".$slika."')";
		$ubaci=$veza->query($query);
		
		if (!$ubaci) {
		$greska = $veza->errorInfo();
		print "SQL greška: " . $greska[2];
		exit();
		}	
		else {
			echo "Uspjesno ste dodali vijest";
		}
		
	}
			
	
}
	
	

?>