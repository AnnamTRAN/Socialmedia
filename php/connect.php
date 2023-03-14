<?php
    try{
        $database = new PDO('mysql:host=localhost;dbname=MeowChat','root');
    } catch(PDOException $e){
        die('Site indisponible');
    }
?>