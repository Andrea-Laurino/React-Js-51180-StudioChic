
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/cartwidget"
import "./navbar.css"
import Btn from '../Btn'

function Navbar() {
    return (
        <header> 
            <nav className="container_nav">
                <div className="logo">
                    <img className="img-logo" src="src/assets/logoStudioChic.png" alt="StudioChic" href="/" />
                </div>
                <div className="menu">
                    <Link to="/home"><p className="items">Home</p></Link>
                    <Link to="/products"><p className="items">Products</p></Link>
                    <Link><p className="items">Shop</p></Link>
                    <Link><p className="items">Contact</p></Link>
                </div>
                <div>
                    <CartWidget />
                    <Btn texto="Registrarse"/>
                </div>
               
            </nav>
            
        </header>
    )
}



export default Navbar