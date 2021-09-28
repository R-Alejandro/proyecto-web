import { Router } from "express";
import pool from "../../services/mysqlDB/mysqlConn.js"
const router = Router();

<<<<<<< HEAD
router.get('/all', (req, res) => {
    pool.query('SELECT * FROM User;', (err, results, fields) =>{ 
        if (err) throw err; 
        res.json({ 
            users: results, 
        }); 
    }); 
=======
router.get('/all', async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM user;');
        res.json({
            users: rows, 
        });

    } catch (error) {
        throw error;
    }
>>>>>>> 9c683398ebb90d8217ed3a39200dfc1d0de27d62
});


export default router;