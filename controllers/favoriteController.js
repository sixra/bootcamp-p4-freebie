import Favorite from "../models/Favorite.js";

export const findFavorite = async (req, res) => {
  //Find Favorite information inside Favorite Collection by Item ID

  Favorite.find({ itemId: req.body.itemId }).exec((err, favorite) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favoriteNumber: favorite.length });
  });
};

export const favorited = async (req, res) => {
  // Find Favorite Information inside Favorite Collection by Item Id , userFrom
  Favorite.find({ itemId: req.body.itemId, userFrom: req.body.userFrom }).exec(
    (err, favorite) => {
      if (err) return res.status(400).send(err);

      //How can we know if I already favorite this movie or not ?
      let result = false;
      if (favorite.length !== 0) {
        result = true;
      }

      res.status(200).json({ success: true, favorited: result });
    }
  );
};

export const addToFavorite = async (req, res) => {
  // Save the information about the item or user Id  inside favorite collection
  const favorite = new Favorite(req.body);
  console.log(req.body);
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

// export const getFavoritedItem = async (req, res) => {
//   const items = Favorite.find({ userFrom: req.body.userFrom });

//   items.exec((err, favorites) => {
//     if (err) return res.status(400).send(err);
//     return res.status(200).json({ success: true, favorites });
//   });
// };

export const getFavoritedItem = async (req, res) => {
  console.log(req.body);
  // const items = await Favorite.find({ userFrom: req.body.userFrom })
  const favorites = await Favorite.find({ userFrom: req.body.userFrom }).exec();
  // .then((favorites) => {
  res.status(200).json({ success: true, favorites });
  // })
  // .catch((error) => res.status(400).send(error));
  // console.log(favorites);
};