import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import agentRoutes from './routes/agentRoutes';
import authRoutes from './routes/authRoutes';
import delayRoutes from './routes/delayRoutes';
import hospitalRoutes from './routes/hospitalRoutes';
import sampleRoutes from './routes/sampleRoutes';
import { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/api/agents', agentRoutes);
app.get('/api/auth', authRoutes);
app.get('/api/delays', delayRoutes);
app.get('/api/hospitals', hospitalRoutes);
app.get('/api/samples', sampleRoutes);


app.get('/', (res: Response) => {
  res.status(200).json({ message: 'Sample Tracking API is up and running!' });
});
// Database connection
mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});