import { Router } from "express";
import pool from "../../services/mysqlDB/mysqlConn.js"

const router = Router();

router.get('/all', async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM user;');
        res.json({
            users: rows, 
        });

    } catch (error) {
        throw error;
    }
});

router.get('/one', (req, res) => {
    res.send(req.user); //send user or session if there is an auth user, and deserialize user,
    //so.. this return name email nickname and passw
});
export default router;