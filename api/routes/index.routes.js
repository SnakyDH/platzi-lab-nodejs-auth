import { Router } from 'express';
import {
  viewUser,
  updateUser,
  deleteUser,
  signUp,
  logIn,
} from '../controllers/user.js';
const userRoutes = Router();

// todo: Almancenar el password de forma segura
userRoutes.post('/api/v1/signUp', signUp);
// todo: generar un token jwt seguro para la sesión del usuario
userRoutes.post('/api/v1/logIn', logIn);
// todo guide import { body, check, validationResult } from 'express-validator';
userRoutes.get(
  '/api/v1/profile/:id',
  // todo: Validación y sanitización de los datos de entrada

  // todo: Ver información del usuario actual según la sesión del token JWT
  viewUser
);

userRoutes.put(
  '/api/v1/profile/:id',
  // todo: Validación y sanitización de los datos de entrada

  // todo: Actualizar información usuario según la sesión del token JWT
  updateUser
);

userRoutes.delete(
  '/api/v1/profile/:id',
  // todo: Validación y sanitización de los datos de entrada

  // todo: Eliminar el usuario actual según la sesión del token JWT
  deleteUser
);
export { userRoutes };
