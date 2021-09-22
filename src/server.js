import app from "./app.js"
import mysql from "mysql";
//solo usar un archivo app.js
/*const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});



connection.connect((err) => {
  if (err) {
      console.error("error mysql:" + err.stack);
      return;
  }
});


export default connection;*/