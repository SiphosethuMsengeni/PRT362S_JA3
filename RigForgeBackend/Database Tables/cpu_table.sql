DROP TABLE IF EXISTS cpu_table;
CREATE TABLE cpu_table (
    cpu_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(100) NOT NULL,
    core_count TINYINT UNSIGNED NOT NULL,
    thread_count TINYINT UNSIGNED NOT NULL,
    base_clock_ghz DECIMAL(3, 2) NOT NULL,
    boost_clock_ghz DECIMAL(3, 2),
    socket_type VARCHAR(20) NOT NULL,
    has_integrated_graphics BOOLEAN DEFAULT FALSE,
    tdp_watts SMALLINT UNSIGNED,
    cache_mb SMALLINT UNSIGNED,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_brand (brand),
    INDEX idx_socket (socket_type),
    INDEX idx_price (price)
);

INSERT INTO cpu_table (brand, model, core_count, thread_count, base_clock_ghz, boost_clock_ghz, socket_type, has_integrated_graphics, tdp_watts, cache_mb, price) VALUES
('Intel', 'Core i9-14900K', 24, 32, 3.20, 6.00, 'LGA1700', TRUE, 125, 36, 579.99),
('AMD', 'Ryzen 9 7950X', 16, 32, 4.50, 5.70, 'AM5', FALSE, 170, 80, 499.99),
('Intel', 'Core i5-13600K', 14, 20, 3.50, 5.10, 'LGA1700', TRUE, 125, 44, 289.99),
('AMD', 'Ryzen 7 7800X3D', 8, 16, 4.20, 5.00, 'AM5', FALSE, 120, 104, 349.99);

UPDATE cpu_table SET image_url = 'https://placehold.net/400x400.png' WHERE image_url IS NULL;
UPDATE cpu_table SET price = ROUND(price * 18, 2);