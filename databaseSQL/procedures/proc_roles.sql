DELIMITER $$
CREATE PROCEDURE proc_roles()

    BEGIN
        CREATE ROLE IF NOT EXISTS 'DBA', 'backend-developer', 'frontend-developer';

        GRANT ALL ON herramientaweb.* TO 'DBA';
        GRANT SELECT ON herramientaweb.* TO 'frontend-developer';
        GRANT SELECT, INSERT, UPDATE, DELETE, DROP, ALTER, EXECUTE ON herramientaweb.* TO 'backend-developer';

        CREATE USER 'jesser'@'localhost' IDENTIFIED BY 'antonio';
        CREATE USER 'joseph'@'localhost' IDENTIFIED BY 'sebastian';
        CREATE USER 'santiago'@'localhost' IDENTIFIED BY 'alejandro';

        GRANT  ROLE'frontend-developer' TO 'joseph'@'localhost';
        GRANT 'backend-developer' TO 'jesser'@'localhost', 'santiago'@'localhost';
        GRANT 'DBA' TO 'santiago'@'localhost';

        SET DEFAULT ROLE ALL TO
            'jesser'@'localhost',
            'joseph'@'localhost',
            'santiago'@'localhost';
        
    END
$$