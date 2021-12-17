import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainRoutes from './routes';
import { CartProvider } from './Components/CartContext'


function App() {
  /*   const [cartItems,setCartItems] = React.useState([])
    const onAdd = (product) =>{
      const exist = cartItems.find((x)=>x.id === product.id)
      if(exist){
        setCartItems(
          cartItems.map((x)=> x.id === product.id ? {...exist, qty:exist.qty+1}:1)
        )
      }else {
        setCartItems([... cartItems,{...product,qty:1}])
      }
    } */

  return (
    <div className="App">
      <CartProvider>
       

          <Header />
          
          <MainRoutes />
          <Footer />


        

      </CartProvider>
    </div>
  );
}

export default App;
