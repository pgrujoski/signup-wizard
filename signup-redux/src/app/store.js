import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../slices/signSlice";
import wizardReducer from "../slices/wizardSlice";
import addressReducer from "../slices/addressSlice";

export const store = configureStore({
  reducer: {
    signup: signReducer,
    wizardSlice: wizardReducer,
    location: addressReducer,
  },
});
