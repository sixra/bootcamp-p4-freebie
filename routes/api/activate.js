import { Router } from "express";
import { activateUser } from "../../controllers/activate.js";

const router = Router();

router.post("/:hash", activateUser);

export default router;
