import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/index.routes.js';

export const app = express();
const whitelist = ['http://localhost:5173'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Frontend unauthorized'));
    }
  },
};
app.use(cors(options));
// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import './utils/auth/index.js';
// API - Routes
app.use(userRoutes);

app.get('/', async (req, res) => {
  res.send('Platzi laboratio Autenticación con Node.js');
});
