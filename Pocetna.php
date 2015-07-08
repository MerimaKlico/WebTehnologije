<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>

<HEAD>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href='stil.php'>
<TITLE>Pocetna</TITLE>
</HEAD>

<body>

<div id="okvir">

<div id="logo">  </div>

<div id="zaglavlje"> 
<img src="Logo2.png" alt="Logo">
<p id='p1'> UZEJ KNJIŽEVNOSTI I </p>
<p id = 'p2'> POZORIŠNE UMJETNOSTI <br> SARAJEVO</p>

</div>


<table id='meni'>
<tr>
<td id="cell1" onmouseover='showMenu()'> <a href="Pocetna.html">Početna</a> </td>
<td id="cell2"> <a href="Omuzeju.html">O muzeju</a> </td>
<td id="cell3"> <a href="Poveznice.html">Poveznice</a> </td>
<td id="cell4"> <a href="Kontakt.html">Kontakt</a> </td>
</tr>
</table>

<div id="sadrzaj">

<div id="oglasi"> 
<table>
<tr> <td> Oglasi </td></tr>
<tr> <td> Oglas1 </td></tr>
<tr> <td> Oglas2 </td></tr>
<tr> <td> Oglas3 </td></tr>
</table>
</div>

<h3>Najnovije: </h3>

<div id="clanci">

</div>

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

</div>
</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
</script>
<SCRIPT type="text/javascript" src="javaskripta.js"></SCRIPT>

</body>
</html>