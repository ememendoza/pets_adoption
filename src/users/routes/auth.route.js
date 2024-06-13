import { Router } from "express";
import { methods as authController } from "../controllers/auth.controller.js";

const router = Router();

router.get("/", authController.getAuth);
router.post("/post", authController.postAuth);
router.get("/login", authController.getByData);

export default router;
