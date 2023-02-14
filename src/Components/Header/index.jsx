import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './styles.scss';

const Header = () => {
  const { cart } = useSelector(state => state);
  return (
    <>
      <header>
        <div className='buttonGroupHeader'>
          <Button className='ourStoreButton'>
            <Link className='ourStore' to="/" default>OUR STORE</Link>
          </Button>
          <Button className='cartButton'>
            <Link className='cart' to="/cart">Cart ({cart.length})</Link>
          </Button>
        </div>
      </header>
    </>
  )
}
export default Header;