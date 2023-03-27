import "./home.css"
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
    return (
      <>
      <section>
          <Carousel>
          <Carousel.Item>
            <img
              className="img-carousel"
              src="src/assets/imagen1.jpg"
              alt="Store1"
            />
            <Carousel.Caption>
              <h2>La Mejor Indumentaria</h2>
              <p>Contamos con nuevas tendencias y todo en Tecnologia</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-carousel"
              src="src/assets/imagen2.jpg"
              alt="Store2"
            />
            <Carousel.Caption>
              <h3>Nuestro Nuevo Local</h3>
              <p>Ya abrio sus puertas, Te esperamos!!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
 
      </>

    );
};

export default Home;