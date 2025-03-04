import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import apiRoutes from './src/routes/index.js';

const app = express();
app.use(express.json());

app.use('/api', apiRoutes)

app.use((err, res, req, next) => {
  console.log(err.stack);
  res.status(500).send('Something went wrong');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});