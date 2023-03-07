import React from 'react';
import Card from '../../Components/Card';
import './style.css';
import DataLayer from '../../Components/DataLayer';
import Data from '../../services/data'
import FormattedItems from './FormattedItems';
const Home = () => {

  const [products, setProducts] = React.useState([])
  //let [items, setItems] = React.useState([])
  React.useEffect(() => {   
        setProducts(Data)  
    
    
    //!-----------------------------------------------------------------
   //datalayer
  const runDataLayer = ()=>{   
    console.log('Disparou ' + FormattedItems)
     DataLayer.push({
       'ecommerce': {
         'items':FormattedItems
       },
       'event': 'view_item_list'
     }) 
 
 }
 runDataLayer()
   

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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

    
            
          }

          {
            products.map((product) => {
              return (
                <>
                  <Card product={product} key={product.id} />

                </>
              )
            })
          }

        </div>
      </section>
    </>
  );
};
export default Home;
