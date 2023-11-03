import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModal from "../models/user.js";
import PendingUser from "../models/pending-user.js";

import { sendConfirmationEmail } from "../models/VerificationEmailSender.js";

dotenv.config();

const SECRET = process.env.JWT_SECRET || "test";

const createToken = (id, expiresIn) => {
  return jwt.sign({ id }, SECRET, { expiresIn });
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModal.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = createToken(user._id, 86400);

    res.status(200).json({ result: user, token });
  } catch (err) {
    next(err);
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  if (!email || !password || !confirmPassword || !firstName || !lastName) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const oldUser = await UserModal.findOne({ email });

    const pendingUser = await PendingUser.findOne({ email });

    if (oldUser || pendingUser)
      return res.status(409).json({ msg: "User already exists" });

    if (password !== confirmPassword)
      return res
        .status(403)
        .json({ msg: "Repeat password has to match password" });

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Something went wrong with bcrypt");

    const hashedPassword = await bcrypt.hash(password, 12);
    if (!hashedPassword)
      throw Error("Something went wrong hashing the password");

    const newUser = new PendingUser({
      firstName: firstName,
      lastName: lastName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const hash = savedUser._id;
    const url = `${process.env.DOMAIN}/api/activate/user/${hash}`;

    await sendConfirmationEmail({
      toUser: savedUser,
      url: url,
      title: "Verify Your E-mail Address",
      text: "Verify Your Email",
      paragraph:
        "You're almost ready to get started. Please click on the button below to verify your email address and enjoy free items in your area!",
    });
    if (!savedUser) throw Error("Something went wrong saving the user");

    const token = jwt.sign({ id: savedUser._id }, process.env.jwtSecret, {
      expiresIn: 3600,
    });

    res.status(200).json({
      msg: "Success!",

      user: {
        id: savedUser.id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.error(error);
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModal.findOne({ email });
    const pendingUser = await PendingUser.findOne({ email });
    if (pendingUser)
      return res
        .status(400)
        .json({ msg: "Please verify your email address first." });
    if (!user)
      return res.status(400).json({ msg: "This email does not exist." });

    const hash = user._id;
    const url = `${process.env.DOMAIN}/user/reset/${hash}`;

    await sendConfirmationEmail({
      toUser: user,
      url: url,
      title: "Reset Your Password",
      text: "Reset Your Password",
      paragraph:
        "Seems like you have forgotten your password. Please click on the button below to update your password and enjoy the access to your account!",
    });
    res.json({ msg: "Re-send the password, please check your email." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { hash } = req.params;
    const user = await UserModal.findOne({ _id: hash });
    const { password } = req.body;
    const passwordHash = await bcrypt.hash(password, 12);

    await UserModal.findOneAndUpdate(
      { _id: hash },
      {
        password: passwordHash,
      }
    );

    res.json({ msg: "Password successfully changed!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, avatar } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const result = await UserModal.findOneAndUpdate(
      { _id: req.userId },
      {
        firstName,
        lastName,
        avatar,
      }
    );

    res.json({ result, token, msg: "Update Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
