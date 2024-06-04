import { Router } from "express";
import { methods as adoptionController } from "../controllers/adoption.controller.js";

const router = Router();

router.get("/", adoptionController.getAdoption);
router.post("/post", adoptionController.postAdoption);

export default router;
