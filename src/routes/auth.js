import { Router } from "express";
import AuthService from "../services/auth/auth.js";

const router = Router();

router.get('/signup', (req, res) => {
    res.send('sign up');
});

router.post('/signup', (req, res) => {
    //put here the instance of the service auth
    const authServiceInstance = new AuthService();
    const status = authServiceInstance.SignUp();
    res.json({message: status});
});

router.get('/signin', (req, res) => {

});

router.post('/signin', (req, res) => {
    
});

export default router;