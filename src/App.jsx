import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProctectedRoute } from './components/ProtectedRoute/protectedRoute';
import Register from './components/Register/register';

function App() {
  const [productos, setProductos] = useState([]);

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
    getItems();
  }, []);

  return (
      <>
      <CartProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={
                <ProctectedRoute>
                  <Home />   
                </ProctectedRoute>}/>
          <Route path="/home" element={
                <ProctectedRoute>
                  <Home />   
                </ProctectedRoute>}/>
          <Route path="/products" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/products/category/eau de parfum" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/category/jewelery" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/category/men's clothing" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/category/women's clothing" element={
                <ProctectedRoute>
                  <ItemListContainer productos={productos}/>
                </ProctectedRoute>} />
          <Route path="/products/category/men's clothing/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/products/category/eau de parfum/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/products/category/jewelery/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/products/category/women's clothing/:id" element={
                <ProctectedRoute>
                  <ItemDetailContainer productos={productos} />
                </ProctectedRoute>} />
          <Route path="/cart" element={
                <ProctectedRoute>
                  <Cart />
              </ProctectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<img className="img-error" src="src/assets/404.error.jpg" />} />
        </Routes> 
    </CartProvider>        
    <Footer/>
    </>
  )
}

export default App
