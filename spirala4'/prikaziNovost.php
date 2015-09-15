<?php

$izabranaNovost=0;
	if (isset($_REQUEST["id"])) { $izabranaNovost=$_REQUEST["id"]; }
	
	$directory = 'C:\\wamp\\www\\spirala4\\novosti\\';

	$arrayClanci=Array();
	
foreach(glob($directory."*.txt") as $filename)
{
   $fileHandle = fopen($filename, "r");
   $arrayClanak = Array();
   
   while (!feof($fileHandle)) {   // load each line
       $line = fgets($fileHandle);  
	   array_push($arrayClanak, $line);
	   
   } 
   array_push($arrayClanci, $arrayClanak);
   fclose($fileHandle);
}

	    		$str="--";
				print "<div class='clanak'>";
				print "<p class='meta'> Objavljeno: ". $arrayClanci[$izabranaNovost][0] . "</p>";
				print "<p class='meta'> Autor: " . $arrayClanci[$izabranaNovost][1] .  "</p>";
				if (strpos($arrayClanci[$izabranaNovost][2],'SARAJEVU') == true)
				{
					$naslov=str_replace("SARAJEVU", "", $arrayClanci[$izabranaNovost][2]);
					print "<h2 class='naslov'>". ucfirst(mb_strtolower($naslov, 'UTF-8')) . " Sarajevu</h2>";
				}
				else print "<h2 class='naslov'>". ucfirst(mb_strtolower($arrayClanci[$izabranaNovost][2], 'UTF-8')) . "</h2>";
				print "<img src=". $arrayClanci[$izabranaNovost][3]. " alt='FTV promocija' height='350' width='400' class='slika'> ";
				print "<p class='opis'>";
				
				for ($j=4; $j<sizeof($arrayClanci[$izabranaNovost]); $j++)
			{
				$line=trim($arrayClanci[$izabranaNovost][$j]);
				if ($line == $str)
				{
					print "<br>";
				}
				else print $line;
				
			}
				 print "</p>";
				 print "</div>";
		
?>

<script>

function prikaziNovost(i)
   {
	   var id=i;
	   var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
				document.getElementById('sadrzaj').innerHTML=ajax.responseText;
				
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", "prikaziNovost.php?id=" + id, true);
        ajax.send();
   }
</script>