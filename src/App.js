import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderWrapper from './components/HeaderWrapper/HeaderWrapper';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import EstablishmentDetailsPage from './pages/EstablishmentDetailsPage/EstablishmentDetailsPage';
import Ranking from './pages/Ranking/Ranking';
import BlogPage from './pages/BlogPage/BlogPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import TeamPage from './pages/TeamPage/TeamPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderWrapper />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/establishment/:id" element={<EstablishmentDetailsPage />} />
          <Route path="/Ranking" element={<Ranking/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/team" element={<TeamPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
