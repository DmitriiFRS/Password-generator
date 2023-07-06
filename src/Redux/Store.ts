import { configureStore } from "@reduxjs/toolkit";
import passgenReducer from "./Slices/passgenSlice";

export const store = configureStore({
   reducer: {
      passgen: passgenReducer,
   }
})