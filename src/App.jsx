import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <Button texto="Registrarse"/>
    <ItemListContainer greeting="Bienvenidos a Studio Chic, especialistas en Make Up"/>
   
    </>
  )
}

export default App
