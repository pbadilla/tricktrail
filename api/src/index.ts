import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { setupSwagger } from './swaggerConfig';
import userRoutes from './routes/useRoutes';

dotenv.config();  // Load environment variables

const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Initialize Swagger
setupSwagger(app);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
