<?php

session_start();

$id=$_GET["idV"]; 

        $veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
        $veza->exec("set names utf8");
        $rezultat = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, slika from vijest where id=".$id);
        if (!$rezultat) {
            $greska = $veza->errorInfo();
            print "SQL greška: " . $greska[2];
            exit();
        }
        while ($v = $rezultat->fetch(PDO::FETCH_ASSOC)){
            // print "<h1>".$v['naslov']. "</h1>" . " ". "<p>" . $v['tekst']. "</p>" ." ". "<small>" . $v['autor']." ".date("d.m.Y. (h:i)", $v['vrijeme2']). "</small>". "<br>";

            $komentar = $veza->query("select id, vijest, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, email from komentari");
            //$kmt = $komentar->fetch(PDO::FETCH_ASSOC);
			$newline="\n";
			
			while ($k=$komentar->fetch(PDO::FETCH_ASSOC))
            //foreach($komentar as $k)
            {
                if ($k['vijest']==$id) {
                    print "<div id='komentar".$k['id']."'>";
					print "Tekst komentara:". $k['tekst']. "<br> </br>";
					print "Autor komentara: <a href='mailto:".$k['email']."'> " . $k['autor']. " </a>". "<br> </br>";
					print "Email: ". $k['email'].  "<br> </br>";
					print "Vrijeme: ".date("d.m.Y. (h:i)", $k['vrijeme2']). "<br> </br>";
					if(isset($_SESSION["admin"])) 
						print "<input type='button' value='Izbrisi komentar' onclick='izbrisiKomentar(".$k['id'].")'>".  "<br> </br>";

					print "</div>";
					}
			}
			
		
			//value="<?php echo $autor;?
			//onSubmit="return ostaviKomentar();"
			
			print "<div id='noviKomentar'> </div>";
        }
		

	
?>

<div>
        <p> Ostavite komentar:
        <form method="get" >
		<br>
            Komentar: <input type="text" name="kom" id="kom" ><br>
            Autor: <input type="text" name="autor" id="autor"> <br>
            Email: <input type="text"  name="email" id="email"><br>
			<input type="hidden" name="id" id="id" value="<?php echo $id; ?>">
            <input type="button" onclick="ostaviKomentar()" value="Submit"><br>
        </form>
        </p>


    </div>
	
<script type="text/javascript" src="javaskripta.js"></script>