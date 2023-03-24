import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home/home";
import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import Products from "./components/Products/products.jsx";
import TarjetDescription from "./components/TarjetDescription/tarjetDescription";



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
    <ItemListContainer />
    <Routes>
        <Route path="/" element={<Navigate to="/Home"/>} />
        <Route path="/home" element={<Home/>} /> 
        <Route path="/products" element={<Products productos={productos}/>} 
        />
        <Route path="/products/:id" element= {<TarjetDescription productos={productos}/>} 
        />
        <Route path="/404" element={<img className="img-error" src="src/assets/404.error.jpg" />}/>
    </Routes> 



    
         
    </>
  )
}

export default App
