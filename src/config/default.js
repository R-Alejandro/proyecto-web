/*instead of using enviromental files directly,
we can add all the config variables needed in whole project
and this exports only one object (more for strcutural purposes)
*/
import dotenv from "dotenv";
dotenv.config()

export default {
    MYSQL_HOST: process.env.DATABASE_HOST,
    MYSQL_USER: process.env.DATABASE_USERNAME,
    MYSQL_PASSWORD: process.env.DATABASE_PASSWORD,
    MYSQL_DATABASE: process.env.DATABASE_NAME,
    PORT: process.env.PORT
};