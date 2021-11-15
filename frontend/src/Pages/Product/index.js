import React from 'react';
import img from './camiseta.png';
import ButtonAddToCart from '../../Components/ButtonAddToCart';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css';

const index = () => {
  return (
    <div className="product--wrapper">
      <div className="product--text">
        <h2>Camiseta</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A cupiditate
          unde vero? Sunt ex quidem hic ipsa odit sequi culpa corrupti magni,
          soluta eum voluptates laboriosam natus excepturi odio atque. soluta
          eum voluptates laboriosam natus excepturi odio atque. soluta eum
          voluptates laboriosam natus excepturi odio atque.
        </p>
        <div className="product--selectBox__container">
          <h3>Tamanho</h3>
          <select name="select">
            <option value="valor1" selected>
              P
            </option>
            <option value="valor2">M</option>
            <option value="valor3">G</option>
          </select>
        </div>
        <ButtonAddToCart />
      </div>
      <div className="product--img__container">
        <Carousel className="product--img" dynamicHeight="true" >
          <div>
            <img  src={img} />
          </div>
          <div>
            <img src="assets/2.jpeg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default index;
