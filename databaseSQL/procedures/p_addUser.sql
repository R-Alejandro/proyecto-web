CREATE PROCEDURE p_addUser
    ( 
        @usr_email CHAR(40),
        @usr_name CHAR(20),
        @usr_nickname CHAR(40),
        @usr_password CHAR(60),
        @StatementType NVARCHAR(20) = ''
    )
AS 
    BEGIN
        IF @StatementType = 'INSERT'
            BEGIN
                INSERT INTO User(
                                usr_email,
                                usr_name,
                                usr_nickname,
                                usr_password
                            )
                VALUES (
                    @usr_email,
                    @usr_name,
                    @usr_nickname,
                    @usr_password
                )
            END
    END