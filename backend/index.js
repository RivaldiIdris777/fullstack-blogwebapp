import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import userRoutes from './routes/userroute.js'
import authRoutes from './routes/authroute.js'
import postRoutes from './routes/postroute.js'
import commentRoutes from './routes/commentroute.js'
import cookieParser from 'cookie-parser';

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server stared on port ${port}`);    
});

app.use('/api/user', userRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/post', postRoutes);

app.use('/api/comment', commentRoutes);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});