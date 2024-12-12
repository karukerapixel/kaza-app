import { Link } from 'react-router-dom';
import { FooterBloc, FooterBlocBottom, FooterContainer, FooterCopy, FooterWrapper } from './style';
import footerLinks from '../../data/footerLinks.json';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {footerLinks.map((element, index) => (
          <FooterBloc key={index}>
            <h2>{element.title}</h2>
            <ul>
              {element.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </FooterBloc>
        ))}
      </FooterContainer>
      <FooterCopy>
        <FooterBlocBottom>
          <p>© 2024 Kaza, Inc.</p>
          <ul>
            <li><Link to={'/'}>Confidentialité</Link> </li>
            <li><Link to={'/'}>Conditions générales</Link></li>
            <li><Link to={'/'}>Plan du site</Link></li>
            <li><Link to={'/'}>Fonctionnement du site</Link></li>
            <li><Link to={'/'}>Info sur l'entreprise</Link></li>
          </ul>
        </FooterBlocBottom>
        <FooterBlocBottom>
          <button>Français</button>
          <button>Euro</button>
          <ul>
            <li><Link to={'/'}>Instagram</Link></li>
            <li><Link to={'/'}>Facebook</Link></li>
            <li><Link to={'/'}>Twitter</Link></li>
          </ul>
        </FooterBlocBottom>
      </FooterCopy>
    </FooterWrapper>
  );
};

export default Footer;
