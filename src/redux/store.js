import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice.js";
import basket from "./slices/basketSlice.js";
export const store = configureStore({
  reducer: {
    counter,
    basket,
  },
});
