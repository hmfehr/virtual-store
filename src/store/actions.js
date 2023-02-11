// import axios from 'axios';

export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  }
};

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  }
};

export const removeItem = (product) => {
  return {
    type: 'REMOVE',
    payload: {},
  }
};

// export const setProducts= (products) => {
//   return{
//     type: 'SET-PRODUCTS',
//     payload: products,
//   }
// };

// export const getProducts = () => async (dispatch, getState) => {
//   let response = await axios.get('http://api-js401.herokuapp.com/api/v1/products');
//   dispatch(setProducts(response.data.results));
// };


// export const getCategories = () => async (dispatch, getState) => {
//   let response = await axios.get('http://api-js401.herokuapp.com/api/v1/categories');
//   dispatch(setCategories(response.data.results));
// };

// export const adjustInventory = (product) => async (dispatch, getState) => {
//   let response = await axios.get(`http://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
//   dispatch(updateProducts(response.data));
// };
