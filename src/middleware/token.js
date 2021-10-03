import jwt from "jsonwebtoken";
import config from "../config/default.js";

const generateConfirmationToken = (email) => {
    //180 * 1000 milsecs -> 3 min
    //300 * 1000 milsecs -> 5 min
    const today = new Date();
    const expires = new Date(today.getTime() + 180000);
    return jwt.sign({
        email: email,
        exp: expires.getTime() / 1000
    },
    config.SALT_PASSWORD);
};

const confirmToken = (token) => {
    const decode = jwt.verify(token, config.SALT_PASSWORD);
    return decode;    
};

export {
    generateConfirmationToken,
    confirmToken,
}