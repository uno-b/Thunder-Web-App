import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import forumRoutes from './routes/forumRoutes.js';

// Set up the environment variables
dotenv.config();

// Set up the DB
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Allows us to accept JSON in the body
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/forum', forumRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
