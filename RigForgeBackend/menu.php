<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include('connect_db.php');
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

if (isset($_SESSION['user_id'])) {
    $userData = [
        'user' => [
        'id' => $_SESSION['user_id'],
        'email' => $_SESSION['email'],
        'username' => $_SESSION['username']
        ]
    ];
    echo json_encode(['status' => 'success', 'message' => 'User is logged in', 'data' => $userData]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error, Try again']);
}

?>