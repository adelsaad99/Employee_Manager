const mongoose = require('mongoose');

// Define the schema for an Employee
const EmployeeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },  // Employee's full name
  position: { type: String, required: true },  // Job position
  department: { type: String, required: true }, // Department name
  email: { type: String, required: true }      // Employee's email
});

// Export the Employee model based on the schema
module.exports = mongoose.model('Employee', EmployeeSchema);
