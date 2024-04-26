CREATE TABLE IF NOT EXISTS posts(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    picture VARCHAR(255) NOT NULL,
    post_description LONGTEXT NOT NULL,
    points LONGTEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);