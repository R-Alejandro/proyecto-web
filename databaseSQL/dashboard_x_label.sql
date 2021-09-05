CREATE TABLE Dashboard_x_Label(
    dsb_uuid VARCHAR(255),
    lbl_id SMALLINT UNSIGNED,
    PRIMARY KEY (dsb_uuid, lbl_id),
    FOREIGN KEY (dsb_uuid)
        REFERENCES Dashboard(dsb_uuid)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (lbl_id)
        REFERENCES Label(lbl_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);