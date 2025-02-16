import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    addedToCart: [], // Track items that have been added to cart
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
      state.addedToCart = [];
    },
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

export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;

// Selector to calculate cart total
export const getCartTotal = (state) => {
  return state.cart.items.reduce((total, item) => {
    const cost = parseFloat(item.cost.replace('$', ''));
    return total + (cost * item.quantity);
  }, 0);
};

export default CartSlice.reducer;
