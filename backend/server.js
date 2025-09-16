require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const employeeRoutes = require('./routes/employees');
const searchRoutes = require('./routes/search');

const app = express();

// Middleware
app.use(cors()); // allow all origins
app.use(express.json()); // parse JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// API routes
app.use('/api/employees', employeeRoutes);
app.use('/api/search', searchRoutes);

// Default route
app.get('/', (req, res) => {
  res.send("Employee Manager Backend is running");
});

// Bind to Render port
const PORT = process.env.PORT || 5000; // Render will set this automatically
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
