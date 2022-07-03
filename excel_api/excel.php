<?php

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Headers: *");

include 'db.php';


$db	=	new mysqli('localhost','root','','excel_db');
if ($db->connect_errno) {
  echo "Failed to connect to MySQL: " . $db->connect_error;
  exit();
}




$method = $_SERVER['REQUEST_METHOD'];


switch ($method) {

    case 'GET':

        $objDB = new DbConnect();
        $conn = $objDB->connect();


        $sql = 'SELECT * FROM `countries`';
        $stmt = $conn->prepare($sql);

        $stmt->execute();

        $countries = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($countries);
        break;



    case 'POST':
        if(($handle		=	fopen("countries.csv", "r")) !== FALSE){
            $n			=	1;
            while(($row	=	fgetcsv($handle)) !== FALSE){
                $db->query('INSERT INTO `countries`(`countryCode`, `countryName`, `currencyCode`, `population`, `fipsCode`, `isoNumeric`, `north`, `south`, `east`, `west`, `capital`, `continentName`, `continent`, `areaInSqKm`, `isoAlpha3`, `geonameId`) VALUES ("'.$row[1].'","'.$row[2].'","'.$row[3].'","'.$row[4].'","'.$row[5].'","'.$row[6].'","'.$row[7].'","'.$row[8].'","'.$row[9].'","'.$row[10].'","'.$row[11].'","'.$row[12].'","'.$row[13].'","'.$row[14].'","'.$row[15].'","'.$row[16].'")');
                
                    $n++;
                }
                fclose($handle);
            }
    break;
}