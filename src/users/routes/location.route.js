import { Router } from "express";
import { methods as locationController } from "../controllers/location.controller.js";

const router = Router();

router.get("/", locationController.getLocation);
router.post("/post", locationController.postLocation);

export default router;
