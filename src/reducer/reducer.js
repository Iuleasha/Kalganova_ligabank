import { createSlice } from "@reduxjs/toolkit";

const initialState = { convertHistory: [] };

export const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      state.convertHistory = [action.payload, ...state.convertHistory].slice(
        0,
        10
      );
    },
    clearHistory: (state) => {
      state.convertHistory = [];
    },
  },
});

export const { addToHistory, clearHistory } = converterSlice.actions;
export const getConverterHistory = (state) => state.converter.convertHistory;
export default converterSlice.reducer;
