import pool from "../../services/mysqlDB/mysqlConn.js";
import dashboardInstance from "./model.js";
import {v4 as uuidv4} from "uuid";

const newDashboard = async (req, res) => {
   
    const newUuid = uuidv4();

    try {
        const resultD = await dashboardInstance.insertNewDashboard(newUuid, req.body.email, req.body.name, req.body.description);
        const resultL = await dashboardInstance.insertLabel(newUuid, req.body.labels);
        res.status(201).json({
            resultD,
            resultL,
        });

    } catch (error) {
        console.log(error); // log about the error
        res.status(400).json({
            newDashboardsError: "Hubo error al crear el tablero o insertar las etiquetas, intente más tarde.",
        });
    }
}

const removeDashboard = async (req, res) => {
    
    try {
        const result = await dashboardInstance.deleteDashboard(req.params.uuid, req.body.email);
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

    const text = `CALL p_getDashboardXLabel(?)`;

    const values = [req.params.email];
    
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
    
    const text = `SELECT d.dsb_uuid, d.usr_email, d.dsb_name, d.dsb_description, dxl.lbl_id 
                  FROM dashboard d 
                  INNER JOIN dashboard_x_label dxl ON d.dsb_uuid = dxl.dsb_uuid 
                  WHERE d.dsb_uuid = ?`;
                  
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

const editDashboard = async (req, res) => {
    //get infor del tablero
    const { name, description } = req.body 
    const values = [name, description, req.params.uuid]
    const message = dashboardInstance.editDashboard(values);
    res.status(204).json({
        message: message,
    });
}

export {
    newDashboard,
    removeDashboard,
    getDashboards,
    showDashboard,
    editDashboard,
}