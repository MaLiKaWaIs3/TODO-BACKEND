const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes = require('./routes/authroutes');
const taskRoutes = require('./routes/taskRoutes');

// Initialize express app
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to TODO API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
