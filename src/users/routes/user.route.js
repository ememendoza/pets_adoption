import { Router } from "express";
import { methods as userController } from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.getUser);
router.post("/post", userController.postUser);

export default router;
