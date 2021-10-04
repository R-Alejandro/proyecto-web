import { Router } from "express";
import authServiceInstance from "../services/auth/auth.js";
import config from "../config/default.js";
import passport from "passport";

const router = Router();

router.get('/signup', (req, res) => {
    res.render('registrer');
    //res.json({message: "pagina de signup"});
});

router.post('/signup', async (req, res) => {
    console.log('DATAAAAA', req.body);
    const fullURL = `${req.protocol}://${req.hostname}:${config.PORT}${req.originalUrl}/`
    const response = await authServiceInstance.SignUp(req.body, fullURL);

    if(!response) {
        res.status(400).json({error: "No fue posible crear el usuario"});
    }else{
        //201 created
        res.status(201).json({estado: response});
    }
});

router.get('/signup/:token', async(req, res) => {
    try {
        const response = await authServiceInstance.validateEmail(req.params.token);

        res.status(200).json({estado: response}); //account validated, 1 -> usr_auth column in db
    } catch (error) {
        //401 unauthorized
        res.status(401).json({error: "El enlace es invalido o expiro, solicite una nueva validacion"});
    }

});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: 'http//:localhost:3000/singup', //route not define lch:3001/
    failureRedirect: '/users/all',
    passReqToCallback: false
}));

router.get('/logout', (req, res) => {

});

export default router;