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
	
	var greskaOpcinaMjesto = document.getElementById('greskaOpcinaMjesto');
    greskaOpcinaMjesto.innerHTML=""; 	
	checkMjestoOpcina();
	if (document.getElementById("greskaOpcinaMjesto").innerHTML!='ok') x=1;
	
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


function checkMjestoOpcina(){
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var a=xmlhttp.responseText;
			var b = JSON.parse(a);
			var c;
			if(b.greska)c=b.greska;else c=b.ok;
			document.getElementById("greskaOpcinaMjesto").innerHTML=c;
		}
	}
	var mjesto = document.getElementById('mjesto').value;
	// Tekstualno polje forme 
	//mjesto = encodeURIComponent();
	var opcina = document.getElementById('opcina').value;
	//opcina = encodeURIComponent();
	xmlhttp.open("GET", "http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?mjesto=" + mjesto + "&opcina=" + opcina, true);
	xmlhttp.send();
}

function ajaxRead(file){
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var data = JSON.parse(httpRequest.responseText);
			document.getElementById('okvir').innerHTML=data;
		}
	}
	
	xmlhttp.open('POST', file, true);
	xmlhttp.send();
}

