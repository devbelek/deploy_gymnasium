import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export { store };