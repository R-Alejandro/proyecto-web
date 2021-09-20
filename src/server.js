import app from "./app.js"
// import mysql from "mysql";
// import dotenv from "dotenv";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el port: ${PORT}`);
});