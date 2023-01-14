import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/User.js';
import ObjectId from 'mongoose';
import { encrypt, matching } from '../utils/encrypt.js';
import { config } from '../config/config.js';

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
    const payload = {
      sub: user.id,
    };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
    res.status(201).json({ username: user.username, token });
  } catch (error) {
    console.error(`[LogIn]: ${error}`);
    return res.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
};

const viewUser = async (req, res) => {
  try {
    const tokenArray = req.headers.authorization.split(' ');
    const payload = jwt.verify(tokenArray[1], config.jwtSecret);
    const id = payload.sub;
    const user = await UserModel.findById(id);
    res.status(200).json({ username: user.username });
  } catch (error) {
    console.error(`[ViewUser]: ${error}`);
    return res.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const tokenArray = req.headers.authorization.split(' ');
    const payload = jwt.verify(tokenArray[1], config.jwtSecret);
    const id = payload.sub;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const { username, password } = req.body;
    const encryptedPassword = await encrypt(password);
    await UserModel.updateOne(
      { _id: id },
      { username, password: encryptedPassword }
    );
    res.status(202).json({ msg: `User updated: ${username}` });
  } catch (error) {
    console.error(`[UpdateUser]: ${error}`);
    return res.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const tokenArray = req.headers.authorization.split(' ');
    const payload = jwt.verify(tokenArray[1], config.jwtSecret);
    const id = payload.sub;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await UserModel.deleteOne({ _id: id });
    res.status(202).json({ msg: 'user deleted' });
  } catch (error) {
    console.error(`[DeleteUser]: ${error}`);
    return res.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
};

export { viewUser, updateUser, deleteUser, signUp, logIn };
