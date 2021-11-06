CREATE TABLE Component(
    cp_uuid VARCHAR(255) PRIMARY KEY,
    dsb_uuid VARCHAR(255) NOT NULL,
    cp_name VARCHAR(255), NOT NULL,
    cp_description VARCHAR(255) NOT NULL,
    FOREIGN KEY (dsb_uuid)
        REFERENCES Dashboard(dsb_uuid)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);