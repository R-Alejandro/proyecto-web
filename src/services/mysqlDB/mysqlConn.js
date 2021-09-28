import mysql from "mysql2/promise";
import config from "../../config/default.js";

const pool = mysql.createPool({
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE,
});

export default pool;