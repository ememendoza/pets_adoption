import { Router } from 'express';
import { methods as pictureController } from "../controllers/picture.controller.js";

const router = Router();

router.get("/", pictureController.getPicture);
router.post("/post", pictureController.postPicture);

export default router;
