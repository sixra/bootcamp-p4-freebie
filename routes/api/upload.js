import express from "express";
import { uploadImage } from "../../middleware/uploadImage.js"
import { uploadController } from "../../controllers/UploadController.js"

const router = express.Router();
router.post("/upload_avatar", uploadImage, uploadController)

export default router;