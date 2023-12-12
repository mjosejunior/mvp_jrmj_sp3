import React from 'react';
import Blog from '../../components/Blog/Blog'; 
import restaurantData from '../../mock-data/mockRestaurante.json';
import './BlogPage.css';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

function BlogPage() {
    const breadcrumbSteps = [
        { title: 'Home', link: '/' },
        { title: 'Blog' }, 
      ];
  return (
    <div className="page-container">
     <Breadcrumb steps={breadcrumbSteps} /> 
    <div className="blog-page-container">
      {restaurantData.map((restaurant, index) => (
        <Blog
          key={index}
          title={restaurant.title}
          details={restaurant.details}
          imageUrl={restaurant.imageUrl}
          address={restaurant.address}
        />
      ))}
    </div>
    </div>
  );
}

export default BlogPage;
