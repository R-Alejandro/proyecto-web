import app from "./app.js"
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config()
const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

const PORT = process.env.PORT || 3001;

connection.connect((err) => {
  if (err) {
      console.error("error mysql:" + err.stack);
      return;
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el port: ${PORT}`);
});

export default connection;