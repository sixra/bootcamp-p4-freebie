import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  title: {
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
    },
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model("item", ItemSchema);

export default Item;
