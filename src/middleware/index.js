//middlewares index
import page404 from "./page404.js";
import {generateConfirmationToken, confirmToken} from "./token.js";

const token = {
    generateConfirmationToken,
    confirmToken,
};

export default {
    page404,
}; 

export {
    token,
};