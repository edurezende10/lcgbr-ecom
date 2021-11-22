import React from 'react';
import Card from '../../Components/Card';
import {getProducts} from '../../services/apiFakeStore'
import './style.css';
const Home = () => {

  const [products,setProducts] = React.useState([])

  React.useEffect(()=>{
    const runApi= async ()=>{
        try {
          const response = await getProducts()
          setProducts(response.data)

          } catch (error) {
          
        }
    }
    runApi()
  },[])


  return (
    <>
      <section className="banner-principal">
        <h1 className="banner-principal__title">NOVIDADES DA SEMANA</h1>
        <p className="banner-principal__slogan">
          o melhor da moda, beleza, bem-estar em um só lugar. Vem ver os looks
          que acabaram de chegar
        </p>
      </section>
      <section >
        <h2 className="shelf__tittle">Produtos</h2>
        <div className="shelf--container">
          { 
            products.map((product)=>{
              console.log(product)
              return <Card product={product} />
            })
          }
         
        </div>
      </section>
    </>
  );
};
export default Home;
