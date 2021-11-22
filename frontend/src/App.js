import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
