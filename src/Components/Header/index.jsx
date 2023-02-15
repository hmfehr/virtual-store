import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './styles.scss';

const Header = () => {
  const { cart } = useSelector(state => state);

  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].count;
  }

  return (
    <>
      <header>
        <div className='buttonGroupHeader'>
          <Button className='ourStoreButton'>
            <Link className='ourStore' to="/" default>OUR STORE</Link>
          </Button>
          <Button className='cartButton'>
            <Link className="cart" to="/cart">Cart({totalQuantity}) </Link>
          </Button>
        </div>
      </header>
    </>
  )
}
export default Header;