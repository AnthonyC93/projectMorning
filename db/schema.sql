DROP DATABASE IF EXISTS morningApp;
CREATE DATABASE morningApp;
USE morningApp;

CREATE TABLE users (
    userNumber INT NOT NULL,
    name VARCHAR(255),
    city VARCHAR(255),
    longitude FLOAT(25),
    latitude FLOAT(25),
    PRIMARY KEY(userNumber)
);

CREATE TABLE todo10154 (
    id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(255),
    completed BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
