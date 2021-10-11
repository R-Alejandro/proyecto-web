import pool from "../../services/mysqlDB/mysqlConn.js";
import bcrypt from "bcrypt";

export default class User {
    constructor(email='', name='', nickname='', password=''){
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.dataInterface = () => {
            return {
                'usr_email': this.email,
                'usr_name': this.name,
                'usr_nickname': this.nickname,
                'usr_password': this.password
            };
        } 
    }
    
    insertNewUser = async () => {
        const data = this.dataInterface();
        data['usr_auth'] = false;
        try {
            const [result] = await pool.query(`INSERT INTO User SET ?`, [data]);
            return result.affectedRows == 1 ? true : false;
        } catch (error) {
            throw error;
        }
    }

    changeAuth = async () => {
        try {           
            const [rows, fields] = await pool.query("SELECT `usr_auth` FROM `User` WHERE `usr_email` = ?", [this.email]);
            if (rows[0].usr_auth == 0){
                await pool.query("UPDATE `User` SET `usr_auth` = ? WHERE `usr_email` = ?", [true, this.email]);
                return "Gracias por verificar la cuenta";
            }else{
                return "Tu cuenta ya esta verificada, inicia sesion";
            }
            
        } catch (error) {
            throw error;
        }
    }

    static findUser = async email => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM `User` WHERE `usr_email` = ?", [email]);
            return new User(rows[0].usr_email,
                rows[0].usr_name,
                rows[0].usr_nickname,
                rows[0].usr_password);
        } catch (error) {
            return false;
        }
    }
    comparePassword = async password => {
        return await bcrypt.compare(password, this.password);
    } 

    hashPassword = async password =>{
        this.password = await bcrypt.hash(password, 10);
    }
}