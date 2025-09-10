<?php

$host = "localhost"; 
$user = "root";
$password = "";
$database = "rigforge_db"; 

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function getDBConnection() {
    global $conn;
    return $conn;
}
?>