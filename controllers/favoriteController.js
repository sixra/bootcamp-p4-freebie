import Favorite from "../models/Favorite.js";

export const findFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.find({ itemId: req.body.itemId }).exec();
    res.status(200).json({ success: true, favoriteNumber: favorite.length });
  } catch (err) {
    res.status(400).send(err);
  }
};

export const favorited = async (req, res) => {
  try {
    const favorite = await Favorite.find({
      itemId: req.body.itemId,
      userFrom: req.body.userFrom,
    }).exec();
    let result = false;
    if (favorite.length !== 0) {
      result = true;
    }
    res.status(200).json({ success: true, favorited: result });
  } catch (err) {
    res.status(400).send(err);
  }
};

export const addToFavorite = async (req, res) => {
  const favorite = new Favorite(req.body);
  try {
    const doc = await favorite.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.json({ success: false, err });
  }
};

export const removeFromFavorite = async (req, res) => {
  try {
    const doc = await Favorite.findOneAndDelete({
      itemId: req.body.itemId,
      userFrom: req.body.userFrom,
    }).exec();
    res.status(200).json({ success: true, doc });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
};

export const getFavoritedItem = async (req, res) => {
  try {
    const favorites = await Favorite.find({
      userFrom: req.body.userFrom,
    }).exec();
    res.status(200).json({ success: true, favorites });
  } catch (err) {
    res.status(400).send(err);
  }
};
