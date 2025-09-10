<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');

$host = "localhost";
$user = "root"; 
$pass = "";     
$db   = "pc_repair";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode([]));
}

$result = $conn->query("SELECT * FROM notifications ORDER BY created_at DESC");
$notifications = [];

while ($row = $result->fetch_assoc()) {
    $notifications[] = $row;
}

echo json_encode($notifications);

$conn->close();
?>