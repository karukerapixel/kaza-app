import React from 'react';
import { FooterBottom, FooterBottomBloc, FooterTop, FooterTopBloc, FooterWrapper } from './style';
import { Link } from 'react-router-dom';
import footerLinks from '../../data/footer_links.json';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        {footerLinks.map((element, index) => (
          <FooterTopBloc key={index}>
            <h2>{element.title}</h2>
            <ul>
              {element.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </FooterTopBloc>
        ))}
      </FooterTop>
      <FooterBottom>
        <FooterBottomBloc>
          <p>© 2024 Kaza, Inc.</p>
          <ul>
            <li>Confidentialité</li>
            <li>Conditions générales</li>
            <li>Plan du site</li>
            <li>Fonctionnement du site</li>
            <li>Info sur l'entreprise</li>
          </ul>
        </FooterBottomBloc>
        <FooterBottomBloc>
          <button>Français</button>
          <button>Euro</button>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </FooterBottomBloc>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
