<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <link rel="stylesheet" type="text/css" href="stil.css">
    <title>Admin panel</title>
 
</head>
<body>

<?php
session_start();
if(!isset($_SESSION["admin"])) {
?>

<form method="post" action="adminLogin.php">
<br><br>
Username: <input type="text" id="username" name="username"> <br><br>
Password: <input type="text" id="password" name="password"> <br><br>
<input type="submit" value="Login" name="admin_login">
<br><br><input type="submit" value="Forgotten password?" name="resetujPassword">
</form>



<?php 
} else {
	
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
$veza->exec("set names utf8");
$rezultat = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, slika from vijest order by vrijeme asc");
//$a = $veza->query("select id, vijest, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from komentar order by vrijeme desc");
if (!$rezultat) {
    $greska = $veza->errorInfo();
    print "SQL greška: " . $greska[2];
    exit();
}

	echo '<form method="POST" action="logout.php">
    <button name="logout" value="Logout">Logout  '.$_SESSION['admin']. ' </button>
    </form><br></br>';
	
	print "<div id='sadrzaj'>";
while ($vijest = $rezultat->fetch(PDO::FETCH_ASSOC)) {
	
	print "<div class='clanak' id='clanak".$vijest['id']."'>";
	print "<p class='meta'> Objavljeno: " .date("d.m.Y. (h:i)", $vijest['vrijeme2']). "</p>";
	print "<p class='meta'> Autor: ".$vijest['autor']. "</p>";
    $img_url = $vijest['slika'];
    print "<h3>" .$vijest['naslov']. "</h3>";
	print '<img src="'.$img_url.'" width="40%" height="40%"/>'; 
	print "<p class='opis'>". $vijest['tekst']. "</p>";
	//print "<br><input type='button' onclick='promijeni(".$vijest['id'].")' value='Promijeni' name='dugmePromijeni'>";
	print "<br><a href='promijeniVijest.php?idV=".$vijest['id']."'> Promijeni vijest </a><br>";
	print "<br><input type='button' value='Izbrisi vijest' onclick='izbrisiVijest(".$vijest['id'].")' name='dugmeIzbrisi'><br> </br>";

    $outp = "[";
        if ($outp != "[") {$outp .= ",";}
        $outp .= '{"Id":"'  . $vijest["id"] . '",';
        $outp .= '"Slika":"'. $vijest["slika"]     . '"}';
        $outp .= '"Naslov":"'   . $vijest["naslov"]        . '",';
        $outp .= '"Tekst":"'. $vijest["tekst"]     . '"}';
        $outp .= '"Vrijeme:":"'. $vijest["vrijeme2"]     . '"}';
        $outp .= '"Autor":"'. $vijest["autor"]     . '"}';

    $outp .="]";

 

    $i=0;
    $redKomentar = $veza->query("select id, vijest, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from komentari");
    foreach($redKomentar as $k)
    {
        if ($k['vijest']==$vijest['id']) $i++;
    }
    if($i!=0)
    {
        //print "<a href=Vijest.php?idV=".$vijest['id']."><small>". $i . " " . "<b>komentara</b> </small> </a> <b> ";
		//print '<a href="#" onclick="prikaziKomentare('.$vijest['id'].')" ><small>'. $i . " " . '<b>komentara</b> </small> </a> <b> ';
		print "<a href='#!' onclick='prikaziKomentare(".$vijest['id'].")'>".$i." komentara </a>";
    }
    else print "<br><br> <a href='#!' onclick='prikaziKomentare(".$vijest['id'].")'> Nema komentara </a>";	
	
	print "<br> </br>";
	print "<div id='komentariZaVijest".$vijest['id']."'> </div>";
	print "</div>";
}
	
	print "<br><a href='dodajVijest.html'>Dodaj vijest </a><br>";
	print "<br><a href='editujKorisnike.php'>Edituj korisnike</a><br>";
	print "</div>";
			
	} 
?>
</body>
</html> 
  
 
<script type="text/javascript" src="javaskripta.js"></script>