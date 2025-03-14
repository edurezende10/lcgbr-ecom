import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainRoutes from './routes';
import { CartProvider } from './Components/CartContext';
// imports the Adobe alloy library
import { createInstance } from '@adobe/alloy';;

// creates an instance of the Adobe alloy library
const alloy = createInstance({ name: 'alloy' });

function App() {

  // Ensures the Adobe Web SDK is configured once the app loads
  useEffect(() => {
    alloy('configure', {
        edgeConfigId: 'e5791a2e-4400-477d-907a-03c25ba6be1d', // Replace with actual ID
        orgId: '73D97EE25CCCE8260A495EBD@AdobeOrg',
        debugEnabled: true
    }).then(() => {
        console.log("Alloy.js successfully configured.");
    }).catch(error => {
        console.error("Error configuring Alloy.js:", error);
    });
}, []);

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
