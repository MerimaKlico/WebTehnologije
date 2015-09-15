// JavaScript source code

function validiraj() {

    var x = 0;
    var greskaIme = document.getElementById('greskaIme');
    greskaIme.innerHTML = "";

    var a = document.forms["contactform"]["ime"].value;
    if (a == null || a == "") {
        greskaIme.innerHTML += "Morate unijeti ime!";
        //return false;
        x = 1;
    }

    var greskaPrezime = document.getElementById('greskaPrezime');
    greskaPrezime.innerHTML = "";

    var b = document.forms["contactform"]["prezime"].value;
    if (b == null || b == "") {
        greskaPrezime.innerHTML += "Morate unijeti prezime!";
        //return false;
        x = 1;
    }

    var emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var greskaEmail = document.getElementById('greskaEmail');
    greskaEmail.innerHTML = "";
    var d = document.forms["contactform"]["email"].value;
    if (d != null && d != "") {
        if (!emailRegEx.test(d)) {
            greskaEmail.innerHTML += "E-mail koji ste unijeli nije validan";
            //return false;
            x = 1;
        }
    }
	
	var greskaPotvrdaEmail = document.getElementById('greskaPotvrdaEmail');
    greskaPotvrdaEmail.innerHTML = "";
    var potvrda = document.forms["contactform"]["potvrdaEmail"].value;
    if (d != null && d != "") {
        if (potvrda=="" || potvrda==null) {
            greskaPotvrdaEmail.innerHTML += "Morate potvrditi Vašu e-mail adresu";
            x = 1;
        }
		
		else 
		{
			if (potvrda!=d)
			greskaPotvrdaEmail.innerHTML += "Nema poklapanja sa prethodno unesenom e-mail adresom";
            x = 1;
		}
    }
	
	if (d==nul || d=="")
	{
		if (potvrda!="" && potvrda!=null)
			greskaPotvrdaEmail.innerHTML += "Morate potvrditi Vašu e-mail adresu";
            x = 1;
	}

  /*  var greskaTelefon = document.getElementById('greskaTelefon');
    greskaTelefon.innerHTML = "";

    var bt = document.forms["contactform"]["tel"].value;
    if (bt == null || bt == "") {
        greskaTelefon.innerHTML += "Broj telefona koji ste unijeli nije validan";
        //return false;
        x = 1;
    }*/

    var greskaDatumRodjenja = document.getElementById('greskaDatumRodjenja');
    greskaDatumRodjenja.innerHTML = "";
    var date = new Date();
    var dr = document.forms["contactform"]["datum"].valueAsDate;
    if (dr > date) {
        greskaDatumRodjenja.innerHTML += "Datum rođenja koji ste unijeli nije validan";
        //return false;
        x = 1;
    }

    var greskaPoruka = document.getElementById('greskaPoruka');
    greskaPoruka.innerHTML = "";
    var c = document.forms["contactform"]["poruka"].value;
    if (trimfield(c) == '') {
        greskaPoruka.innerHTML += "Niste unijeli poruku";
        //return false;
        x = 1;
    }
	
	validirajMjestoOpcina();
    
}

function validirajMjestoOpcina()
{
	var x=0;
	var greskaOpcinaMjesto = document.getElementById('greskaOpcinaMjesto');
    greskaOpcinaMjesto.innerHTML = "";
	var mjesto= document.getElementById('mjesto');
	var opcina= document.getElementById('opcina');
    checkMjestoOpcina();
    if (document.getElementById("greskaOpcinaMjesto").innerHTML != "") x = 1;
	document.getElementById('mjesto').innerHTML=mjesto;
	document.getElementById('opcina').innerHTML=opcina;
    if (x == 1) return false;
	return true;

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

/*function prikaziKontakt()
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
    
}*/

function prikaziKontakt()
{
    
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
        ajax.open("GET", "Kontakt.html", true);
        ajax.send();
    
}

function prikaziProizvodi()
{
    
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                
				var sadrzaj = ajax.responseText;
				//var sadrzaj = JSON.parse(sadrzajJSON);
				
				for (var i=0; i<sadrzaj.length; i++)
				{
					var red = document.createElement("tr");
					var celija1 = document.createElement("td");
					var text1 = document.createTextNode(sadrzaj[i].naziv);
					celija1.appendChild(text1);
					red.appendChild(celija1);
					
					var celija2 = document.createElement("td");
					var text2 = document.createTextNode(sadrzaj[i].slika);
					celija2.appendChild(text2);
					red.appendChild(celija2);
					
					var celija3 = document.createElement("td");
					var text3 = document.createTextNode(sadrzaj[i].opis);
					celija3.appendChild(text3);
					red.appendChild(celija3);
					
					var celija4 = document.createElement("td");
					var text4 = document.createTextNode(sadrzaj[i].cijena);
					celija4.appendChild(text4);
					red.appendChild(celija4);			
					
					
					};

					document.getElementById("tabelaProizvodaBody").appendChild(red);
				}
               
				
			document.getElementById("column_adverts").innerHTML=""; 
		
			
            if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        
		
        ajax.open("GET","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=15520",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send();
   }

   function ubaciProizvod()
   {
	   var nazivString = document.getElementById("naziv").value;
	   var cijenaString = document.getElementById("cijena").value;
	   var opisString = document.getElementById("opis").value;
	   var slika = document.getElementById("slika").files[0];
	   
	   var proizvod = {
		   id: 1,
				naziv: nazivString,
				cijena: cijenaString,
				opis: opisString,
				//slika: slika
			};
			
			var data = {
				proizvod: proizvod,
				akcija: "dodavanje",
				brindexa: "15520"
			};
		
	  var JSONproizvod = JSON.stringify(proizvod);
	 //  var JSONproizvod = "naziv=" + nazivString + "&cijena=" + cijenaString + "&opis=" + opisString;
	   
	  /* var red = document.createElement("tr");
			var celija = document.createElement("td");
			
			//var n = document.createElement("h5");
		    var text1 = document.createTextNode(nazivString);
			celija.appendChild(text1);
			red.appendChild(celija);
			
			
              */
			
	   
	    var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
			
			var red = document.createElement("tr");
			var celija1 = document.createElement("td");
		    var text1 = document.createTextNode(nazivString);
			celija1.appendChild(text1);
			red.appendChild(celija1);
			
			var celija2 = document.createElement("td");
		    var text2 = document.createTextNode(slika);
			celija2.appendChild(text2);
			red.appendChild(celija2);
			
			var celija3 = document.createElement("td");
		    var text3 = document.createTextNode(opisString);
			celija3.appendChild(text3);
			red.appendChild(celija3);
			
			var celija4 = document.createElement("td");
		    var text4 = document.createTextNode(cijenaString);
			celija4.appendChild(text4);
			red.appendChild(celija4);			
			
            document.getElementById("tabelaProizvodaBody").appendChild(red);
			
		        if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
				
		ajax.open("POST","http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=15520",true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send("&akcija="+"dodavanje"+"&proizvod="+JSONproizvod);
	   
   }
   
  function izbrisiProizvod() 
  {
	  
  }
  
  function izmijeniProizvod() 
  {
	  
  }
   
   
  /* (function preuzmiProizvode()
   {
			
	   //var JSONproizvod = JSON.stringify(data);
	   //var JSONproizvod = "naziv=" + proizvod.nazivString + "&cijena="
	   
	  /* var red = document.createElement("tr");
			var celija = document.createElement("td");
			
			//var n = document.createElement("h5");
		    var text1 = document.createTextNode(nazivString);
			celija.appendChild(text1);
			red.appendChild(celija);
			
			
             document.getElementById("tabelaProizvodaBody").appendChild(red); * /
			
	   
	    var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function (data) {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {
			
			
			/*var red = document.createElement("tr");
			var celija = document.createElement("td");
			
			//var n = document.createElement("h5");
		    var text1 = document.createTextNode(nazivString);
			celija.appendChild(text1);
			red.appendChild(celija);
			
			
             document.getElementById("tabelaProizvoda").appendChild(red);
			
			
		        if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");* /
			alert(JSON.parse(ajax.responseText));
			}
        }
		
		var brindexa=15520;
		
		//ajax.setRequestHeader('Content-Type', 'application/json'); 
        //ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=" + brindexa + "&akcija=cdy", true);
		ajax.open("GET", "http://zamger.etf.unsa.ba/wt/proizvodi.php?brindexa=" + brindexa, true);
		//ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		
        ajax.send();
	   
   })(); */


function prikaziKomentare(idV)
{
    
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
            document.getElementById("komentariZaVijest"+idV).innerHTML = text;
			}
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			
        }
        ajax.open("GET", "prikaziKomentare.php?idV=" + idV, true);
        ajax.send();
    
}

function ostaviKomentar()
{
    
        var ajax = new XMLHttpRequest();
		var idV = document.getElementById("id").value;
				var autor= document.getElementById("autor").value;
				var komentar=document.getElementById("kom").value;
				var email=document.getElementById("email").value;
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
				
            document.getElementById("noviKomentar").innerHTML+=text;
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", "ostaviKomentar.php?idV=" + idV +"&autor=" + autor + "&email=" + email + "&kom=" +komentar, true);
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
	
}

function dodajVijest()
{
	    var ajax = new XMLHttpRequest();
		var autor= document.getElementById("autor").value;
		var tekst=document.getElementById("tekst").value;
	    var naslov=document.getElementById("naslov").value;
		var slika=document.getElementById("slika").value;
		var slikasrc = slika.replace("C:\\fakepath\\", "");
	
		
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
				document.getElementById("error").innerHTML = text;
				
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", "dodajVijest.php?autor=" + autor + "&naslov=" + naslov + "&tekst=" + tekst + "&slika=" + slikasrc, true);
        ajax.send("");
	
}

function izbrisiVijest(id)
{
		var ajax = new XMLHttpRequest();
		var id= id;
		
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
				document.getElementById("clanak"+id).innerHTML = text;
				
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", "izbrisiVijest.php?id=" + id, true);
        ajax.send("");
	
}

function izbrisiKomentar(id)
{
	var ajax = new XMLHttpRequest();
		var id= id;
		
        ajax.onreadystatechange = function () {// Anonimna funkcija
            if (ajax.readyState == 4 && ajax.status == 200) {

                var text = ajax.responseText;
				document.getElementById("komentar"+id).innerHTML = text;
				
			if (ajax.readyState == 4 && ajax.status == 404)
                window.alert("Greska: nepoznat URL");
			}
        }
        ajax.open("GET", "izbrisiKomentar.php?id=" + id, true);
        ajax.send("");
	
}





