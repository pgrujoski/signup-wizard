import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  fullName: "",
  email: "",
  password: "",
  confirm_password: "",
};

export const signSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    handleState: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { handleState } = signSlice.actions;

export default signSlice.reducer;
