<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">


<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <link rel="stylesheet" type="text/css" href="stil.css">
	<script type="text/javascript" src="javaskripta.js"></script>
    <title>Pocetna</title>
 
</head>
<body onload="dajNovosti();">

    <div id="okvir">

        <div id="masthead">

           
            <h1> <img src="Screenshot_2.png" alt="MuzejLogo" />  </h1>

            <div class="topbanner"> <h1>Muzej kulture i pozorišne umjetnosti</h1>  </div>

            <ul id="registration">
                
            </ul>


            <div class="navigation">
                <nav>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li>
                            <a href="#" onclick="prikaziOMuzeju()">O muzeju</a>
                            <ul>
                                <li><a href="#" onclick="prikaziProizvodi()">Proizvodi</a></li>
                                <li><a href="#">Save</a></li>
                                <li>
                                    <a href="#">Web Design</a>
                                    <ul>
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onclick="prikaziPoveznice()">Poveznice</a>
                        </li>
                        <li><a href="#" onclick="prikaziKontakt()">Kontakt</a></li>
                    </ul>
                </nav>
            </div>

            
        </div>

        <div class="spacer"></div>

        <div id="sadrzaj">
        </div>
		  
        <div id="column_adverts">

            <div class="advert">
                <img src="slika1.png" width="250" />
            </div>

            <div class="advert">
                <img src="slika2.jpg" width="250" />
            </div>

            <div class="advert">
                <img src="slika4.jpg" width="250" />
            </div>

            <div class="advert">
                <img src="slika3.jpg" width="250" />
            </div>

            <div class="advert">
                <img src="slika5.png" width="250" />
            </div>
        </div>
        
    </div>
  
</body>
</html>
