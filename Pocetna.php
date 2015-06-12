<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>

<HEAD>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href='stil.php'>
    <?php
    include('login.php');
    ?>
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
<tr> <td>
        <label>Registracija</label><br>
        <form action="" method="post">
            <label>UserName :</label><br>
            <input id="username" name="username" placeholder="username" type="text"><br>
            <label>Password :</label><br>
            <input id="password" name="password" placeholder="**********" type="password"><br>
            <button name="register" value="REG">Registruj</button>
            <div id='error' name="error"></div>


    </td></tr>
<tr> <td>
        <label>Login</label><br>
        <form action="" method="post">
            <label>UserName :</label><br>
            <input id="username" name="username" placeholder="username" type="text"><br>
            <label>Password :</label><br>
            <input id="password" name="password" placeholder="**********" type="password"><br>
            <button name="login" value="LOG">Login</button>
            <div id='error' name="error"></div>
        </form>
    </td></tr>
</table>
</div>

<h3>Najnovije: </h3>

<div id="clanci">

</div>

    <?php
    include('PrikaziSveVijesti.php');
    ?>

</div>
</div>



<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
</script>
<SCRIPT type="text/javascript" src="javaskripta.js"></SCRIPT>



</body>
</html>