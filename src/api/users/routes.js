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

export default router;