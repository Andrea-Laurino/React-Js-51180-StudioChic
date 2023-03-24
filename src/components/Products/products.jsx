import Tarjetas from "../Tarjetas/tarjeta";
import { Container, Row, Col } from "react-bootstrap"

const Product = ({ productos }) => {
  return (
    <Container className="">
      <Row>
        <Col className="card-container">
          {productos.map((productos) => (
            <Tarjetas key={productos.id} productos={ productos } />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Product; 