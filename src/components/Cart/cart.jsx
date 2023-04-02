import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext"
import ItemCart from "../ItemCart/itemCart"; 

const cart = () => {
  const { cart, totalPrice } = useCartContext();

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
    {
      cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
    }
    <p>
      TOTAL= $ {totalPrice()}
    </p>
    </> 
  )
}

export default cart