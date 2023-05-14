<?php // connection to localhost using PDO
    try{
        $database = new PDO('mysql:host=localhost;dbname=meowchat', 'root', '');
        $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e){
        die('Site indisponible');
    }

?>