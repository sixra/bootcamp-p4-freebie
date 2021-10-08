import mongoose from "mongoose";

// Create Schema
const ItemSchema = mongoose.Schema({
  title: String, 
  location: String, 
  category: String, 
  image: Array, 
  description: String, 
  name: String, 
  creator: String, 
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Item = mongoose.model("item", ItemSchema);

export default Item;
