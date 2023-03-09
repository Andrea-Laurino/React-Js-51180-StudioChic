
import CartWidget from "../CartWidget"
import "./navbar.css"


function Navbar() {
    return (
        <header> 
            <nav className="container_nav">
                <div className="logo">
                    <img className="img-logo" src="src/assets/logoStudioChic.png" alt="StudioChic" href="/" />
                </div>
                <ul className="menu">
                    <a href="/">Home</a>
                    <a href="/">Products</a>
                    <a href="/">About</a>
                    <a href="/">Shop</a>
                    <a href="/">Contact</a>
                </ul>
                <CartWidget />
             
            </nav>
        </header>
    )
}



export default Navbar