require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const employeeRoutes = require('./routes/employees'); 
const searchRoutes = require('./routes/search');      

const app = express();

// Middleware
app.use(cors());          
app.use(express.json());  

// Connect to MongoDB Atlas
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

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
