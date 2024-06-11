import { createSlice } from "@reduxjs/toolkit";

initialState = {
  selectedOption: "",
  selectedRadio: "",
  checkboxes: {
    option1: false,
    option2: false,
    option3: false,
  },
};

export const inputSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    setOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setRadio: (state, action) => {
      state.selectedRadio = action.payload;
    },
    setCheckbox: (state, action) => {
      state.checkboxes[action.payload.name] = action.payload.checked;
    },
  },
});

export const { setCheckbox, setOption, setRadio } = inputSlice.actions;

export default inputSlice.reducer;
