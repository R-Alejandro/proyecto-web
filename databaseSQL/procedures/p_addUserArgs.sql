DELIMITER $$
CREATE PROCEDURE p_addUSerArgs(email CHAR, U_name CHAR, nickname CHAR, U_password CHAR)
    BEGIN
        INSERT INTO User(
                    usr_email,
                    usr_name,
                    usr_nickname,
                    usr_password
                )
        VALUES (
            email,
            U_name,
            nickname,
            U_password
        );
    END
$$