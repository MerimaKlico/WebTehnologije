<?php
$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
$veza->exec("set names utf8");
$rezultat = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, slika from vijest");
//$a = $veza->query("select id, vijest, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from komentar order by vrijeme desc");
if (!$rezultat) {
    $greska = $veza->errorInfo();
    print "SQL greška: " . $greska[2];
    exit();
}

foreach ($rezultat as $v) {
    $img_url = $v['slika'];
    print "<h3>" .$v['naslov']. "</h3>";
    print '<img src="'.$img_url.'" width="40%" height="40%"/>';
    print "<h5>". "Objavljeno:" .date("d.m.Y. (h:i)", $v['vrijeme2']). "</h5>";
    print  "<p>" . $v['tekst']. "</p>";
    print "<h5>". "Autor:".$v['autor']. "</h5>";

    $i=0;
    $redKomentar = $veza->query("select id, vijest, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from komentari");
    foreach($redKomentar as $k)
    {
        if ($k['vijest']==$v['id']) $i++;
    }
    if($i!=0)
    {
        print "<a href=Vijest.php?idV=".$v['id']."><small>". $i . " " . "<b>komentara</b> </small> </a> <b> ";
    }
    else print "<b> <small> Nema komentara </small> <b>";
}
?>