import { HeaderLogo, HeaderWrapper } from './style';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo to={'/'}>
        <img src={logo} alt="logo du site" />
      </HeaderLogo>
    </HeaderWrapper>
  );
};

export default Header;
