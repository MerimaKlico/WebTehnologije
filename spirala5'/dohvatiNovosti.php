<?php
$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
$veza->exec("set names utf8");
$rezultat = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, slika from vijest order by vrijeme asc");
//$a = $veza->query("select id, vijest, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor from komentar order by vrijeme desc");
if (!$rezultat) {
    $greska = $veza->errorInfo();
    print "SQL greška: " . $greska[2];
    exit();
}



while ($vijest = $rezultat->fetch(PDO::FETCH_ASSOC)) {
	
	print "<div class='clanak'>";
	print "<p class='meta'> Objavljeno: " .date("d.m.Y. (h:i)", $vijest['vrijeme2']). "</p>";
	print "<p class='meta'> Autor: ".$vijest['autor']. "</p>";
    $img_url = $vijest['slika'];
    print "<h3>" .$vijest['naslov']. "</h3>";
	print '<img src="'.$img_url.'" width="40%" height="40%"/>'; 
	print "<p class='opis'>". $vijest['tekst']. "</p>";
    

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
    else print "<br> <a href='#!' onclick='prikaziKomentare(".$vijest['id'].")'> Nema komentara </a>";	
	
	print "<br> </br>";
	
	print "<div id='komentariZaVijest".$vijest['id']."'> </div>";
	
	print "</div>";
	
}
?>
<script type="text/javascript" src="javaskripta.js"></script>