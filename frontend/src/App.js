import './App.css';
import React, { useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainRoutes from './routes';
import { CartProvider } from './Components/CartContext';
/* import { initializeAlloy } from './services/alloy/alloy'; // Import Alloy initialization
 */
function App() {

  /* useEffect(() => {
    initializeAlloy(); // Initialize Alloy.js on app load
  }, []); */

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
