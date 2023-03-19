<?php require_once 'pdo.php';

    if($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['form'] == 'delete'){
        $data = [
            'post_id' => $_POST['delete']
        ];

        $requete = $database->prepare('DELETE FROM meow WHERE meow_id=:post_id');

        if($requete->execute($data)){
            header('Location: ../index.php');
        } else{
            echo 'error';
        }
    }
?>