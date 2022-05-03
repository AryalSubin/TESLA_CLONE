import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice";
import burgerNavItemReducer from "../features/burgerNavItem/burgerNavItemSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    burgerNavItem: burgerNavItemReducer,
  },
});
