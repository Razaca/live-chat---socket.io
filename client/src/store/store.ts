import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mainReducer from "./slices/mainSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type MainState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  MainState,
  unknown,
  Action<string>
>;
