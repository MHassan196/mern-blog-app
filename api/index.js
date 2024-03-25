import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoutes from '../api/route/user.route.js'
import authRoutes from '../api/route/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        console.log('Database Connected');
    })
    .catch((err) => {
        console.log(err)
    })

const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
