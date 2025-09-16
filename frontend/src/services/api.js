import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Get all employees
export const getEmployees = () => axios.get(`${API_URL}/employees`);

// Add a new employee
export const addEmployee = (data) => axios.post(`${API_URL}/employees`, data);

// Delete an employee by ID
export const deleteEmployee = (id) => axios.delete(`${API_URL}/employees/${id}`);

// Update an employee by ID
export const updateEmployee = (id, data) => axios.put(`${API_URL}/employees/${id}`, data);

// Optional: search employees
export const searchEmployees = (query) => axios.get(`${API_URL}/search?q=${query}`);
