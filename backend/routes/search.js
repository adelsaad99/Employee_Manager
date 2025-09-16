const express = require('express');
const router = express.Router();
const Fuse = require('fuse.js'); // For fuzzy search
const Employee = require('../models/Employee');

// GET search employees
router.get('/', async (req, res) => {
  try {
    const { q } = req.query; // Get search query from request
    if (!q) return res.json([]); // Return empty array if no query

    const employees = await Employee.find(); // Fetch all employees
    const fuse = new Fuse(employees, {
      keys: ['fullName', 'position', 'department', 'email'], // Fields to search
      threshold: 0.4 // Fuzzy search sensitivity
    });

    const result = fuse.search(q).map(r => r.item); // Get matching employees
    res.json(result); // Send search results
  } catch (err) {
    console.error("GET /api/search error:", err); // Log server errors
    res.status(500).json({ error: "Server error" }); // Return server error
  }
});

module.exports = router; // Export router
