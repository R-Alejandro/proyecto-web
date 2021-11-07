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
            //"lbl_id": labelId,
        }

        try {
            for (let i = 0; i < labelId.length; i++) {
                values.lbl_id = labelId[i];
                await pool.query(text, [values]);
            }
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

    /*     editLabels = async (uuid, labels) => {
            const text = `UPDATE dashboard_x_label SET lbl_uuid = ?
            WHERE dsb_uuid = ?`;
        } */

    editDashboard = async (values) => {
        const text = `UPDATE dashboard SET dsb_name = ?, dsb_description = ? WHERE dsb_uuid = ?`;
        try {
            await pool.query(text, values);
            return "Tablero actualizado";
        } catch (error) {
            throw error;
        }

    }

    insertComponent = async (uuid, name, description, cp_uuid) => {
        const text = `INSERT INTO component SET ?`;

        const values = {
            'cp_uuid': cp_uuid,
            'dsb_uuid': uuid,
            'cp_name': name,
            'cp_description': description
        }
        try {
            await pool.query(text, [values]);
            return "componente creado";
        } catch (error) {
            throw error;
        }
    }

    deleteComponent = async (uuid) => {
        const text = `DELETE FROM component WHERE cp_uuid = ?`;
        try {
            await pool.query(text, [uuid]);
            return "componente eliminado";
        } catch (error) {
            throw error;
        }
    }
}

export default new Dashboard();
