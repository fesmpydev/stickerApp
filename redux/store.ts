import { configureStore } from "@reduxjs/toolkit";
import app from "@/redux/features/app";

export const store = configureStore({
  reducer: {
    app,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
