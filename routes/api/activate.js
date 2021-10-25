import { Router } from "express";
import { activateUser } from "../../controllers/activate.js";

const router = Router();

router.get("/:hash", activateUser);

export default router;
