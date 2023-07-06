import { configureStore } from "@reduxjs/toolkit";
import passgenReducer from "./Slices/passgenSlice";

const store = configureStore({
   reducer: {
      passgen: passgenReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export default store;