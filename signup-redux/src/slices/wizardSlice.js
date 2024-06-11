import { createSlice } from "@reduxjs/toolkit";

export const wizardSlice = createSlice({
  name: "wizard",
  initialState: {
    value: 1,
  },
  reducers: {
    setWizardStep: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWizardStep } = wizardSlice.actions;

export default wizardSlice.reducer;
