<?php

function zag() {
    header("{$_SERVER['SERVER_PROTOCOL']} 200 OK");
    //header('Content-Type: text/html');
	header('Content-Type: application/javascript; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
}
function rest_get($request, $data) {
	
	$veza = new PDO("mysql:dbname=muzej;host=127.11.9.2;charset=utf8", "admin1wEiG81", "6a9P3aHl74rY");
	$upit = $veza->prepare("SELECT * FROM vijest");
	$upit->bindValue(1, PDO::PARAM_INT);
	$upit->execute();
	print "{ \"list\": " . json_encode($upit->fetchAll()) . "}";

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