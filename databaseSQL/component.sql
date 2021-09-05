CREATE TABLE Component(
    cp_uuid VARCHAR(255) PRIMARY KEY,
    dsb_uuid VARCHAR(255) NOT NULL,
    cp_route CHAR(100),
    FOREIGN KEY (dsb_uuid)
        REFERENCES Dashboard(dsb_uuid)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);