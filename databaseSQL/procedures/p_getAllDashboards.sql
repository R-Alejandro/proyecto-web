DELIMITER //

CREATE PROCEDURE p_getAllDashboards()

BEGIN
    SELECT * FROM dashboard ORDER BY RAND();
END
//