<<<<<<< HEAD
CREATE DATABASE morningUsers;
USE morningUsers;

CREATE TABLE users {
    userNumber INT NOT NULL,
    userName VARCHAR(255),
    homeLatitude DECIMAL (25),
    homeLongitude DECIMAL (25),
    workLatitude DECIMAL (25),
    workLongitude DECIMAL (25),
    PRIMARY KEY (userNumber)
}
=======
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
>>>>>>> 0a459e794ae4c0a0a0b6f13968f0c711e13597d6
