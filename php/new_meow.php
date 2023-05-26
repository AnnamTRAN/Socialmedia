<?php require_once 'pdo.php';

    $pic_size = $_FILES['post_pic']['size']; // Pic size measured in bytes
    $pic_error = $_FILES['post_pic']['error'];
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['form'] == 'meow'){
        if ($_POST['post_select'] != '' && $pic_size  < 2097152 && $pic_error <= 0){ // Pic size must be under 2MO
            
            $pic_tmp = $_FILES['post_pic']['tmp_name'];

            $pic_ex = pathinfo($pic_name, PATHINFO_EXTENSION);
            $pic_ex_lc = strtolower($pic_ex);

            $new_pic_name = uniqid("PIC", true).'.'.$pic_ex_lc;
            $pic_upload_path = '../post_pic/'.$new_pic_name;
            move_uploaded_file($pic_tmp,$pic_upload_path);

            $data = [
                'send_tag' => $_POST['post_select'],
                'send_content' => $_POST['post_content'],
                'send_pic' => $new_pic_name,
                'send_userid' => intval($_POST['post_userid']),
            ];

            var_dump($data);
            $request = $database->prepare('INSERT INTO meow (meow_tag, meow_pic, meow_content, meow_time, meow_userid)
                                            VALUES (:send_tag, :send_pic, :send_content, now(), :send_userid)');
            if($request->execute($data)){
                header('Location: ../index.php');
            } else{
                echo 'error';
            };
        } else{
            echo 'Incomplete meow';
        }   
    }
?>