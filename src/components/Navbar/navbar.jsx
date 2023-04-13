
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/cartwidget"
import "./navbar.css"
import Btn from '../Btn/button'

function Navbar() {

    const activeStyles = {
        color: "#f8edeb",
        filter: "drop-shadow(0 0 10px #FEC89A)"
    }

    return (
        <header> 
            <nav className="container_nav">
                <div className="logo">
                <NavLink to="/home"><img className="img-logo" src="src/assets/logoStudioChic.png" alt="StudioChic"/></NavLink>
                </div>
                <div className="menu">
                    <NavLink to="/home" className="items" style={({ isActive }) => (isActive ? activeStyles : undefined)}><p className="items">Home</p></NavLink>   
                    <NavLink to="/products" className="items" style={({ isActive }) => (isActive ? activeStyles : undefined)}><p className="items">Products</p></NavLink>
                    <NavLink to="/cart" className="items" style={({ isActive }) => (isActive ? activeStyles : undefined)}><p className="items">Shop</p></NavLink>
                </div>
                <div>
                    <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyles : undefined)}><CartWidget /></NavLink>
                    <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyles : undefined)}><Btn texto="Registrarse"/></NavLink>
                    
                </div>
               
            </nav> 
            
        </header>
    )
}



export default Navbar;