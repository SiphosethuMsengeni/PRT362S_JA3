DROP TABLE IF EXISTS motherboard_table;
CREATE TABLE motherboard_table (
    motherboard_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(100) NOT NULL,
    socket_type VARCHAR(20) NOT NULL,
    form_factor VARCHAR(10) NOT NULL,
    chipset VARCHAR(50) NOT NULL,
    memory_slots TINYINT UNSIGNED NOT NULL DEFAULT 4,
    max_memory_gb SMALLINT UNSIGNED NOT NULL,
    memory_type VARCHAR(10) NOT NULL,
    memory_speed_mhz MEDIUMINT UNSIGNED,
    pcie_x16_slots TINYINT UNSIGNED NOT NULL DEFAULT 1,
    pcie_x8_slots TINYINT UNSIGNED DEFAULT 0,
    pcie_x4_slots TINYINT UNSIGNED DEFAULT 0,
    pcie_x1_slots TINYINT UNSIGNED DEFAULT 0,
    sata_ports TINYINT UNSIGNED DEFAULT 4,
    m2_slots TINYINT UNSIGNED NOT NULL DEFAULT 1,
    wifi_included BOOLEAN DEFAULT FALSE,
    ethernet_speed_gbps VARCHAR(20),
    usb_headers JSON,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_brand (brand),
    INDEX idx_socket (socket_type),
    INDEX idx_chipset (chipset),
    INDEX idx_form_factor (form_factor),
    INDEX idx_memory_type (memory_type),
    INDEX idx_price (price)
);

INSERT INTO motherboard_table (brand, model, socket_type, form_factor, chipset, memory_slots, max_memory_gb, memory_type, memory_speed_mhz, pcie_x16_slots, m2_slots, wifi_included, price) VALUES
('ASUS', 'ROG Strix Z790-E Gaming WiFi', 'LGA1700', 'ATX', 'Intel Z790', 4, 128, 'DDR5', 7800, 2, 5, TRUE, 449.99),
('Gigabyte', 'B650 AORUS Elite AX', 'AM5', 'ATX', 'AMD B650', 4, 128, 'DDR5', 6666, 1, 4, TRUE, 289.99),
('MSI', 'MAG B550 TOMAHAWK', 'AM4', 'ATX', 'AMD B550', 4, 128, 'DDR4', 5100, 2, 2, FALSE, 169.99),
('ASRock', 'Z690 Phantom Gaming-ITX/TB4', 'LGA1700', 'ITX', 'Intel Z690', 2, 64, 'DDR5', 6400, 1, 2, TRUE, 319.99);

UPDATE motherboard_table SET image_url = 'https://placehold.net/400x400.png' WHERE image_url IS NULL;
UPDATE motherboard_table SET price = ROUND(price * 18, 2);