import { Router } from "express";
import { methods as pictureController } from "../controllers/picture.controller.js";

const router = Router();

router.get("/get", pictureController.get);
router.get("/get/:fileName", pictureController.find);
router.get("/download/:fileName", pictureController.download);

export default router;
