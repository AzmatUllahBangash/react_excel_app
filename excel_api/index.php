<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'db.php';


$objDB = new DbConnect();

$conn = $objDB->connect();




print_r(file_get_contents('php://input'));

die();
// echo "hello";
$user =file_get_contents('php://input');
// print_r($user);

$method = $_SERVER['REQUEST_METHOD'];


switch ($method) {
    case 'GET':

        $user = json_decode(file_get_contents('php://input'));
        
        $sql = 'SELECT * FROM `users`';
        $stmt = $conn->prepare($sql);
        // print_r($stmt);

        $stmt->execute();

        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($users);
        break;

    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $sql = 'INSERT INTO users(`name`,`email`,`password`) VALUES (:name,:email,:password)';

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':name',$user->name);
        $stmt->bindParam(':email',$user->email);
        $stmt->bindParam(':password',$user->password);
        if($stmt->execute()){
            $response = ['status'=> 1, 'message' => 'Record Created Successfully.'];
        }else{
            $response = ['status'=> 0, 'message' => 'Failed to Add Record.'];

        }

        echo json_encode($response);

        break;
    
}

