import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";  // основной API
import { commentsApi } from './api/comments';  // новый API для комментариев

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,  // подключаем commentsApi
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(commentsApi.middleware),
});
