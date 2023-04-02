import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tarjetas from "../Tarjetas/tarjeta.jsx";
import { NavLink } from "react-router-dom";
import "./itemListContainer.css";



const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => {
              setProductos(data);
              const categoriasUnicas = [
                ...new Set(data.map((producto) => producto.category)),
              ];
              setCategorias(categoriasUnicas);
            });     
      }, []);

      const handleCategoriaClick = (categoria) => {
        setCategoriaSeleccionada(categoria);
        
      };
      useEffect(() => {
        const productosFiltrados = categoriaSeleccionada ? productos.filter(
          (producto) => producto.category === categoriaSeleccionada) : productos;
        setProductosFiltrados(productosFiltrados);
      }, [categoriaSeleccionada, productos]);
      
   

    return (
    <> 
    <div className="categorias-btn">
    <div><h3>Nuestras Categorias: </h3></div>
    <div>
      {categorias.map((categoria) => (
        <NavLink key={categoria} to={`/products/category/${categoria}`} 
        onClick={()=> handleCategoriaClick(categoria)}>
          <button className="category-btn">{categoria}</button>
        </NavLink> 
      ))}
    </div>
    </div>
   
      <Container>
        <Row>
          <Col className="card-container">
            {productosFiltrados.map((producto) => (
              <Tarjetas key={producto.id} producto={ producto } />
            ))}
          </Col>
        </Row>
      </Container>
    </>
    );
  };
  
  export default ItemListContainer;
    

