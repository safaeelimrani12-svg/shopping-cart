
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.find(
        item => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    
    increaseQuantity: (state, action) => {
    const product = state.find(item => item.id === action.payload);

    if (product) {
        product.quantity += 1;
    }
    },

    
    decreaseQuantity: (state, action) => {
    const product = state.find(item => item.id === action.payload);

    if (product) {
        product.quantity -= 1;

        if (product.quantity === 0) {
        const index = state.findIndex(
            item => item.id === action.payload
        );

        state.splice(index, 1);
        }
    }
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
