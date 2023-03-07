import React, {useState,useEffect} from 'react';

export const CartContext = React.createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")|| '[]')

export const CartProvider = (props) => {
  
  
  const [cart, setCart] = useState(cartFromLocalStorage);
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

  return (
    <CartContext.Provider value={[cart,setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}