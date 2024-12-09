import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import { auth } from './middleware/auth.js';
import axios from 'axios';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('DATABASE CONNECTED'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/auth', authRoutes);

// Protected route for predictions
app.post('/api/predict', auth, async (req, res) => {
    try {
        const { symptoms } = req.body;
        const response = await axios.post('http://localhost:7000/predict', { symptoms });
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Prediction failed' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

