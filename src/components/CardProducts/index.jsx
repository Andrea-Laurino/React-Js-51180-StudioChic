// 
import axios from 'axios'
import { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
	

function cardProducts() {
    const [productos, setProductos] = useState([])
  
  const fetchProductos = async () => {
    const { data } = await axios ('https://fakestoreapi.com/products')
      setProductos( data);  
  }

  useEffect(() => {
      fetchProductos()  
  }, []);

  console.log(productos)
  return( 
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt= {productos.id}
        height="140"
        image= {productos.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {productos.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {productos.description} 
        </Typography>
      </CardContent>
      <CardActions>
        <FavoriteTwoToneIcon color='grey' sx={{ fontSize: 30 }}/>
        <Button >Comprar</Button>
      </CardActions>
    </Card>
    </>

    )
}



export default cardProducts