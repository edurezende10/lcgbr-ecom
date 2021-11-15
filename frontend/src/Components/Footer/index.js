import React from 'react';
import LogoTitle from '../LogoTitle/index';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer--container">
        <div className="footer--text__container">
          <LogoTitle />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            maxime laborum numquam suscipit! Dolorem soluta explicabo voluptate,
            
          </p>
        </div>
        <ul className="footer--links__container">
          <li className="footer--links footer--links__active ">
            Institucional
          </li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        <ul className="footer--links__container">
          <li className="footer--links footer--links__active ">
            sobre
          </li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
