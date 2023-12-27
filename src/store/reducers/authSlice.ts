import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  auth: {
    token?: string;
  };
}

const initialState: IAuthState = {
  auth: {
    token: undefined,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<Partial<IAuthState["auth"]>>) => {
      state.auth = { ...state.auth, ...action.payload };
    },
  },
});

export const { updateAuth } = authSlice.actions;

export default authSlice.reducer;
