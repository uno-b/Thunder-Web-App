import assert from 'assert';
import dotenv from 'dotenv';

import connectDB from '../config/db.js';
global.assert = assert;

// Connect the DB before all tests
before(async () => {
  dotenv.config();
  await connectDB();
});
