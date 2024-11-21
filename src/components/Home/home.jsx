import { Card, Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import "./home.css"
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  const { user } = useAuth();

 
      return (
      <>
      <h5 className="welcome">Bienvenido {user.email}!</h5>
      <section>
        <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="img-carousel"
              src="/assets/imagen1.jpg"
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
              src="/assets/imagen2.jpg"
              alt="Store2"
            />
            <Carousel.Caption>
              <h3>Nuestro Nuevo Local</h3>
              <p>Ya abrio sus puertas, Te esperamos!!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <div>
        <Container>
          <h2 className="my-4 text-center">La historia de nuestra empresa</h2>
          <Row className="my-4 justify-content-md-evenly">
              <Col md={4} xs lg="2">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" 
                  src="/assets/ecommerce.jpg" 
                  alt="Mujer de compras"/>
                </Card>
              </Col>
              <Col className="" md={{ span: 4, offset: 2 }}>
                <div >
                <strong>StudioChic</strong> es una empresa familiar que comenzó su trayectoria en el año 2010 como un pequeño comercio virtual, vendiendo a familiares y amigos. Con el tiempo, hemos crecido y actualmente contamos con varios locales distribuidos en diferentes barrios del Gran Buenos Aires, así como también en los shoppings más reconocidos de la provincia de Buenos Aires.
                </div>
              </Col>
          </Row>
            <Row className="my-4 justify-content-md-evenly">
              <Col className="" md={{ span: 4, offset: 0 }}>
                <div className="mr-5">
                Desde el 2017, hemos ampliado nuestra oferta para incluir una amplia gama de productos, desde maquillajes hasta perfumes importados de las principales marcas del mercado. Nos enorgullece decir que ofrecemos precios altamente competitivos en todos nuestros productos, lo que significa que puedes encontrar todo lo que necesitas a un precio asequible.
                </div>
              </Col>
              <Col md={4} xs lg="2">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="/assets/perfumes.jpg" alt="productos de higiene y perfumeria"/>
                </Card>
              </Col>
            </Row>
            <Row className="my-4 justify-content-md-evenly">
              <Col md={4} xs lg="2">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="/assets/compras.jpg" alt="compras virtuales"/>
                </Card>
              </Col>
              <Col className="" md={{ span: 4, offset: 2 }}>
                <div>
                En nuestra tienda, siempre buscamos ofrecer lo mejor a nuestros clientes. Por eso, estamos felices de anunciar que nuestra última novedad es la implementación de nuestra tienda virtual. Ahora puedes comprar desde la comodidad de tu hogar y disfrutar de la misma calidad y atención personalizada que ofrecemos en nuestra tienda física. ¡No esperes más y descubre todas las ventajas que nuestra tienda virtual tiene para ti!
                </div>
              </Col>
          </Row>
          </Container>
   
        </div> 
      </section>
       
      </>

    );
};

export default Home;