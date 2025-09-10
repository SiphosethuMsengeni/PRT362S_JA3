DROP TABLE IF EXISTS gpu_table;
CREATE TABLE gpu_table (
    gpu_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(100) NOT NULL,
    chipset_brand VARCHAR(50),
    chipset_model VARCHAR(100),
    vram_gb TINYINT UNSIGNED NOT NULL,
    vram_type VARCHAR(10) NOT NULL,
    pcie_interface VARCHAR(20) DEFAULT 'PCIe 4.0 x16',
    base_clock_mhz MEDIUMINT UNSIGNED,
    boost_clock_mhz MEDIUMINT UNSIGNED,
    length_mm MEDIUMINT UNSIGNED,
    slot_width TINYINT UNSIGNED DEFAULT 2,
    tdp_watts SMALLINT UNSIGNED NOT NULL,
    power_connectors VARCHAR(100),
    recommended_psu_wattage SMALLINT UNSIGNED,
    display_outputs JSON,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_brand (brand),
    INDEX idx_chipset (chipset_model),
    INDEX idx_vram (vram_gb),
    INDEX idx_tdp (tdp_watts),
    INDEX idx_price (price)
);

INSERT INTO gpu_table (brand, chipset_brand, chipset_model, model, vram_gb, vram_type, length_mm, slot_width, tdp_watts, power_connectors, recommended_psu_wattage, display_outputs, price) VALUES
('ASUS', 'NVIDIA', 'GeForce RTX 4090', 'ROG Strix LC OC', 24, 'GDDR6X', 336, 3, 450, '1x 16-pin', 1000, '["HDMI 2.1a x1", "DisplayPort 1.4a x3"]', 1999.99),
('Sapphire', 'AMD', 'Radeon RX 7800 XT', 'PULSE', 16, 'GDDR6', 280, 2, 263, '2x 8-pin', 700, '["HDMI 2.1a x2", "DisplayPort 2.1 x2"]', 519.99),
('Gigabyte', 'NVIDIA', 'GeForce RTX 4070 SUPER', 'WINDFORCE OC', 12, 'GDDR6X', 281, 2, 220, '1x 16-pin', 650, '["HDMI 2.1a x1", "DisplayPort 1.4a x3"]', 599.99),
('Intel', 'Intel', 'Arc A770', 'Limited Edition', 16, 'GDDR6', 270, 2, 225, '1x 8-pin, 1x 6-pin', 600, '["HDMI 2.1 x1", "DisplayPort 2.0 x3"]', 349.99);

UPDATE gpu_table SET image_url = 'https://placehold.net/400x400.png' WHERE image_url IS NULL;
UPDATE gpu_table SET price = ROUND(price * 18, 2);