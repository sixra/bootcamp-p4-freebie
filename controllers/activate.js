import PendingUser from "../models/pending-user.js";
import User from "../models/user.js";

export const activateUser = async (req, res) => {
  const { hash } = req.params;
  try {
    const user = await PendingUser.findOne({ _id: hash });
    const newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
    await newUser.save();
    await user.remove();
    res.json({
      message: `User ${hash} has been activated`,
    });
  } catch {
    res.status(422).send("User cannot be activated!");
  }
};
