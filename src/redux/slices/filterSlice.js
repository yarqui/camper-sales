import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = { locationValue: "", specs: [] };

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setLocationFilter: (state, { payload }) => {
      state.locationValue = payload;
    },
    toggleSpecFilter: (state, { payload }) => {
      if (!state.specs.includes(payload)) {
        state.specs.push(payload);
      } else {
        state.specs = state.specs.filter((spec) => spec !== payload);
      }
    },
    resetFilter: () => {
      return filterInitialState;
    },
  },
});

export const { setLocationFilter, toggleSpecFilter, resetFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
