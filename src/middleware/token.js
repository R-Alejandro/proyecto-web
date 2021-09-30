import jwt from "jsonwebtoken";

const generateConfirmationToken = (email) => {
    //180 * 1000 milsecs -> 3 min
    //300 * 1000 milsecs -> 5 min
    const today = new Date();
    const expires = new Date(today.getTime() + 180000);
    return jwt.sign({
        email: email,
        exp: expires.getTime() / 1000
    },
    'secret');
};

const confirmToken = (token) => {
    try {
        const decode = jwt.verify(token, 'secret');
        return decode;    
    } catch (error) {
        throw error;
    }
    
};

export {
    generateConfirmationToken,
    confirmToken,
}