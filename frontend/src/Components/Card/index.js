import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { toast } from 'react-toastify';


import './style.css'

function Card(props) {
    const { image, title, price, id } = props.product
    const [cart,setCart] = useContext(CartContext);
    console.log(cart)

  const addToCart = () => {
    const item = {image, title, price, id };
    setCart(currentState => [...currentState, item]);
    toast.success('Produto Adicionado ao carrinho', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      
      draggable: true,
      progress: undefined,
      });
    
  }
    return (
        <div className="Card--container">
            <a className="Card--img__link" href={`/product/${id}`}>
                <img className="Card--img" src={image} alt=" " />
            </a>
            <p className="Card--desc">{title}</p>
            <p className="Card--price">{price}</p>
            <button onClick={addToCart}>Add to cart</button>


            
        </div>
    )
}

export default Card
