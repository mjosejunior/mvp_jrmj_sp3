import React from 'react';
import './Blog.css';

function Blog({ title, details, imageUrl, address }) {
  return (
    <div className="blog-container">
      <img className="image" src={imageUrl} alt="Imagem do Restaurante" />
      <h2>{title}</h2>
      <p className="details">{details}</p>
      <p>Endereço: {address}</p>
    </div>
  );
}

export default Blog;
