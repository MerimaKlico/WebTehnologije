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

        <?php
        $izabranaVijest=$_GET["idV"];

        $veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
        $veza->exec("set names utf8");
        $rezultat = $veza->query("select id, naslov, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, slika from vijest where id=".$izabranaVijest);
        if (!$rezultat) {
            $greska = $veza->errorInfo();
            print "SQL greška: " . $greska[2];
            exit();
        }
        while ($v = $rezultat->fetch(PDO::FETCH_ASSOC)){
           // print "<h1>".$v['naslov']. "</h1>" . " ". "<p>" . $v['tekst']. "</p>" ." ". "<small>" . $v['autor']." ".date("d.m.Y. (h:i)", $v['vrijeme2']). "</small>". "<br>";

            $img_url = $v['slika'];
            print "<h3>" .$v['naslov']. "</h3>";
            print '<img src="'.$v['slika'].'" width="40%" height="40%"/>';
            print "<h5>". "Objavljeno:" .date("d.m.Y. (h:i)", $v['vrijeme2']). "</h5>";
            print  "<p>" . $v['tekst']. "</p>";
            print "<h5>". "Autor:".$v['autor']. "</h5>";

            $komentar = $veza->query("select id, vijest, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme2, autor, email from komentari");
            //$kmt = $komentar->fetch(PDO::FETCH_ASSOC);
            print "<br>Komentari: <br>";
            foreach($komentar as $k)
            {
                if ($k['vijest']==$v['id'])
                    print "<br>Tekst komentara:". $k['tekst'] ."<br> ". "<small> Autor komentara: " . $k['autor']."<br>Vrijeme: ".date("d.m.Y. (h:i)", $k['vrijeme2']). "</small>". "<br>";
            }
        }
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

        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            if (empty($_POST["autor"])) { $autor="Anonymous"; }
            else {   $autor = test_input($_POST["autor"]);   }

            if (!empty($_POST["email"])) { $email=test_input($_POST["email"]);}

                if (empty($_POST["kom"])) {   echo "Niste bapisali komentar!"; }
            else {
                $kom = test_input($_POST["kom"]);
               // $date=$_REQUEST['date'];
                $d=time();
                echo "<br>". 'Tekst komentara: ' .$kom. '<br>';
                echo "<small>Vrijeme:".date("d.m.Y. (h:i)", $d). "</small>". "<br>";
                echo '<small>Autor komentara:' .$autor ."</small>". '<br>';
                echo '<small>E-mail:' .$email ."</small>". '<br>';
            // "INSERT INTO 'komentari' ('vijest', 'tekst', 'autor') VALUES('".$izabranaVijest."', '".$kom."', '".$autor."')";
                $query="INSERT INTO `muzej`.`komentari` (`id`, `vijest`, `tekst`, `autor`, `vrijeme`, `email`) VALUES (NULL, '".$izabranaVijest."', '".$kom."', '".$autor."', CURRENT_TIMESTAMP, '".$email."')";
              $veza->query($query);
            }

        }
        ?>

        <p> Ostavite komentar:
        <form method="POST" action="<?php echo $_SERVER['PHP_SELF'], '?idV=' .$izabranaVijest ?>">
            Komentar: <input type="text" name="kom" value="<?php echo $kom;?>"><br>
            Autor: <input type="text" name="autor" value="<?php echo $autor;?>"><br>
            Email: <input type="text"  name="email" value="<?php echo $autor;?>"><br>

            <input type="submit" value="Submit"><br>
        </form>
        </p>
    </div>
</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
</script>
<SCRIPT type="text/javascript" src="javaskripta.js"></SCRIPT>

</body>
</html>