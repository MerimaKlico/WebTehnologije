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
                        <li><a href="index.php">Home</a></li>
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

        <p id="kontakt">
            Muzej književnosti i pozorišne umjetnosti BiH <br>
            Sime Milutinovića Sarajlije 7 <br>
            71 000 Sarajevo <br>
            Tel/fax: + 387 33 201 861
        </p>

        <br>
        <h4> Pošalji poruku: </h4>
	
<?php include('validacija.php'); ?>
<form method="get" name='contactform' id='contactform' class='tabela'>
<table>

<tr>
<td> Ime*: </td> 
<td class="unos"> <input type="text" name="firstName" value="<?php echo $firstName; ?>"> 
<div class='greskeForme'> <?php echo $firstNameErr; ?></div> </td>
</tr>

<tr>
<td> Prezime*: </td>
<td class="unos"> <input type="text" name="lastName" value="<?php if(isset($lastName))echo $lastName; ?>"> 
<div class='greskeForme'> <?php if(isset($lastNameErr)) echo $lastNameErr; ?> </div> </td>
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
<td class="unos"> <input type="date" name="datum" id="datum" min="1910-01-01" max="2010-01-01" value="<?php if(isset($datum)) echo $datum ?>">
</td>
</tr>

<tr>
<td> Email: </td>
<td class="unos"> <input type="text" name="email" value="<?php if(isset($email)) echo $email; ?>"> 
<div class='greskeForme'> <?php if(isset($emailErr)) echo $emailErr; ?> </div> </td>
</tr>

<tr>
<td> Potvrdite email: </td>
<td class="unos"> <input type="text" name="email2" value="<?php if(isset($email2)) echo $email2; ?>"> 
<div class='greskeForme'> <?php if(isset($email2Err)) echo $email2Err; ?> </div> </td>
</tr>

<tr>
<td> Broj telefona: </td>
<td class="unos"> <input type="text" name="tel" value="<?php if(isset($tel)) echo $tel; ?>"> 
<div class='greskeForme'> <?php if(isset($telErr)) echo $telErr; ?> </div> </td>
</tr>

<tr id='redPoruka'>
<td> Poruka*: </td>
<td class="unos"> <textarea rows='5' cols='50' name="message"> <?php if(isset($message)) echo $message; ?> </textarea>
<div class='greskeForme'> <?php if(isset($messageErr)) echo $messageErr; ?> </div> </td>
</tr>

</table>
<br><br>
<input type="submit" value="Pošalji">
</form>


</div>



</body>
</html>