import { Router } from "express";
import { methods as petController } from "../controllers/pet.controller.js";

const router = Router();

router.get("/get", petController.get);
router.get("/get/:id", petController.find);
router.post("/post", petController.post);

export default router;
