DELIMITER //

CREATE PROCEDURE p_fetchTable()

BEGIN 
    DECLARE fin INT DEFAULT FALSE;
    DECLARE cursorRegistro VARCHAR(100);
    DECLARE cursorRegistroDos VARCHAR(100);

    DECLARE cursorUno CURSOR FOR 
        SELECT user.usr_name, dashboard.dsb_name 
        FROM user
        INNER JOIN dashboard 
        ON user.usr_email = dashboard.usr_email;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET fin = TRUE;

    OPEN cursorUno;

    cursorUno_loop:LOOP

        FETCH cursorUno into cursorRegistro, cursorRegistroDos;
        IF fin THEN
            CLOSE cursorUno;
            LEAVE cursorUno_loop;
        END IF;

        SELECT cursorRegistro, cursorRegistroDos;

    END LOOP;

END
//