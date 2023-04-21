import React, { useState, useContext, useEffect } from "react";
import db from '../../db/firebase-config'
import { addDoc, collection } from "firebase/firestore";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const CartContext = React.createContext({orderId: ''});


export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(() => {
    const cartStorage = localStorage.getItem('cart');
    return cartStorage ? JSON.parse(cartStorage) : [];
});
    const [orderId, setOrderId] = useState('');
    
    
    const addProduct = (item, quantity) => {
      if (isInCart(item.id)){
          setCart(cart.map(producto => {
              return producto.id === item.id ? { ...producto, quantity: producto.quantity + quantity } : producto
          }));
      }else {
          setCart([...cart, {...item, quantity }]);
      }  
    };

  const totalPrice =  cart.reduce((prev, act) => prev + act.quantity * act.price, 0);

  const totalProducts = () =>
    cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => cart.find((product) => product.id === id) !== undefined;


  const removeProduct = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
   
  };
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);
  
  function sendOrder(buyer) {
    
    const order = {
      buyer,
        items:cart,
        total:totalPrice,
    }

    const collectionRef = collection (db,'orders')

    addDoc(collectionRef,order)
    .then((res)=>{
      const newOrderId = res.id;
      const orderDate =new Date().toLocaleDateString();
      setOrderId(newOrderId);
      setCart([]);
      toast(`🗸 Muchas Gracias Tu Compra! La Realizaste: ${orderDate} y Tu Numero de Orden es: ${newOrderId}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    })
    .catch((error) => console.log({error}))
  }

  


  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
        setCart,
        sendOrder,
        orderId
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
