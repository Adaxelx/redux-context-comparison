import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: { value: false, dummyValue: 1 },
  reducers: {
    changeValue(state) {
      state.value = !state.value;
    },
    changeDummyValue(state) {
      state.dummyValue = !state.dummyValue;
    },
  },
});

export const { changeValue, changeDummyValue } = slice.actions;

export default slice.reducer;
