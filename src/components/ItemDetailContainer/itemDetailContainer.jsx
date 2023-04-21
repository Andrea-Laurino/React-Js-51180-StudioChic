import { Card, Spinner } from "react-bootstrap"
import { useEffect, useState } from "react";
import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import Btn from '../Btn/button.jsx'
import ItemCount from "../ItemCount/itemCount.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from '../../../db/firebase-config.js'
import "./itemDetailContainer.css"
import { useCartContext } from "../../contexts/CartContext.jsx";



const itemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const { addProduct } = useCartContext()
  const [goToCart, setGoToCart] = useState(false)
  const { id } = useParams();
  const queryDoc = doc(db, "products", id);
  const [cartUpdated, setCartUpdated] = useState(false);


  const handleCartUpdate = () => {
    setCartUpdated(!cartUpdated);
  };

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
  
  }, []);

  if (!productos) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return (
        <div className="spinner">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
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
            ? 
            <Link to='/cart' onClick={handleCartUpdate}> 
                <Btn texto="Terminar Compra"/>
            </Link>
            :
            <ItemCount initial ={1} stock={5} onAdd={onAdd} />
          }
      </div>
    </div>
      
    </>
  )
}

export default itemDetailContainer