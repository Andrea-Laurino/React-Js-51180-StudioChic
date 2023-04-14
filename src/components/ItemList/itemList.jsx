import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./itemList.css"
import React from "react";




const itemList = ({ producto }) => {

  

  return (
    <Link to={`${producto.id}`} className="link">
      <Card className=" text-center">
        <Card.Img  src={producto.image} alt={producto.nombre}/>
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text> $ {producto.price}</Card.Text>
          </Card.Body>
      </Card>
    </Link>
    )
}

export default itemList;