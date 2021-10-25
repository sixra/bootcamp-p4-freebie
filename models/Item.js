import mongoose from "mongoose";

// Create Schema
const ItemSchema = mongoose.Schema({
  title: String, 
  location: String, 
  category: String, 
  image: {
    type: Array,
    default: [{ base64: "https://live.staticflickr.com/65535/51506026332_c5054675e4_c.jpg"}],
  },
  description: String, 
  name: String, 
  avatar: String,
  email: String,
  creator: String, 
  createdAt: {
    type: Date,
    default: new Date(),
  },
});



const Item = mongoose.model("item", ItemSchema);

export default Item;
