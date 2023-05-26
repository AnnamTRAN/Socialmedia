<?php require_once 'pdo.php'; 

    $data = [
        'title' => $_GET['title'],
        'tag' => $_GET['tag'],
        'pic' => 'catoh.png',
        'content' => $_GET['content'],
        'userid' => 1
    ];

    $request = $database->prepare('INSERT INTO meow (meow_title, meow_tag, meow_pic, meow_content, meow_time, meow_userid)
                            VALUES(:title, :tag, :pic, :content, now(), :userid)');
    $request->execute($data);
?>