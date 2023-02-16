import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { adjustInventory, getProducts } from '../../store/products';
import { addItem } from '../../store/cart';
import {  Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.scss';

const ProductDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let products = useSelector(state => state.products);
  let theProduct = products.find(product => product._id === id);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  }

  return (
    <>
      {theProduct && <h1 className='title'>{theProduct.name}</h1>}
      <Card className='card' sx={{ maxWidth: 280 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='410'
            image={`https://source.unsplash.com/random?${theProduct.name}`}
          />
          <CardContent className='cardWords'>
            <Typography className='cardStock'>In Stock: {theProduct.inStock}</Typography>
            <Typography className='cardPrice'>${theProduct.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button className='buyButton' variant='contained' onClick={() => handler(theProduct)}>Buy</Button>
      <Typography className='relatedItems'>Related Items</Typography>
      <div className='suggestions'>
        <Card className='suggestionsCard'>Suggestion 1</Card>
        <Card className='suggestionsCard'>Suggestion 2</Card>
        <Card className='suggestionsCard'>Suggestion 3</Card>
      </div>
      <Typography className='productDetails'>Product Details</Typography>
      <div className='accordion'>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}
            aria-controls='pannel-1acontent'
            id='pannel1aHeader'>
            <Typography>
              Specifications
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Product Specs.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}
            aria-controls='pannel-2acontent'
            id='pannel2aHeader'>
            <Typography>
              User Reviews
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>A List of Reviews.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default ProductDetails