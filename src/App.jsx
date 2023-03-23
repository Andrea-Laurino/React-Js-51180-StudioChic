import "./App.css";


import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx'
import Navbar from './components/Navbar/navbar.jsx'

import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home/home";
import Products from "./components/Products/products";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
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
        <Route path="/products" element={<Products productos={productos}/>} /> 
    </Routes> 

    
    <ItemListContainer greeting="Bienvenidos a Studio Chic"/>
    
    
    <Container className="">
      <Row>
          <Col className="card-container">
          {productos.map((productos) => (
            <Card key={productos.id}>
                  <Card.Img src={productos.images} />
                  <Card.Body>
                    <Card.Title>{productos.title}</Card.Title>
                    <Card.Text> $ {productos.price}</Card.Text>
                    <Button variant="dark">Comprar</Button>
                  </Card.Body>
                </Card>
                ))}
          </Col>
      </Row>
  </Container>


            
            
          
    
    </>
  )
}

export default App
