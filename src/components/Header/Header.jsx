
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/logo.png'; 
import './Header.css';

function Header({ onSearch }) {
  return (
    <div className='navbar_container'>
      <img src={logo} alt="FindHerePlace Logo" />
    
      <div header className="header">
      <div className="menu-container"> 
        <div className="logo">
        <Link to="/">
            <img src={logo} alt="FindHerePlace Logo" />
          </Link>
        </div>      
        <nav className="navbar">      
          <Link to="/">Home</Link>
          <Link to="/ranking">Ranking</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/register">Register</Link>
        </nav>
        <div className="navbar-search">
        <SearchBar onSearch={onSearch} />
        </div>      
      </div>
      </div>
    </div>
   
  );
}

export default Header;
