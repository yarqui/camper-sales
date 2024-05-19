import { createSlice, isRejected } from "@reduxjs/toolkit";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  isFulfilledAction,
  isPendingAction,
} from "../common/common";
import { fetchCampersAll } from "../operations/campersOperations";

const campersInitialState = { items: [], isLoading: false, error: null };

export const campersSlice = createSlice({
  name: "campers",
  initialState: campersInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersAll.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload];
      })
      .addMatcher(isFulfilledAction, handleFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejected, handleRejected)
      .addDefaultCase((state) => {
        return state;
      });
  },
});

const campersReducer = campersSlice.reducer;

export default campersReducer;
