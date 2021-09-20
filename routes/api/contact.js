import express from "express";
import { contactEmailSend } from "../../controllers/ContactController.js";

const router = express.Router();

// Handle contact us post request
router
  .route('/')
  .post(contactEmailSend);

export default router;