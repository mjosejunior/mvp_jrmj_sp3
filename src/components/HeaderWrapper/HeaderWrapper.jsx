import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

function HeaderWrapper() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      navigate('/search'); 
      return;
    }
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return <Header onSearch={handleSearch} />;
}

export default HeaderWrapper;
