import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            // RTK uses immer library --> read about it. 
            state.items.push(action.payload)
        },
        removeItems: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items = [];
        }
    }
})

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;