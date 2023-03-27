import './cartwidget.css'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const CartWidget = () => {
  return (
    <>
      <div className="shop">

        <ShoppingCartTwoToneIcon color='brown'  sx={{ fontSize: 40 }}/>
         
         <p className='number'>0</p>
      </div>
      </>
  )

}

export default CartWidget;