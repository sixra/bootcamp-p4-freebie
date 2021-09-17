import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    pobox: {
      type: Number,
      required: true,
    },
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model("item", ItemSchema);

export default Item;
