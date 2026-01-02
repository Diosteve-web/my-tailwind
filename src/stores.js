import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useStore = create(
  immer((set, get) => ({
    cart: [],
    // Actions
    addToCart: (product) => set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    }),
    // remove item from cart
    removeFromCart: (productId) => set((state) => {
      const index = state.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    }),
    //increase item quantity
    increaseQuantity: (productId) => set((state) => {
      const item = state.cart.find((item) => item.id === productId);
      if (item) {
        item.quantity += 1;
      }
    }),
    
    decreaseQuantity: (productId) => set((state) => {
      const item = state.cart.find((item) => item.id === productId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          const index = state.cart.findIndex((i) => i.id === productId);
          state.cart.splice(index, 1);
        }
      }
    }),
    
    clearCart: () => set({ cart: [] }),
    
    getTotal: () => {
      const state = get();
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    getCartCount: () => {
      const state = get();
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    }
  }))
);