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

function showMenu() {
    document.getElementById("padajuciMeni").style.display = "block";
}
function hideMenu() {
    document.getElementById("padajuciMeni").style.display = "none";
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
				debugger
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
					
					var tab=document.createElement("table");
					var th=document.createElement("thead");
					
					tab.appendChild(th);
					
					var tabela=document.createElement("tbody");
					tab.appendChild(tabela);
					
					var red12=document.createElement("tr");
					
					var td1=document.createElement("td");
					var ime1Node=document.createTextNode("Ime: ");
					td1.appendChild(ime1Node);
					red12.appendChild(td1);
					
					var td2=document.createElement("td");
					var ime2Node=document.createTextNode(firstName);
					td2.appendChild(ime2Node);
					red12.appendChild(td2);
					
					tabela.appendChild(red12);
					
					var red34=document.createElement("tr");
					
					var td3=document.createElement("td");
					var prezime1Node=document.createTextNode("Prezime: ");
					td3.appendChild(prezime1Node);
					red34.appendChild(td3);
					
					var td4=document.createElement("td");
					var prezime2Node=document.createTextNode(lastName);
					td4.appendChild(prezime2Node);
					red34.appendChild(td4);
					
					tabela.appendChild(red34);
					
					var red56=document.createElement("tr");
					
					var td5=document.createElement("td");
					var mjesto1Node=document.createTextNode("Mjesto: ");
					td5.appendChild(mjesto1Node);
					red56.appendChild(td5);
					
					var td6=document.createElement("td");
					var mjesto2Node=document.createTextNode(mjesto);
					td6.appendChild(mjesto2Node);
					red56.appendChild(td6);
					
					tabela.appendChild(red56);
					
					
					var red78=document.createElement("tr");
					
					var td7=document.createElement("td");
					var opcina1Node=document.createTextNode("Opcina: ");
					td7.appendChild(opcina1Node);
					red78.appendChild(td7);
					
					var td8=document.createElement("td");
					var opcina2Node=document.createTextNode(opcina);
					td8.appendChild(opcina2Node);
					red78.appendChild(td8);
					
					tabela.appendChild(red78);
					
					var red910=document.createElement("tr");
					
					var td9=document.createElement("td");
					var datum1Node=document.createTextNode("Datum: ");
					td9.appendChild(datum1Node);
					red910.appendChild(td9);
					
					var td10=document.createElement("td");
					var datum2Node=document.createTextNode(datum);
					td10.appendChild(datum2Node);
					red910.appendChild(td10);
					
					tabela.appendChild(red910);
					
					var red1112=document.createElement("tr");
					
					var td11=document.createElement("td");
					var email1Node=document.createTextNode("Email: ");
					td11.appendChild(email1Node);
					red1112.appendChild(td11);
					
					var td12=document.createElement("td");
					var email2Node=document.createTextNode(email);
					td12.appendChild(email2Node);
					red1112.appendChild(td2);
					
					tabela.appendChild(red1112);
					
					
					var red1314=document.createElement("tr");
					
					var td13=document.createElement("td");
					var email21Node=document.createTextNode("Potvrdite email: ");
					td13.appendChild(email21Node);
					red1314.appendChild(td13);
					
					var td14=document.createElement("td");
					var email22Node=document.createTextNode(email2);
					td14.appendChild(email22Node);
					red1314.appendChild(td14);
					
					tabela.appendChild(red1314);
					
					var red1516=document.createElement("tr");
					
					var td15=document.createElement("td");
					var tel1Node=document.createTextNode("Telefon: ");
					td15.appendChild(tel1Node);
					red1516.appendChild(td15);
					
					var td16=document.createElement("td");
					var tel2Node=document.createTextNode(tel);
					td16.appendChild(tel2Node);
					red1516.appendChild(td16);
					
					tabela.appendChild(red1516);
					
					var red1718=document.createElement("tr");
					
					var td17=document.createElement("td");
					var poruka1Node=document.createTextNode("Poruka: ");
					td17.appendChild(poruka1Node);
					red1718.appendChild(td17);
					
					var td18=document.createElement("td");
					var poruka2Node=document.createTextNode(message);
					td18.appendChild(poruka2Node);
					red1718.appendChild(td18);
					
					tabela.appendChild(red1718);
					
					document.getElementById("sadrzaj").appendChild(tab);
					var el=document.createElement("p");
					var elt=document.createTextNode(firstName);
					el.appendChild(elt);
					document.getElementById("sadrzaj").appendChild(el);
					
				}
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", url+"?"+data, true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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

function dajNovosti(){
    var ajax = new XMLHttpRequest();
	 loadRegistracija();
	
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
		  
		  var broj=izbrojKomentare(id);
		  var linkKomentari = document.createElement("a");
          var linkText = document.createTextNode("Prikazi "+ broj +" komentara za vijest " + jsonObj.list[i].id);
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

	function izbrojKomentare(idV)
	{
		var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var obj = ajax.responseText;
				var jsonObj = JSON.parse(obj);
				var broj = jsonObj.list.length;
				return broj;
				}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "komentari.php?vijest=" + idV, true);
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
				
			}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "komentari.php?vijest=" + idV, true);
        ajax.send();
    
}

function registrujKorisnika()
{
	var ajax = new XMLHttpRequest();
	var user=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	var valid=true;
	
	var greska1="Prazan username ili password";
	var greska2="Prazan email";
	var greska3="Email nije validan";
	var greska4="Korisnik sa tim imenom postoji";
	var greska5="Uspješno ste dodali admina";
	var greska6="Uspješna registracija";
	
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
				t=ajax.responseText;
				debugger
				//var t=JSON.parse(text);
				window.alert(t);
				if(t==greska1 || t==greska2 ||t==greska3 ||t==greska4)
				{
					valid=false;
				}
				
				if(valid) {
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
        ajax.open("POST", "registrujKorisnika.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("username="+user+"&password="+pass);
}

function loginKorisnik()
{
	var ajax = new XMLHttpRequest();
	var user=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	var valid=true;
	
	var greska1="Prazan username ili password";
	var greska2="Korisničko ime ili šifra su pogrešni";
	
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
				t=ajax.responseText;
				debugger
				//var t=JSON.parse(text);
				
				if(t==greska1 || t==greska2)
				{
					window.alert(t);
					valid=false;
				}
				
				if(valid) {
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
        ajax.open("POST", "login.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("username="+user+"&password="+pass);
}


function logoutFunkcija(id)
{
	var user=id.substr(6, id.length);
	
	var ajax = new XMLHttpRequest();
	
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			   loadRegistracija();			
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
			
				text=ajax.responseText;
				document.getElementById("registration").innerHTML=text;
				
			}
	
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
		
		ajax.open("GET", "registration.html", true);
        ajax.send();
	
}

function loginAdmin()
{
	var ajax = new XMLHttpRequest();
	var user=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	var valid=true;
	
	var greska1="Prazan username ili password";
	var greska2="Nemate administratorske privilegije";
	var greska3="Pogresan username ili sifra";
	var greska4="Korisničko ime ili šifra su pogrešni"
	
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
				t=ajax.responseText;
				debugger
				//var t=JSON.parse(text);
				
				if(t==greska1 || t==greska2 || t==greska3 || t==greska4)
				{
					window.alert(t);
					valid=false;
				}
				
				if(valid) {
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
        ajax.open("POST", "login.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        ajax.send("username="+user+"&password="+pass);
}


/*function dajNovostiAdmin(){
    var ajax = new XMLHttpRequest();
	
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
		  
		  var pVrijeme=document.createElement("input");
		  pVrijeme.className = "meta";
		  pVrijeme.type="text";
		  var vrijeme = "Objavljeno: "+jsonObj.list[i].vrijeme;
		  pVrijeme.value=vrijeme;
		  clanak.appendChild(pVrijeme);
		  
		  var pAutor= document.createElement("input");
		  pAutor.type="text";
		  pAutor.className = "meta";
		  var autor = "Autor: "+jsonObj.list[i].autor;
		  pAutor.value=autor;
		  pAutor.appendChild(autor);
		  clanak.appendChild(pAutor);
		  
		  var hNaslov = document.createElement("input");
		  hNaslov.type="text";
		  var naslov = jsonObj.list[i].naslov;
		  hNaslov.value=naslov;
		  clanak.appendChild(hNaslov);
		  
		  input type='hidden' name='imgurl' id='imgurl' value='".$img_url."'
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
		  
		  var broj=izbrojKomentare(id);
		  var linkKomentari = document.createElement("a");
          var linkText = document.createTextNode("Prikazi "+ broj +" komentara za vijest " + jsonObj.list[i].id);
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
		  
		  var editVijest=document.createElement("input");
				editVijest.type="button";
				editVijest.value="Promijeni vijest";
				editVijest.id="prmijeniVijest"+id;
				editVijest.onclick=function() { promijeniVijest(this.id); };
				clanak.appendChild(editVijest);
		  		  
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


function promijeniVijest(id)
{
	 var ajax = new XMLHttpRequest();
		var id = id;
		var autor= document.getElementById("autor").value;
		var tekst=document.getElementById("tekst").value;
	    var naslov=document.getElementById("naslov").value;
		var imgurl=document.getElementById("imgurl").value;
		var slika=document.getElementById("slika").value;
		var slikasrc="";
		
		if(slika) slikasrc = slika.replace("C:\\fakepath\\", "");
		else 	slikasrc=imgurl;
		
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
				document.getElementById("error").innerHTML = text;
				
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", "vijestiHelper.php?id=" + id +"&autor=" + autor + "&naslov=" + naslov + "&tekst=" + tekst + "&slika=" + slikasrc, true);
        ajax.send("");
	
}*/





