import { Router } from "express";
const router = Router();

import {
  findFavorite,
  favorited,
  addToFavorite,
  removeFromFavorite,
  getFavoritedItem,
} from "../../controllers/favoriteController.js";

import { auth } from "../../middleware/auth.js";

router.post("/favoriteNumber", findFavorite);
router.post("/favorited", favorited);
router.post("/addToFavorite", addToFavorite);
router.post("/removeFromFavorite", removeFromFavorite);
router.post("/getFavoritedItem", getFavoritedItem);

export default router;
