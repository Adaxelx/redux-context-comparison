import { configureStore } from "@reduxjs/toolkit";
import slice from "./reducer";

const store = configureStore({
  reducer: {
    slice,
  },
});

export default store;
