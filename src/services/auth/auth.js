//import models for complete the class
import User from "../../api/users/model.js";
import { token, mailer } from "../../middleware/index.js";
import bcrypt from "bcrypt";

class AuthService{
    //instance here the models necesary
    constructor(){ };

    SignUp = async (data, url) => {
        try {
            //10 bytes for salt password
            if (data.password.length <= 0) return false;
            const hashedPassword = await bcrypt.hash(data.password, 10);

            const userToCreate = new User(data.email, data.name, data.nickname, hashedPassword);
            const status = await userToCreate.insertNewUser(); 

            const userToken = token.generateConfirmationToken(data.email);
            
            await this.startEmailSequence(data.email, url, userToken);

            return status;
        } catch (error) {
            console.error(error);
            return;
        }
    }

    startEmailSequence = async (email, url, userToken) => {
        url = url.concat(userToken);
        console.log(url);
        await mailer.sendEmailConfirmation(email, url);
    }

    validateEmail = async(validToken) => {
        const decode = token.confirmToken(validToken);
        const userAuth = new User(decode.email);
        return await userAuth.changeAuth();
    }

}

export default new AuthService();