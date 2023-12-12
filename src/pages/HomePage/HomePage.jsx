import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import home from '../../assets/home.png'; 

function HomePage() {
    return (
        <div className="page-container">
            <h1>Descubra os Melhores Lugares com FindHerePlace</h1>
            <p className="intro-text">
                Bem-vindo à FindHerePlace, a sua plataforma interativa para descobrir os tesouros escondidos da cidade.
                Se você está à procura de novas experiências ou simplesmente quer encontrar um novo local favorito, está no lugar certo.
            </p>
    
           
            <div className="image-container">
                <img src={home} alt="Ranking of the Best Restaurants" />
            </div>
    
            <div className="features-container">
                <h2>Explore Novos Favoritos</h2>
                <p>
                    Navegue pelo nosso <Link to="/map">mapa interativo</Link>, veja avaliações autênticas e descubra uma variedade de estabelecimentos esperando por você.
                </p>
    
                <h2>Avaliações e Recomendações</h2>
                <p>
                    Veja o que está em alta com nossas <Link to="/recommendations">recomendações personalizadas</Link> e partilhe suas próprias experiências com a comunidade.
                </p>
    
                <h2>Conecte-se Com o Local</h2>
                <p>
                    Acompanhe onde seus amigos têm estado e veja os locais recomendados na <Link to="/community">comunidade FindHerePlace</Link>.
                </p>
    
                <h2>Atualizações em Tempo Real</h2>
                <p>
                    Não perca os eventos mais recentes e promoções especiais. Confira o que está acontecendo agora na <Link to="/events">página de Eventos</Link>.
                </p>
            </div>
            
            <p className="call-to-action">
                Pronto para explorar? Junte-se a nós hoje e veja a cidade com novos olhos. <Link to="/register">Cadastre-se agora</Link> e comece sua aventura.
            </p>
        </div>
      );
    }
    
    export default HomePage;
