// JavaScript source code


var korisnik="";
var sesija="";
var brojevi=[];

function provjeriSesiju()
{
	var poruka1="Nema sesije";
	var poruka2="admin: ";
	var poruka3="korisnik: ";
	
	var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
				
				var text=ajax.responseText;
				var t=text.substr(0, 7);
				var z=text.substr(0, 10);
				
				if(t==poruka2)
				{
					korisnik=text.substr(7, text);
					sesija="admin";
				}
				
				if(z==poruka3)
				{
					korisnik=text.substr(10, text);
					sesija="korisnik";
				}
				
				//window.alert(text);
				
			}
				 if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        
        ajax.open("GET", "provjeriSesiju.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send();
    
}


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

   var telErr= document.getElementById('telErr');
       telErr.innerHTML = "";

		var telVrijednost = document.forms["contactform"]["tel"].value;
		if(trimfield(telVrijednost)!=null && trimfield(telVrijednost)!="")
    if (!isValidTel(telVrijednost)) {
        telErr.innerHTML += "Broj telefona koji ste unijeli nije validan";
        x = 1;
    }

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

function isValidTel(tel)
	{
		telRegex1=/^\d{3}[\s]\d{3}[\s]\d{3}[\s]?$/;
		telRegex2=/^\d{3}[-]\d{3}[-]\d{3}[\s]?$/;
		telRegex3=/^\d{3}[\s]\d{3}[-]\d{3}[\s]?$/;
		telRegex4=/^\d{3}[-]\d{6}[\s]?$/;
		telRegex5=/^\d{3}[\s]\d{6}[\s]?$/;
		telRegex6=/^\d{9}?$/;
		
		if (!telRegex1.test(tel)) return false;
		if (!telRegex2.test(tel)) return false;
		if (!telRegex3.test(tel)) return false;
		if (!telRegex4.test(tel)) return false;
		if (!telRegex5.test(tel)) return false;
		if (!telRegex6.test(tel)) return false;
		return true;
	}
	
function trimfield(str) {
    return str.replace(/^\s+|\s+$/g, '');
}



function checkMjestoOpcina() {
    var xmlhttp;
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
            var c;
            if (b.greska) c = b.greska; else c = b.ok;
            if (c == b.greska)
                document.getElementById("greskaOpcinaMjesto").innerHTML = c;
            else document.getElementById("greskaOpcinaMjesto").innerHTML = "";
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
			
			document.getElementById("column_adverts").innerHTML="";
			}
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "Kontakt.html", true);
        ajax.send();
    
}

function prikaziKontakt2(firstName, lastName, mjesto, opcina, datum, email, email2, tel, message)
{
	var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
				document.getElementById("ispraviPodatke").innerHTML = text;
			    document.getElementById("column_adverts").innerHTML="";
				document.getElementById("kontakt").innerHTML="";					
				document.getElementById("firstName").value=firstName;
				document.getElementById("lastName").value=lastName;
				document.getElementById("mjesto").value=mjesto;
				document.getElementById("opcina").value=opcina;
				document.getElementById("datum").value=datum;
				document.getElementById("email").value=email;
				document.getElementById("email2").value=email2;
				document.getElementById("tel").value=tel;
				document.getElementById("message").value=message;
			
			document.getElementById("column_adverts").innerHTML="";
			}
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "Kontakt.html", true);
        ajax.send();
}

function posalji()
   {
	   var url="validacija.php";
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
		if (xmlhttp.readyState == 4 && xmlhttp.status == 404)
                window.alert("Greska: nepoznat URL");
		
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
				//debugger
				if(text==true)
				{
					
					var firstName=document.getElementById("firstName").value;
					var lastName=document.getElementById("lastName").value;
					var mjesto=document.getElementById("mjesto").value;
					var opcina=document.getElementById("opcina").value;
					var datum=document.getElementById("datum").value;
					var email=document.getElementById("email").value;
					var email2=document.getElementById("email2").value;
					var tel=document.getElementById("tel").value;
					var message=document.getElementById("message").value;
					
					document.getElementById("sadrzaj").innerHTML="";
										
					var raz=document.createElement("br");
					document.getElementById("sadrzaj").appendChild(raz);
					
					var tab=document.createElement("table");
					//var th=document.createElement("thead");
					//tab.appendChild(th);
					var tabela=document.createElement("tbody");
					
					var red1=document.createElement("tr");
					var td1=document.createElement("td");
					var ime1Node=document.createTextNode("Ime: "+firstName);
					td1.appendChild(ime1Node);
					red1.appendChild(td1);		
					tabela.appendChild(red1);
					
					var red2=document.createElement("tr");
					var td2=document.createElement("td");
					var prezime1Node=document.createTextNode("Prezime: "+lastName);
					td2.appendChild(prezime1Node);
					red2.appendChild(td2);
					tabela.appendChild(red2);
					
					var red3=document.createElement("tr");
					var td3=document.createElement("td");
					var mjesto1Node=document.createTextNode("Mjesto: "+ mjesto);
					td3.appendChild(mjesto1Node);
					red3.appendChild(td3);					
					tabela.appendChild(red3);
					
					
					var red4=document.createElement("tr");
					var td4=document.createElement("td");
					var opcina1Node=document.createTextNode("Opcina: "+ opcina);
					td4.appendChild(opcina1Node);
					red4.appendChild(td4);
					tabela.appendChild(red4);
					
					var red5=document.createElement("tr");
					var td5=document.createElement("td");
					var datum1Node=document.createTextNode("Datum: "+datum);
					td5.appendChild(datum1Node);
					red5.appendChild(td5);
					tabela.appendChild(red5);
					
					var red6=document.createElement("tr");
					var td6=document.createElement("td");
					var email1Node=document.createTextNode("Email: "+email);
					td6.appendChild(email1Node);
					red6.appendChild(td6);
					tabela.appendChild(red6);
					
					var red7=document.createElement("tr");
					var td7=document.createElement("td");
					var email21Node=document.createTextNode("Potvrdite email: "+ email);
					td7.appendChild(email21Node);
					red7.appendChild(td7);
					tabela.appendChild(red7);
					
					var red8=document.createElement("tr");
					var td8=document.createElement("td");
					var tel1Node=document.createTextNode("Telefon: "+ tel);
					td8.appendChild(tel1Node);
					red8.appendChild(td8);					
					tabela.appendChild(red8);

					var red9=document.createElement("tr");
					var td9=document.createElement("td");
					var poruka1Node=document.createTextNode("Poruka: "+message);
					td9.appendChild(poruka1Node);
					red9.appendChild(td9);					
					tabela.appendChild(red9);
					
					tab.appendChild(tabela);					
					document.getElementById("sadrzaj").appendChild(tab);
					
					var nekiTekstParagraf = document.createElement("p");
					var nekiTekst= document.createTextNode("Ako niste sigurni da želite poslati ove podatke, možete ih prepraviti ispod: ");
					nekiTekstParagraf.appendChild(nekiTekst);
					document.getElementById("sadrzaj").appendChild(nekiTekstParagraf);
					
					var siguran = document.createElement("input");
					siguran.type="button";
					siguran.value="Siguran sam";
					siguran.id="siguran";
					siguran.onclick= function() { siguranFunkcija(this.id, firstName, lastName, mjesto, opcina, datum, email, email2, tel, message); };
					document.getElementById("sadrzaj").appendChild(siguran);
					
					var ispraviPodatke=document.createElement("div");
					ispraviPodatke.id="ispraviPodatke";
					document.getElementById("sadrzaj").appendChild(ispraviPodatke);
					prikaziKontakt2(firstName, lastName, mjesto, opcina, datum, email, email2, tel, message);
										
				}
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", url+"?"+data, true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send();
	}


function siguranFunkcija(id, firstName, lastName, mjesto, opcina, datum, email, email2, tel, message)
{
	
	var data=String("firstName="+firstName+"&lastName="+lastName+"&mjesto="+mjesto+"&opcina="+opcina+"&datum="+datum+"&email="+email+"&tel="+tel+"&message="+message);
	var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
				window.alert(text);
				//debugger
			}
				
					if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("POST", "slanjeMaila.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(data);
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
	    //ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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
//----------------------------------------------------------------------------------------

function dajPocetnuStranicu()
{
	
	    provjeriSesiju();
		if (sesija=="admin") 
		{
			document.getElementById("registration").innerHTML="";
			var logout=document.createElement("input");
			logout.type="button";
			logout.value="Logout";
			logout.id="logout"+korisnik;
			logout.onclick=function() { logoutFunkcija(this.id); };
			document.getElementById("registration").appendChild(logout);
			dajNovostiAdmin();
		}
			
		else if (sesija=="korisnik") 
		{
			document.getElementById("registration").innerHTML="";
			var logout=document.createElement("input");
			logout.type="button";
			logout.value="Logout";
			logout.id="logout"+korisnik;
			logout.onclick=function() { logoutFunkcija(this.id); };
			document.getElementById("registration").appendChild(logout);
			dajNovosti();
		
		}
		else 
		{
			loadRegistracija();
			dajNovosti();
		}
}

function dajNovosti(){
    var ajax = new XMLHttpRequest();
	 //loadRegistracija();
	 
	 //setInterval(function(){ dajNovosti(); }, 3000);
	
    ajax.onreadystatechange = function() {
    // Anonimna funkcija
      if (ajax.readyState == 4 && ajax.status == 200){

        //console.log(jsonObj.list.length);
		var obj = ajax.responseText;
            var jsonObj = JSON.parse(obj);
         
        for (var i = 0 ; i < jsonObj.list.length ; i++) {
          
          var id=jsonObj.list[i].id;
		  var clanak= document.createElement("div");
		  clanak.className = "clanak";
		  clanak.id="clanak"+id;
		  
		  var pVrijeme= document.createElement("p");
		  pVrijeme.className = "meta";
		  var vrijeme = document.createTextNode("Objavljeno: "+jsonObj.list[i].vrijeme);
		  pVrijeme.appendChild(vrijeme);
		  clanak.appendChild(pVrijeme);
		  
		  var pAutor= document.createElement("p");
		  pAutor.className = "meta";
		  var autor = document.createTextNode("Autor: "+jsonObj.list[i].autor);
		  pAutor.appendChild(autor);
		  clanak.appendChild(pAutor);
		  
		  var hNaslov = document.createElement("h3");
		  var naslov = document.createTextNode(jsonObj.list[i].naslov);
		  hNaslov.appendChild(naslov);
		  clanak.appendChild(hNaslov);
		  
		  var s= new Image();
		  s.src = jsonObj.list[i].slika;
		  var slika= document.createElement("IMG");
		  slika.setAttribute("src", s.src);
          slika.setAttribute("height", "40%");
          slika.setAttribute("width", "40%");
          slika.setAttribute("alt", "Loading...");
		  clanak.appendChild(slika);
			
		  var pOpis= document.createElement("p");
		  pOpis.className = "opis";
		  pOpis.id="opis"+id;
		  var opis = jsonObj.list[i].tekst;
		  var prviDio= opis.substring(0, 20);
		  var tekst1 = document.createTextNode(prviDio);
		  pOpis.appendChild(tekst1);
		  clanak.appendChild(pOpis);
		  
		  var linkDetaljnije = document.createElement("a");
		  var linkText = document.createTextNode("Detaljnije");
          linkDetaljnije.appendChild(linkText);
          linkDetaljnije.id ="link"+id;
		  linkDetaljnije.onclick =function() { prikaziDetaljnije(this.id); };
          linkDetaljnije.href = "#!";
          clanak.appendChild(linkDetaljnije);
		  
		  var razmak1 = document.createElement("br");
		  clanak.appendChild(razmak1);
		  
		  var brojK=0;
		  for (var j=0; j<brojevi.length; j++)
		  if(brojevi[j].vijest==id)  brojK++;
		  
		  var linkKomentari = document.createElement("a");
          var linkText = document.createTextNode("Prikazi "+ brojK +" komentara za vijest " + jsonObj.list[i].id);
          linkKomentari.appendChild(linkText);
          //linkKomentari.setAttribute("id", jsonObj.list[i].id);
          linkKomentari.href = "#!";
		  linkKomentari.id =id;
		  linkKomentari.onclick =function() { prikaziKomentare(this.id); };
          clanak.appendChild(linkKomentari);
		  
		  var razmak2 = document.createElement("br");
		  clanak.appendChild(razmak2);
		  	  
		  var komentariZaVijest= document.createElement("div");
		  komentariZaVijest.id= "komentariZaVijest"+id;
		  clanak.appendChild(komentariZaVijest);
		  
		  var razmak3 = document.createElement("br");
		  clanak.appendChild(razmak3);
		  		  
		  document.getElementById("sadrzaj").appendChild(clanak);
		  
        }
        //content += '</table><Button onClick="'+"brisi("+idx+")"+'">Sakrij</Button>';
        //document.getElementById("vijest"+idx).innerHTML = content;
        }
		
		if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
    }
    ajax.open("GET", "restDajSveNovosti.php", true);
    ajax.send();
    }

	function dajBrojKomentara()
	{
		
		var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var obj = ajax.responseText;
				var jsonObj = JSON.parse(obj);
				for(var i=0; i<jsonObj.list.length; i++){
					var b=jsonObj.list[i]; //brojevi[i]=jsonObj.list[i].length;
					brojevi.push(b); }
				}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "restKomentari.php", true);
        ajax.send();
	}

function prikaziDetaljnije(idL)
{
	var idV=idL.substring(4, idL.length);
	var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {// Anonimna funkcija
       if (ajax.readyState == 4 && ajax.status == 200) {
		   
		   var obj = ajax.responseText;
		   var jsonObj = JSON.parse(obj);
		   var t = jsonObj.list[0].tekst;
		   var drugiDio = t.substring(50, t.length);
		   document.getElementById("opis"+idV).innerHTML+= drugiDio;
		   document.getElementById(idL).innerHTML="Show less";
		   document.getElementById(idL).onclick = function() { showLess(this.id); };
	
		}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
		
        ajax.open("GET", "restNovosti.php?id="+idV, true);
        ajax.send();
    
}

function showLess(idL)
{
	var idV=idL.substring(4, idL.length);
	var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {// Anonimna funkcija
       if (ajax.readyState == 4 && ajax.status == 200) {
		   
		   var obj = ajax.responseText;
		   var jsonObj = JSON.parse(obj);
		   var t = jsonObj.list[0].tekst;
		   var prviDio = t.substring(0, 50);
		   document.getElementById("opis"+idV).innerHTML= prviDio;
		   document.getElementById(idL).innerHTML="Detaljnije";
		   document.getElementById(idL).onclick =function() { prikaziDetaljnije(this.id); };
	
		}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
		
        ajax.open("GET", "restNovosti.php?id="+idV, true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send();
    
}

function prikaziKomentare(idV)
{
		var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var obj = ajax.responseText;
				var jsonObj = JSON.parse(obj);
							
				for (var i = 0 ; i < jsonObj.list.length ; i++)
				{
					//debugger;
					var komentar= document.createElement("div");
					komentar.id="komentar"+jsonObj.list[i].id;
					
					var razmak1 = document.createElement("br");
					komentar.appendChild(razmak1);
					var vrijeme = document.createTextNode("Vrijeme: "+jsonObj.list[i].vrijeme);
					komentar.appendChild(vrijeme);
					
					var razmak2 = document.createElement("br");
					komentar.appendChild(razmak2);
					var autor = document.createTextNode("Autor: "+jsonObj.list[i].autor);
					komentar.appendChild(autor);
					
					var razmak3 = document.createElement("br");
					komentar.appendChild(razmak3);
					var email = document.createTextNode("Email: "+jsonObj.list[i].email);
					komentar.appendChild(email);
					
					var razmak4 = document.createElement("br");
					komentar.appendChild(razmak4);
					var tekst = document.createTextNode("Komentar: "+jsonObj.list[i].tekst);
					komentar.appendChild(tekst);
					
					document.getElementById("komentariZaVijest"+idV).appendChild(komentar);
										
				}
				
				var ostaviKomentarParagraf=document.createElement("p");
				ostaviKomentarParagraf.id="ostaviKomentarParagraf"+idV;
				var pisiOstaviKomentar=document.createTextNode("Ostavite komentar: ");
				ostaviKomentarParagraf.appendChild(pisiOstaviKomentar);
				
				var r=document.createElement("br");
				ostaviKomentarParagraf.appendChild(r);
				
				var autorParagraf=document.createElement("p");
				var autorLogiraniKorisnik=document.createTextNode("Autor: "+korisnik);
				var autorAnonimniKorisnik=document.createTextNode("Autor: Anonymous");
				if (korisnik!="" && korisnik!=null)	{ ostaviKomentarParagraf.appendChild(autorLogiraniKorisnik);}
				else 	ostaviKomentarParagraf.appendChild(autorAnonimniKorisnik);
				
				var emailParagraf=document.createElement("p");
				var pisiEmail=document.createTextNode("Email: ");
				emailParagraf.appendChild(pisiEmail);
				
				var emailInput=document.createElement("input");
				emailInput.type="text";
				emailInput.id="emailInput"+idV;
				emailParagraf.appendChild(emailInput);
				ostaviKomentarParagraf.appendChild(emailParagraf);
				
				var tekstParagraf=document.createElement("p");
				var pisiKomentar=document.createTextNode("Komentar: ");
				tekstParagraf.appendChild(pisiKomentar);
				
				var komentarInput=document.createElement("input");
				komentarInput.type="text";
				komentarInput.id="komentarInput"+idV;
				tekstParagraf.appendChild(komentarInput);
				ostaviKomentarParagraf.appendChild(tekstParagraf);
				
				var submitKomentar=document.createElement("input");
				submitKomentar.type="button";
				submitKomentar.id="submitKomentar"+idV;
				submitKomentar.value="Ostavi komentar";
				submitKomentar.onclick=function() { submitKomentarFunkcija(this.id); };
				ostaviKomentarParagraf.appendChild(submitKomentar);
				document.getElementById("komentariZaVijest"+idV).appendChild(ostaviKomentarParagraf);
							
			}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "komentari.php?vijest=" + idV, true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send();
    
}

function submitKomentarFunkcija(id)
{
	var idV=id.substr(14, id.length);
	var komentar=document.getElementById("komentarInput"+idV).value;
	var email=document.getElementById("emailInput"+idV).value;
	var autor="";
	if (korisnik!="" && korisnik!=null) autor=korisnik;
	else autor="Anonymous";
	
	var data=String("vijest="+idV+"&tekst="+komentar+"&autor="+autor+"&email="+email);
	
    var poruka1="Niste unijeli komentar. ";
	var poruka2="Email nije validan. ";
	var poruka3="Email nije validan. Niste unijeli komentar. ";
	
	var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
			text=ajax.responseText;
			
			if(text==poruka1 || text==poruka2 || text==poruka3)	
			{
				window.alert(text);
			}
			else
			{
				document.getElementById("komentariZaVijest"+idV).innerHTML="";
				prikaziKomentare(idV);
			}
			
		}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("POST", "restKomentari.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send(data);
        //ajax.send("vijest="+idV+"&tekst="+komentar+"&autor="+autor+"&email="+email);

}
/*function ostaviKomentar()
{
	var komentar=document.getElementById("kom");
	var autor=document.getElementById("autor");
	var email=document.getElementById("email");
	
	var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
				}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "ostaviKomentar.html", true);
        ajax.send();

}*/

function registrujKorisnika()
{
	var ajax = new XMLHttpRequest();
	var user=document.getElementById("usernameR").value;
	var pass=document.getElementById("passwordR").value;

	data=String("username="+user+"&password="+pass);
	var valid=true;
	
	var poruka1="Prazan username ili password";
	var poruka2="Korisnik sa tim imenom postoji";
	var poruka3="Uspješno ste se registrovali. ";
	
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
				t=ajax.responseText;
				z=t.substr(0, 30);
				debugger
				//var t=JSON.parse(text);
				
				if(z!=poruka3)
				{
					valid=false;
					window.alert(t);
				}
				
				if(valid) {
					
				if(z==poruka3) 
				{
					sesija="korisnik";
					korisnik=t.substr(30, t.length);
					window.alert("Logirani ste kao: "+ t);
				}
				document.getElementById("registration").innerHTML="";
				var logout=document.createElement("input");
				logout.type="button";
				logout.value="Logout";
				logout.id="logout"+user;
				logout.onclick=function() { logoutFunkcija(this.id); };
				document.getElementById("registration").appendChild(logout);
				}
			}
	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("POST", "restKorisnici.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(data);
}

function loginKorisnik()
{
	var ajax = new XMLHttpRequest();
	var user=document.getElementById("usernameK").value;
	var pass=document.getElementById("passwordK").value;
	var valid=true;
	
	var poruka1="Prazan username ili sifra";
	var poruka2="Korisničko ime ili šifra su pogrešni";
	var data=String("username="+user+"&password="+pass);
	
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
				t=ajax.responseText;
				debugger
				//var t=JSON.parse(text);
				
				if(t==poruka1 || t==poruka2)
				{
					window.alert(t);
					valid=false;
				}
				
				if(valid) {
				korisnik = t;
				sesija="korisnik";
				window.alert("Logirani ste kao: "+korisnik);
				document.getElementById("registration").innerHTML="";
				var logout=document.createElement("input");
				logout.type="button";
				logout.value="Logout";
				logout.id="logout"+user;
				logout.onclick=function() { logoutFunkcija(this.id); };
				document.getElementById("registration").appendChild(logout);
				}
			}
	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("POST", "restKorisniciLogin.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(data);
}


function logoutFunkcija(id)
{
	//var user=id.substr(6, id.length);
	
	var ajax = new XMLHttpRequest();
	
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			   //loadRegistracija();	
				document.getElementById("sadrzaj").innerHTML="";
				sesija="";
				korisnik="";
				dajPocetnuStranicu();
			}
	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
		
		ajax.open("GET", "logout.php", true);
        ajax.send();

    
}

function loadRegistracija()
{
	var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
				if (sesija=="admin" || sesija=="korisnik")
				{
					document.getElementById("registration").innerHTML="";
					var logout=document.createElement("input");
					logout.type="button";
					logout.value="Logout";
					logout.id="logout"+korisnik;
					logout.onclick=function() { logoutFunkcija(this.id); };
					document.getElementById("registration").appendChild(logout);
					}
				else {
					text=ajax.responseText;
					document.getElementById("registration").innerHTML=text;
				}
			}
	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
		
		ajax.open("GET", "registration.html", true);
        ajax.send();
	
}

function loginAdmin()
{
	var user=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	var ajax = new XMLHttpRequest();
	var valid=true;
	var poruka1="Logovani ste kao admin: ";
    var data=String("username="+user+"&password="+pass);
	
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
				t=ajax.responseText;
				debugger
				window.alert(t);
				var z=t.substr(0, 24);
				
				if(z!=poruka1 ) { valid=false; }
				
				if(valid) {
				document.getElementById("registration").innerHTML="";
				korisnik=t.substr(24, t.length);
				sesija="admin";
				var logout=document.createElement("input");
				logout.type="button";
				logout.value="Logout";
				logout.id="logout"+user;
				logout.onclick=function() { logoutFunkcija(this.id); };
				document.getElementById("registration").appendChild(logout);
				dajNovostiAdmin();
				
				}
			}
	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("POST", "restKorisniciLogin.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(data);
}


function dajNovostiAdmin(){ 
	
    var ajax = new XMLHttpRequest();
	
    ajax.onreadystatechange = function() {
    // Anonimna funkcija
      if (ajax.readyState == 4 && ajax.status == 200){

        //console.log(jsonObj.list.length);
		var obj = ajax.responseText;
            var jsonObj = JSON.parse(obj);
			document.getElementById("sadrzaj").innerHTML="";
         
        for (var i = 0 ; i < jsonObj.list.length ; i++) {
          
          var id=jsonObj.list[i].id;
		  var clanak= document.createElement("div");
		  clanak.className = "clanak";
		  clanak.id="clanak"+id;
		  
		  var razmak0 = document.createElement("br");
		  clanak.appendChild(razmak0);
		  
		  var vrijeme=document.createTextNode("Objavljeno: "+jsonObj.list[i].vrijeme);
		  vrijeme.className = "meta";
		  clanak.appendChild(vrijeme);
		  
		  var autor= document.createElement("input");
		  autor.type="text";
		  autor.className = "meta";
		  autor.id="autor" + id;
		  autor.value =jsonObj.list[i].autor;
		  clanak.appendChild(autor);
		  
		  var naslov = document.createElement("input");
		  naslov.type="text";
		  naslov.id="naslov" + id;
		  naslov.value = jsonObj.list[i].naslov;
		  clanak.appendChild(naslov);
		  
		  var razmak4 = document.createElement("p");
		  clanak.appendChild(razmak4);
		  
		 // input type='hidden' name='imgurl' id='imgurl' value='".$img_url."';
		  var s= new Image();
		  s.src = jsonObj.list[i].slika;
		  var slika= document.createElement("IMG");
		  slika.setAttribute("id", "slikaPreview" + id);
		  slika.setAttribute("src", s.src);
          slika.setAttribute("height", "40%");
          slika.setAttribute("width", "40%");
          slika.setAttribute("alt", "Loading...");
		  clanak.appendChild(slika);
		  
		  var upload=document.createElement("input");
		  upload.type="file";
		  //upload.value="File upload";
		  upload.id="upload"+id;
		  upload.multipart='multipart';
		  clanak.appendChild(upload);
		  
		  var hidden = document.createElement("input");
		  hidden.type="hidden";
		  hidden.value=s.src;
		  hidden.name="imgurl"; 
		  hidden.id="imgurl"+id;
		  clanak.appendChild(hidden); 
			
		  var razmak = document.createElement("p");
		  clanak.appendChild(razmak);
			
		  var pOpis= document.createElement("textarea");
		  pOpis.className = "opis";
		  pOpis.id="tekst"+id;
		  pOpis.name="tekst";
		  pOpis.setAttribute("cols", "50");
		  pOpis.setAttribute("rows", "7");
		  var opis = jsonObj.list[i].tekst;
		  pOpis.value=opis;
		  clanak.appendChild(pOpis);
		  
		  var razmak1 = document.createElement("br");
		  clanak.appendChild(razmak1);
		  
		   var brojK=0;
		  for (var j=0; j<brojevi.length; j++)
		  if(brojevi[j].vijest==id)  brojK++;
	  
		  var linkKomentari = document.createElement("a");
          var linkText = document.createTextNode("Prikazi "+ brojK +" komentara za vijest " + jsonObj.list[i].id);
          linkKomentari.appendChild(linkText);
          //linkKomentari.setAttribute("id", jsonObj.list[i].id);
          linkKomentari.href = "#!";
		  linkKomentari.id =id;
		  linkKomentari.onclick =function() { prikaziKomentareAdmin(this.id); };
          clanak.appendChild(linkKomentari);
		  
		  var razmak2 = document.createElement("br");
		  clanak.appendChild(razmak2);
		  	  
		  var komentariZaVijest= document.createElement("div");
		  komentariZaVijest.id= "komentariZaVijest"+id;
		  clanak.appendChild(komentariZaVijest);
		  
		  var razmak3 = document.createElement("br");
		  clanak.appendChild(razmak3);
		  
		  var editVijest=document.createElement("input");
		  editVijest.type="button";
		  editVijest.value="Promijeni vijest";
		  editVijest.id="promijeniVijest"+id;
		  editVijest.onclick=function() { promijeniVijest(this.id); };
		  clanak.appendChild(editVijest);
		  
		   var razmak5 = document.createElement("p");
		  clanak.appendChild(razmak5);
		  
		  var izbrisiVijest=document.createElement("input");
		  izbrisiVijest.type="button";
		  izbrisiVijest.value="Izbrisi vijest";
		  izbrisiVijest.id="izbrisiVijest"+id;
		  izbrisiVijest.onclick=function() { izbrisiVijestFunkcija(this.id); };
		  clanak.appendChild(izbrisiVijest);
		  
		  var izvjestaj = document.createElement("p");
		  izvjestaj.id="izvjestaj"+id;
		  clanak.appendChild(izvjestaj);
		  
		  document.getElementById("sadrzaj").appendChild(clanak);
		  
        }
		
		var dodajVijestParagraf = document.createElement("p");
		dodajVijestParagraf.id="dodajVijestParagraf";
		var dodajVijestLink=document.createElement("a");
		var dodajVijestLinkTekst=document.createTextNode("Dodaj vijest");
		dodajVijestLink.appendChild(dodajVijestLinkTekst);
		dodajVijestLink.href="#!";
		dodajVijestLink.id="DodajVijestLink";
		dodajVijestLink.onclick=function() { dodajVijestLinkFunkcija(this.id); };
		dodajVijestParagraf.appendChild(dodajVijestLink);
		document.getElementById("sadrzaj").appendChild(dodajVijestParagraf);
		
        var editujKorisnikeParagraf = document.createElement("p");
		editujKorisnikeParagraf.id="editujKorisnikeParagraf";
		dobijKorisnike();
		//editujKorisnikeParagraf=editujKorisnikeFunkcija(jsonObj);
		/*var editujKorisnikeLink=document.createElement("a");
		var editujKorisnikeLinkTekst=document.createTextNode("Edituj korisnike");
		editujKorisnikeLink.appendChild(editujKorisnikeLinkTekst);
		editujKorisnikeLink.href="#!";
		editujKorisnikeLink.id="editujKorisnikeLink";
		editujKorisnikeLink.onclick=function() { editujKorisnikeLinkFunkcija(this.id); };
		editujKorisnikeParagraf.appendChild(editujKorisnikeLink);*/
		document.getElementById("sadrzaj").appendChild(editujKorisnikeParagraf);
        }
		
		if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
    }
    ajax.open("GET", "restDajSveNovosti.php", true);
    ajax.send();
    }


function promijeniVijest(id)
{
	 var ajax = new XMLHttpRequest();
		var idV = id.substr(15, id.length);
		var autor= document.getElementById("autor"+idV).value;
		var tekst=document.getElementById("tekst"+idV).value;
	    var naslov=document.getElementById("naslov"+idV).value;
		var imgurl=document.getElementById("imgurl"+idV).value;
		var slika=document.getElementById("upload"+idV).value;
		var slikasrc="";
		
		if(slika) slikasrc = slika.replace("C:\\fakepath\\", "");
		else 	slikasrc=imgurl;
		
		var data = String("id="+idV+"&tekst="+tekst+"&autor="+autor+"&slika="+slikasrc + "&naslov=" + naslov);
		
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

               var obj = ajax.responseText;
				var jsonObj = JSON.parse(obj);
				document.getElementById("izvjestaj"+idV).innerHTML="Uspjesno ste izmijenili vijest";
				
			}	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("PUT", "restNovosti.php", true);
        ajax.send(data);
	
}

function izbrisiVijestFunkcija(id)
{
	 var ajax = new XMLHttpRequest();
		var idV = id.substr(13, id.length);
			
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

				var tekst=ajax.responseText;
				var tekstPar = document.createElement("p");
				var hd = document.createTextNode(tekst);
				tekstPar.appendChild(hd);
				document.getElementById("sadrzaj").appendChild(tekstPar);
				
			}	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("DELETE", "restNovosti.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("id=" + idV);
	
}

function dodajVijestLinkFunkcija(id)
{
		var autorParagraf= document.createElement("p");
		var piseAutor = document.createTextNode("Autor: ");
		var autor=document.createElement("input");
		autor.type="text";
		autor.name="autor"; 
		autor.id="autor";
		autorParagraf.appendChild(piseAutor);
		autorParagraf.appendChild(autor);
		document.getElementById("dodajVijestParagraf").appendChild(autorParagraf);
        var greskaAutorParagraf = document.createElement("p");
		greskaAutorParagraf.id="greskaAutorParagraf";		
		document.getElementById("dodajVijestParagraf").appendChild(greskaAutorParagraf); 
				
		var naslovParagraf= document.createElement("p");
		var piseNaslov = document.createTextNode("Naslov: ");
		var naslov=document.createElement("input");
		naslov.type="text";
		naslov.name="naslov"; 
		naslov.id="naslov";
		naslovParagraf.appendChild(piseNaslov);
		naslovParagraf.appendChild(naslov);
		document.getElementById("dodajVijestParagraf").appendChild(naslovParagraf); 
		var greskaNaslovParagraf = document.createElement("p");
		greskaNaslovParagraf.id="greskaNaslovParagraf";		
		document.getElementById("dodajVijestParagraf").appendChild(greskaNaslovParagraf); 
		
		var razmak1=document.createElement("p");
		document.getElementById("dodajVijestParagraf").appendChild(razmak1); 
		
		var piseSlika=document.createTextNode("Slika: ");
		var slika=document.createElement("input");
		slika.type="file";
		slika.name="slika";
		slika.width="40%";
		slika.height="40%";
		slika.id="slika";
		document.getElementById("dodajVijestParagraf").appendChild(piseSlika);
		document.getElementById("dodajVijestParagraf").appendChild(slika);
		var greskaSlikaParagraf = document.createElement("p");
		greskaSlikaParagraf.id="greskaSlikaParagraf";		
		document.getElementById("dodajVijestParagraf").appendChild(greskaSlikaParagraf); 
		
		var tekstParagraf= document.createElement("p");
		var pisiTekst = document.createTextNode("Tekst: ");
		var tekst=document.createElement("textarea");
		tekst.name="tekst"; 
		tekst.id="tekst";
		tekst.setAttribute("cols", "50");
		tekst.setAttribute("rows", "7");
		tekstParagraf.appendChild(pisiTekst);
		tekstParagraf.appendChild(tekst);
		document.getElementById("dodajVijestParagraf").appendChild(tekstParagraf); 
		var greskaTekstParagraf = document.createElement("p");
		greskaTekstParagraf.id="greskaTekstParagraf";		
		document.getElementById("dodajVijestParagraf").appendChild(greskaTekstParagraf); 
		
		 var dodajVijest=document.createElement("input");
		 dodajVijest.type="button";
		 dodajVijest.value="Dodaj vijest";
		 dodajVijest.id="dodajVijest";
		 dodajVijest.onclick=function() { dodajVijestFunkcija(this.id); };
		 document.getElementById("dodajVijestParagraf").appendChild(dodajVijest);
	
}

function dodajVijestFunkcija(id)
{
	var autor=document.getElementById("autor").value;
	var naslov=document.getElementById("naslov").value;
	var tekst=document.getElementById("tekst").value;
	var slika=document.getElementById("slika").value;
	var slikasrc="";
	if (slika) var slikasrc=slika.replace("C:\\fakepath\\", "");
	
	var valid=daLiJeValidno(autor, naslov, tekst, slikasrc);
	
	if (valid) {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange=function()
	{
		 if (ajax.readyState == 4 && ajax.status == 200) {

              dajNovostiAdmin();	
		 }	
				
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
    }	    
		
		var data = String("naslov=" + naslov + "&tekst="+tekst+"&autor="+autor+"&slika="+slikasrc);
		
        ajax.open("POST", "restNovosti.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(data); 
		
	} 
}

function daLiJeValidno(autor, naslov, tekst, slika)
{
	var autorP=sanitizeString(autor);
	var naslovP=sanitizeString(naslov);
	var tekstP =sanitizeString(tekst);
	var slikaP=sanitizeString(slika);
	var valid =true;
	
	if (autorP==null || autorP=="") { document.getElementById("greskaAutorParagraf").innerHTML="Autor je prazan"; valid=false; }
	if (tekstP==null || tekstP=="") { document.getElementById("greskaTekstParagraf").innerHTML="Tekst je prazan"; valid=false; }
	if (naslovP==null || naslovP=="")  {document.getElementById("greskaNaslovParagraf").innerHTML="Naslov je prazan"; valid=false; }
	if (slikaP==null || slikaP=="")  {document.getElementById("greskaSlikaParagraf").innerHTML="Slika je prazna"; valid=false; }
	
	return valid;
}

function prikaziKomentareAdmin(id){
	
	var idV=id;
	var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var obj = ajax.responseText;
				var jsonObj = JSON.parse(obj);
							
				for (var i = 0 ; i < jsonObj.list.length ; i++)
				{
					//debugger;
					var komentar= document.createElement("div");
					komentar.id="komentar"+jsonObj.list[i].id;
					
					var razmak1 = document.createElement("br");
					komentar.appendChild(razmak1);
					var vrijeme = document.createTextNode("Vrijeme: "+jsonObj.list[i].vrijeme);
					komentar.appendChild(vrijeme);
					
					var razmak2 = document.createElement("br");
					komentar.appendChild(razmak2);
					var autor = document.createTextNode("Autor: "+jsonObj.list[i].autor);
					komentar.appendChild(autor);
					
					var razmak3 = document.createElement("br");
					komentar.appendChild(razmak3);
					var email = document.createTextNode("Email: "+jsonObj.list[i].email);
					komentar.appendChild(email);
					
					var razmak4 = document.createElement("br");
					komentar.appendChild(razmak4);
					var tekst = document.createTextNode("Komentar: "+jsonObj.list[i].tekst);
					komentar.appendChild(tekst);
					
					 var izbrisiKomentar=document.createElement("input");
					 izbrisiKomentar.type="button";
					 izbrisiKomentar.value="Izbrisi komentar";
					 izbrisiKomentar.id=komentar.id;
					 izbrisiKomentar.onclick=function() { izbrisiKomentarFunkcija(this.id, idV); };
					 komentar.appendChild(izbrisiKomentar);
					
					document.getElementById("komentariZaVijest"+idV).appendChild(komentar);
					
				}
				
			}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "restKomentari.php?vijest=" + idV, true);
        ajax.send();
}

function izbrisiKomentarFunkcija(idKomentara, idV){
	 var ajax = new XMLHttpRequest();
     var idK = idKomentara.substr(8, idKomentara.length);
			
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

				document.getElementById(idKomentara).innerHTML="";
				var tekst=ajax.responseText;
				var tekstPar = document.createElement("p");
				var hd = document.createTextNode(tekst);
				tekstPar.appendChild(hd);
				document.getElementById("sadrzaj").appendChild(tekstPar);
				
			}	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("DELETE", "restKomentari.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("id=" + idK);
}

function dobijKorisnike()
{
	var ajax = new XMLHttpRequest();
			
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

			var obj = ajax.responseText;
			var jsonObj = JSON.parse(obj);
			var editKorisnici=document.createElement("p");
			var natpisP=document.createElement("p");
			var natpis=document.createTextNode("Svi koji imaju pristup admin panelu: ");
			natpisP.appendChild(natpis);
			editKorisnici.appendChild(natpisP);
			document.getElementById("editujKorisnikeParagraf").appendChild(editKorisnici);
					
		for (var i = 0 ; i < jsonObj.list.length ; i++)
		{
			var idKorisnika=jsonObj.list[i].username;
			var korisnikParagraf=document.createElement("div");
			korisnikParagraf.id="korisnik"+idKorisnika;
			
			var pisiUsernameP=document.createElement("p");
			var pisiUsername= document.createTextNode("Username: "+idKorisnika);
			pisiUsernameP.appendChild(pisiUsername);
			korisnikParagraf.appendChild(pisiUsernameP);
			
			var pisiPassword= document.createTextNode("Password i email: ");
			korisnikParagraf.appendChild(pisiPassword);
			var korisnickiPasswordInput=document.createElement("input");
			korisnickiPasswordInput.id="korisnickiPasswordInput"+idKorisnika;
			korisnickiPasswordInput.type="text";
			korisnickiPasswordInput.value=jsonObj.list[i].password;
			korisnikParagraf.appendChild(korisnickiPasswordInput);
			
			var korisnickiEmailInput=document.createElement("input");
			korisnickiEmailInput.id="korisnickiEmailInput"+idKorisnika;
			korisnickiEmailInput.type="text";
			korisnickiEmailInput.value=jsonObj.list[i].email;
			korisnikParagraf.appendChild(korisnickiEmailInput);	
			
			var dugmeIzmijeniKorisnika=document.createElement("input");
			dugmeIzmijeniKorisnika.id="dugmeIzmijeniKorisnika"+idKorisnika;
			dugmeIzmijeniKorisnika.type="button";
			dugmeIzmijeniKorisnika.value="Promijeni";
			dugmeIzmijeniKorisnika.onclick = function() { izmijeniKorisnikaFunkcija(this.id); };
			korisnikParagraf.appendChild(dugmeIzmijeniKorisnika);

			var dugmeIzbrisiKorisnika=document.createElement("input");
			dugmeIzbrisiKorisnika.id="dugmeIzbrisiKorisnika"+idKorisnika;
			dugmeIzbrisiKorisnika.type="button";
			dugmeIzbrisiKorisnika.value="Izbrisi";
			dugmeIzbrisiKorisnika.onclick = function() { izbrisiKorisnikaFunkcija(this.id); };
			korisnikParagraf.appendChild(dugmeIzbrisiKorisnika);
			
			document.getElementById("editujKorisnikeParagraf").appendChild(korisnikParagraf);
	}
					
	var korisnikParagrafDodaj=document.createElement("div");
		korisnikParagrafDodaj.id="dodajKorisnika";
		
		var pisiUsernameP=document.createElement("p");
		var pisiUsername= document.createTextNode("Username, Password, Email: ");
		pisiUsernameP.appendChild(pisiUsername);
		korisnikParagraf.appendChild(pisiUsernameP);
		
		var korisnickiUsernameInputDodaj=document.createElement("input");
		korisnickiUsernameInputDodaj.id="korisnickiUsernameInputDodaj";
		korisnickiUsernameInputDodaj.type="text";
		korisnikParagrafDodaj.appendChild(korisnickiUsernameInputDodaj);
		
		var korisnickiPasswordInputDodaj=document.createElement("input");
		korisnickiPasswordInputDodaj.id="korisnickiPasswordInputDodaj";
		korisnickiPasswordInputDodaj.type="text";
		korisnikParagrafDodaj.appendChild(korisnickiPasswordInputDodaj);
		
		var korisnickiEmailInputDodaj=document.createElement("input");
		korisnickiEmailInputDodaj.id="korisnickiEmailInputDodaj";
		korisnickiEmailInputDodaj.type="text";
		korisnikParagrafDodaj.appendChild(korisnickiEmailInputDodaj);	
	
	var dugmeDodajKorisnika=document.createElement("input");
		dugmeDodajKorisnika.id="dugmeDodajKorisnika";
		dugmeDodajKorisnika.type="button";
		dugmeDodajKorisnika.value="Dodaj admina";
		dugmeDodajKorisnika.onclick = function() { dodajKorisnikaFunkcija(this.id); };
		korisnikParagrafDodaj.appendChild(dugmeDodajKorisnika);	
		document.getElementById("editujKorisnikeParagraf").appendChild(korisnikParagrafDodaj);
				}	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "restKorisnici.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send();
}


function izmijeniKorisnikaFunkcija(id)
{
	var idKorisnika=id.substr(22, id.length);
	var password=document.getElementById("korisnickiPasswordInput"+idKorisnika).value;
	var email=document.getElementById("korisnickiEmailInput"+idKorisnika).value;
	var data=String("username="+idKorisnika+"&password="+password+"&email="+email);
	var poruka1="Uspjesno ste editovali admina";
	
	var ajax = new XMLHttpRequest();
			
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
				
				text=ajax.responseText;
				
			}
				if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
				}
        ajax.open("PUT", "restKorisnici.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send(data);

}

function izbrisiKorisnikaFunkcija(id)
{
	var idKorisnika=id.substr(21, id.length);
	var data=String("id="+idKorisnika);
	var poruka1="Niste logovani kao admin";
	var ajax = new XMLHttpRequest();
	
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
				
				text=ajax.responseText;
				if (text!=poruka1)
				{
					document.getElementById("korisnik"+idKorisnika).innerHTML="";
				}
			}
				if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
				}
        ajax.open("DELETE", "restKorisnici.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(data);
	
}

function dodajKorisnikaFunkcija(id)
{
	var username= document.getElementById("korisnickiUsernameInputDodaj").value;
	var password= document.getElementById("korisnickiPasswordInputDodaj").value;
	var email= document.getElementById("korisnickiEmailInputDodaj").value;
	var data=String("username="+username+"&password="+password+"&email="+email);
	var poruka1="Uspješno ste dodali admina";
	
	var ajax = new XMLHttpRequest();
			
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
				
				text=ajax.responseText;
				if(text==poruka1) 
				{
					document.getElementById("editujKorisnikeParagraf").innerHTML="";
					dobijKorisnike();					
				}
				
			}
				if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
				}
        ajax.open("POST", "restKorisnici.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send(data);
	
}


function zaboravljenaSifraKorisnik()
{
	
	
}