import 'dotenv/config';
import { app } from './app.js';
import { connect as db } from './database.js';
import { config } from './config/config.js';
db();

const port = config.port || 3000;

const server = app.listen(port, () =>
  console.log(`[Server] Connected to port ${port}`)
);

process.on('unhandledRejection', (err) => {
  console.error(`[Server] An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
