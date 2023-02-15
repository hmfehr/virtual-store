import { createSlice } from '@reduxjs/toolkit';

let initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => [...state, action.payload],
    removeItem: (state, action) => state.filter(product => product.name !== action.payload.name),
    incrementCount: (state) => {
      state.count = state.count + 1;
    },
    }
  });


export const { addItem, removeItem, incrementCount } = cartSlice.actions;
export default cartSlice.reducer;
