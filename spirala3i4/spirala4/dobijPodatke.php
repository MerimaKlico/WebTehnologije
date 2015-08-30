<?php

$firstName = $lastName = $message = $email = $email2 = $tel = $datum = $mjesto = $opcina = "";

		if(isset($_POST['firstName'])) $firstName=$_POST['firstName']; 
		if(isset($_POST['lastName'])) $lastName=$_POST['lastName'];
		if(isset($_POST['message'])) $message=$_POST['message'];
		if(isset($_POST['email'])) $email=$_POST['email'];
		if(isset($_POST['email2'])) $email2=$_POST['email2'];
		if(isset($_POST['tel'])) 	$tel=$_POST['tel'];
		if(isset($_POST['datum'])) $datum=$_POST['datum'];
		if(isset($_POST['mjesto'])) $mjesto=$_POST['mjesto'];
		if(isset($_POST['opcina'])) $opcina=$_POST['opcina'];
		

?>