<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$host = "localhost";
$user = "root"; 
$pass = "";     
$db   = "pc_repair";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "DB connection failed."]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $description   = $conn->real_escape_string($_POST['description']);
    $customerName  = isset($_POST['customer_name']) ? $conn->real_escape_string($_POST['customer_name']) : "Unknown Customer";
    $phoneNumber   = isset($_POST['phone_number']) ? $conn->real_escape_string($_POST['phone_number']) : "0000000000";

    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $uploadDir = "uploads/";
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true); 
        }

        $fileName = time() . "_" . basename($_FILES["image"]["name"]);
        $targetFile = $uploadDir . $fileName;

        if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
           
            $stmt = $conn->prepare("INSERT INTO repair_requests (image_path, description) VALUES (?, ?)");
            $stmt->bind_param("ss", $targetFile, $description);

            if ($stmt->execute()) {
                $repairRequestId = $stmt->insert_id;
                $stmt->close();

                $stmt2 = $conn->prepare("INSERT INTO invoices (customer_name, phone_number) VALUES (?, ?)");
                $stmt2->bind_param("ss", $customerName, $phoneNumber);

                if ($stmt2->execute()) {
                    $invoiceId = $stmt2->insert_id;
                    $stmt2->close();
                    $notifMsg = "New repair request submitted with invoice ID: $invoiceId.";
                    $conn->query("INSERT INTO notifications (message) VALUES ('$notifMsg')");

                    echo json_encode([
                        "status" => "success",
                        "message" => "Repair request and invoice created!",
                        "invoice_id" => $invoiceId,
                        "repair_request_id" => $repairRequestId
                    ]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Invoice creation failed."]);
                }
            } else {
                echo json_encode(["status" => "error", "message" => "Database error on repair request."]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "File upload failed."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No image uploaded."]);
    }
}

$conn->close();
?>