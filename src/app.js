import express from "express";
import config from "./config/default.js";
import indexRouter from "./routes/index.js";
import middleware from "./middleware/index.js";

const app = express();

//routes 
app.use('/', indexRouter);

app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en el port: ${config.PORT}`);
});

//add the configurations from config or another configs here
//json spaces is a config only for development purposes
app.set('json spaces', 2);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(middleware.page404);

export default app;