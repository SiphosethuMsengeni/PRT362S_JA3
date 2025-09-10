DROP TABLE IF EXISTS ram_table;
CREATE TABLE ram_table (
    ram_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(100) NOT NULL,
    memory_type VARCHAR(10) NOT NULL,
    capacity_gb SMALLINT UNSIGNED NOT NULL,
    kit_count TINYINT UNSIGNED NOT NULL DEFAULT 1,
    total_capacity_gb SMALLINT UNSIGNED AS (capacity_gb * kit_count) VIRTUAL,
    speed_mhz MEDIUMINT UNSIGNED NOT NULL,
    cas_latency TINYINT UNSIGNED NOT NULL,
    timing VARCHAR(20),
    heat_spreader BOOLEAN DEFAULT TRUE,
    rgb_lighting BOOLEAN DEFAULT FALSE,
    compatible_sockets JSON,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_brand (brand),
    INDEX idx_memory_type (memory_type),
    INDEX idx_speed (speed_mhz),
    INDEX idx_capacity (total_capacity_gb),
    INDEX idx_price (price)
);

INSERT INTO ram_table (brand, model, memory_type, capacity_gb, kit_count, speed_mhz, cas_latency, timing, rgb_lighting, compatible_sockets, price) VALUES
('Corsair', 'Vengeance RGB', 'DDR5', 16, 2, 6000, 36, '36-36-36-76', TRUE, '["AM5", "LGA1700"]', 129.99),
('G.Skill', 'Trident Z5 Neo RGB', 'DDR5', 32, 2, 6000, 30, '30-38-38-96', TRUE, '["AM5"]', 137.99),
('Teamgroup', 'T-Force Delta RGB', 'DDR5', 16, 2, 7200, 34, '34-45-45-115', TRUE, '["LGA1700"]', 147.99),
('Corsair', 'Vengeance LPX', 'DDR4', 16, 2, 3600, 18, '18-22-22-42', FALSE, '["AM4", "LGA1200"]', 69.99);

UPDATE ram_table SET image_url = 'https://placehold.net/400x400.png' WHERE image_url IS NULL;
UPDATE ram_table SET price = ROUND(price * 18, 2);