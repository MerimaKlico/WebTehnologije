<?php
function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}
function rest_get($request, $data) {
	
	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$upit = $veza->prepare("SELECT * FROM vijest WHERE id=?");
	$upit->bindValue(1, $data['id'], PDO::PARAM_INT);
	$upit->execute();
	print "{ \"list\": " . json_encode($upit->fetchAll()) . "}";

 }
function rest_post($request, $data) {
	

	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$stmt = $veza->prepare('INSERT INTO vijest SET naslov= ?,tekst= ?,autor= ?, slika= ?');
	$stmt->execute( array( $data["naslov"],$data["tekst"],$data["autor"],$data["slika"]) );
}
function rest_delete($request, $data) { 

	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$stmt = $veza->prepare('DELETE FROM vijest WHERE id =?');
	$stmt->execute( array($data['id']) );
	//$stmt->execute( array($request['id']) );
}
function rest_put($request, $data) { 
	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$stmt = $veza->prepare('UPDATE vijest SET naslov=?,tekst=?, autor=?, slika=? WHERE id=?');
	$stmt->execute( array($data['naslov'],$data['tekst'],$data['autor'],$data['slika'],$data['id']) );
	print "{ \"list\": " . json_encode($stmt->fetchAll()) . "}";
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
		parse_str(file_get_contents('php://input'), $delete_vars);
        zag(); $data = $delete_vars; rest_delete($request, $data); break;
    default:
        header("{$_SERVER['SERVER_PROTOCOL']} 404 Not Found");
        rest_error($request); break;
}
?>
