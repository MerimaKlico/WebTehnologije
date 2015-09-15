// JavaScript source code

function validiraj() {

    var x = 0;
    var firstNameErr = document.getElementById('firstNameErr');
    firstNameErr.innerHTML = "";

    var a = document.forms["contactform"]["firstName"].value;
    if (a == null || a == "") {
        firstNameErr.innerHTML += "Morate unijeti ime!";
        //return false;
        x = 1;
    }

    var lastNameErr = document.getElementById('lastNameErr');
    lastNameErr.innerHTML = "";

    var b = document.forms["contactform"]["lastName"].value;
    if (b == null || b == "") {
        lastNameErr.innerHTML += "Morate unijeti prezime!";
        //return false;
        x = 1;
    }

    var emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var emailErr = document.getElementById('emailErr');
    emailErr.innerHTML = "";
    var d = document.forms["contactform"]["email"].value;
    if (d != null && d != "") {
        if (!emailRegEx.test(d)) {
            emailErr.innerHTML += "E-mail koji ste unijeli nije validan";
            //return false;
            x = 1;
        }
    }
	
	var email2Err = document.getElementById('email2Err');
    email2Err.innerHTML = "";
    var potvrda = document.forms["contactform"]["email2"].value;
    if (d != null && d != "") {
        if (potvrda=="" || potvrda==null) {
            email2Err.innerHTML += "Morate potvrditi Vašu e-mail adresu";
            x = 1;
        }
		
		else 
		{
			if (potvrda!=d) {
			email2Err.innerHTML += "Nema poklapanja sa prethodno unesenom e-mail adresom";
            x = 1;
			}
		}
    }
	
	if (d==null || d=="")
	{
		if (potvrda!="" && potvrda!=null)
		{
			email2Err.innerHTML += "Morate potvrditi Vašu e-mail adresu";
			x = 1;
		}
	}

  /*  var greskaTelefon = document.getElementById('greskaTelefon');
    greskaTelefon.innerHTML = "";

    var bt = document.forms["contactform"]["tel"].value;
    if (bt == null || bt == "") {
        greskaTelefon.innerHTML += "Broj telefona koji ste unijeli nije validan";
        //return false;
        x = 1;
    }*

    var greskaDatumRodjenja = document.getElementById('greskaDatumRodjenja');
    greskaDatumRodjenja.innerHTML = "";
    var date = new Date();
    var dr = document.forms["contactform"]["datum"].valueAsDate;
    if (dr > date) {
        greskaDatumRodjenja.innerHTML += "Datum rođenja koji ste unijeli nije validan";
        //return false;
        x = 1;
    }*/

    var messageErr = document.getElementById('messageErr');
    messageErr.innerHTML = "";
    var c = document.forms["contactform"]["message"].value;
    if (trimfield(c) == '') {
        messageErr.innerHTML += "Niste unijeli poruku";
        //return false;
        x = 1;
    }
	
	if(x==0) return true;
	return false;
    
}


function validirajMjestoOpcina()
{
	var x=0;
	var greskaOpcinaMjesto = document.getElementById('greskaOpcinaMjesto');
    greskaOpcinaMjesto.innerHTML = "";
	var mjesto= document.getElementById('mjesto').value;
	var opcina= document.getElementById('opcina').value;
    checkMjestoOpcina();
	document.getElementById('mjesto').innerHTML=mjesto;	
	document.getElementById('opcina').innerHTML=opcina;
	
}

function nePrikazuj() {
    document.forms["contactform"]["fakultet"].disabled = true;
}
function prikazuj() {
    document.forms["contactform"]["fakultet"].disabled = false;
}


function trimfield(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function checkMjestoOpcina() {
    var xmlhttp;
	var mjesto = document.getElementById('mjesto').value;
	var opcina = document.getElementById('opcina').value;
	
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var a = xmlhttp.responseText;
            var b = JSON.parse(a);
			document.getElementById('mjesto').innerHTML=mjesto;
			document.getElementById('opcina').innerHTML=opcina;
            var c;
            if (b.greska) c = b.greska; else c = b.ok;
            if (c == b.greska)
			document.getElementById("greskaOpcinaMjesto").innerHTML = c; 
            else  document.getElementById("greskaOpcinaMjesto").innerHTML = ""; 
			
        }
    }
    
    // Tekstualno polje forme 
    //mjesto = encodeURIComponent();
    //opcina = encodeURIComponent();
    xmlhttp.open("GET", "http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?mjesto=" + mjesto + "&opcina=" + opcina, true);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send();
	
}

function posalji()
   {
	   var url="provjeravanje.php";
	   var data='firstName='+document.getElementById("firstName").value+'&lastName='+document.getElementById("lastName").value+'&mjesto='+document.getElementById("mjesto").value+'&opcina='+document.getElementById("opcina").value+'&datum='+document.getElementById("datum").value+'&email='+document.getElementById("email").value+'&email2='+document.getElementById("email2").value+'&tel='+document.getElementById("tel").value+'&message='+document.getElementById("message").value;
	   var validno = validiraj();
			
		var xmlhttp;
	var mjesto = document.getElementById('mjesto').value;
	var opcina = document.getElementById('opcina').value;
	
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var a = xmlhttp.responseText;
            var b = JSON.parse(a);
			document.getElementById('mjesto').innerHTML=mjesto;
			document.getElementById('opcina').innerHTML=opcina;
            var c;
            if (b.greska) c = b.greska; else c = b.ok;
            if (c == b.greska)
			document.getElementById("greskaOpcinaMjesto").innerHTML = c; 
            else  {
				document.getElementById("greskaOpcinaMjesto").innerHTML = "";
				debugger
				if(validno) {
					posaljiHelp(url, data);
				}
			}			
			
        }
    }
    
    // Tekstualno polje forme 
    //mjesto = encodeURIComponent();
    //opcina = encodeURIComponent();
    xmlhttp.open("GET", "http://zamger.etf.unsa.ba/wt/mjesto_opcina.php?mjesto=" + mjesto + "&opcina=" + opcina, true);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send();
		 
}
   	
	function posaljiHelp(url, data)
	{
		var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
				document.getElementById("sadrzaj").innerHTML=text;
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", url+"?"+data, true);
        ajax.send();
	}

function prikaziOMuzeju()
{
    
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
            document.getElementById("sadrzaj").innerHTML = text;
			document.getElementById("column_adverts").innerHTML="";
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", "Omuzeju.html", true);
        ajax.send();
    
}

function prikaziPoveznice()
{
    
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
            document.getElementById("sadrzaj").innerHTML = text;
			document.getElementById("column_adverts").innerHTML="";
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", "Poveznice.html", true);
        ajax.send();
    
}

function prikaziKontakt()
{
    
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
            document.getElementById("sadrzaj").innerHTML = text;
			document.getElementById("column_adverts").innerHTML="";
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", "Kontakt.html", true);
        ajax.send();
    
}



  function prikaziProizvodi()
{
	dobijProizvode();
    var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
				
				var text = ajax.responseText;
				document.getElementById("sadrzaj").innerHTML = text;
				document.getElementById("column_adverts").innerHTML="";
       
					}
			
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
		
        ajax.open("GET","Proizvodi.html",true);
	    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send();
}
	
	function dobijProizvode()
	{
		 var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
             
				var sadrzajJSON = ajax.responseText;
				var sadrzaj = JSON.parse(sadrzajJSON);
				
				for (var i=0; i<sadrzaj.length; i++)
				{
					var red = ispisiRed(sadrzaj[i]);				
					document.getElementById("tabelaProizvodaBody").appendChild(red);
				}

		}
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
	    }
		
        ajax.open("GET","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=15520",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send();
	}
	
	function izbrisiProizvod(proizvod)
	{
		var ajax = new XMLHttpRequest();
		var JSONproizvod = JSON.stringify(proizvod);
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			   
			   prikaziProizvodi();
			}			
		 if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
				
		ajax.open("POST","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=15520",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send("akcija="+"brisanje"+"&proizvod="+JSONproizvod);
	   
   }
		
	
   function ubaciProizvod()
   {
	   var nazivString = document.getElementById("naziv").value;
	   if (sanitizeString(nazivString)=='')
	   {
		   document.getElementById('greskaKodUbaciProizvod').innerHTML="Morate unijeti naziv!";
		   return false;
	   }
	   var cijenaString = sanitizeString(document.getElementById("cijena").value);
	   var opisString = sanitizeString(document.getElementById("opis").value);
	   
	   var proizvod = {
				naziv: nazivString,
				cijena: cijenaString,
				opis: opisString
			};
		
	  var JSONproizvod = JSON.stringify(proizvod);
		   
	    var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
				prikaziProizvodi();
			
			}
		        if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
				
		ajax.open("POST","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=15520",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send("akcija="+"dodavanje"+"&proizvod="+JSONproizvod);
	   
   } 
   
   
   function izmijeniProizvod(){
	   
	   var idString = document.getElementById("idIzmijeni").value;
	   if (sanitizeString(idString)=='')
	   {
		   document.getElementById('greskaKodIzmijeniProizvod').innerHTML="Morate unijeti id!";
		   return false;
	   }
		
	   var nazivString = document.getElementById("nazivIzmijeni").value;
	   if (sanitizeString(nazivString)=='')
	   {
		   document.getElementById('greskaKodIzmijeniProizvod').innerHTML="Morate unijeti naziv!";
		   return false;
	   }
	   var cijenaString = sanitizeString(document.getElementById("cijenaIzmijeni").value);
	   var opisString = sanitizeString(document.getElementById("opisIzmijeni").value);
	   
	   var proizvod = {
		        id: idString,
				naziv: nazivString,
				cijena: cijenaString,
				opis: opisString
			};
	   
	   var JSONproizvod = JSON.stringify(proizvod);
	   
	   var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
				
				  prikaziProizvodi();
				  document.getElementById('greskaKodIzmijeniProizvod').innerHTML="Uspjesno ste izmijenili proizvod";
			 
		    }
		        if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
				
		ajax.open("POST","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=15520",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send("&akcija="+"promjena"+"&proizvod="+JSONproizvod);
   }
   
   function  ispisiRed(proizvod)
   {
	        var red = document.createElement("tr");
			
			var celijaId = document.createElement("td");
		    var textId = document.createTextNode(proizvod.id);
			celijaId.appendChild(textId);
			red.appendChild(celijaId);
			
			var celija1 = document.createElement("td");
		    var text1 = document.createTextNode(proizvod.naziv);
			celija1.appendChild(text1);
			red.appendChild(celija1);
			
			
			var celija3 = document.createElement("td");
		    var text3 = document.createTextNode(proizvod.opis);
			celija3.appendChild(text3);
			red.appendChild(celija3);
			
			var celija4 = document.createElement("td");
		    var text4 = document.createTextNode(proizvod.cijena);
			celija4.appendChild(text4);
			red.appendChild(celija4);			
			
			var celija5 = document.createElement("td");
		    var dugmeIzbrisi = document.createElement("INPUT");
			dugmeIzbrisi.type = "button";
			dugmeIzbrisi.value = "Izbrisi";
			dugmeIzbrisi.name = "dugmeIzbrisi"; 
			dugmeIzbrisi.onclick = function() { izbrisiProizvod(proizvod); };
			celija5.appendChild(dugmeIzbrisi);
			red.appendChild(celija5); 
			
			return red;
   }
   
   function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim();
}



