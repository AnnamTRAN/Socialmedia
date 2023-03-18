<?php require_once 'connect.php';

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['form'] == 'meow'){
        if ($_POST['post_title'] != '' && $_POST['post_select'] != ''){
            $data = [
                'send_title' => $_POST['post_title'],
                'send_tag' => $_POST['post_select'],
                'send_content' => $_POST['post_content']
            ];
            $requete = $database->prepare('INSERT INTO meow (title, tag, content, time)
                                            VALUES (:send_title, :send_tag, :send_content, now())');
            if($requete->execute($data)){
                header('Location: ../index.php');
            } else{
                echo 'error';
            };
        } else{
            echo 'Incomplete meow';
        }   
    }
?>