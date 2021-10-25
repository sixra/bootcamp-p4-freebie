import express from "express";
const router = express.Router();
import { uploadImage } from "../../middleware/uploadImage.js"
import { uploadController } from "../../controllers/UploadController.js"
// import auth from "../../middleware/auth"

router.post("/upload_avatar", uploadImage, uploadController)

export default router;