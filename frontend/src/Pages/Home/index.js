import React from 'react';
import Card from '../../Components/Card';
import { getProducts } from '../../services/apiFakeStore'
//import DataLayer from '../../Components/DataLayer'
import './style.css';
const Home = () => {

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    const runApi = async () => {
      try {
        const response = await getProducts()
        setProducts(response.data)

      } catch (error) {

      }
    }
    runApi()
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
      {/*     {
            DataLayer.ecommerce
          }
          {
           
            products.map((product) => {

              return (
                <>
                  
                  {
                    DataLayer.ecommerce.impressions.push(
                      {
                        'ecommerce': {
                          'currencyCode': 'EUR',
                          'impressions': [
                            {
                              'name': 'Triblend Android T-Shirt',
                              'id': '12345',
                              'price': '15.25',
                              'brand': 'Google',
                              'category': 'Apparel',
                              'variant': 'Gray',
                              'list': 'Search Results',
                              'position': 1
                            },
                            {
                              'name': 'Donut Friday Scented T-Shirt',
                              'id': '67890',
                              'price': '33.75',
                              'brand': 'Google',
                              'category': 'Apparel',
                              'variant': 'Black',
                              'list': 'Search Results',
                              'position': 2
                            }]
                        }
                      }
                    )
                  }
                </>
              )
            })

          } */}
          {

            products.map((product) => {

              return (
                <>
                  <Card product={product} key={product.id} />
                {/*   {
                    DataLayer.push(
                      {
                        'ecommerce': {
                          'currencyCode': 'EUR',
                          'impressions': [
                            {
                              'name': 'Triblend Android T-Shirt',
                              'id': '12345',
                              'price': '15.25',
                              'brand': 'Google',
                              'category': 'Apparel',
                              'variant': 'Gray',
                              'list': 'Search Results',
                              'position': 1
                            },
                            {
                              'name': 'Donut Friday Scented T-Shirt',
                              'id': '67890',
                              'price': '33.75',
                              'brand': 'Google',
                              'category': 'Apparel',
                              'variant': 'Black',
                              'list': 'Search Results',
                              'position': 2
                            }]
                        }
                      }
                    )
                  } */}
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
