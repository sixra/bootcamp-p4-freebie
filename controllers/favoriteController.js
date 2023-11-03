import Favorite from "../models/Favorite.js";

export const findFavorite = async (req, res) => {
  Favorite.find({ itemId: req.body.itemId }).exec((err, favorite) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favoriteNumber: favorite.length });
  });
};

export const favorited = async (req, res) => {
  Favorite.find({ itemId: req.body.itemId, userFrom: req.body.userFrom }).exec(
    (err, favorite) => {
      if (err) return res.status(400).send(err);

      let result = false;
      if (favorite.length !== 0) {
        result = true;
      }

      res.status(200).json({ success: true, favorited: result });
    }
  );
};

export const addToFavorite = async (req, res) => {
  const favorite = new Favorite(req.body);
  favorite.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

export const removeFromFavorite = async (req, res) => {
  Favorite.findOneAndDelete({
    itemId: req.body.itemId,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
};

export const getFavoritedItem = async (req, res) => {
  const favorites = await Favorite.find({ userFrom: req.body.userFrom }).exec();
  res.status(200).json({ success: true, favorites });
};