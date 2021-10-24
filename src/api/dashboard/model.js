import pool from "../../services/mysqlDB/mysqlConn.js";

class Dashboard {

    insertNewDashboard = async (id, email, name) => {
        const text = "INSERT INTO dashboard(dsb_uuid, usr_email, dsb_name) SET ?";
        const value = [id, email, name];

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
