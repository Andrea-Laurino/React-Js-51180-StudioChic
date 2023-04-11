import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext"
import ItemCart from "../ItemCart/itemCart"; 
import './cart.css'

import db from '../../../db/firebase-config.js'
import { addDoc, collection } from "firebase/firestore";



const cart = () => {
  const { cart, totalPrice } = useCartContext();

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
    .then(({id}) => console.log(id))
  }

  if (cart.length === 0){
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to='/products'>Hacer Compras</Link>
      </>
    );
  }
  
  return (
    <>
    <div className="cart-container">
      {
        cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
      }  
    </div>
      <p>
        TOTAL= $ {totalPrice()}
      </p>
      <button onClick={handleClick}>Generar Orden de Compra</button>
    </> 
  )
}

export default cart