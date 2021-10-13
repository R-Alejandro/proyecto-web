//middlewares index
import page404 from "./page404.js";
import {generateConfirmationToken, confirmToken} from "./token.js";
import { sendEmailConfirmation } from "./mailer.js";

const token = {
    generateConfirmationToken,
    confirmToken,
};

const mailer = {
    sendEmailConfirmation,
}

export default {
    page404,
}; 

export {
    token,
    mailer,
};