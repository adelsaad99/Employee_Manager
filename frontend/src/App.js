import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import SearchBar from './components/SearchBar';
import { getEmployees } from './services/api';
import './styles/global.css';
import './styles/SearchBar.css';

function App() {
  const [employees, setEmployees] = useState([]);         // All employees from backend
  const [searchResults, setSearchResults] = useState([]); // Filtered employees from search
  const [editingEmployee, setEditingEmployee] = useState(null); // Employee being edited

  // Fetch employees when component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Fetch all employees from API
  const fetchEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
      setSearchResults(res.data);
    } catch (err) {
      console.error("Fetch employees error:", err);
    }
  };

  // Set employee for editing
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  return (
    <div className="App">
      <h1>Employee Manager</h1>

      {/* Employee Form Section */}
      <section className="form-section">
        <EmployeeForm
          editingEmployee={editingEmployee} // Pass editing employee to form
          onAdd={(emp) => {
            if (editingEmployee) {
              // Replace the updated employee in state
              setEmployees(employees.map(e => e._id === emp._id ? emp : e));
              setSearchResults(searchResults.map(e => e._id === emp._id ? emp : e));
              setEditingEmployee(null); // Clear editing state
            } else {
              // Add new employee
              setEmployees([...employees, emp]);
              setSearchResults([...searchResults, emp]);
            }
          }}
        />
      </section>

      {/* Search Bar Section */}
      <section className="search-section">
        <SearchBar
          employees={employees} 
          onSearch={results => setSearchResults(results)} // Update search results
        />
      </section>

      {/* Employee Table Section */}
      <section className="table-section">
        <EmployeeList
          employees={searchResults} 
          onDelete={id => {
            // Remove employee from state
            setEmployees(employees.filter(e => e._id !== id));
            setSearchResults(searchResults.filter(e => e._id !== id));
          }}
          onEdit={handleEdit} // Pass edit handler
        />
      </section>
    </div>
  );
}

export default App;
