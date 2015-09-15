<?php

session_start();

if(isset($_POST['logout'])){
	
	if(isset($_SESSION['admin']))
	{
		session_destroy();     
	    unset($_SESSION['korisnik']);
	}
	
	else {
		session_destroy();     
		unset($_SESSION['korisnik']);
	}
     
     header("location:index.php");
  }
?>