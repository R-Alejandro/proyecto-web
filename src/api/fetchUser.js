import conn from "../server.js"; 
import Router from "express"; 

const router = Router(); 

router.get('/user' , (req , res)=>{ 
    conn.query('SELECT * FROM User;', (err, results, fields) =>{ 
        if (err) throw err; 
        res.json({ 
            users: results, 
        }); 
    }); 
}); 

export default router;