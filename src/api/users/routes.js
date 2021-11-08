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
    if(!req.user){
        res.send('Que no hay usuario dice');
    } else{
        res.send(req.user); //send user or session if there is an auth user, and deserialize user,
    //so.. this return name email nickname and passw
    }
});

router.delete('/delete/:email', async (req, res) => {
    const { email } = req.params;
    const sql = `DELETE FROM user WHERE usr_email = ?`;

    try {
        const response = await pool.query(sql, [email]);
        res.status(200).json({
            response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })
    }
})

export default router;