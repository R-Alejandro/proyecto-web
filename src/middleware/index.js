//middlewares index
import page404 from "./page404.js";
import {generateConfirmationToken, confirmToken} from "./token.js";
import checkSession from "./session.js";
import { sendEmailConfirmation } from "./mailer.js";

const token = {
    generateConfirmationToken,
    confirmToken,
};

const mailer = {
    sendEmailConfirmation,
}

const session = {
    checkSession,
}

export default {
    page404,
}; 


export {
    token,
    mailer,
    session,
};