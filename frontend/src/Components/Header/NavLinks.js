import React, {useContext,useState} from 'react';
import { BiCart } from 'react-icons/bi';
import {CartContext} from '../CartContext';
import ModalCart from '../ModalCart';
import './style.css';

const NavLinks = () => {
 const [cart] = useContext(CartContext); 
  const [isModalVisible,setIsModalVisible] = useState(false)

  const showModal = () => {
    
    setIsModalVisible(true);
}
const hideModal = () => {
    
  setIsModalVisible(false);
}


  return (
    <>
      <ul>
        <li>
          <a href="/" className="header__nav__item">
            Home
          </a>
        </li>
        <li>
          <a href="/produtos" className="header__nav__item">
            Produtos
          </a>
        </li>

        <li>
          <a href="/sobre" className="header__nav__item">
            Sobre
          </a>
        </li>
        <li className="cart-icon__container">
          <button onClick={showModal} className="header__nav__item icon-cart">
            <BiCart className="cart-icon" />
          </button>
          <span>{cart.length}</span>
        </li>

        <li>
          <a href="/cadastro" className="header__nav__item link-destaque">
            Cadastro/Login
          </a>
        </li>
      </ul>
     
      
      {isModalVisible? <ModalCart cart={cart} hideModal={hideModal} />: null}

    </>
  );
};

export default NavLinks;
