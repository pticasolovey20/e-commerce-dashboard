import { configureStore, combineReducers } from "@reduxjs/toolkit";
import coinsReducer from "./slices/coinsSlice";
import newsReducer from "./slices/newsSlice";

const rootReducer = combineReducers({ coinsReducer, newsReducer });

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
