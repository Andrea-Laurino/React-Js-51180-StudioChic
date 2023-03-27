import { Button, Card, Spinner } from "react-bootstrap"
import { useEffect, useState } from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";


const tarjetDescription = () => {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProductos = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductos(data);
      setLoading(false);
    } catch (error) {
      setProductos(null);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  if (!productos) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return (
        <div>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />;
            <Spinner animation="grow" size="sm" />
        </div>
    )
  }


  return (
    <>
    <NavLink to={`/products`} >
      ...Todos Los Productos
    </NavLink>
    <Card>
        <Card.Img src={productos.image} />
        <Card.Body>
            <Card.Title>{productos.title}</Card.Title>
            <Card.Text> {productos.description}</Card.Text>
            <Card.Text> {productos.category}</Card.Text>
            <Card.Text> {productos.rating.rate}</Card.Text>
            <Card.Text> $ {productos.price}</Card.Text>
            <Button variant="dark">Comprar</Button>
         </Card.Body>
  </Card>
    </>
  )
}

export default tarjetDescription