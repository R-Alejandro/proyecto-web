DELIMITER $$
CREATE PROCEDURE p_addUSerArgs(email CHAR(40), U_name CHAR(20), nickname CHAR(40), U_password CHAR(60))
    BEGIN
        INSERT INTO user(
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