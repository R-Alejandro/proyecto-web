CREATE TABLE User(
    usr_email CHAR(40) PRIMARY KEY,
    usr_name CHAR(20),
    usr_nickname CHAR(40) NOT NULL UNIQUE,
    usr_password CHAR(60) NOT NULL,
    usr_avatar CHAR(80)
);