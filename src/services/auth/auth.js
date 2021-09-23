//import models for complete the class
import User from "../../api/users/model.js";

export default class AuthService{
    constructor(){ 
        this.user = new User();
    }
    //instance here the models necesary
    SignUp() {
        try {
            //write here the logic
            return this.user.insertNewUser();
        } catch (error) {
            throw error;
        }
    }
}