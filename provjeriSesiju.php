<?php

session_start();

if(isset($_SESSION["admin"]))
{
	echo "admin: ". $_SESSION["admin"];
}

else if(isset($_SESSION["korisnik"]))
{
	echo "korisnik: ". $_SESSION["korisnik"];
}

else echo "Nema sesije";

?>