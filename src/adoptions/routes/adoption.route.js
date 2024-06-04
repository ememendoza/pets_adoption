import { Router } from "express";
import { methods } from "../controllers/adoption.controller.js";

const router = Router();

router.get("/");
router.post("/post");

export default router;
