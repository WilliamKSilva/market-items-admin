import 'reflect-metadata'
import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json())
app.use(router);

dotenv.config()

mongoose.connect(process.env.DATABASE_URL as string)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Mongodb Connected!'))


export { app };


