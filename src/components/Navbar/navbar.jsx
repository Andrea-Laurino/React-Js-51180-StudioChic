
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/cartwidget"
import "./navbar.css" 
import { useAuth } from "../../contexts/AuthContext";
import Btn from '../Btn/button.jsx'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";


function Navbar() {
    
    const { logout } = useAuth();


    const handleLogout = async () => {
      try {
        await logout();
        toast.success(`Cerraste Sesión `, 
        {position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        console.error(error.message);
      }
    };
  
    const activeStyles = {
        color: "#f8edeb",
        filter: "drop-shadow(0 0 10px #FEC89A)"
    }


    return (
        <header> 
            <nav className="container_nav">
                <div className="logo">
                    <NavLink 
                        to="/home">
                            <img 
                                className="img-logo" 
                                src="/assets/logoStudioChic.png" 
                                alt="StudioChic"/>
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink 
                        to="/home" 
                        className="items" 
                        style={({ isActive }) => 
                                (isActive 
                                ? activeStyles 
                                : undefined)}>
                                    <p className="items">Home</p>
                    </NavLink>   
                    <NavLink 
                        to="/products" 
                        className="items" 
                        style={({ isActive }) => 
                                (isActive 
                                ? activeStyles 
                                : undefined)}>
                                    <p className="items">Products</p>
                    </NavLink>
                    <NavLink 
                        to="/cart" 
                        className="items" 
                        style={({ isActive }) => 
                                (isActive  
                                ? activeStyles 
                                : undefined)}>
                                    <p className="items">Shop</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink 
                        to="/cart" 
                        style={({ isActive }) => 
                            (isActive 
                            ? activeStyles 
                            : undefined)}>
                                <CartWidget />
                    </NavLink>
                    <NavLink to="/login" className="btn-logout">
                        <Button 
                            className="btnLogout"
                            onClick={handleLogout}> 
                            Cerrar Sesión                               
                        </Button>
                    </NavLink>
                </div>
            </nav> 
        </header>
    )
}



export default Navbar;