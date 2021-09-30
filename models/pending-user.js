import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create Schema
const PendingUserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

const pendingUser = mongoose.model("pending-users", PendingUserSchema);

export default pendingUser;
