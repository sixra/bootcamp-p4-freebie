import express from "express";
import { signin, signup, forgotPassword, resetPassword, updateUser } from "../../controllers/user.js";
import { auth } from "../../middleware/auth.js";

const router = express.Router();
router.post("/signin", signin);
router.post("/signup", signup);
router.post('/forgot', forgotPassword)
router.post('/reset/:hash', resetPassword)
router.patch('/update', auth, updateUser)

export default router;