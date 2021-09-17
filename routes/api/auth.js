import { Router } from "express";
import { loginUser, registerUser, authUser } from "../../controllers/auth.js";
import { auth } from "../../middleware/auth.js";

const router = Router();

/**
 * @route   POST api/auth/login
 * @desc    Login user
 * @access  Public
 */

router.post("/login", loginUser);

/**
 * @route   POST api/users
 * @desc    Register new user
 * @access  Public
 */

router.post("/register", registerUser);

/**
 * @route   GET api/auth/user
 * @desc    Get user data
 * @access  Private
 */

router.get("/user", auth, authUser);

export default router;
