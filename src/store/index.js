import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data-slice";
import axios from "axios";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
        },
      },
    }),
});

export default store;
