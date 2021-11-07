import { newDashboard, showDashboard, getDashboards, removeDashboard, editDashboard, newComponent, removeComponent } from "./controller.js"
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
router.delete('/delete/:uuid', removeDashboard);
router.put('/edit/:uuid', editDashboard);
router.post('/:uuid/new', newComponent);
router.delete('/:uuid/delete', removeComponent);

export default router;