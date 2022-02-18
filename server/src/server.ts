import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const app = express();


mongoose.connect(process.env.DATABASE_URL as string)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Mongodb Connected!'))

app.use(express.json())

app.listen(3000, () => console.log('Server Started!'))