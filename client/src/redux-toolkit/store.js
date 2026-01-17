import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux-toolkit/userReducer"; // adjust path if needed

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
