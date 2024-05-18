import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoriteInitialState = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: favoriteInitialState,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      const hasCamper = state.some((camper) => camper._id === payload._id);

      if (hasCamper) {
        return state.filter((camper) => camper._id !== payload._id);
      } else {
        state.push(payload);
      }
    },
  },
});

const persistConfig = {
  key: "favorite",
  storage,
};

const favoriteReducer = persistReducer(persistConfig, favoriteSlice.reducer);

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteReducer;
