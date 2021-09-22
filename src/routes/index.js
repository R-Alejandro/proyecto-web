import { Router } from "express";
import users from "../api/users/routes.js";
const router = Router();

//write down here the routes needed, this is a general router
router.use('/users', users);

export default router;