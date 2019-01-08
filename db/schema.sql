DROP DATABASE IF EXISTS morningUsers;
CREATE DATABASE morningUsers;
USE morningUsers;

CREATE TABLE users (
    userNumber INT NOT NULL,
    userName VARCHAR(255),
    homeLatitude DECIMAL(25),
    homeLongitude DECIMAL(25),
    workLatitude DECIMAL(25),
    workLongitude DECIMAL(25),
    PRIMARY KEY(userNumber)
);

CREATE TABLE todo10154 (
    id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(255),
    Completed BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);