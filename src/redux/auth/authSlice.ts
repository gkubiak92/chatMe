import { User } from '@react-native-community/google-signin';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialUserData = {
  id: '',
  name: '',
  email: '',
  photo: '',
  familyName: '',
  givenName: '',
};

const initialState: AuthState = {
  isAuth: false,
  user: { ...initialUserData },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart() {},
    authSuccess(state, action: PayloadAction<User>) {
      state.isAuth = true;
      state.user = { ...action.payload.user };
    },
    authFailure(state) {
      state.isAuth = false;
      state.user = { ...initialUserData };
    },
  },
});

export const { authStart, authSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;
