import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home/home";
import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import TarjetDescription from "./components/TarjetDescription/tarjetDescription";
import Cart from "./components/Cart/cart"
import Contact from "./components/Contact/contact"
import Login from "./components/Loguin/login"

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);


  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Navigate to="/Home"/>} />
        <Route path="/home" element={<Home/>} /> 
        <Route path="/products" element={<ItemListContainer productos={productos}/>} />
        <Route path="/products/:id" element= {<TarjetDescription productos={productos}/>} />
        <Route path="/products/category/electronics" element={<ItemListContainer productos={productos} />}/>
        <Route path="/products/category/electronics/:id"  element= {<TarjetDescription productos={productos}/>} />
        <Route path="/products/category/jewelery" element={<ItemListContainer productos={productos} />}/>
        <Route path="/products/category/jewelery/:id"  element= {<TarjetDescription productos={productos}/>} />
        <Route path="/products/category/men's clothing" element={<ItemListContainer productos={productos} />}/>
        <Route path="/products/category/men's clothing/:id"  element= {<TarjetDescription productos={productos}/>} />
        <Route path="/products/category/women's clothing" element={<ItemListContainer productos={productos} />}/>
        <Route path="/products/category/women's clothing/:id"  element= {<TarjetDescription productos={productos}/>} />
        <Route path="/404" element={<img className="img-error" src="src/assets/404.error.jpg" />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>

    </Routes> 



    
         
    </>
  )
}

export default App
