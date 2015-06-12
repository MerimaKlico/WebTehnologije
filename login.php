
<?php
//Login

session_start(); // Starting Session
$error='';
if(isset($_POST['login'])){
    //
    $veza = new PDO("mysql:dbname=muzej;host=localhost", "muzejuser", "sifra");
    $pass = $_POST['password'];
    $pass = stripslashes($pass);
    $stmt = $veza->prepare("SELECT username, password FROM user where username = ?");
    if ($stmt->execute(array($_POST['username']))) {
        while ($row = $stmt->fetch()) {
            if($row['password']===$pass){
                $_SESSION['user'] = $row['username'];
            }
        }
    }
}

if(isset($_POST['register'])){
    $br= 0;
    $veza = new PDO("mysql:dbname=muzej;host=localhost", "muzejuser", "sifra");
    $stmt = $veza->prepare("SELECT username, password FROM user where username = ?");
    if ($stmt->execute(array($_POST['username']))) {
        while ($row = $stmt->fetch()) {
            $brojac = $brojac +1;
        }
        if($br != 0){
            echo "Korisnicko ime postoji";
        }
        else{
            $stmt = $veza->prepare('INSERT INTO user SET username= ?,password= ?');
            $stmt->execute( array($_POST['username'],$_POST['password']));
        }
    }
}
if(isset($_POST['logout'])){
    session_destroy();
    header("location:Pocetna6spirala.php");
}
?>
