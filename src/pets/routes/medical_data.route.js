import { Router } from "express";
import { methods as medicalDataController } from "../controllers/medical_data.controller.js";

const router = Router();

router.get("/", medicalDataController.getMedicalData);
router.post("/post", medicalDataController.postMedicalData);

export default router;
