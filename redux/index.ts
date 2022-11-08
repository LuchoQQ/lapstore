import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';
import userSlice from './reducers/userSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store