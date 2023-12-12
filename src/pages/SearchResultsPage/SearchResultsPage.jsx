import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import mockSearchResults from '../../mock-data/mockSearchResults.json';
import './SearchResultsPage.css';

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const results = mockSearchResults.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.estado.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  }, [searchTerm]);

  const breadcrumbSteps = [
    { title: 'Home', link: '/' },
    { title: 'Resultados da Pesquisa' }
  ];

  return (
    <div className="page-container">
      <Breadcrumb steps={breadcrumbSteps} />
      <div className="search-results-page">
        <h2>Resultados da Pesquisa</h2>
        {searchResults.length > 0 ? (
          searchResults.map(result => (
            <Link to={`/establishment/${result.id}`} key={result.id} style={{ textDecoration: 'none' }}>
              <Card 
              
              title={`Restaurante: ${result.name}`}
             description={`Estado: ${result.estado}`}
             children={`Ranking: ${result.id}`}
              />

            </Link>
          ))
        ) : (
          searchTerm ? 
            <p>Nenhum resultado encontrado para "{searchTerm}"</p> : 
            <p>Por favor, insira um termo de busca.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;
