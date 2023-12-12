import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <div className="page-container">
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre Nós</h4>
          <ul>
            <li><a href="/team">Quem Somos</a></li>
            <li><a href="/team">Nossa Equipe</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <ul>
            <li><a href="/team">Fale Conosco</a></li>
            <li><a href="/team">Suporte</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacidade">Política de Privacidade</a></li>
            <li><a href="/termos">Termos de Serviço</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FindHerePlace. Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="/desenvolvedor">José Matos</a></p>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
