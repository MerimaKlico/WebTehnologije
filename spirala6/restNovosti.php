<?php
function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}
function rest_get($request, $data) {
	
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$upit = $veza->prepare("SELECT * FROM vijest WHERE id=?");
	$upit->bindValue(1, $data['id'], PDO::PARAM_INT);
	$upit->execute();
	print "{ \"list\": " . json_encode($upit->fetchAll()) . "}";

 }
function rest_post($request, $data) {
	

	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$stmt = $veza->prepare('INSERT INTO vijest SET  vrijeme= ?, naslov= ?,tekst= ?,autor= ?, alika= ?');
	$stmt->execute( array($data["vrijeme"],$data["naslov"],$data["tekst"],$data["autor"],$data["slika"]) );
}
function rest_delete($request) { 
	echo $request['id'];
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$stmt = $veza->prepare('DELETE FROM vijest WHERE id = ?');
	$stmt->execute( array($request['id']) );
}
function rest_put($request, $data) { 
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$stmt = $veza->prepare('UPDATE vijest SET naslov=?,tekst=?, autor=?, slika=? WHERE id=?');
	$stmt->execute( array($data['naslov'],$data['tekst'],$data['autor'],$data['slika'],$data['id']) );
}
function rest_error($request) { }

$method  = $_SERVER['REQUEST_METHOD'];
$request = $_SERVER['REQUEST_URI'];

switch($method) {
    case 'PUT':
        parse_str(file_get_contents('php://input'), $put_vars);
        zag(); $data = $put_vars; rest_put($request, $data); break;
    case 'POST':
        zag(); $data = $_POST; rest_post($request, $data); break;
    case 'GET':
    	zag(); $data = $_GET; rest_get($request, $data); break;
    case 'DELETE':
        zag(); rest_delete($request); break;
    default:
        header("{$_SERVER['SERVER_PROTOCOL']} 404 Not Found");
        rest_error($request); break;
}
?>
