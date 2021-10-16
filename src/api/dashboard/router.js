import { newDashboard, showDashboard, getDashboards, removeDashboard } from "./controller.js"
import { session } from "../../middleware/index.js";
import { Router } from "express";

const check = session.checkSession;
const router = Router();

router.post('/new', check, newDashboard);
router.get('/', check ,getDashboards);
router.get('/:uuid', check, showDashboard);
router.get('/delete/:uuid', removeDashboard);

export default router;