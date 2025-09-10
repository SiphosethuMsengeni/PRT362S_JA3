<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include('connect_db.php');
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$input = json_decode(file_get_contents("php://input"), true);
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

if (empty($email) || empty($password)) {
    echo json_encode(['status' => 'error', 'message' => 'Email and password are required']);
    exit;
}

$smt = $conn->prepare("SELECT id, email, username, password FROM users WHERE email = ?");
$smt->bind_param("s", $email);
$smt->execute();
$result = $smt-> get_result();
$user = $result-> fetch_assoc();

if (!$user || !password_verify($password, $user['password'])) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid email or password']);
    $smt->close();
    exit;
}

echo json_encode([
    'status' => 'success',
    'message' => 'Login successful',
    'user' => ['id' => $user['id'], 'email' => $user['email'], 'username' => $user['username']]]);

?>