import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { UserModel } from '../models/User.js';
import {
  requestErrorUsername,
  requestErrorPassword,
} from '../middlewares/requestErrors.js';
export const logIn = Router();

logIn.post(
  '/',
  // Validación y sanitización de los datos de entrada
  requestErrorUsername,
  requestErrorPassword,
  async (req, res) => {
    try {
      // todo: Validation with my middlewares
      /*
     const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } */
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });
      if (!user) {
        return res.status(400).json({
          error: 'username or password is incorrect',
        });
      }
      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return res.status(400).json({
          error: 'username or password is incorrect',
        });
      }

      // @todo: generate a JWT token
      const token = 'jwt-token';

      return res.status(201).json({ token, username: user.username });
    } catch (error) {
      console.error(`[signIn]: ${error}`);

      return res.status(500).json({
        error: 'An unexpected error happened. Please try again later',
      });
    }
  }
);
