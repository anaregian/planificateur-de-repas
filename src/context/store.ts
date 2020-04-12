import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/store";

const reducer = {
  user: userSlice.reducer
};

export default configureStore({
  reducer
});
