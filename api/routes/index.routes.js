import { Router } from 'express';
import { body } from 'express-validator';
import passport from 'passport';
import {
  viewUser,
  updateUser,
  deleteUser,
  signUp,
  logIn,
} from '../controllers/user.js';

const userRoutes = Router();
// body middlewares
userRoutes.use(
  // Validate username
  body('username').not().isEmpty().trim(),
  //Validate password
  body('password').isLength({ min: 6 })
);
userRoutes.post(
  '/api/v1/signUp',
  // * CHECK: Almancenar el password de forma segura
  signUp
);
userRoutes.post(
  '/api/v1/logIn',
  // * CHECK: Crear un JWT con el inicio de sesión
  logIn
);
userRoutes.get(
  '/api/v1/profile',
  passport.authenticate('jwt', { session: false }),
  // * CHECK: Ver información del usuario actual según la sesión del token JWT
  viewUser
);

userRoutes.put(
  '/api/v1/profile',
  passport.authenticate('jwt', { session: false }),
  // * CHECK: Actualizar información usuario según la sesión del token JWT
  updateUser
);

userRoutes.delete(
  '/api/v1/profile',
  passport.authenticate('jwt', { session: false }),
  // * CHECK: Eliminar el usuario actual según la sesión del token JWT
  deleteUser
);
export { userRoutes };
