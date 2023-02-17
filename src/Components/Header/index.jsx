import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './styles.scss';

const Header = () => {
  const { cart } = useSelector(state => state);

  const totalQuantity = cart.reduce((acc, item) => acc + item.count, 0);


  return (
    <>
      <header>
        <div className='buttonGroupHeader'>
          <Button className='ourStoreButton'>
            <Link data-testid='headerTest' className='ourStore' to="/" default>Takeaway Vitrual Store</Link>
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