import React from 'react';
import '../styles/EmployeeList.css';

function EmployeeList({ employees, onDelete, onEdit }) {
  // Show message if no employees
  if (!employees || employees.length === 0) {
    return <p className="no-results">No matching employees found.</p>;
  }

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Position</th>
          <th>Department</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp._id}>
            <td>{emp.fullName}</td>
            <td>{emp.position}</td>
            <td>{emp.department}</td>
            <td>{emp.email}</td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(emp)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(emp._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
