<?php require_once 'pdo.php';
    $data = [
        'title' => 'Surprise post !',
        'tag' => '#meme',
        'content' => 'Post made with a button, NO WAY!!',
        'pic' => 'surprised_face.png',
        'userid' => 1
    ];
    $request = $database->prepare('INSERT INTO meow (meow_title, meow_tag, meow_pic, meow_content, meow_time, meow_userid)
                            VALUES(:title, :tag, :pic, :content, now(), :userid)');
    $request->execute($data);

?>
