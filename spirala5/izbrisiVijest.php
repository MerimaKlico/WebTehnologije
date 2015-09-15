<?php

$id = $_GET["id"];

	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$veza->exec("set names utf8");
	
	$komentari=$veza->query("select * from komentari where vijest='".$id."'");
	if (!$komentari) {
		$greska = $veza->errorInfo();
		print "SQL greška: " . $greska[2];
		exit();
		}	
	else {
		
			$query="DELETE FROM `muzej`.`komentari` WHERE vijest='".$id."'";
			$izbaci=$veza->query($query);
				
			if (!$izbaci) {
				$greska = $veza->errorInfo();
				print "SQL greška: " . $greska[2];
				exit();
				}
		
	}
	
	$query="DELETE FROM `muzej`.`vijest` WHERE id=".$id;
	$izbaci=$veza->query($query);
		
	if (!$izbaci) {
		$greska = $veza->errorInfo();
		print "SQL greška: " . $greska[2];
		exit();
		}	
	else {
		echo "Uspjesno ste izbrisali vijest";
		}

?>