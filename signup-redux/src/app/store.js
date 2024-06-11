import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../slices/signSlice";
import wizardReducer from "../slices/wizardSlice";
import addressReducer from "../slices/addressSlice";
import inputReducer from "../slices/inputSlice";

export const store = configureStore({
  reducer: {
    signup: signReducer,
    wizard: wizardReducer,
    location: addressReducer,
    inputs: inputReducer,
  },
});
