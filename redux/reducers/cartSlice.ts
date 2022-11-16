import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types';
import type { RootState } from '../index';
const initialState = [] as Product[];


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartQuantity: (state, action) => {
            //add to cart or increase quantity of product in cart
            const product = action.payload;
            if (state.some((item) => item.name === action.payload.name)) {
                const productIndex = state.findIndex(
                    (item) => item.name === product.name
                );
                state[productIndex].quantity += 1;
            } else {
                state.push(product);
            }
            
        },
        deleteToCartQuantity: (state, action) => {
            //delete to cart or decrease quantity of product in cart
            const product = action.payload;
            if (state.some((item) => item.name === action.payload.name)) {
                const productIndex = state.findIndex(
                    (item) => item.name === product.name
                );
                if (state[productIndex].quantity > 1) {
                    state[productIndex].quantity -= 1;
                } else {
                    state.splice(productIndex, 1);
                }
            }

        },
        clearCart: (state) => {
            state = [];
        },

    }
});

export const { addToCartQuantity, deleteToCartQuantity } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
