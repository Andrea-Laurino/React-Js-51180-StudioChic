import "./App.css";
import Button from './components/Button'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import CardProducts from "./components/cardProducts";




function App() {
 
  return (
    <>
    <Navbar />
    <Button texto="Registrarse"/>
    <ItemListContainer greeting="Bienvenidos a Studio Chic"/>
    <CardProducts/>
    </>
  )
}

export default App
