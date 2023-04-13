import React, { useState, useContext, useEffect } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
      if (cartFromLocalStorage) {
        setCart(cartFromLocalStorage);
      }
    }, []);
  
    const addProduct = (item, quantity) => {
      let updatedCart = null;
      if (item && item.id && isInCart(item.id)) {
        updatedCart = cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        );
      } else {
        updatedCart = [...cart, { ...item, quantity }];
      }
    
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
  const totalPrice = () =>
    cart.reduce((prev, act) => prev + act.quantity * act.price, 0);

  const totalProducts = () =>
    cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const isInCart = (id) => cart.find((product) => product.id === id) !== undefined;

  const removeProduct = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

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
        setCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
