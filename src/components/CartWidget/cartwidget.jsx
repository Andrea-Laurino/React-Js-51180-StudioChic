import { useCartContext } from '../../contexts/CartContext';
import './cartwidget.css'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';



const CartWidget = () => {

  const { totalProducts } = useCartContext();

  return (
    <>
      <div className="shop">

        <ShoppingCartTwoToneIcon color='brown'  sx={{ fontSize: 40 }}/>
         
         <span className='number'> {totalProducts() || ''} </span>
      </div>
      </>
  )

}

export default CartWidget;