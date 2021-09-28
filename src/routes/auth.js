import { Router } from "express";
import AuthService from "../services/auth/auth.js";
import pool from "../services/mysqlDB/mysqlConn.js";

const router = Router();

router.get('/signup', (req, res) => {
    res.json({message: "pagina de signup XD"});
});

router.post('/signup', async (req, res) => {
    //put here the instance of the service auth
    const authServiceInstance = new AuthService();
    //const data = {...req.body};
    const status = await authServiceInstance.SignUp(req.body);
    //log
    console.log(`sent to backend: ${req.body}`);
    console.log("ADD USER: ",status);
    //responses cfg
    if(!status) {
        res.status(400).send("user wasn`t created");
        return;
    }
    res.status(200).send("user created");
});

router.get('/signin', (req, res) => {

});

router.post('/signin', (req, res) => {
    
});

export default router;