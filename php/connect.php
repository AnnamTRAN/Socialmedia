<?php require_once 'pdo.php';
    session_start();
    if($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['form'] == 'signin'){
        if($_POST['post_email'] != '' && $_POST['post_password'] != ''){
            

            $email = $_POST['post_email'];
            $password = $_POST['post_password'];

            $request = $database->prepare('SELECT * FROM user WHERE user_email=:send_email');
            $request->bindValue('send_email',$email);
            $request->execute();

            $user = $request->fetch(PDO::FETCH_ASSOC);
            if($user){
                $password_hash = $user['user_password'];
                if(password_verify($password,$password_hash)){
                    $_SESSION['id'] = $user['user_id'];
                    $_SESSION['username'] = $user['user_username'];
                    $_SESSION['pic'] = $user['user_pic'];
                    header('Location: ../index.php');
                }
            }
        } else{
            echo 'please fill required form'; 
        }
    }
?>