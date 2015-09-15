<?php

$id = $_GET["idV"];

$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
$veza->exec("set names utf8");
$rezultat = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, slika from vijest where id=".$id);

if (!$rezultat) {
    $greska = $veza->errorInfo();
    print "SQL greška: " . $greska[2];
    exit();
}

while ($vijest = $rezultat->fetch(PDO::FETCH_ASSOC)) {
	
	print "<div id='sadrzaj'>";
	print "<div class='clanak'>";
	print "<p class='meta'> Objavljeno: " .date("d.m.Y. (h:i)", $vijest['vrijeme2']). "</p>";
	print "<p class='meta'> Autor: <input id='autor' value='".$vijest['autor']. "'> </p>";
    $img_url = $vijest['slika'];
    print "<h3> <input id='naslov' value='" .$vijest['naslov']. "'> </h3>";
	print '<img src="'.$img_url.'" width="40%" height="40%"/>'; 
	print "<input type='hidden' name='imgurl' id='imgurl' value='".$img_url."'>";
	print "<input type='file' value='File upload' id='slika' multipart='multipart'>";
	print "<p class='opis'> <textarea cols='50' rows='7' id='tekst'>". $vijest['tekst']. "</textarea></p>";
	//print "<input type='hidden' value='".$id."'>";
	print "<br><input type='button' onclick='promijeniVijest(".$vijest['id'].")' value='Promijeni vijest' name='dugmePromijeni'>";
	//print "<a href='promijeniVijest.php?idV=".$vijest['id']."'>";
	//print "<input type='button' value='Izbrisi' name='dugmeIzbrisi'>";
	
	print "</div></div>";
}


?>
<div id="error"></div>
<script type="text/javascript" src="javaskripta.js"></script>