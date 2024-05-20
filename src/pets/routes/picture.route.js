import { Router } from 'express';
import { methods as pictureController } from "../controllers/picture.controller.js";

const router = Router();

router.get("/", pictureController.getPicture);
router.post("/post", pictureController.postPicture);

router.post("/files", pictureController.postBucketPicture);
router.get("/files", pictureController.getBucketPicture);
router.get("/file/:fileName", pictureController.findBucketPicture);
router.get("/downloadFile/:fileName", pictureController.downloadBucketPicture);

export default router;
