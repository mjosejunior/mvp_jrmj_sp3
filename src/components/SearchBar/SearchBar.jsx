

import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [warning, setWarning] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setWarning("Por favor, insira um termo de busca.");
    } else {
      setWarning('');
    }

    onSearch(value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className={warning ? 'warning-input' : ''}
      />
      {warning && <div className="warning-text">{warning}</div>}
    </div>
  );
}

export default SearchBar;
