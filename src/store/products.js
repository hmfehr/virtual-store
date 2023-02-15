import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => action.payload,
    updateProduct: (state, action) => state.map(product => (
      product._id !== action.payload._id ? product : action.payload
      )),
  }
})

const { setProducts, updateProduct} = productsSlice.actions;

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('http://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data.results));
};

export const adjustInventory = (product) => async (dispatch, getState) => {
  let updatedProduct = {...product, inStock: product.inStock - 1}
  // product.inStock = product.inStock - 1;
  let response = await axios.put(`http://api-js401.herokuapp.com/api/v1/products/${product._id}`, updatedProduct);
  dispatch(updateProduct(response.data));
};


export default productsSlice.reducer;
