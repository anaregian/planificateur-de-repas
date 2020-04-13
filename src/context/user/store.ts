import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserContextState = {
  currentUser: string;
};

const initialUserState: UserContextState = {
  currentUser: "asd"
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login: (state, { payload }: PayloadAction<{ username: string }>) => {
      state.currentUser = payload.username;
    },
    logout: state => {
      state.currentUser = null;
    }
  }
});

export const userActions = userSlice.actions;
