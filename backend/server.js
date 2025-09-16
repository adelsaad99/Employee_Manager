require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const employeeRoutes = require('./routes/employees'); // Employee API routes
const searchRoutes = require('./routes/search');      // Search API routes

const app = express();

// Middleware
app.use(cors());          // Enable CORS
app.use(express.json());  // Parse JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.error(" MongoDB connection error:", err));

// API routes
app.use('/api/employees', employeeRoutes);
app.use('/api/search', searchRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
