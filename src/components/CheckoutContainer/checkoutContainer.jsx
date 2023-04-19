// import CheckoutList from "../CheckoutList/checkoutList"
import { useCartContext } from "../../contexts/CartContext"
import { Spinner } from "react-bootstrap"
import Cart from "../Cart/cart.jsx"

export default function checkoutContainer (){

    const {cart}=useCartContext()
    return(
        <main className="bg-gradient-to-b from-primario-200 to-primario-100 container-fluid pb-8 pt-16 lg:pt-32">
            { cart.length!=0?<Cart cart={cart}/>:
            <Spinner animation="grow" size="sm" />}
        </main>
    )
}