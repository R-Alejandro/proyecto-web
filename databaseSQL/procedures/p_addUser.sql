DELIMITER $$
CREATE PROCEDURE p_addUser()

BEGIN
    DROP TABLE User IF EXIST;
    CREATE TABLE User(
        usr_email CHAR(40) PRIMARY KEY,
        usr_name CHAR(20),
        usr_nickname CHAR(40) NOT NULL UNIQUE,
        usr_password CHAR(60) NOT NULL,
        usr_avatar CHAR(80)
    );
    INSERT INTO User(
                    usr_email,
                    usr_name,
                    usr_nickname,
                    usr_password
                )
    VALUES (
        'alejandro@gmail.com',
        'alejandro',
        'alejo',
        'snfhsdbh'
    );
END
$$