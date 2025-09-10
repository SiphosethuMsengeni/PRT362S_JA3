<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); 
    echo json_encode(["status" => "error", "message" => "Only POST requests are allowed."]);
    exit;
}

$customerName = isset($_POST['customer_name']) ? trim($_POST['customer_name']) : '';
$phoneNumber = isset($_POST['phone_number']) ? trim($_POST['phone_number']) : '';
$messageBody = isset($_POST['message']) ? trim($_POST['message']) : '';

if (empty($customerName) || empty($phoneNumber) || empty($messageBody)) {
    echo json_encode(["status" => "error", "message" => "Missing required fields."]);
    exit;
}

$to = "zaeem362@gmail.com"; 
$subject = "Your Invoice from RigForge";
$message = "Hello $customerName,\n\n" . $messageBody . "\n\nPhone Number: $phoneNumber\n\nThank you!";
$headers = "From: RigForge@example.com";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => "success", "message" => "Notification sent successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send notification."]);
}
?>