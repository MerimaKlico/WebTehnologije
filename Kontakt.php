<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>

<HEAD>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="stil.css">
<TITLE>Kontakt</TITLE>


</HEAD>

<body>

<div id="okvir">

<div id="logo">  </div>

<div id="zaglavlje"> 
<img src="Logo2.png" alt="Logo">
<p id='p1'> UZEJ KNJIŽEVNOSTI I </p>
<p id = 'p2'> POZORIŠNE UMJETNOSTI <br> SARAJEVO</p>

</div>

<table id='meni'>
<tr>
<td id="cell1" onclick='showMenu()'> <a href="file:///D:/skola/etf/6semestar/wt/projekat/Pocetna.html">Početna</a> </td>
<td id="cell2"> <a href="file:///D:/skola/etf/6semestar/wt/projekat/Omuzeju.html">O muzeju</a> </td>
<td id="cell3"> <a href="file:///D:/skola/etf/6semestar/wt/projekat/Poveznice.html">Poveznice</a> </td>
<td id="cell4"> <a href="file:///D:/skola/etf/6semestar/wt/projekat/Kontakt.html">Kontakt</a> </td>
</tr>
</table>


<ul id="padajuciMeni" onmouseout="hideMenu()">
 <li> File </li>
 <li> Edit </li>
 <li> Save</li>
</ul>

<div id="sadrzaj">
<p id='kontakt'>
Muzej književnosti i pozorišne umjetnosti BiH <br>
Sime Milutinovića Sarajlije 7 <br>
71 000 Sarajevo <br>
Tel/fax: + 387 33 201 861 </p>

<br>
<h4> Pošalji poruku: </h4>

<form method='post' action='hvala.html' name='contactform' id='contactform' onsubmit="return validiraj()">
<table>

<tr>
<td> Ime*: </td> <td class="unos"> <input type="text" name="ime" > <div id='greskaIme' class='greskeForme'></div></td>
</tr>

<tr>
<td> Prezime*: </td> <td class="unos"> <input type="text" name="prezime"> <div id='greskaPrezime' class='greskeForme'></div> </td>
</tr>

<tr>
<td> Mjesto: </td> <td class="unos"> <input type="text" name="mjesto">  </td>
</tr>


<tr>
<td> Općina: </td> 
<td class="unos"> <input type="text" name="općina">  </td>
</tr>

<tr>
<td> E-mail: </td> 
<td class="unos"> <input type="text" name="email"> <div id='greskaEmail' class='greskeForme'></div> </td>
</tr>

<tr>
<td> Da li ste student Univerziteta u Sarajevu: </td> 
<td class="unos"> 
<input type="radio" name="UNSA" value="Da" onClick="prikazuj()"> Da
<input type="radio" name="UNSA" value="Ne" onClick="nePrikazuj()"> Ne

</td>
</tr>

<tr>
<td> Ako je odgovor na prethodno pitanje potvrdan, na kojem fakultetu studirate?  </td> 
<td class="unos"> 

<select name="fakultet" disabled>
<option value="etf">Elektrotehnički</option>
<option value="pmf">Prirodno-matematički</option>
<option value="ef">Ekonomski</option>
<option value="mf">Mašinski</option>
<option value="gf">Građevinski</option>
<option value="af">Arhitektonski</option>
</select>

</td>
</tr>

<tr id='redPoruka'>
<td> Poruka*: </td>
<td class= "unos"> <textarea rows = '5' cols='50' name="poruka"> </textarea> <div id='greskaPoruka' class='greskeForme'></div> </td>
</tr>

 </table>
 
<br> <br>
<input type="submit" value="Pošalji">

 </form>

 </div>
 </div>
 
 <SCRIPT type="text/javascript" src="javaskripta.js"></SCRIPT>
</body>
</html>