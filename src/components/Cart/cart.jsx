import { Link} from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext"
import ItemCart from "../ItemCart/itemCart"; 
import './cart.css'
import Btn from '../Btn/button.jsx'
import db from '../../../db/firebase-config.js'
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const Cart = () => {
  const { cart, totalPrice, setCart } = useCartContext();
  const [buyerData, setBuyerData] = useState({})
  const [isValid, setIsValid] = useState(false);
  
  const order = {
    buyer: buyerData && { 'name': buyerData.name || '', 'email': buyerData.email || '', 'phone': buyerData.phone || '', 'adress': buyerData.adress || ''},
    items: cart.map((product) => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity}))
  };
  
  const getOrder = async () => {
    try {
      if (!buyerData.name || !buyerData.email || !buyerData.phone || !buyerData.adress) {
        throw new Error('Por favor, complete todos los campos del formulario.');
      }
      const ordersCollection = collection(db, 'orders');
      await addDoc(ordersCollection, order);
      console.log(order);
      setCart([]);
      setBuyerData({});
    } catch (error) {
      console.error(error);
    }
  };


  const handleSubmit = async (e, buyerData) => {
    e.preventDefault();
    await getOrder(buyerData);
  };

  const onSubmit = (data) => {
    setBuyerData(data);
    setIsValid(!!(buyerData.name && buyerData.adress && buyerData.phone && buyerData.email));
    console.log(isValid);
  };

  // useEffect(() => {
  //   onSubmit();
  //   setIsValid(!!(buyerData.name && buyerData.adress && buyerData.phone && buyerData.email));
  // }, [buyerData]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cartItems.length > 0 && JSON.stringify(cartItems) !== JSON.stringify(cart)) {
      setCart(cartItems);
    }
  }, [cart, setCart]);
    
  
  if (cart.length === 0)
  {return (
      <>
      <div >
        <h4 className="text-center">No hay productos en el carrito</h4>
        <Link to='/products'><Btn texto="Realizar Compras"/></Link>
      </div>
      </>
    );
  } 

  return (
    <>
    <div className="cart-container">
      {cart.map((producto, index) => (
        <ItemCart key={index} producto={producto} />
      ))}
    </div>
    <div className="checkOutForm">
        <div className="form">
          <div className="">
            <h5 className="my-3 title">Orden de Compra</h5>
              <Form className="container-fluid" onSubmit={(e) => handleSubmit(e, buyerData)} >
                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Mark" name="buyerData.name" type="text" required/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" name="buyerData.adress" type="text" required/>
                  </Form.Group>
                
                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="1512349058" name="buyerData.phone"  type="text"  required/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="buyerData.email" placeholder="Enter email"  required/>
                  </Form.Group>
              
                </Row>
                  <h3 className="totalPrice">
                      TOTAL= $ {totalPrice()}
                  </h3>
                <Btn texto={" Generar Orden de Compra "} type="submit" onClick={() => {
                    if (isValid) {
                      getOrder();
                      }
                    }}>
                </Btn>
              </Form>
          </div>
        </div>
    </div>
      
          {/* <div className='container-fluid'>
            <form onSubmit={handleSubmit} className="">
                <div>
                    <label>Name</label>
                    <input  placeholder='Name'  type="text" required/>
                </div>
                <div>
                    <label>Adress</label>
                    <input  placeholder='Adress'  type="text" required />
                </div>
                <div>
                    <label>Phone</label>
                    <input  placeholder='Phone'  type="text" required/>
                </div>
                <div>
                    <label>Email</label>
                    <input  placeholder='Email' type="text" pattern="\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}" required/>
                    
                </div> 
        
          <button type="submit" onClick={() => {
                if (isValid) {
                    getOrder();
                  }
                }}>                  
              Generar Orden de Compra
          </button>
            </form>
          </div> */}
    </> 
  )
}

export default Cart;