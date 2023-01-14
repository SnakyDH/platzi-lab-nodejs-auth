import { validationResult } from 'express-validator';
import { UserModel } from '../models/User.js';
import { encrypt, matching } from '../utils/encrypt.js';

const signUp = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    const maybeUser = await UserModel.findOne({ username });
    if (maybeUser) {
      return res.status(400).json({ error: 'Username already in use' });
    }
    const encryptedPassword = await encrypt(password);
    const user = await UserModel.create({
      username,
      password: encryptedPassword,
    });
    res
      .status(201)
      .json({ username: user.username, createdAt: user.createdAt });
  } catch (error) {
    console.error(`[SignUp] ${error}`);
    res.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
};

const logIn = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    const isPasswordValid = await matching(password, user.password);
    if (!user || !isPasswordValid) {
      return res.status(400).json({
        error: 'username or password is incorrect',
      });
    }
    // todo generate a JWT Token
    const token = 'jwt-token';
    res.status(201).json({ token, username: user.username });
  } catch (error) {
    console.error(`[LogIn]: ${error}`);
    return res.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
};

const viewUser = (req, res) => {
  res.status(200).json({ msj: 'View user' });
};

const updateUser = (req, res) => {
  res.status(200).json({ msj: 'Update user' });
};

const deleteUser = (req, res) => {
  res.status(200).json({ msj: 'Delete user' });
};

export { viewUser, updateUser, deleteUser, signUp, logIn };
