import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { commentsApi } from './api/comments';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(commentsApi.middleware),
});
