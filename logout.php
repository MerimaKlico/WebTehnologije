<?php

session_start();

if($_SERVER["REQUEST_METHOD"]=="GET"){
	
	if(isset($_SESSION['admin']))
	{
		session_destroy();     
	    unset($_SESSION['korisnik']);
	}
	
	else {
		session_destroy();     
		unset($_SESSION['korisnik']);
	}
     
     //header("location:index.php");
  }
?>