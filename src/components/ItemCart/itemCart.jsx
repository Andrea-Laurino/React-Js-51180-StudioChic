import { Button, Card } from 'react-bootstrap'
import './itemCart.css'
import { useCartContext } from '../../contexts/CartContext';



const itemCart = ({ producto }) => {
    const { removeProduct } = useCartContext();
    
  return (
    
      <Card className='itemCart'>
        <Card.Img className='itemCart-img' src={producto.image} alt={producto.nombre}/>
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text> Cantidad: {producto.quantity}</Card.Text>
            <Card.Text> precio u. $ {producto.price}</Card.Text>
            <Card.Text> Subtotal: $ {producto.quantity * producto.price}</Card.Text>
            <Button variant="dark" onClick={() => removeProduct(producto.id)}>Eliminar</Button>
          </Card.Body>
      </Card>
  
  )
}

export default itemCart;