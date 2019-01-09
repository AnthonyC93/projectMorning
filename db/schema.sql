DROP DATABASE IF EXISTS morningApp;
CREATE DATABASE morningApp;
USE morningApp;

CREATE TABLE users (
    userNumber INT NOT NULL,
    userName VARCHAR(255),
    homeCity VARCHAR(255),
    workCity VARCHAR(255),
    homeLL DECIMAL(25),
    workLL DECIMAL(25),
    PRIMARY KEY(userNumber)
);

CREATE TABLE todo10154 (
    id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(255),
    completed BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
