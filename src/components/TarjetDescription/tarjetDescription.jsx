import { Button, Card, Spinner } from "react-bootstrap"
import { useEffect, useState } from "react";
import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import { useCartContext } from '../../contexts/CartContext.jsx';

import React from "react";
import ItemCount from "../ItemCount/itemCount.jsx";


const tarjetDescription = () => {

  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { addProduct } = useCartContext()
  const [goToCart, setGoToCart] = useState(false)

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

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(productos, quantity);
  }
  return (
    <>
    <NavLink to={`/products`} >
      ...Todos Los Productos
    </NavLink>
    {
      goToCart 
      ? <Link to='/cart'> Terminar Compra</Link>
      :<ItemCount initial ={1} stock={5} onAdd={onAdd} />
    }

    <Card>
        <Card.Img src={productos.image} />
        <Card.Body>
            <Card.Title>{productos.title}</Card.Title>
            <Card.Text> {productos.description}</Card.Text>
            <Card.Text> {productos.category}</Card.Text>
            <Card.Text> {productos.rating.rate}</Card.Text>
            <Card.Text> $ {productos.price}</Card.Text>
         </Card.Body>
      </Card>
      
    </>
  )
}

export default tarjetDescription