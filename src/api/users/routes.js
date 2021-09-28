import { Router } from "express";
import pool from "../../services/mysqlDB/mysqlConn.js"
const router = Router();

router.get('/all', (req, res) => {
    pool.query('SELECT * FROM User;', (err, results, fields) =>{ 
        if (err) throw err; 
        res.json({ 
            users: results, 
        }); 
    }); 
});


export default router;