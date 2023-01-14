import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  dbURI: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};
export { config };
