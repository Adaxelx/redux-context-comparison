import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: { value: false },
  reducers: {
    changeValue(state) {
      state.value = !state.value;
    },
  },
});

export const { changeValue } = slice.actions;

export default slice.reducer;
