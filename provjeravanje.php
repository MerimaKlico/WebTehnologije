<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <link rel="stylesheet" type="text/css" href="stil.css">
    <title>Kontakt</title>

</head>
<body>

    <div id="masthead">


            <h1> <img src="Screenshot_2.png" alt="MuzejLogo" />  </h1>

            <div class="topbanner"> <h1>Muzej kulture i pozorišne umjetnosti</h1>  </div>

            <ul id="registration">
                <li class="loginout"> <a href="#" class="login"> Admin panel </a> </li>
                <li class="loginout"> <a href="#" class="login"> Log in </a></li>
                <li class="loginout"> <a href="#" class="login"> Registruj se </a></li>
            </ul>


            <div class="navigation">
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>
                            <a href="Omuzeju.html">O muzeju</a>
                            <ul>
                                <li><a href="#">Edit</a></li>
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
                            <a href="Poveznice.html">Poveznice</a>
                        </li>
                        <li><a href="Kontakt.php">Kontakt</a></li>
                    </ul>
                </nav>
            </div>


        </div>

        <div class="spacer"></div>

    <div id="sadrzaj">
		<h2> Provjerite da li ste ispravno popunili kontakt formu </h2>
		<br>
		
		<?php

$firstName = $lastName = $message = $email = $email2 = $tel = $datum = $mjesto = $opcina = "";
$firstNameErr = $lastNameErr = $messageErr = $emailErr = $email2Err = $telErr = $datumErr = $mjestoErr = $opcinaErr = "";

		if(isset($_GET['firstName'])) $firstName=$_GET['firstName']; 
		if(isset($_GET['lastName'])) $lastName=$_GET['lastName'];
		if(isset($_GET['message'])) $message=$_GET['message'];
		if(isset($_GET['email'])) $email=$_GET['email'];
		if(isset($_GET['email2'])) $email2=$_GET['email2'];
		if(isset($_GET['tel'])) 	$tel=$_GET['tel'];
		if(isset($_GET['datum'])) $datum=$_GET['datum'];
		if(isset($_GET['mjesto'])) $mjesto=$_GET['mjesto'];
		if(isset($_GET['opcina'])) $opcina=$_GET['opcina'];
		
?>

		<br><form action="slanjeMaila.php" method="POST"><table id='tabelaProvjera' class='tabela'>
		<tr> <td> Ime: </td> <td class='unos'> <?php print $firstName;  ?> </td></tr>
		<input type="hidden" name="firstName" value="<?php echo $firstName; ?>" />
		
		<tr> <td> Prezime: </td> <td class='unos'><?php print $lastName;  ?></td></tr>
		<input type="hidden" name="lastName" value="<?php echo $lastName; ?>" />
		
		<tr> <td> Mjesto: </td> <td class='unos'><?php echo $mjesto ?></td></tr>
		<input type="hidden" name="mjesto" value="<?php echo $mjesto; ?>" />
		
		<tr> <td> Opcina: </td> <td class='unos'><?php echo $opcina ?></td></tr>
		<input type="hidden" name="opcina" value="<?php echo $opcina; ?>" />
		
		<tr> <td> E-mail: </td> <td class='unos'><?php echo $email ?></td></tr>
		<input type="hidden" name="email" value="<?php echo $email; ?>" />
		
		<tr> <td> Potvrdite e-mail: </td> <td class='unos'><?php echo $email2?></td></tr>
		<input type="hidden" name="email2" value="<?php echo $email2; ?>" />
		
		<tr> <td> Broj telefona: </td> <td class='unos'><?php echo $tel ?></td></tr>
		<input type="hidden" name="tel" value="<?php echo $tel; ?>" />
		
		<tr> <td> Datum rođenja: </td> <td class='unos'><?php echo $datum ?></td></tr>
		<input type="hidden" name="datum" value="<?php echo $datum; ?>" />
				
		<tr> <td> Poruka: </td> <td class='unos' name="message"><?php echo $message ?></td></tr>
		<input type="hidden" name="message" value="<?php echo $message; ?>" />
		
		</table>
	    <br>Da li ste sigurni da želite poslati ove podatke?<br><br>
		<input type='submit' name='button_pressed' value='Siguran sam'><br> </form>
		<br><h2>Ako ste pogrešno popunili formu, možete ispod prepraviti unesene podatke</h2>
        
<?php
include('validacija.php');
?>
		
<form method="get" name='contactform' id='contactform' class='tabela'>
<table>

<tr>
<td> Ime*: </td> 
<td class="unos"> <input type="text" name="firstName" value="<?php echo $firstName; ?>"> 
<div class='greskeForme'> <?php echo $firstNameErr; ?></div> </td>
</tr>

<tr>
<td> Prezime*: </td>
<td class="unos"> <input type="text" name="lastName" value="<?php echo $lastName; ?>"> 
<div class='greskeForme'> <?php echo $lastNameErr; ?> </div> </td>
</tr>

<tr>
<td> Mjesto: </td>
<td class="unos">
<input list="mjesta" name="mjesto" id="mjesto">
    <datalist id="mjesta">
    <option value="Sarajevo">
    <option value="Banjaluka">
    <option value="Mostar">
    <option value="Tuzla">
    <option value="Bihać">
    </datalist>
</td>
</tr>

 <tr>
<td> Općina: </td>
<td class="unos"> <input type="text" name="opcina" id="opcina"> 
<div id='greskaOpcinaMjesto' name="greskaOpcinaMjesto" class='greskeForme'></div> </td>
</tr>

<tr>
<td> Datum rođenja: </td>
<td class="unos"> <input type="date" name="datum" id="datum" min="1910-01-01" max="2010-01-01" value="<?php echo $datum ?>">
</td>
</tr>

<tr>
<td> Email: </td>
<td class="unos"> <input type="text" name="email" value="<?php echo $email; ?>"> 
<div class='greskeForme'> <?php echo $emailErr; ?> </div> </td>
</tr>

<tr>
<td> Potvrdite email: </td>
<td class="unos"> <input type="text" name="email2" value="<?php echo $email2; ?>"> 
<div class='greskeForme'> <?php echo $email2Err; ?> </div> </td>
</tr>

<tr>
<td> Broj telefona: </td>
<td class="unos"> <input type="text" name="tel" value="<?php echo $tel; ?>"> 
<div class='greskeForme'> <?php echo $telErr; ?> </div> </td>
</tr>

<tr id='redPoruka'>
<td> Poruka*: </td>
<td class="unos"> <textarea rows='5' cols='50' name="message"> <?php echo $message; ?> </textarea>
<div class='greskeForme'> <?php echo $messageErr; ?> </div> </td>
</tr>

</table>
<br><br>
<input type="submit" value="Pošalji">
</form>

	</div>
</body>
</html>