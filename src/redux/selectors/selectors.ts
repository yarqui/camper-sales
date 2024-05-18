import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CampersState, FilterState, Camper } from "../types";

export const selectCampers = (state: RootState): CampersState["items"] =>
  state.campers.items;

export const selectIsLoading = (state: RootState): CampersState["isLoading"] =>
  state.campers.isLoading;

export const selectError = (state: RootState): CampersState["error"] =>
  state.campers.error;

export const selectFilter = (state: RootState): FilterState["value"] =>
  state.filter.value;

export const selectFilteredCampersByLocation = createSelector(
  [selectCampers, selectFilter],
  (campers, filterLocationValue) =>
    campers?.filter((camper) => {
      const { location } = camper as Camper;

      return location
        ?.toLowerCase()
        .includes(filterLocationValue?.toLowerCase());
    }),
);
