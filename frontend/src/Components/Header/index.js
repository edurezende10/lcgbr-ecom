import './style.css';
import React from 'react';
import MobileNavegation from './MobileNavegation';
import Navegation from './Navegation';
import LogoTitle from '../LogoTitle';

const Header = () => {

  return (
    <header className="header">
      <nav className="header-wrapper">
      <div className="logoTitle--container">
        <LogoTitle/>

      </div>

        <Navegation />
        <MobileNavegation />
      </nav>
    </header>
  );
};
export default Header;
