import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        console.log('Database Connected');
    })
    .catch((err) => {
        console.log(err)
    })

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})