import React, { useState } from 'react';
import Fuse from 'fuse.js'; // For fuzzy search
import '../styles/SearchBar.css';

function SearchBar({ employees, onSearch }) {
  const [query, setQuery] = useState(''); // Search input state

  // Handle search button click
  const handleSearch = () => {
    if (!employees) return; // Safety check if employees list is undefined

    const fuse = new Fuse(employees, {
      keys: ['fullName', 'position', 'department', 'email'], // Fields to search
      threshold: 0.4, // Fuzzy search sensitivity
    });

    // Get filtered results or show all if query is empty
    const results = query ? fuse.search(query).map(r => r.item) : employees;
    onSearch(results); // Pass results back to parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search employees..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state
      />
      <button type="button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
