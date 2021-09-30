import { Router } from "express";
import AuthService from "../services/auth/auth.js";
import MailService from "../services/mail/mail.js";
import config from "../config/default.js";

const router = Router();

router.get('/signup', (req, res) => {
    res.json({message: "pagina de signup XD"});
});

router.post('/signup', async (req, res) => {
    //put here the instance of the services
    const authServiceInstance = new AuthService();
    const response = await authServiceInstance.SignUp(req.body);

    //res.set('token', 'TOKENVERGAS');
    //console.log(res.getHeader('token'));
    const fullURL = `${req.protocol}://${req.hostname}:${config.PORT}${req.originalUrl}/${response.userToken}`
    console.log(fullURL);
    //const mailStatus = MailService.sendEmail(fullURL);
    //responses cfg
    if(!response.status) {
        res.status(400).send("user wasn`t created");
        return;
    }
    res.status(200).send("user created");
});

router.get('/signup/:token', (req, res) => {
    const authServiceInstance = new AuthService();
    const response = authServiceInstance.validateEmail(req.params.token);
    console.log(`el token fue de ${response}`);
    res.json({email: response});
});

router.get('/signin', (req, res) => {

});

router.post('/signin', (req, res) => {
    
});

export default router;