import { Router } from "express";
import { methods as medicalDataController } from "../controllers/medical_data.controller.js";

const router = Router();

router.get("/get", medicalDataController.get);
router.get("/get/:id", medicalDataController.find);

export default router;
