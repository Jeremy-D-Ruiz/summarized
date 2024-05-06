DROP DATABASE IF EXISTS summarized;
CREATE DATABASE summarized;
USE summarized;


CREATE TABLE User (
    user_id VARCHAR(100) PRIMARY KEY UNIQUE,
    displayName VARCHAR(75)
);



CREATE TABLE User_History (
    user_id VARCHAR(100),
	originalText longtext,
     summarizedText longtext,
    `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from User;
select * from User_History;