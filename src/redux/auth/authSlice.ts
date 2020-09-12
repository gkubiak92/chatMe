import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    isAuth: boolean;
};

const initialState: AuthState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStart() { },
        authSuccess({ isAuth }) { isAuth = true; },
        authFailure({ isAuth }) { isAuth = false },
    }
});

export const { authStart, authSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;