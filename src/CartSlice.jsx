import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    addedToCart: [], // Track items that have been added to cart
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      // Add to addedToCart array if not already present
      if (!state.addedToCart.includes(name)) {
        state.addedToCart.push(name);
      }
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // action.payload = name of the item to be removed
      state.items = state.items.filter(item => item.name !== action.payload);
      // Also remove from addedToCart array
      state.addedToCart = state.addedToCart.filter(name => name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
