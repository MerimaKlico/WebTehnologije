function validiraj() {
	
	var x=0;
	var greskaIme = document.getElementById('greskaIme');
	greskaIme.innerHTML=""; 
	
	var a = document.forms["contactform"]["ime"].value;
    if (a == null || a == "") {
        greskaIme.innerHTML+="Morate unijeti ime!";
        //return false;
		x=1;
    }
	
	var greskaPrezime = document.getElementById('greskaPrezime');
	greskaPrezime.innerHTML=""; 
	
	var b = document.forms["contactform"]["prezime"].value;
    if (b == null || b == "") {
        greskaPrezime.innerHTML+="Morate unijeti prezime!";
        //return false;
		x=1;
    }
		
	 var emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	 greskaEmail.innerHTML=""; 
	 var d= document.forms["contactform"]["email"].value;
	 if (d!= null && d!="") {   
	if (!emailRegEx.test(d)) {
		greskaEmail.innerHTML+="E-mail koji ste unijeli nije validan";  
		//return false;
		x=1;
	 }}
	 
	 var greskaPoruka = document.getElementById('greskaPoruka');
	greskaPoruka.innerHTML=""; 
	var c = document.forms["contactform"]["poruka"].value;
	if(trimfield(c) == '') 
    {
        greskaPoruka.innerHTML+="Niste unijeli poruku";
        //return false;
		x=1;
    }
	
	if (x==1) return false;
	return true; 
			}

	function nePrikazuj(){
	document.forms["contactform"]["fakultet"].disabled = true;
}
    function prikazuj(){
	document.forms["contactform"]["fakultet"].disabled = false;
}


function trimfield(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}

function showMenu(){
   document.getElementById("padajuciMeni").style.display="block";
 }
 function hideMenu(){
   document.getElementById("padajuciMeni").style.display="none";
 }


function brisi(idd){

    document.getElementById("vijest"+idd).innerHTML = "";
}








