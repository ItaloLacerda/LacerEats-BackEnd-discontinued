import * as dotenv from 'dotenv';

dotenv.config();

export default {
  databaseURL: process.env.DATABASE_URL,
  exposePort: process.env.EXPOSE_PORT,
};
