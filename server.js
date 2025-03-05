import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import apiRoutes from './src/routes/index.js';

const app = express();
app.use(express.json());

app.use('/api', apiRoutes)

app.use((err, req, res, next) => {
  console.log(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong!';

  res.status(statusCode).json({ message });  // Fixed: Corrected order of req, res
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});