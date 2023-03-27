import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./tarjetas.css"

const tarjetas = ({ producto }) => {
  return (
    <Link to={`${producto.id}`}>
      <Card>
        <Card.Img src={producto.image} alt={producto.nombre}/>
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text> $ {producto.price}</Card.Text>
          </Card.Body>
      </Card>
    </Link>
    )
}

export default tarjetas;