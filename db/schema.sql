CREATE DATABASE post_db;
USE post_db;

CREATE TABLE posts
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	native BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
