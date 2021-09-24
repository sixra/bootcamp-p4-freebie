import { Router } from "express";

import {
  getItems,
  postItem,
  updateItem,
  deleteItem,
} from "../../controllers/itemsController.js";

import { auth } from "../../middleware/auth.js";

const router = Router();

router.get("/", getItems);
router.post("/", postItem);
router.patch("/:id", auth, updateItem);
router.delete("/:id", auth, deleteItem);

export default router;
