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
            const product = state.find(product => product.id === action.payload.id);
            if (product) {
                product.quantity += action.payload.quantity;
            } else {
                state.push(action.payload);
            }
        },
        deleteFromCart: (state, action) => {
            state = state.filter(product => product.id !== action.payload.id);
        },
        clearCart: (state) => {
            state = [];
        },

    }
});

export const { addToCartQuantity } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
