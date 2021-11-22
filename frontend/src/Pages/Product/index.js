import React from 'react';
import img from './camiseta.png';
import ButtonAddToCart from '../../Components/ButtonAddToCart';
import {getSingleProduct} from '../../services/apiFakeStore'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import './style.css';

const ProductPage = () => {
  const [product,setProduct]= React.useState([])
  const {id} = useParams()
  React.useEffect(()=>{
    const runApi = async ()=>{
      try {
        const response = await getSingleProduct(id)
        setProduct (response.data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(product)
    runApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  const {title,price,description,image} = product
 
  return (
    <div className="product--wrapper">
      <div className="product--text">
        <h2>{title}</h2>
        <p>
          {description}
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
        <p className="product--price">{
          `R$ ${price}`
          }</p>
        <ButtonAddToCart />
      </div>
      <div className="product--img__container">
        <Carousel className="product--img" dynamicHeight="true" >
          <div>
            <img  src={image} alt="" />
          </div>
          
        </Carousel>
      </div>
    </div>
  );
};

export default ProductPage;
