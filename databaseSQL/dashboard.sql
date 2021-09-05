CREATE TABLE Dashboard(
    dsb_uuid VARCHAR(255),
    usr_email CHAR(40),
    dsb_name CHAR(60) DEFAULT 'Nuevo Tablero',
    PRIMARY KEY(dsb_uuid),
    FOREIGN KEY (usr_email)
        REFERENCES User(usr_email)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);