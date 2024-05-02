DROP DATABASE IF EXISTS summarized;
CREATE DATABASE summarized;
USE summarized;

CREATE TABLE User (
    user_id VARCHAR(50) PRIMARY KEY UNIQUE,
    user_first_name VARCHAR(50),
    user_last_name VARCHAR(50)
);


CREATE TABLE Original_Text (
    original_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    original_text VARCHAR(255),
    `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    label VARCHAR(50)
);

CREATE TABLE Summarized_Text (
    summarized_id INT AUTO_INCREMENT PRIMARY KEY,
    summarized_text TEXT
);

CREATE TABLE User_History (
    user_id VARCHAR(50),
    original_text_id INT,
    summarized_text_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (original_text_id) REFERENCES Original_Text(original_id),
    FOREIGN KEY (summarized_text_id) REFERENCES Summarized_Text(summarized_id)
);