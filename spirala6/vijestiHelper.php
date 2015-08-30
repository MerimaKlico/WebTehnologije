<?php

if ($_SERVER["REQUEST_METHOD"] == "GET")
{
	$id=test_input($_GET["id"]);
	$autor=test_input($_GET["autor"]);
	$slika=test_input($_GET["slika"]);
	$tekst=test_input($_GET["tekst"]);
	$naslov=test_input($_GET["naslov"]);
	
	if(empty($naslov) || empty($tekst) || empty($autor) || empty($slika)) echo "Nijedno polje ne smije biti prazno";
	else {
		
$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
$veza->exec("set names utf8");
	
	$update=$veza->query("UPDATE vijest SET naslov='".$naslov."', tekst='".$tekst."', autor='".$autor."', slika='".$slika."' where id='".$id."' LIMIT 1");
	if (!$update) {
    $greska = $veza->errorInfo();
    print "SQL greška: " . $greska[2];
    exit();
	}
	else echo "Uspješno ste promijenili vijest";
}
	
	/*$rezultat = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from vijest where id=".$id);

	if (!$rezultat) {
    $greska = $veza->errorInfo();
    print "SQL greška: " . $greska[2];
    exit();
}
	
	while ($vijest = $rezultat->fetch(PDO::FETCH_ASSOC)) {
		echo  " " .$vijest['id'].  " " .$vijest['vrijeme2'].  " " .$vijest['autor'].  " " .$vijest['naslov'].  " " .$vijest['tekst']; 
	}
	header('Location:adminPanel.php');*/

}
function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            //  $data = htmlspecialchars($data);
            return $data; }

?>

