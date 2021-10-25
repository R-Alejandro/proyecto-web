import pool from "../../services/mysqlDB/mysqlConn.js";
import dashboardInstance from "./model.js";
import {v4 as uuidv4} from "uuid";

const newDashboard = async (req, res) => {
   
    const newUuid = uuidv4();

    try {
        const result = await dashboardInstance.insertNewDashboard(newUuid, req.user.email, req.body.name, req.body.description);
        res.status(201).json({
            result,
        });

    } catch (error) {
        console.log(error); // log about the error
        res.status(400).json({
            newDashboardsError: "Hubo error al crear el tablero, intente más tarde.",
        });
    }
}

const removeDashboard = async (req, res) => {
    
    try {
        const result = await dashboardInstance.deleteDashboard(req.params.uuid, req.user.email);
        res.status(200).json({
            result,
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            deleteDashboardsError: "Hubo error al elimnar el tablero, intente más tarde.",
        });
    }
}

const getDashboards = async (req, res) => {

    const text = "SELECT * FROM dashboard WHERE usr_email = ?";
    const values = [req.user.email];
    
    try {
        const [dashboards] = await pool.query(text, values);
        res.status(200).json({
            dashboards,
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            getDashboardsError: "No se pudo obtener los tableros.",
        });
    }

}

const showDashboard = async (req, res) => {
    
    const text = "SELECT * FROM dashboard WHERE dsb_uuid = ?";
    const values = [req.params.uuid];

    try {
        const [dashboard] = await pool.query(text, values);
        res.status(200).json({
            dashboard,
        });  

    } catch (error) {
        console.log(error);
        res.status(400).json({
            showDashboardError: "No fue posible cargar el tablero.",
        });
    }
}

export {
    newDashboard,
    removeDashboard,
    getDashboards,
    showDashboard,
}