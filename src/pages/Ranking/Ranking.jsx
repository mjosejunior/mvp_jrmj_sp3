
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import rankingEstablishmentDetails from '../../mock-data/mockSearchResults.json'; 
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';



function Ranking() {
  const restaurants = rankingEstablishmentDetails;
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const establishment = rankingEstablishmentDetails.find(item => item.id === parseInt(id));
    setDetails(establishment);
  }, [id]);


  const breadcrumbSteps = [
    { title: 'Home', link: '/' },
    { title: 'Ranking' }, 
    { title: details?.name } 
  ];
  const handleCardClick = (restaurantId) => {
    navigate(`/establishment/${restaurantId}`);
  };
  return (
    <div className="page-container">
     <Breadcrumb steps={breadcrumbSteps} /> 
     <h1>Os 100 Melhores Restaurantes do Brasil</h1>
      <p>Confira nossa lista dos 100 melhores restaurantes do Brasil:</p>
      <p>segundo o ranking da EXAME 2023</p>      
      <ul>
        {restaurants.map((restaurant) => (
          <Link
            to={`/establishment/${restaurant.id}`} 
            key={restaurant.id}
            style={{ textDecoration: 'none' }}
          >
            <Card
             title={`Restaurante: ${restaurant.name}`}
             description={`Estado: ${restaurant.estado}`}
             children={`Ranking: ${restaurant.id}`}
             
              onClick={() => handleCardClick(restaurant.id)} 
              
            />
          </Link>
        ))}
      </ul>
      <p>
        Fonte:{' '}
        <a
          href="https://exame.com/casual/os-100-melhores-restaurantes-do-brasil-segundo-o-ranking-da-exame/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://exame.com/casual/os-100-melhores-restaurantes-do-brasil-segundo-o-ranking-da-exame/
        </a>
      </p>
    </div>
  );
}

export default Ranking;