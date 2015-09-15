<?php

        $kom="";
        $autor="";
        $date="";
        $email="";


        //session_start();
        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            //  $data = htmlspecialchars($data);
            return $data; }

        if ($_SERVER["REQUEST_METHOD"] == "GET") {

		    $id=$_GET["idV"];
			
            if (empty($_GET["autor"])) { $autor="Anonymous"; }
            else  {   $autor = test_input($_GET["autor"]);  
				if(empty($autor)) $autor="Anonymous";
			}
		

            if (!empty($_GET["email"])) { $email=test_input($_GET["email"]);}
			
			
			if(isset($_GET["kom"])) 
			{
				$kom=$_GET["kom"];
				if(empty($kom)) echo "Niste napisali komentar!";
				else if (!empty($kom))
				{
					$kom=test_input($_GET["kom"]);	
				    if(empty($kom)) echo "Niste napisali komentar!";
					else 
					{
					
						// $date=$_REQUEST['date'];
						$d=time();
						echo "<br>". 'Tekst komentara: ' .$kom. '<br>';
						echo "<br>Vrijeme:".date("d.m.Y. (h:i)", $d). "<br>";
						echo "<br>Autor komentara: <a href='mailto:".$email."'> " . $autor. " </a><br>";
						echo '<br>Email komentara:' .$email . '<br>';
						echo "<br></br>";
						

					   // "INSERT INTO 'komentari' ('vijest', 'tekst', 'autor') VALUES('".$izabranaVijest."', '".$kom."', '".$autor."')";
					    $veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
						$veza->exec("set names utf8");
						$query="INSERT INTO `muzej`.`komentari` (`id`, `vijest`, `tekst`, `autor`, `vrijeme`, `email`) VALUES (NULL, '".$id."', '".$kom."', '".$autor."', CURRENT_TIMESTAMP, '".$email."')";
						$veza->query($query);
						
		
					}
				}
			}
			
        }
        ?>
        


