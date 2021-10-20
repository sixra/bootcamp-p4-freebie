import express from "express";
import { contactUserEmailSend } from "../../controllers/ContactUserController.js";

const router = express.Router();

// Handle contact user post request

router
  .route('/')
  .post(contactUserEmailSend);

export default router;