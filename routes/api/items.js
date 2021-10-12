import { Router } from "express";

import {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} from "../../controllers/itemsController.js";

import { auth } from "../../middleware/auth.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", auth, postItem);
router.patch("/:id", auth, updateItem);
router.delete("/:id", auth, deleteItem);

export default router;
