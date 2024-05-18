import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoriteInitialState = { items: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: favoriteInitialState,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      const hasCamper = state.items.some(
        (camper) => camper._id === payload._id,
      );

      if (hasCamper) {
        state.items = state.items.filter(
          (camper) => camper._id !== payload._id,
        );
      } else {
        state.items.push(payload);
      }
    },
  },
});

const persistConfig = {
  key: "items",
  storage,
};

const favoriteReducer = persistReducer(persistConfig, favoriteSlice.reducer);

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteReducer;
