//import models for complete the class
import User from "../../api/users/model.js";
import bcrypt from "bcrypt";

export default class AuthService{
    //instance here the models necesary
    constructor(){ };

    SignUp = async (data) => {
        try {
            //write here the logic
            console.log('hashing password');
            //32 bytes for salt password
            const hashedPassword = await bcrypt.hash(data.password, 10);
            console.log('password hashed');

            console.log('recording user in database');
            const userToCreate = new User(data.email, data.name, data.nickname, hashedPassword);
            const status = await userToCreate.insertNewUser(); 
            console.log('user was created');

            console.log('crafting token');

            console.log('token was created');

            //console.log('sending email verification');
            //console.log('email sent');
            return status;
        } catch (error) {
            throw error;
        }
    }
}
