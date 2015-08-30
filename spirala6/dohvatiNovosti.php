<?php
$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
$veza->exec("set names utf8");
$rezultat = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, slika from vijest order by vrijeme asc");
//$a = $veza->query("select id, vijest, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from komentar order by vrijeme desc");
if (!$rezultat) {
    $greska = $veza->errorInfo();
    print $greska[2];
    exit();
}

?>