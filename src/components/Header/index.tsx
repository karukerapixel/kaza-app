import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbWorld } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';
import { HeaderLogo, HeaderNavBar, HeaderWrapper } from './style';
import SearchBar from '../SearchBar';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo to={'/'}>
        <img src={logo} alt="logo de l'entreprise Kaza" />
      </HeaderLogo>
      <SearchBar />
      <HeaderNavBar>
        <NavLink to={'/'}>Louer mon logement</NavLink>
        <NavLink to={'/'} role={'lang'}>
          <TbWorld />
        </NavLink>
        <NavLink to={'/'} role={'login'}>
          <FiUsers />
        </NavLink>
      </HeaderNavBar>
    </HeaderWrapper>
  );
};

export default Header;
