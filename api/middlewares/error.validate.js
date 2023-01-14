import express from 'express';
import { body, validationResult } from 'express-validator';
const validateUsername = (req, res, next) => {
  try {
    body('username').not().isEmpty().trim();
  } catch (error) {
    console.log(error);
    next(error);
  }
  console.log('en username');
  next();
};
const validatePassword = (req, res, next) => {
  try {
    body('password').isLength({ min: 6 });
  } catch (error) {
    next(error);
  }
  console.log('en pass');
  next();
};
export { validateUsername, validatePassword };
