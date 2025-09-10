<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
$data = json_decode(file_get_contents("php://input"), true);

include ('connect_db.php');
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$email = $data['email'] ?? '';
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if (empty($email) || empty($username) || empty($password)) {
    echo json_encode(['status' => 'error', 'message' => 'Make sure all fields are filled']);
    exit;
}

$smt = $conn->prepare("SELECT id FROM users WHERE email = ? OR username = ?");
$smt->bind_param("ss", $email, $username);
$smt->execute();
$smt->store_result();

if ($smt->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Email or username already exists']);
    $smt->close();
    exit;
}

//My hash
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$smt = $conn->prepare("INSERT INTO users (email, username, password) VALUES (?, ?, ?)");
$smt->bind_param("sss", $email, $username, $hashed_password);

if ($smt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Registration failed, please try again']);
}

$smt->close();
$conn->close();
?>
