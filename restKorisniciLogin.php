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
	
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$upit = $veza->prepare("SELECT * FROM korisnici WHERE admin=1");
	//$upit->bindValue(1, PDO::PARAM_INT);
	$upit->execute();
	print "{ \"list\": " . json_encode($upit->fetchAll()) . "}";

 }
 
function rest_post($request, $data) {
	$username=$password="";

	$username=test_input($data['username']);
	$password=test_input($data['password']);
	$valid=false;

	if(empty($username) || empty($password)) echo "Prazan username ili sifra";

	else {
		
		$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
		$veza->exec("set names utf8");
		
		ob_start();

		$korisnik_query = $veza->prepare("SELECT username, password, admin FROM korisnici where username = ?");
		if ($korisnik_query->execute(array($username))) {
		while ($row = $korisnik_query->fetch()) {
		if($row['password']===$password){
			$valid=true;
			if($row['admin']==1) 
			{$_SESSION['admin'] = $username; echo "Logovani ste kao admin: "; }
		    else $_SESSION['korisnik'] = $username;
			echo $username;
				}
		}
	  }
		
		if($valid==false)	echo "Korisničko ime ili šifra su pogrešni";
		ob_end_flush();
	}
}
function rest_delete($request, $data) { 

	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$stmt = $veza->prepare('DELETE FROM korisnici WHERE id =?');
	$stmt->execute( array($data['id']) );
	//$stmt->execute( array($request['id']) );
}
function rest_put($request, $data) { 
	$veza = new PDO("mysql:dbname=muzej;host=localhost;charset=utf8", "muzejuser", "sifra");
	$stmt = $veza->prepare('UPDATE korisnici SET vijest=?,tekst=?, autor=? WHERE id=?');
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
