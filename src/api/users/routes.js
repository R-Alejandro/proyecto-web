import { Router } from "express";
import conn from "../../services/mysqlDB/mysqlConn.js"
const router = Router();

router.get('/all', (req, res) => {
    conn.query('SELECT * FROM User;', (err, results, fields) =>{ 
        if (err) throw err; 
        res.json({ 
            users: results, 
        }); 
    }); 
});


export default router;