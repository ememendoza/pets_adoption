import { Router } from "express";
import { methods as certifiedController } from "../controllers/certified.controller.js";

const router = Router();

router.get("/", certifiedController.getCertified);
router.post("/post", certifiedController.postCertified);

export default router;
