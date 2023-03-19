<?php require_once 'pdo.php';

    $pic_size = $_FILES['post_profile']['size'];
    $pic_error = $_FILES['post_profile']['error'];
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['form'] == 'signup'){
        if ($_POST['post_name'] != '' && $_POST['post_username'] != '' && $_POST['post_email'] != '' && $_POST['post_password'] != '' && $pic_size  < 2097152 && $pic_error <= 0){

            $pic_name = $_FILES['post_profile']['name'];
            $pic_tmp = $_FILES['post_profile']['tmp_name'];

            $pic_ex = pathinfo($pic_name, PATHINFO_EXTENSION);
            $pic_ex_lc = strtolower($pic_ex);
            $extension = array("png", "jpg", "gif");

            $new_pic_name = uniqid("PIC", true).'.'.$pic_ex_lc;
            $pic_upload_path = '../profile_pic/'.$new_pic_name;
            move_uploaded_file($pic_tmp,$pic_upload_path);


            $password = $_POST['post_password'];
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            $data = [
                'send_name' => $_POST['post_name'],
                'send_username' => $_POST['post_username'],
                'send_email' => trim($_POST['post_email']),
                'send_password' => $hashed_password,
                'send_pic' => $new_pic_name
            ];

            $request = $database->prepare('INSERT INTO user (user_name, user_username, user_email, user_password, user_pic)
                                                VALUES (:send_name, :send_username, :send_email, :send_password, :send_pic)');

            if ($request->execute($data)){
                echo 'User added';
            } else{
                echo 'User error';
            }
        } else{
            echo 'Incomplete form';
        }
    }

?>