import mysql from "mysql";
import config from "../../config/default.js";

const connection = mysql.createConnection({
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error("error mysql:" + err.stack);
        return;
    }
});

export default connection;