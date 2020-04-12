import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialUserState: UserState = {
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
