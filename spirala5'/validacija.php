<?php

// Initialize variables and set to empty strings
$firstName=$lastName=$message=$email=$email2=$tel=$mjesto=$opcina=$datum="";
$firstNameErr=$lastNameErr=$messageErr=$emailErr=$email2Err=$telErr=$greskaOpcinaMjesto="";


// Validate input and sanitize
if ($_SERVER['REQUEST_METHOD']== "GET") {
   $valid = true; //Your indicator for your condition, actually it depends on what you need. I am just used to this method.

   //validacija imena
  if (empty($_GET["firstName"]) || $_GET["firstName"]=='') {
      $firstNameErr = "Morate unijeti ime";
      $valid = false;
   }
   else {
      $firstName = test_input($_GET["firstName"]);
	  if($firstName=='')
	  {
		  $firstNameErr = "Morate unijeti ime";
          $valid = false;
	  }
   }
   
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
  if($valid){
   header("Location: provjeravanje.php?firstName=$firstName&lastName=$lastName&message=$message&email=$email&email2=$email2&tel=$tel&mjesto=$mjesto&opcina=$opcina&datum=$datum");
   exit();
  }
    
}
// Sanitize data
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
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
	
?>