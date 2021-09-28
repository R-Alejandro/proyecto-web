import pool from "../../services/mysqlDB/mysqlConn.js";


export default class User {
    constructor(email, name, nickname, password){
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.data = () => {
            return {
                'usr_email': this.email,
                'usr_name': this.name,
                'usr_nickname': this.nickname,
                'usr_password': this.password
            };
        } 
    }
    
    insertNewUser = async () =>{ 
        pool.query(`INSERT INTO User SET ?`, [this.data()], (error, results, fields) => {
            if(error) throw error;
        });
        return this.data();
    }

    selectUser(){
        return true;
    }
}