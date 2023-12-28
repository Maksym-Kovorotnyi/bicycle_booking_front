import { configureStore } from "@reduxjs/toolkit";
import { bicyclesReducer } from "./bicycles/bicyclesSlice";

export const store = configureStore({
  reducer: bicyclesReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});
