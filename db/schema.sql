DROP DATABASE IF EXISTS portfolio_db;
CREATE DATABASE portfolio_db;

USE portfolio_db;

-- USE wq8968a3nb27ujgp;


CREATE TABLE userInfo (
id INT AUTO_INCREMENT,
user_name VARCHAR(25),
PRIMARY KEY(id)
);

SELECT * FROM userInfo;