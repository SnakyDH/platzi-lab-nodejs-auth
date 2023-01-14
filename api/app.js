import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/index.routes.js';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API - Routes
app.use(userRoutes);

app.get('/', async (req, res) => {
  res.send('Platzi laboratio Autenticación con Node.js');
});
