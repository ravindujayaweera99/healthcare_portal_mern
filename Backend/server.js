import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Connect to MongoDB
mongoose.connect(MONGODB_URL)
  .then(() => console.log('Database is connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is Running on Port: ${PORT}`);
})