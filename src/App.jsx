import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import "./App.css";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home/home";
import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer";
import Cart from "./components/Cart/cart"
import Login from "./components/Login/login"
import Footer from "./components/Footer/footer"

import CartProvider from "./contexts/CartContext";

import { getDocs, collection } from "firebase/firestore";
import db from '../db/firebase-config.js'

function App() {
  const [productos, setProductos] = useState([]);
  const [usuario, setUsuario] = useState(null);

  
  const itemRef = collection(db, "products")

  const getItems = async () => {
    const productsCollection= await getDocs(itemRef)
    const items = productsCollection.docs.map((doc) => ({
      ...doc.data(), 
      id: doc.id
    }));
    setProductos(items)
  }
  useEffect(() => {
    getItems()
  }, []);



  return (
    <> 
    <CartProvider>
    <Navbar />
    {usuario ? <Home/> : <Login setUsuario={setUsuario}/>} 
    <Routes>
        <Route path="/login" element={<Login/>}/>       
        <Route path="/products" element={<ItemListContainer productos={productos}/>} />
        <Route path="/products/:id" element= {<ItemDetailContainer productos={productos}/>} />
        <Route path="/products/category/eau de parfum" element={<ItemListContainer productos={productos} />}/>
        <Route path="/products/category/jewelery" element={<ItemListContainer productos={productos} />}/>
        <Route path="/products/category/men's clothing" element={<ItemListContainer productos={productos} />}/>
        <Route path="/products/category/women's clothing" element={<ItemListContainer productos={productos} />}/>
        <Route path="/products/category/men's clothing/:id"  element= {<ItemDetailContainer productos={productos}/>} />
        <Route path="/products/category/eau de parfum/:id"  element= {<ItemDetailContainer productos={productos}/>} />
        <Route path="/products/category/jewelery/:id"  element= {<ItemDetailContainer productos={productos}/>} />
        <Route path="/products/category/women's clothing/:id"  element= {<ItemDetailContainer productos={productos}/>} />
        <Route path="/404" element={<img className="img-error" src="src/assets/404.error.jpg" />}/>
        <Route path="/cart" element={<Cart />}/>
    </Routes> 
    </CartProvider>         
    <Footer/>
    </>
  )
}

export default App
