import { Router } from "express";
import { methods as authController } from "../controllers/auth.controller.js";

const router = Router();

router.get("/get", authController.get);

export default router;
