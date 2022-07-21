import { configureStore } from "@reduxjs/toolkit";
//reducer
import vehiculos from "../features/vehiculos/vehiculoSlice";

export const store = configureStore({
  reducer: {
    vehiculos,
  },
});
