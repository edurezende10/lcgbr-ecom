import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainRoutes from './routes';
import { CartProvider } from './Components/CartContext'


function App() {


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
