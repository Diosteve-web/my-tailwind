// src/stores/contact.js
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useContactStore = create(
  immer((set, get) => ({
    user: null, // { name, email, contact }

    // Login action
    login: (userData) =>
      set((state) => {
        state.user = userData;
      }),

    // Logout action
    logout: () =>
      set((state) => {
        state.user = null;
      }),

    // Update contact info
    updateContact: (contactInfo) =>
      set((state) => {
        if (state.user) {
          state.user.contact = contactInfo;
        }
      }),
  }))
);
