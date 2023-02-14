import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../store/cart';
import { When } from 'react-if';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  return (
    <>
      <When condition={cart.length > 0}>
        <div className="simple-cart">
          <ul>
            {cart.map((product, index) => (
              <li key={`cart-${index}`}>{product.name}
                <Button variant='text' onClick={() => dispatch(removeItem(product))}>X</Button>
              </li>
            ))}
          </ul>
        </div>
      </When >
    </>
  )
};

export default Cart;