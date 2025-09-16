const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find(); // Fetch all employees from DB
    res.json(employees); // Send the list as JSON
  } catch (err) {
    res.status(500).json({ message: err.message }); // Server error
  }
});

// POST new employee
router.post('/', async (req, res) => {
  const { fullName, position, department, email } = req.body;
  const employee = new Employee({ fullName, position, department, email });

  try {
    const newEmployee = await employee.save(); // Save new employee
    res.status(201).json(newEmployee); // Return created employee
  } catch (err) {
    // Handle duplicate email error
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
    }
    res.status(400).json({ message: err.message }); // Validation error
  }
});

// PUT update employee
router.put('/:id', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.json(updatedEmployee); // Send updated employee
  } catch (err) {
    // Handle duplicate email error on update
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
    }
    res.status(400).json({ message: err.message }); // Validation error
  }
});

// DELETE employee
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted' }); // Confirm deletion
  } catch (err) {
    res.status(500).json({ message: err.message }); // Server error
  }
});

module.exports = router; // Export router
