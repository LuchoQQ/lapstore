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
        }
    }
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
