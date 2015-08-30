
 <script type="text/javascript" src="javaskripta.js"></script>
<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

$directory = 'C:\\wamp\\www\\spirala4\\novosti\\';

	$arrayClanci=Array();
	$arrayVrijeme = Array();

/*
echo "Fajlovi<pre>";
print_r(glob($directory."*.txt"));
echo "</pre>";
die();
*/
	
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



	uasort($arrayClanci,'poredi');

   function poredi($a, $b)
   {
	   return strtotime($b[0])-strtotime($a[0]);	   
   }
     
	    for ($i=0; $i<sizeof($arrayClanci); $i++)
		{
				$str="--";
				print "<div class='clanak'>";
				print "<p class='meta'> Objavljeno: ". $arrayClanci[$i][0] . "</p>";
				print "<p class='meta'> Autor: " . $arrayClanci[$i][1] .  "</p>";
				if (strpos($arrayClanci[$i][2],'SARAJEVU') == true)
				{
					$naslov=str_replace("SARAJEVU", "", $arrayClanci[$i][2]);
					print "<h2 class='naslov'>". ucfirst(mb_strtolower($naslov, 'UTF-8')) . " Sarajevu</h2>";
				}
				else print "<h2 class='naslov'>". ucfirst(mb_strtolower($arrayClanci[$i][2], 'UTF-8')) . "</h2>";
				print "<img src=". $arrayClanci[$i][3]. " alt='FTV promocija' height='350' width='400' class='slika'> ";
				print "<p class='opis'>";
				
				for ($j=4; $j<sizeof($arrayClanci[$i]); $j++)
			{
				$line=trim($arrayClanci[$i][$j]);
				if ($line == $str)
				{
					print "<br><a href='#' onclick='prikaziNovost(".$i.")'> Detaljnije... </a> <br>";
					break;
				}
				else { print $line;}
			}
				 print "</p>";
				 print "</div>";
		}
	?>	
	
	



