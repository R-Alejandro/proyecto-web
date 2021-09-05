CREATE TABLE Followers(
    follower_email CHAR(40),
    usr_email CHAR(40),
    PRIMARY KEY (follower_email, usr_email),
    FOREIGN KEY (follower_email)
        REFERENCES User(usr_email)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (usr_email)
        REFERENCES User(usr_email)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);