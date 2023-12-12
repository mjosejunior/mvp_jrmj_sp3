
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Blog from '../../components/Blog/Blog'; 
import Button from '../../components/Button/Button';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import establishmentDetails from '../../mock-data/mockRestaurante.json';
import rankingEstablishmentDetails from '../../mock-data/mockSearchResults.json'; 
import './EstablishmentDetailsPage.css';

function EstablishmentDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const establishment = establishmentDetails.find(item => item.id === parseInt(id));
    setDetails(establishment);
  }, [id]);

  const handleBackClick = () => {
    navigate(-1); 
  };

  const isRankingDetail = rankingEstablishmentDetails.some(item => item.id === parseInt(id));

  const breadcrumbSteps = [
    { title: 'Home', link: '/' },
    { title: 'Ranking', link: '/ranking' }, 
    { title: isRankingDetail ? details?.name : details?.title } 
  ];

  return (
    <div className="page-container">
      <Breadcrumb steps={breadcrumbSteps} />
      {details ? (
        <div className="blog-container">
          <Blog title={details.title} details={details.details} imageUrl={details.imageUrl} address={details.address} />
        </div>
      ) : (
        <div>Loading... Página não encontrada</div>
      )}
      <Button onClick={handleBackClick}>Voltar</Button>
    </div>
  );
}

export default EstablishmentDetailsPage;
