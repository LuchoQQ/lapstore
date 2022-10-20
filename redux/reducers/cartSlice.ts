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
        deleteToCartQuantity: (state, action) => {
            //delete or decrease of product in cart
            const product = state.find(product => product.id === action.payload.id);
            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1
                } else {
                    state.splice(state.indexOf(product), 1);
                }
            }
            /* const product = state.find(product => product.id === action.payload.id);
            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= action.payload.quantity;
                } else {
                    state.splice(state.indexOf(product), 1);
                }
            } */

        },
        clearCart: (state) => {
            state = [];
        },

    }
});

export const { addToCartQuantity, deleteToCartQuantity } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
