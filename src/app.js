import express from "express";
import config from "./config/default.js";
import indexRouter from "./routes/index.js";
import middleware from "./middleware/index.js";
import path from "path";
import { fileURLToPath } from "url";
import exphbs from "express-handlebars";

const app = express();

//add the configurations from config or another configs here
//json spaces is a config only for development purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('json spaces', 0);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', indexRouter);
app.use(middleware.page404);

app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en el port: ${config.PORT}`);
});


export default app;