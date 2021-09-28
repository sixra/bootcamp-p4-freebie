import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModal from "../models/user.js";
import PendingUser from "../models/pending-user.js";

import { sendConfirmationEmail } from "../models/VerificationEmailSender.js";

dotenv.config();

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  if (!email || !password || !confirmPassword || !firstName || !lastName ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const oldUser = await UserModal.findOne({ email });

    const pendingUser = await PendingUser.findOne({ email });

    if (oldUser || pendingUser) return res.status(409).send({ msg: "User already exists" });

    if (password !== confirmPassword) return res.status(403).send({ msg: "Repeat password has to match password" });

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Something went wrong with bcrypt");

    const hashedPassword = await bcrypt.hash(password, 12);
    if (!hashedPassword) throw Error("Something went wrong hashing the password");

    const newUser = new PendingUser({
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    await sendConfirmationEmail({
      toUser: savedUser,
      hash: savedUser._id,
    });
    if (!savedUser) throw Error("Something went wrong saving the user");

    const token = jwt.sign({ id: savedUser._id }, process.env.jwtSecret, {
      expiresIn: 3600,
    });

    res.status(200).json({
      msg: "Your registration form is complete. Please check your email address to activate your account!",
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
    // const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
    // const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
    // res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
