import React from 'react';
import './Card.css';

function Card({ title, description, children }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {children}
      </div>
    </div>
  );
}

export default Card;
