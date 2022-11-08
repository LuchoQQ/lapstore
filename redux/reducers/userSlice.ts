import { createSlice } from "@reduxjs/toolkit";

type User = {
    loggedIn: boolean;
    id?: number;
    name?: string;
    surname?: string;
    email?: string;
    role?: string;
    createdAt?: string;
}


const initialState: User = {
    loggedIn: false,
    id: 0,
    name: "",
    surname: "",   
    email: "",
    role: "",
    createdAt: ""
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.createdAt = action.payload.createdAt;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.id = 0
            state.name = ""
            state.surname = ""
            state.email = ""
            state.role = ""
            state.createdAt = ""
        }
    }
})

//export const selectUser = (state: {user: string, token: string}) => state.user;

export const selectUser = (state: {user: User}) => state.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

