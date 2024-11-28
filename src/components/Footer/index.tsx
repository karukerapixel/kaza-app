import React from 'react';
import { FooterBottom, FooterBottomBloc, FooterTop, FooterTopBloc, FooterWrapper } from './style';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterTopBloc>
          <h2>Assistance</h2>
          <ul>
            <li>Centre d'aide</li>
            <li>Assistance handicap</li>
            <li>Options d'annulation</li>
            <li>J'ai un problème de voisinage</li>
          </ul>
        </FooterTopBloc>
        <FooterTopBloc>
          <h2>Accueil des voyageurs</h2>
          <ul>
            <li>Mettez votre logement sur Kaza</li>
            <li>Ressource pour les hôtes</li>
            <li>Forum de la communauté</li>
            <li>Hébergement responsable</li>
            <li>Participez à un cours gratuit sur l'accueil des voyageurs</li>
            <li>Trouver un co-hôte</li>
          </ul>
        </FooterTopBloc>
        <FooterTopBloc>
          <h2>Airbnb</h2>
          <ul>
            <li>Newsroom</li>
            <li>Nouvelles fonctionnalités</li>
            <li>Carrières</li>
            <li>Investisseurs</li>
            <li>Cartes cadeaux</li>
          </ul>
        </FooterTopBloc>
      </FooterTop>
      <FooterBottom>
        <FooterBottomBloc>
          <p>© 2024 Airbnb, Inc.</p>
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
