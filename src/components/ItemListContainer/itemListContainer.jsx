import React from 'react'
import './itemlistcontainer.css';


const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className="list">{greeting}</h1>
    </div>
    
  )
}

export default ItemListContainer