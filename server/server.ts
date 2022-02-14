if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
} 

import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(process.env.DATABASE_URL || '')
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongodb!'))

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({message: 'Hello Server!'});
})

app.listen(8000, () => console.log('The server is runing!'));

