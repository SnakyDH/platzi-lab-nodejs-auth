import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../models/User.js';
import {
  validateUsername,
  validatePassword,
} from '../middlewares/requestErrors.js';
export const signUp = Router();

signUp.post(
  '/',
  // Validación y sanitización de los datos de entrada
  validateUsername,
  check('username').custom(async (username) => {
    const maybeUser = await UserModel.findOne({ username });
    if (maybeUser) {
      throw new Error('username already in use');
    }

    return true;
  }),
  validatePassword,
  //
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password } = req.body;

      const user = await UserModel.create({ username, password });

      return res
        .status(201)
        .json({ username: user.username, createdAt: user.createdAt });
    } catch (error) {
      console.error(`[signUp]: ${error}`);

      return res.status(500).json({
        error: 'An unexpected error happened. Please try again later',
      });
    }
  }
);
