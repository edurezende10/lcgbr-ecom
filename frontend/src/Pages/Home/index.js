import Card from '../../Components/Card';
import './style.css';
const Home = () => {
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};
export default Home;
