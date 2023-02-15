import * as React from 'react';
import { Button, Card, CardActions, CardContent, Popper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../store/cart';
import { When } from 'react-if';
import './styles.scss';


const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  // popper functionallity
  const [anchorE1, setAnchorE1] = React.useState(null);
  //popper handle click
  const handleClick = (event) => {
    setAnchorE1(anchorE1 ? null : event.currentTarget);
  };
  //popper coditional logic
  const open = Boolean(anchorE1);
  const id = open ? 'simple-popper' : undefined;
  // addind total 
  const initialValue = 0;
  const total = cart.reduce((accumulator, current) => {
    if (typeof current.price !== 'number' || isNaN(current.price)) {
      return accumulator;
    }
    return accumulator + (parseFloat(current.price) * current.count);
  }, initialValue).toFixed(2);
  
  const formattedTotal = parseFloat(total).toFixed(2);

  return (
    <>
      <Card className='cartCard'>
        <CardContent className='orderData'>
          <Typography variant='h6'>
            Order Summary
          </Typography>
          <Typography>
            <When condition={cart.length > 0}>
              <div className="simple-cart">
                <ul>
                  {cart.map((product, index) => (
                    <li key={`cart-${index}`}>
                      {product.name} x {product.count}
                      {` $${(parseFloat(product.price) * product.count).toFixed(2)}`}
                      <Button className="delete-item" color='error' onClick={() => dispatch(removeItem(product))}>Remove</Button>
                    </li>
                  ))}
                </ul>
              </div>
            </When >
          </Typography>
          <Typography variant='subtitle1' component='div'>
            Total: {formattedTotal}
          </Typography>
        </CardContent>
        <CardContent className='formWrapper'>
          <CardContent>
            <div className='billingFields'>
              <Typography className='billingDetails'>
                Billing Details
              </Typography>
              <TextField className='textField' size='small' id='standard-basic' label='Full Name' variant='standard' />
              <TextField disabled className='textField' size='small' id='standard-basic' label='Address' variant='standard' />
              <TextField disabled className='textField' size='small' id='standard-basic' label='City' variant='standard' />
              <TextField disabled className='textField' size='small' id='standard-basic' label='State' variant='standard' />
              <TextField disabled className='textField' size='small' id='standard-basic' label='Zip' variant='standard' />
            </div>
          </CardContent>
          <CardContent className='paymentDetails' variant='subtitle1'>
            <div className='rightColumn'>
              <Typography>
                Payment Details
              </Typography>
            </div>
            <TextField disabled className='textField' size='small' id='standard-disabled' defaultValue='Credit Card #' variant='standard' />
            <TextField disabled className='textField' size='small' id='standard-disabled' defaultValue='CVV' variant='standard' />
          </CardContent>
        </CardContent>
        <CardActions>
          <div className='button'>
            <Button className='placeOrder' color='success' size='small' variant='contained' onClick={handleClick}>Place Order Now</Button>
            <Popper id={id} open={open} anchorEl={anchorE1}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                Your order has been simulated!
              </Box>
            </Popper>
          </div>
        </CardActions>
      </Card>
    </>
  )
}

export default ShoppingCart;