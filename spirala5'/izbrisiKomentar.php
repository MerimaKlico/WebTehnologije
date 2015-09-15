<?php

$id = $_GET["id"];

	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$veza->exec("set names utf8");
	$query="DELETE FROM `muzej`.`komentari` WHERE id=".$id;
	$izbaci=$veza->query($query);
		
	if (!$izbaci) {
		$greska = $veza->errorInfo();
		print "SQL greška: " . $greska[2];
		exit();
		}	
	else {
		echo "Uspjesno ste izbrisali komentar";
		}

?>