import { Router } from "express";
import { methods as locationController } from "../controllers/location.controller.js";

const router = Router();

router.get("/get/:id", locationController.get);

export default router;
