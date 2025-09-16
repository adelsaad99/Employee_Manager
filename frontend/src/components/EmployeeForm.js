import React, { useState, useEffect } from 'react';
import { addEmployee, updateEmployee } from '../services/api';
import '../styles/EmployeeForm.css';

function EmployeeForm({ onAdd, editingEmployee }) {
  // Form state
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(''); // Error message state

  // Prefill form when editing an employee
  useEffect(() => {
    if (editingEmployee) {
      setFullName(editingEmployee.fullName);
      setPosition(editingEmployee.position);
      setDepartment(editingEmployee.department);
      setEmail(editingEmployee.email);
      setError(''); // Clear error when editing
    }
  }, [editingEmployee]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !position || !department || !email) return; // Basic validation

    try {
      setError(''); // Clear previous error
      if (editingEmployee) {
        // Update existing employee
        const res = await updateEmployee(editingEmployee._id, { fullName, position, department, email });
        onAdd(res.data);
      } else {
        // Add new employee
        const res = await addEmployee({ fullName, position, department, email });
        onAdd(res.data);
      }

      // Clear form fields
      setFullName('');
      setPosition('');
      setDepartment('');
      setEmail('');
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to save employee";
      setError(msg); // Show error message from server
      console.error("Failed:", msg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={e => setFullName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={e => setPosition(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={e => setDepartment(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">{editingEmployee ? 'Update' : 'Add'}</button>
      {error && <p className="error-message">{error}</p>} {/* Show inline error */}
    </form>
  );
}

export default EmployeeForm;
