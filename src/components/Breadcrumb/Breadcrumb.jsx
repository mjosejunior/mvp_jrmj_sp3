
import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css'; 

function Breadcrumb({ steps }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {steps.map((step, index) => (
          <li key={index} className={`breadcrumb-item ${index === steps.length - 1 ? 'active' : ''}`}>
            {step.link ? <Link to={step.link}>{step.title}</Link> : step.title}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
