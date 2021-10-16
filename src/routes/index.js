import { Router } from "express";
import users from "../api/users/routes.js";
import dashboards from "../api/dashboard/router.js";

import auth from "./auth.js";

const router = Router();

//write down here the routes needed, this is a general router
router.use('/users', users);
router.use('/dashboards', dashboards);
router.use('/auth', auth);

export default router;