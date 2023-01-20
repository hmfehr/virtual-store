// import { Button } from '@mui/material';
// import {makeStyles} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
// import store from '../../store';
import { removeItem } from '../../store/actions'
import { When } from 'react-if';
import './styels.scss'

// const useStyles = makeStyles((theme) => ({

// }))

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);

  return (
    <>
      <When condition={cart.length > 0}>
        <div>
          <ul>
            {cart.map((product, index) => (
              <p key={`cart-${index}`}>{product.name}

                <span onClick={() => dispatch(removeItem(product))}>x</span>
              </p>
            ))}
          </ul>
          </div>


      </When>
    </>
  )
}

export default Cart