import pool from "../../services/mysqlDB/mysqlConn.js";

class Dashboard {
    constructor(email = '', name = '') {
        this.email = email;
        this.name = name;
    }

    insertNewDashboard = async () => {
        const text = "INSERT INTO dashboard(usr_email, dsb_name) SET ?";
        const value = [this.email, this.name];

        try {
            await pool.query(text, value);
            return "Nuevo tablero creado";
        } catch (error) {
            throw error;
        }
    }

    deleteDashboard = async (uuid, email) => {
        const text = "DELETE FROM dashboard WHERE dsb_uuid = ? AND usr_email = ?";
        const value = [uuid, email];

        try {
            await pool.query(text, value);
            return "Tablero eliminado";
        } catch (error) {
            throw error;
        }
    } 
}

export default new Dashboard();
