import { configureStore } from "@reduxjs/toolkit";

import campersReducer from "./slices/campersSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: filterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
