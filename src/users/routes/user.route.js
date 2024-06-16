import { Router } from "express";
import { methods as userController } from "../controllers/user.controller.js";

const router = Router();

router.get("/get/:id", userController.get);
router.post("/post", userController.post);

export default router;
