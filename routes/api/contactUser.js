import express from "express";
import { contactUserEmailSend } from "../../controllers/ContactUserController.js";

const router = express.Router();

router
  .route('/')
  .post(contactUserEmailSend);

export default router;