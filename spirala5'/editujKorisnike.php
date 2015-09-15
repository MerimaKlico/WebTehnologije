<?php
session_start();
if (isset($_SESSION["admin"]))
{
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$veza->exec("set names utf8");
	
	ob_start();

    $korisnik_query = $veza->prepare("SELECT * FROM korisnici");
	if($korisnik_query->execute())
	{
		print "<br>Svi koji imaju pristup administratorskom panelu: ";
		while($korisnik= $korisnik_query->fetch(PDO::FETCH_ASSOC))
		{
			if ($korisnik['admin']==1) {
			print "<div id='".$korisnik['username']."'>";
			print "<form method='post' action='editujIzbrisiAdmina.php'>";
			print "<br><br>Username:".$korisnik['username'];	
			print "<input type='hidden' value='".$korisnik['username']."' name='korisnickiUsername'>";
			print "<br>Password: <input type='text' name='korisnickiPassword' value='".$korisnik['password']."'>";
		    print "<br>Email: <input type='text' name='korisnickiEmail' value='".$korisnik['email']."'>";
		   // print "<br> <button onclick='editujAdmina(".$korisnik['username'].")' name='editujAdmina".$korisnik['username']."' 
			//	id='editujAdmina".$korisnik['username']."'> Edituj admina </button>";	
			//print "<br> <button onclick='izbrisiAdmina(".$korisnik['username'].")' name='izbrisiAdmina".$korisnik['username']."' 
			//	id='izbrisiAdmina".$korisnik['username']."'> Izbrisi admina </button>";	
			print "<br><input type='submit' value='Edituj admina' name='editujAdmina'>";
			print "<br><input type='submit' value='Izbrisi admina' name='izbrisiAdmina'>";
			print "</form>";
			print "</div>";
			}			
	    }
	}
	else 
	{
		$greska = $veza->errorInfo();
			print "SQL greška: " . $greska[2];
			exit();
	} 
		print "<br><br>Dodaj admina: <form method='post' action='registrujKorisnika.php'>";
		print "<br>Username: <input type='text' name='username'> ";
		print "<br>Password: <input type='text' name='password'> ";
		print "<br>Email: <input type='text' name='email'> ";
		print "<br><input type='submit' value='Dodaj admina' name='registrujKorisnika'>";
		print "</form>";
}
	else echo "Morate se logovati kao administrator";

?>