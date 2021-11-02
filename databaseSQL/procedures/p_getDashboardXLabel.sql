DELIMITER //

CREATE PROCEDURE p_getDashboardXLabel(IN email CHAR(40))

BEGIN
    SELECT d.dsb_uuid, d.usr_email, d.dsb_name, d.dsb_description, 
    GROUP_CONCAT(l.lbl_name) AS labels 
    FROM dashboard d 
    INNER JOIN dashboard_x_label dxl ON d.dsb_uuid = dxl.dsb_uuid 
    INNER JOIN label l ON dxl.lbl_id = l.lbl_id 
    WHERE d.usr_email = email 
    GROUP BY dxl.dsb_uuid;
END
//