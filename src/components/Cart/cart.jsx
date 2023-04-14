import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext"
import ItemCart from "../ItemCart/itemCart"; 
import './cart.css'
import Btn from '../Btn/button.jsx'
import db from '../../../db/firebase-config.js'
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";



const Cart = () => {
  const { cart, totalPrice, setCart } = useCartContext();

  
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cartItems.length > 0 && JSON.stringify(cartItems) !== JSON.stringify(cart)) {
      setCart(cartItems);
    }
  }, [cart, setCart]);
  

  const order = {
    buyer: {
      name:'Andrea',
      email: 'andrea@gmail.com',
      phone: 1123456789,
      address: 'juan 1245'
    },
    items: cart.map (producto => ({id:producto.id, title: producto.title, price: producto.price, quantity: producto.quantity })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
    .then(({id}) => confirm("Tu numero de orden es: " + id))
  }

  if (cart.length === 0){
    return (
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
    <h3 className="totalPrice">
        TOTAL= $ {totalPrice()}
    </h3>
      <Btn texto="Generar Orden de Compra" onClick={handleClick}/>
    </> 
  )
}

export default Cart;