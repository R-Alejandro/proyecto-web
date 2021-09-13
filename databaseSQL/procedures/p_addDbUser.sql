DELIMITER //

CREATE PROCEDURE addDbUser()
BEGIN
    CREATE USER jesser@'localhost' IDENTIFIED BY 'cEqYb^Y2mPT%Vsq';
    GRANT all PRIVILEGES on *.* to 'jesser'@'localhost';
    SHOW GRANTS FOR jesser@localhost;
END
//