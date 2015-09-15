<?php



if(isset($_GET['email']) && !empty($_GET['email']) AND isset($_GET['hash']) && !empty($_GET['hash'])){
    // Verify data
}else{
    // Invalid approach
}

$hash = md5( rand(0,1000) ); 

?>