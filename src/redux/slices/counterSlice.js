import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.number += 1;
    },
    decrease: (state) => {
      state.number -= 1;
    },
    increaseWithData: (state) => {},
  },
});

export const counterStates = (state) => state.counter;
// actions
export const { decrease, increase, increaseWithData } = counterSlice.actions;
export default counterSlice.reducer;
