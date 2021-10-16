import pool from "../../services/mysqlDB/mysqlConn.js"
import dashboardInstance from "./model.js"

const newDashboard = async (req, res) => {
   
    try {
        const result = await dashboardInstance.insertNewDashboard(req.user.email, req.body.name);
        console.log(result);
        res.json({
            result,
        });

    } catch (error) {
        throw error;
    }
}

const removeDashboard = async (req, res) => {
    
    try {
        const result = await dashboardInstance.deleteDashboard(req.params, req.user.email);
        console.log(result);

        res.json({
            result,
        });

    } catch (error) {
        throw error;
    }
}

const getDashboards = async (req, res) => {

    const text = "SELECT * FROM dashboard WHERE usr_email = ?";
    const values = [req.user.email];
    
    try {
        const [dashboards] = await pool.query(text, values);
        res.json({
            dashboards
        });

    } catch (error) {
        throw error;
    }

}

const showDashboard = async (req, res) => {
    
    const text = "SELECT * FROM dashboard WHERE dsb_uuid = ?";
    const values = [req.params];

    try {
        const [dashboard] = await pool.query(text, values);
        
        res.json({
            dashboard
        });

    } catch (error) {
        throw error;
    }
}

export {
    newDashboard,
    removeDashboard,
    getDashboards,
    showDashboard,
}