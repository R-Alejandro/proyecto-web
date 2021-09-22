import express from "express";
import config from "./config/default.js";
import indexRouter from "./routes/index.js";
const app = express();

app.use('/', indexRouter);

app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en el port: ${config.PORT}`);
});


export default app;