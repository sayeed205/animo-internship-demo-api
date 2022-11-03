import User from "../models/userModel.js";
import mongoose from "mongoose";

const isValidID = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

// get all the users
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAT: -1 });

  res.status(200).json(users);
};

// get a single user by id
const getSingleUser = async (req, res) => {
  const { id } = req.params;

  if (!isValidID(id))
    return res.status(404).json({ error: "user id doesn't exist" });

  const user = await User.findById(id);

  if (!user) return res.status(404).json({ error: "user doesn't exist" });

  res.status(200).json(user);
};

// create a new user
const createUser = async (req, res) => {
  const { firstName, lastName, age, country } = req.body;

  try {
    const user = await User.create({ firstName, lastName, age, country });
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// update a existing user

// delete a existing user
const deleteSingleUser = async (req, res) => {
  const { id } = req.params;

  if (!isValidID(id))
    return res.status(404).json({ error: "user id doesn't exist" });

  const user = await User.findByIdAndDelete(id);

  if (!user) return res.status(404).json({ error: "user doesn't exist" });

  res.status(200).json(user);
};

export { createUser, getAllUsers, getSingleUser, deleteSingleUser };
