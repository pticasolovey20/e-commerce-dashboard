import { configureStore, combineReducers } from "@reduxjs/toolkit";
import coinsReducer from "./slices/coinsSlice";

const rootReducer = combineReducers({ coinsReducer });

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
