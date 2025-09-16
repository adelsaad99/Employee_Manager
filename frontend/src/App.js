import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import SearchBar from './components/SearchBar';
import { getEmployees, deleteEmployee } from './services/api';
import './styles/global.css';
import './styles/SearchBar.css';

function App() {
  const [employees, setEmployees] = useState([]);         // All employees from backend
  const [searchResults, setSearchResults] = useState([]); // Filtered employees from search
  const [editingEmployee, setEditingEmployee] = useState(null); // Employee being edited

  // Fetch employees on mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
      setSearchResults(res.data);
    } catch (err) {
      console.error("Fetch employees error:", err);
      alert("Failed to fetch employees. Check console for details.");
    }
  };

  // Handle editing an employee
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  // Handle deleting an employee
  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id); // Call backend
      // Remove from state
      setEmployees(employees.filter(e => e._id !== id));
      setSearchResults(searchResults.filter(e => e._id !== id));
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to delete employee");
    }
  };

  return (
    <div className="App">
      <h1>Employee Manager</h1>

      {/* Employee Form */}
      <section className="form-section">
        <EmployeeForm
          editingEmployee={editingEmployee}
          onAdd={(emp) => {
            if (editingEmployee) {
              // Replace the updated employee in state
              setEmployees(employees.map(e => e._id === emp._id ? emp : e));
              setSearchResults(searchResults.map(e => e._id === emp._id ? emp : e));
              setEditingEmployee(null);
            } else {
              // Add new employee
              setEmployees([...employees, emp]);
              setSearchResults([...searchResults, emp]);
            }
          }}
        />
      </section>

      {/* Search Bar */}
      <section className="search-section">
        <SearchBar
          employees={employees}
          onSearch={results => setSearchResults(results)}
        />
      </section>

      {/* Employee List */}
      <section className="table-section">
        <EmployeeList
          employees={searchResults}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </section>
    </div>
  );
}

export default App;
