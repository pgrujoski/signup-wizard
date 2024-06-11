import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  city: "",
  postal_code: "",
};

export const addressSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    handleLocation: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { handleLocation } = addressSlice.actions;

export default addressSlice.reducer;
