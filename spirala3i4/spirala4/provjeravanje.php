        <div class="spacer"></div>

 
		<h2> Provjerite da li ste ispravno popunili kontakt formu </h2>
		<br>

<?php

// Initialize variables and set to empty strings
$firstName=$lastName=$message=$email=$email2=$tel=$mjesto=$opcina=$datum="";
$firstNameErr=$lastNameErr=$messageErr=$emailErr=$email2Err=$telErr=$greskaOpcinaMjesto="";

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data, ENT_QUOTES, "UTF-8");
   return $data;
}

function isValidEmail($email){ 
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function isValidTel($tel)
	{
		if (preg_match("/^\d{3}[\s]\d{3}[\s]\d{3}[\s]?$/", $tel)) return true;
		if (preg_match("/^\d{3}[-]\d{3}[-]\d{3}[\s]?$/", $tel)) return true;
		if (preg_match("/^\d{3}[\s]\d{3}[-]\d{3}[\s]?$/", $tel)) return true;
		if (preg_match("/^\d{3}[-]\d{6}[\s]?$/", $tel)) return true;
		if (preg_match("/^\d{3}[\s]\d{6}[\s]?$/", $tel)) return true;
		if (preg_match("/^\d{9}?$/", $tel)) return true;
		return false;
	}

	$valid=false;

// Validate input and sanitize
if ($_SERVER['REQUEST_METHOD']== "GET") {
   $valid = true; //Your indicator for your condition, actually it depends on what you need. I am just used to this method.

   //validacija imena
 // if (empty($_GET["firstName"]) || $_GET["firstName"]=='') {
   //   $firstNameErr = "Morate unijeti ime";
  //    $valid = false;
  // }
 //  else {
	  if (isset($_GET["firstName"])) 
      $firstName = test_input($_GET["firstName"]);
  
	  if($firstName=='')
	  {
		  $firstNameErr = "Morate unijeti ime";
          $valid = false;
	  }
 //  }
   
   //validacija prezimena
   if (empty($_GET["lastName"]) || $_GET["lastName"]=='') {
      $lastNameErr = "Morate unijeti prezime";
      $valid = false;
   }
   else {
      $lastName = test_input($_GET["lastName"]);
	  if($lastName=='')
	  {
		  $lastNameErr = "Morate unijeti prezime";
          $valid = false;
	  }
   }
   
   //validacija poruke
   if (empty($_GET["message"]) || $_GET["message"]=='') {
      $messageErr = "Morate unijeti poruku";
      $valid = false;
   }
   else {
      $message = test_input($_GET["message"]);
	  if($message=='')
	  {
		  $messageErr = "Morate unijeti poruku";
          $valid = false;
	  }
   }
   
   //unakrsna validacija emaila
   if (!(empty($_GET["email"]) || $_GET["email"]=='')) {
      $email = test_input($_GET["email"]);
      if($email=='')
	  {
		  if(!(empty($_GET["email2"]) || $_GET["email2"]=='')) {
			  $email2Err="Morate popuniti polje iznad";
			  $valid=false;
		  }
		  else{
			  $email2=test_input($_GET["email2"]);
			  if ($email2!="") {
				  $email2Err="Morate popuniti polje iznad";
			      $valid=false;
			  }
			}
	    }
		
		else{
			if(!(isValidEmail($email))){
				$emailErr="E-mail adresa nije validna";
				$valid=false;
			}
			
			else{
				if(!(empty($_GET["email2"]) || $_GET["email2"]=='')) {
					    $email2=test_input($_GET["email2"]);
						if($email2!=$email) {
						$email2Err="Nema poklapanja sa prethodno unesenom e-mail adresom";
						$valid=false;}
				}
				else {
					$email2=test_input($_GET["email2"]);
					if($email2==""){
						$email2Err="Morate potvrditi e-mail adresu";
						$valid=false;
								}
				}
				
			}
			
		}
	
   }
   
   if (empty($_GET["email"]) || $_GET["email"]=='') {
	   
			  if(!(empty($_GET["email2"]) || $_GET["email2"]=='')){
			  $email2=test_input($_GET["email2"]);
			  if ($email2!="") {
				  $email2Err="Morate popuniti polje iznad";
			      $valid=false;
			  }
   }}
    
	//validacija telefona
	if (!(empty($_GET["tel"]) || $_GET["tel"]==''))
	{
		$tel=test_input($_GET["tel"]);
		if($tel!="")
		{
			if(!(isValidTel($tel)))
			{
				$telErr="Broj telefona nije validan";
				$valid=false;
			}
		}
	}
	
	//datum
	if(isset($_GET["datum"]))
	$datum=$_GET["datum"];
	
	//mjesto
	 //if(isset($_GET["mjesto"]))
		// $mjesto=$_GET["mjesto"];
	
	//opcina
	//if(isset($_GET["opcina"]))
		// $opcina=$_GET["opcina"];
	//if(isset($_GET["greskaOpcinaMjesto"]))
	//	$greskaOpcinaMjesto=$_GET["greskaOpcinaMjesto"];
//<?php echo htmlspecialchars($_SERVER['PHP_SELF']); 
	
   //if valid then redirect
  //if($valid){
   //header("Location: provjeravanje.php?firstName=$firstName&lastName=$lastName&message=$message&email=$email&email2=$email2&tel=$tel&mjesto=$mjesto&opcina=$opcina&datum=$datum");
   //exit();
   if(isset($_GET["mjesto"])) $mjesto=$_GET["mjesto"];
   if(isset($_GET["opcina"])) $opcina=$_GET["opcina"];
   if(isset($_GET["greskaOpcinaMjesto"])) $mjesto=$_GET["greskaOpcinaMjesto"];
	
  } if ($valid) {
    

// Sanitize data

	
?>
		
<br><form action="slanjeMaila.php" method="POST"><table id='tabelaProvjera' class='tabela'>
		<tr> <td> Ime: </td> <td class='unos'> <?php print $firstName;  ?> </td></tr>
		<input type="hidden" name="firstName" value="<?php echo $firstName; ?>" />
		
		<tr> <td> Prezime: </td> <td class='unos'><?php print $lastName;  ?></td></tr>
		<input type="hidden" name="lastName" value="<?php echo $lastName; ?>" />
		
		<tr> <td> Mjesto*: </td> <td class='unos'><?php echo $mjesto; ?></td></tr>
		<input type="hidden" name="mjesto" value="<?php echo $mjesto; ?>" />
		
		<tr> <td> Opcina: </td> <td class='unos'><?php echo $opcina; ?></td></tr>
		<input type="hidden" name="opcina" value="<?php echo $opcina; ?>" />
		
		<tr> <td> E-mail: </td> <td class='unos'><?php echo $email; ?></td></tr>
		<input type="hidden" name="email" value="<?php echo $email; ?>" />
		
		<tr> <td> Potvrdite e-mail: </td> <td class='unos'><?php echo $email2; ?></td></tr>
		<input type="hidden" name="email2" value="<?php echo $email2; ?>" />
		
		<tr> <td> Broj telefona: </td> <td class='unos'><?php echo $tel; ?></td></tr>
		<input type="hidden" name="tel" value="<?php echo $tel; ?>" />
		
		<tr> <td> Datum rođenja: </td> <td class='unos'><?php echo $datum; ?></td></tr>
		<input type="hidden" name="datum" value="<?php echo $datum; ?>" />
				
		<tr> <td> Poruka: </td> <td class='unos' name="message"><?php echo $message; ?></td></tr>
		<input type="hidden" name="message" value="<?php echo $message; ?>" />
		
		</table>
	    <br>Da li ste sigurni da želite poslati ove podatke?<br><br>
		<input type='submit' name='button_pressed' value='Siguran sam'><br> </form>
		<br><h2>Ako ste pogrešno popunili formu, možete ispod prepraviti unesene podatke</h2>
 
<?php } ?>
		
<form method="get" name='contactform' id='contactform' class='tabela'>
<table>

<tr>
<td> Ime*: </td> 
<td class="unos"> <input type="text" name="firstName" id="firstName" value="<?php if(isset($firstName)) echo $firstName; ?>"> 
<div id="firstNameErr" class='greskeForme'> <?php if(isset($firstNameErr) && isset($_GET["firstName"])) echo $firstNameErr; ?></div> </td>
</tr>

<tr>
<td> Prezime*: </td>
<td class="unos"> <input type="text" name="lastName" id="lastName" value="<?php if(isset($lastName))echo $lastName; ?>"> 
<div id="lastNameErr"  class='greskeForme'> <?php if(isset($_GET["lastName"]) && isset($firstNameErr)) echo $lastNameErr; ?> </div> </td>
</tr>

<tr>
<td> Mjesto: </td>
<td class="unos">
<input list="mjesta" name="mjesto" id="mjesto" value="<?php if(isset($mjesto)) echo $mjesto; ?>">
    <datalist id="mjesta">
    <option value="Sarajevo">
    <option value="Banjaluka">
    <option value="Mostar">
    <option value="Tuzla">
    <option value="Bihać">
    </datalist>
<div id='greskaOpcinaMjesto' name="greskaOpcinaMjesto" class='greskeForme'><?php if(isset($greskaOpcinaMjesto)) echo $greskaOpcinaMjesto; ?></div> </td>
</td>
</tr>

 <tr>
<td> Općina: </td>
<td class="unos"> <input type="text" name="opcina" id="opcina" value="<?php if(isset($opcina)) echo $opcina; ?>">
<div id='greskaOpcinaMjesto' name="greskaOpcinaMjesto" class='greskeForme'> <?php if(isset($greskaOpcinaMjesto)) echo $greskaOpcinaMjesto; ?></div> </td>
</tr>

<tr>
<td> Datum rođenja: </td>
<td class="unos"> <input type="date" name="datum" id="datum" min="1910-01-01" max="2010-01-01" value="<?php if(isset($datum)) echo $datum; ?>">
</td>
</tr>

<tr>
<td> Email: </td>
<td class="unos"> <input type="text" name="email" id="email" value="<?php if(isset($email)) echo $email; ?>"> 
<div id="emailErr" class='greskeForme'> <?php if(isset($emailErr)) echo $emailErr; ?> </div> </td>
</tr>

<tr>
<td> Potvrdite email: </td>
<td class="unos"> <input type="text" name="email2" id="email2" value="<?php if(isset($email2)) echo $email2; ?>"> 
<div id="email2Err"  class='greskeForme'> <?php if(isset($email2Err)) echo $email2Err; ?> </div> </td>
</tr>

<tr>
<td> Broj telefona: </td>
<td class="unos"> <input type="text" name="tel" id="tel" value="<?php if(isset($tel)) echo $tel; ?>"> 
<div id="telErr" class='greskeForme'> <?php if(isset($telErr)) echo $telErr; ?> </div> </td>
</tr>

<tr id='redPoruka'>
<td> Poruka*: </td>
<td class="unos"> <textarea rows='5' cols='50' id="message" name="message"> <?php if(isset($message)) echo $message; ?> </textarea>
<div id="messageErr" class='greskeForme'> <?php if(isset($messageErr) && isset($_GET["message"])) echo $messageErr; ?> </div> </td>
</tr>

</table>
<br><br>

<input type="button" value="Pošalji" onclick="posalji()">
</form>