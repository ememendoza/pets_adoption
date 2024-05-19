import { Router } from 'express';
import { methods as petController } from "../controllers/pet.controller.js";

const router = Router();

router.get("/", petController.getPet);
router.post("/post", petController.postPets);

export default router;