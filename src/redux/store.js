import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice.js";
export const store = configureStore({
  reducer: {
    counter,
  },
});
