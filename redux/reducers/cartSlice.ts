import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types';
import type { RootState } from '../index';
const initialState = [] as Product[];


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        deleteFromCart: (state, action) => {
            state = state.filter(product => product.id !== action.payload.id);
        },
        clearCart: (state) => {
            state = [];
        },
        addToCartQuantity: (state, action) => {
            // add 1 quantity to product if it already exists in cart
            const product = state.find(product => product.id === action.payload.id);
            if (product) {
                //product.quantity++;
            } else {
                state.push(action.payload);
            }
        }

    }
});

export const { addToCart, addToCartQuantity } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
