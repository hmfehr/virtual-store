// import { Button, Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Card } from '@mui/material';
import { removeItem } from '../../store/actions'

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.category);

  return (
    <>
      {activeCategory && products.map((product, index) => (
        <Card
          data-testid={`product-${index}`}
          key={`product-${index}`}
          variant='outlined'>
            {product.name}
            <Button variant="text" onClick={() => dispatch(removeItem(product))}>Add Item</Button>
        </Card>
      ))}
    </>
  )
};



export default Products;