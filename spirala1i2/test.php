<?php
header("Content-type: text/css; charset: UTF-8");

$tanColor="";
$lemonchiffonColor="#FFFACD";
$blackColor="#000000";
$maroonColor="#800000";
$cell1Color="#D9D9D9";
$cell2Color="#CCCCCC";
$cell3Color="#C0C0C0";
$cell4Color="#B3B3B3";
$darkkhakiColor="#BDB76B";
$dimgreyColor="#696969";
$redColor="#FF0000";
$velicina75="75%";
$velicina25="25%";
$velicina5="5%";
$velicina3="3%";
$velicina30="30%";
$velicina50px="50px";
$velicina68="68%";

$CDNURL = "http://cdn.blahblah.net";
$velicina80="80%";
$velicina20px="20px";
$velicina40="40%";
$velicina36 = "36%";
$velicina2 = "2%";
$velicina150px="150px";
$velicina20="20%";
$velicina280 ="280%";
$velicina100 ="100%";
$velicina50 = "50%";
$velicina200px ="200px";
$left = "left";
$right = "right";
?>

body {
background-color: <?php echo $tanColor; ?>;
}

#okvir {
width: <?php echo $velicina75; ?>;
margin-left:auto;
margin-right:auto;
margin-top: -1%;
background-color: <?php echo $lemonchiffonColor; ?>;
padding-bottom: 20%;

}
#zaglavlje img {
float: left;
width: 20%;
height: 90px;
padding-left: 20%;
background-color:<?php echo $blackColor; ?>;

}

#zaglavlje {

width:100%;
height: 30%;
background-color: <?php echo $blackColor; ?>;
color: white;
padding-top: 3%;
float:left;
}

#p1 {
width: 60%;
text-align: left;
margin-top: 4%;
font-family: LightHouse;
font-weight: bold;
font-size-adjust: 0.58;
font-size: 35px;
background-color:<?php echo $blackColor; ?>;
float: left;

}

#p2 {
width: 100%;
text-align: center;
float: left;
font-family: LightHouse;
font-weight: bold;
font-size-adjust: 0.58;
background-color: <?php echo $blackColor; ?>;
padding-bottom: 10px;
font-size: 35px;
margin-top: -30px;
}


#naslov {
padding-top: 20px;
}


#meni{
width: 100%;
height: 35px;
text-align: center;
font-family: "Century Gothic", AppleGothic, sans-serif;
font-size: 20px;
font-weight: bold;
border-collapse: collapse;
float: left;
}


#desavanja table th {
text-align: center;
font-size:20px;
font-weight: bold;
width: <?php echo $desavanjaTableThWidth; ?>;
}

#desavanja table td {
width: <?php echo $desavanjaTableTdWidth; ?>;
text-align: center;
}

.nazivDesavanja
{
color: <?php echo $maroonColor; ?>;
font-weight: bold;
font-style: italic;
}

#cell4 { background-color: <?php echo $cell1Color; ?>;}
#cell1 {background-color:<?php echo $cell2Color; ?>;}
#cell2 {background-color:<?php echo $cell3Color; ?>;}
#cell3 {background-color:<?php echo $cell4Color; ?>;}

.meta
{
font-style: italic;
color: <?php echo $dimgreyColor; ?>;
padding-top: <?php echo $velicina2; ?>;
width: <?php echo $velicina80; ?>;
float: <?php echo $left; ?>;
height: <?php echo $velicina20px; ?>;
}

.slika {
width: <?php echo $velicina40; ?>;
height: <?php echo $velicina40; ?>;
float: <?php echo $left; ?>;
}

.opis
{
width: <?php echo $velicina36; ?>;
padding-left: <?php echo $velicina2; ?>;
padding-right: <?php echo $velicina2; ?>;
float: <?php echo $left; ?>;
height: <?php echo $velicina150px; ?>;
}

.naslov
{
width: <?php echo $velicina36; ?>;
padding-left: <?php echo $velicina2; ?>;
padding-right: <?php echo $velicina2; ?>;
float: <?php echo $left; ?>;
font-weight: bold;
}

#oglasi {
width: <?php echo $velicina20; ?>;
float: right;
background-color: <?php echo $darkkhakiColor; ?>;
height: <?php echo $velicina280 ?>;
clear: right;
overflow: hidden;

}

#oglasi table {
background-color: <?php echo $darkkhakiColor; ?>;
width: <?php echo $velicina100; ?>;
padding: <?php echo $velicina2; ?>;
margin-top: <?php echo $velicina50; ?>;
border: 1px black;
text-align: center;
}

#oglasi  td { height: <?php echo $velicina200px; ?>;}

#meni a:link {
color: <?php echo $maroonColor; ?>;
text-decoration: none;
}

#meni a:visited { color: red;}

ul li {
background-image: url(block.png);
background-repeat: no-repeat;
padding-left: 25px;
list-style: none;
}


#sadrzaj {
padding-left: <?php echo $velicina5; ?>;
padding-right: <?php echo $velicina5; ?>;
padding-bottom: <?php echo $velicina3; ?>;
overflow: hidden;
}

form table {
text-align: center;
}

form td { width: <?php echo $velicina30; ?>; height: <?php echo $velicina50px; ?>;}

.unos { text-align: left; width: <?php echo $velicina68; ?>; padding-left: <?php echo $velicina2; ?>;}
#redPoruka {height: 150px;}

.greskeForme {
padding-left: 20px;
font-weight: bold;
color: <?php echo $redColor; ?>;
background-image: url(greska.png);
background-repeat: no-repeat;
}

