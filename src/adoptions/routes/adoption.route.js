import { Router } from "express";
import { methods as adoptionController } from "../controllers/adoption.controller.js";

const router = Router();

router.get("/get", adoptionController.get);
router.get("/get/:id", adoptionController.find);
router.post("/post", adoptionController.post);

export default router;
