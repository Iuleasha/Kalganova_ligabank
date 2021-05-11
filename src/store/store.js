import { configureStore } from "@reduxjs/toolkit";
import converterReducer from "../reducer/reducer";

export const store = configureStore({
  reducer: {
    converter: converterReducer,
  },
});
