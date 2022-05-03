// a slice for storing  car info is carSlice
import { defaultListboxReducer } from "@mui/base";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        burgerNavItems: ["Existing Inventory", "Used Inventory", "Trade-in", "Test Drive", "Insurance", "Cybertruck", "Roadaster", "Semi", "Charging", "PowerWall", "Utilities","Find Us"]
}

const burgerNavItemSlice = createSlice({
        name: "burgerNavItem",
        initialState,
        reducers: {}
})

export const selectBurgerNavItems = state => state.burgerNavItem.burgerNavItems;

export default burgerNavItemSlice.reducer;