// User & pendingUser Model
import User from "../models/User.js";
import PendingUser from "../models/pending-user.js";

export const activateUser = async (req, res) => {
  const { hash } = req.params;
  console.log(hash);
  try {
    const user = await PendingUser.findOne({ _id: hash });
    console.log("this is user ", user);
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    console.log("this is newUser ", newUser);
    await newUser.save();
    await user.remove();
    res.json({
      message: `User ${hash} has been activated`,
    });
  } catch {
    res.status(422).send("User cannot be activated!");
  }
};
