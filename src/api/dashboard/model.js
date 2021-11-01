import pool from "../../services/mysqlDB/mysqlConn.js";

class Dashboard {

    insertNewDashboard = async (id, email, name, description) => {
        const text = `INSERT INTO dashboard SET ?`;
        const value = {
            "dsb_uuid": id, 
            "usr_email": email, 
            "dsb_name": name,
            "dsb_description": description
        }

        try {
            await pool.query(text, [value]);
            return "Nuevo tablero creado";
        } catch (error) {
            throw error;
        }
    }

    insertLabel = async (dashboardId, labelId) => {
        const text = `INSERT INTO dashboard_x_label SET ?`;
        const values = {
            "dsb_uuid": dashboardId,
            "lbl_id": labelId,
        }

        try {
            await pool.query(text, [values]);
            return "Etiquetas añadidas";
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
