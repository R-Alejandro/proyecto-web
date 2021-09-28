import mysql from "mysql";
import { promisify } from "util"; //for use async/await in mysql functions 
import config from "../../config/default.js";

const pool = mysql.createPool({
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE
});

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSE');
        }
    }

    if(connection) connection.release();
    console.log('DATABASE IS ONLINE');
    return;
});

//define in what methos were going to use async/await and promises
promisify(pool.query);

export default pool;