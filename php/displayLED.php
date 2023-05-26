<?php require_once 'pdo.php';
    if ($_SERVER['REQUEST_METHOD'] == 'GET'){
        $request = $database->prepare('SELECT * FROM meow order by meow_id DESC LIMIT 1');
        $request->execute();
        $result = $request->fetchAll(PDO::FETCH_ASSOC);
    
        echo json_encode($result);
    }
?>
