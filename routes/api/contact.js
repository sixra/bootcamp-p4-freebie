import express from "express";
import { contactEmailSend } from "../../controllers/ContactController.js";

const router = express.Router();

router
  .route('/')
  .post(contactEmailSend);

export default router;