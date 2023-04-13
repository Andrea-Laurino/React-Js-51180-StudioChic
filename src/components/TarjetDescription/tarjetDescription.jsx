import { Card, Spinner } from "react-bootstrap"
import { useEffect, useState } from "react";
import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import { useCartContext } from '../../contexts/CartContext.jsx';
import Btn from '../Btn/button.jsx'
import ItemCount from "../ItemCount/itemCount.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from '../../../db/firebase-config.js'
import "./tarjetDescription.css"



const tarjetDescription = () => {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const { addProduct } = useCartContext()
  const [goToCart, setGoToCart] = useState(false)
  const { id } = useParams();
  const queryDoc = doc(db, "products", id);
  const [cart, setCart] = useState([]);


  const uploadToLocal = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  }

  const downloadToLocal = (key) => {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
      console.error('Error retrieving from local storage:', error);
      return null;
    }
  }

  const addToCart = (product, quantity) => {
    const itemIndex = cart.findIndex(item => item.id === product.id);
    if (itemIndex === -1) {
      // El producto no se encuentra en el carrito, lo agregamos
      const newItem = {...product, quantity};
      setCart([...cart, newItem]);
    } else {
      // El producto ya está en el carrito, actualizamos la cantidad
      const newCart = [...cart];
      newCart[itemIndex].quantity += quantity;
      setCart(newCart);
    }
  };

  useEffect(() => {
    const cartData = downloadToLocal('cart');
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  useEffect(() => {
    uploadToLocal('cart', cart);
  }, [cart]);

  const getProductId = async () => {
    try {  
      const productId = await getDoc(queryDoc)
      setProductos({id: productId.id, ...productId.data()})
      setLoading(false);
    } catch (error) {
      setProductos(null);
    };
  }

  
   useEffect(() => {
    getProductId();
    addProduct();
  }, []);

  if (!productos) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return (
        <div>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
            <Spinner animation="grow" size="sm" />
        </div>
    )
  }
 


  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart(productos, quantity);
  }
  return (
    <>
    <NavLink to={`/products`} >
        <Btn texto="Todos Los Productos"/>
    </NavLink>
    <div className="tarjeta">
      <Card className="product">
        <Card.Img src={productos.image} />
        <Card.Body>
            <Card.Title>{productos.title}</Card.Title>
            <Card.Text> {productos.description}</Card.Text>
            <Card.Text> {productos.category}</Card.Text>
            <Card.Text> $ {productos.price}</Card.Text>
         </Card.Body>
      </Card>
       <div className="contador">
          {
            goToCart 
            ? <Link to='/cart'> <Btn texto="Terminar Compra"/></Link>
            :<ItemCount initial ={1} stock={5} onAdd={onAdd} />
          }
      </div>
    </div>
      
    </>
  )
}

export default tarjetDescription