import mongoose from "mongoose";
import PendingUser from "../models/pending-user.js";
import User from "../models/user.js";

export const activateUser = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { hash } = req.params;
  try {
    const user = await PendingUser.findOne({ _id: hash });
    if (!user) {
      throw new Error("No pending user found with the provided hash");
    }

    const newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });

    await user.deleteOne({ session });
    await newUser.save({ session });
    await session.commitTransaction();

    res.json({
      message: `User ${hash} has been activated`,
    });
  } catch (err) {
    await session.abortTransaction();
    res
      .status(422)
      .send({ message: "User cannot be activated!", error: err.message });
  } finally {
    session.endSession();
  }
};
