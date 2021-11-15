import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home'
import Product from './Pages/Product'

function App() {
  return (
    <div className="App">
     <Header/>
{/*      <Home/> */} 
    <Product/>
    <Footer/>
    </div>
  );
}

export default App;
