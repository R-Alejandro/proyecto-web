import { newDashboard, showDashboard, getDashboards, removeDashboard } from "./controller.js"
import { session } from "../../middleware/index.js";
import { Router } from "express";

const check = session.checkSession;
const router = Router();

//provisional
router.get('/new', (req, res) => {
    res.render('createDashboard')
})
router.post('/new', check, newDashboard);
router.get('/get/:email', getDashboards);
router.get('/:uuid', showDashboard);
router.get('/delete/:uuid', removeDashboard);

export default router;