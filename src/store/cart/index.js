import { createSlice } from '@reduxjs/toolkit';

let initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, price } = action.payload;
      const itemIndex = state.findIndex((product) => product.name === name);
      if (itemIndex === -1) {
        // Item doesn't exist in cart, add a new item object to the cart
        state.push({ name, price, count: 1 });
      } else {
        // Item already exists in cart, update the count of that item
        state[itemIndex].count += 1;
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.findIndex((product) => product.name === action.payload.name);
      if (itemIndex !== -1) {
        if (state[itemIndex].count > 1) {
          // If the item count is greater than 1, decrement the count
          state[itemIndex].count -= 1;
        } else {
          // If the item count is 1, remove the entire item
          state.splice(itemIndex, 1);
        }
      }
    },
    // incrementCount: (state) => {
    //   state.count = state.count + 1;
    // },
    // decrementCount(state) {
    //   state.count = state.count - 1;
    // },
    // resetCount(state) {
    //   state.count = 0;
    // },
  }
});


export const { addItem, removeItem, incrementCount, decrementCount, resetCount } = cartSlice.actions;
export default cartSlice.reducer;
