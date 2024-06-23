import { Router } from "express";
import { insertPlato, obtenerPlatos } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/breakfast", insertPlato);
router.get("/breakfast", obtenerPlatos);

export default router;
