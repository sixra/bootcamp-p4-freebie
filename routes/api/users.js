import express from "express";
const router = express.Router();

import { signin, signup, forgotPassword, resetPassword } from "../../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post('/forgot', forgotPassword)
router.post('/reset/:hash', resetPassword)

export default router;