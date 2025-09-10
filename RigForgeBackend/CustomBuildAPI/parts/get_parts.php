<?php
include_once '../config/headers.php';
include_once '../config/connect_db.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(array('message' => 'Method Not Allowed'));
    exit();
}

$category = isset($_GET['category']) ? $_GET['category'] : '';

if (empty($category)) {
    http_response_code(400);
    echo json_encode(array("message" => "Category parameter is required."));
    exit();
}

$table_map = [
    'cpu' => 'cpu_table',
    'gpu' => 'gpu_table', 
    'motherboard' => 'motherboard_table',
    'ram' => 'ram_table'
];

if (!isset($table_map[$category])) {
    http_response_code(400);
    echo json_encode(array("message" => "Invalid category. Available: cpu, gpu, motherboard, ram"));
    exit();
}

$table_name = $table_map[$category];
$id_field = $category . '_id';

$conn = getDBConnection();

switch ($category) {
    case 'cpu':
        $query = "SELECT 
            $id_field as id, 
            brand, 
            model, 
            CONCAT(core_count, ' Cores / ', thread_count, ' Threads') as specs,
            CONCAT('Base: ', base_clock_ghz, 'GHz', 
                   IF(boost_clock_ghz IS NOT NULL, CONCAT(' / Boost: ', boost_clock_ghz, 'GHz'), ''),
                   ' / Socket: ', socket_type) as details,
            price,
            COALESCE(image_url, 'https://placehold.net/400x400.png') as image_url
        FROM $table_name";
        break;
        
    case 'gpu':
        $query = "SELECT 
            $id_field as id, 
            brand, 
            CONCAT(chipset_brand, ' ', chipset_model) as model,
            CONCAT(vram_gb, 'GB ', vram_type) as specs,
            CONCAT('PCIe ', pcie_interface, ' / ', tdp_watts, 'W TDP') as details,
            price,
            COALESCE(image_url, 'https://placehold.net/400x400.png') as image_url
        FROM $table_name";
        break;
        
    case 'motherboard':
        $query = "SELECT 
            $id_field as id, 
            brand, 
            model,
            CONCAT(socket_type, ' / ', chipset) as specs,
            CONCAT(form_factor, ' / ', memory_slots, ' DIMM / ', max_memory_gb, 'GB Max') as details,
            price,
            COALESCE(image_url, 'https://placehold.net/400x400.png') as image_url
        FROM $table_name";
        break;
        
    case 'ram':
        $query = "SELECT 
            $id_field as id, 
            brand, 
            model,
            CONCAT(total_capacity_gb, 'GB ', memory_type) as specs,
            CONCAT(speed_mhz, 'MHz / CL', cas_latency, 
                   IF(timing IS NOT NULL, CONCAT(' / ', timing), '')) as details,
            price,
            COALESCE(image_url, 'https://placehold.net/400x400.png') as image_url
        FROM $table_name";
        break;
}

$result = $conn->query($query);

if (!$result) {
    http_response_code(500);
    echo json_encode(array(
        "success" => false,
        "message" => "Database error: " . $conn->error
    ));
    exit();
}

$parts = array();
while ($row = $result->fetch_assoc()) {
    $parts[] = array(
        "id" => $row['id'],
        "name" => $row['brand'] . ' ' . $row['model'],
        "specs" => $row['specs'],
        "details" => $row['details'],
        "price" => 'R' . number_format($row['price'], 2),
        "brand" => $row['brand'],
        "image_url" => $row['image_url']
    );
}

http_response_code(200);
echo json_encode(array(
    "success" => true,
    "category" => $category,
    "parts" => $parts
));

$conn->close();
?>