<?php

session_start();
function test_input($d) {
            $d = trim($d);
            $d = stripslashes($d);
            //  $data = htmlspecialchars($data);
            return $d; }
			
function isValidEmail($email){ 
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}


function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    header('Content-Type: text/html');
    header('Access-Control-Allow-Origin: *');
}
function rest_get($request, $data) {
	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$upit = $veza->prepare("SELECT * FROM komentari");
	//$upit->bindValue(1, $data['vijest'], PDO::PARAM_INT);
	$upit->execute();
	print "{ \"list\": " . json_encode($upit->fetchAll()) . "}";

 }
function rest_post($request, $data) {
	
	$valid=true;
	$tekst=$autor=$email="";
	
     $tekst=test_input($data['tekst']);
	 $email=test_input($data["email"]);
	
	if(!empty($email)) if(!isValidEmail($email)) { $valid=false; echo "Email nije validan. "; }
	
	if(empty($tekst) || $tekst=="") { $valid=false; echo "Niste unijeli komentar. "; }
	
	if($valid==true) {
		$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$stmt = $veza->prepare('INSERT INTO komentari SET  vijest= ?, tekst= ?,autor= ?, email=?');
	$stmt->execute( array($data["vijest"], $tekst, $data["autor"], $email) );
	
	if (!$stmt) {
					$greska = $veza->errorInfo();
					print "SQL greška: " . $greska[2];
					exit();
				}
	
	}
}
function rest_delete($request, $data) { 

	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$stmt = $veza->prepare('DELETE FROM komentari WHERE id =?');
	$stmt->execute( array($data['id']) );
	//$stmt->execute( array($request['id']) );
}
function rest_put($request, $data) { 
	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$stmt = $veza->prepare('UPDATE komentari SET vijest=?,tekst=?, autor=? WHERE id=?');
	$stmt->execute( array($data['vijest'],$data['tekst'],$data['autor'],$data['id']) );
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
