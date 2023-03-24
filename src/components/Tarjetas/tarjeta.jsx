import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./tarjetas.css"

const tarjetas = ({ productos }) => {
  return (
    <Link to={`${productos.id}`}>
      <Card>
        <Card.Img src={productos.image} />
          <Card.Body>
            <Card.Title>{productos.title}</Card.Title>
            <Card.Text> $ {productos.price}</Card.Text>
          </Card.Body>
      </Card>
    </Link>
    )
}

export default tarjetas;