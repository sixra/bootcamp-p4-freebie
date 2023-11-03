import mongoose from "mongoose";

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  userFrom: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  itemId: {
    type: String,
  },
  itemTitle: {
    type: String,
  },

  itemCategory: {
    type: String,
  },

  itemImage: {
    type: String,
  },
});

const Favorite = mongoose.model("favorite", favoriteSchema);

export default Favorite;
