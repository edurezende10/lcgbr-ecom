import './style.css';
import React from 'react';
import MobileNavegation from './MobileNavegation';
import Navegation from './Navegation';
import img from './logo.png'

const Header = () => {

  return (
    <header className="header">
      <nav className="header-wrapper">
      <div className="logoTitle--container">

       
        <img className="logo" src={img} alt=" "/>



      </div>

        <Navegation />
        <MobileNavegation />
      </nav>
    </header>
  );
};
export default Header;
