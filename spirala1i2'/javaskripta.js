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
	
	var greskaEmail2 = document.getElementById('greskaEmail2');
    greskaEmail2.innerHTML = "";
	var email2 = document.forms["contactform"]["email"].value;
	if (email2!=null && email2!="")
	{
		if (d != null && d != "") if(email2!=d) greskaEmail2.innerHTML+="Potvrda emaila se ne poklapa";
		if(d==null || d=="") greskaEmail2.innerHTML+="NIste unijeli email u polju iznad";
	}

   var greskaTelefon = document.getElementById('greskaTel');
    greskaTelefon.innerHTML = "";

    var bt = document.forms["contactform"]["tel"].value;
    if (bt != null && bt != "") {
		
		if (!isValidTel(bt)) { 
		greskaTelefon.innerHTML += "Broj telefona koji ste unijeli nije validan";
        x = 1; }
    }

    var greskaPoruka = document.getElementById('greskaPoruka');
    greskaPoruka.innerHTML = "";
    var c = document.forms["contactform"]["poruka"].value;
    if (trimfield(c) == '') {
        greskaPoruka.innerHTML += "Niste unijeli poruku";
        //return false;
        x = 1;
    }

   

    if (x == 1) return false;

    else {
        window.alert("Hvala što ste poslali poruku");
        return true;
    }
}


function trimfield(str) {
    return str.replace(/^\s+|\s+$/g, '');
}


function isValidTel(tel)
	{
		var regEx1=/^\d{3}[\s]\d{3}[\s]\d{3}[\s]?$/;
		var regEx2=/^\d{3}[-]\d{3}[-]\d{3}[\s]?$/;
		var regEx3=/^\d{3}[\s]\d{3}[-]\d{3}[\s]?$/;
		var regEx4=/^\d{3}[-]\d{6}[\s]?$/;
		var regEx5=/^\d{3}[\s]\d{6}[\s]?$/;
		var regEx6=/^\d{9}?$/; 
		
		if (!regEx1.test(tel) && !regEx2.test(tel) && !regEx3.test(tel) && !regEx4.test(tel) && !regEx5.test(tel) && !regEx6.test(tel))
			return false;
		return true;
	}
	




