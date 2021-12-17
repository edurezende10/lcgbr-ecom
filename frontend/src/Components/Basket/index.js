import React, {useContext} from 'react';
import {CartContext} from '../CartContext';

export const Basket = () => {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc,curr)=> acc+curr.price,0)

  return (
    <div>
      <p>items in cart : {cart.length}</p>
      <br />
      <p>total price : {totalPrice.toFixed(2)}</p>
      <br/>
      
    </div>
  )
}