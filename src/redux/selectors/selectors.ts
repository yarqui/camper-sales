import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CampersState, FavoriteState, FilterState } from "../types";

export const selectCampers = (state: RootState): CampersState["items"] =>
  state.campers.items;

export const selectIsLoading = (state: RootState): CampersState["isLoading"] =>
  state.campers.isLoading;

export const selectError = (state: RootState): CampersState["error"] =>
  state.campers.error;

export const selectLocationFilter = (
  state: RootState,
): FilterState["locationValue"] => state.filter.locationValue;

export const selectSpecsFilter = (state: RootState): FilterState["specs"] =>
  state.filter.specs;

export const selectFavorites = (state: RootState): FavoriteState["items"] =>
  state.favorite.items;
// export const selectFavorites = (state: RootState): FilterState["favorite"] =>
//   state.favorite;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocationFilter, selectSpecsFilter],
  (campers, locationValue, specs) => {
    return campers.filter((camper) => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(locationValue.toLowerCase());

      if (!matchesLocation) {
        return false;
      }

      return specs.every((spec) => {
        switch (spec) {
          case "alcove":
            return camper.form === "alcove";

          case "fullyIntegrated":
            return camper.form === "fullyIntegrated";

          case "panelTruck":
            return camper.form === "panelTruck";

          case "automatic":
            return camper.transmission === "automatic";

          case "airConditioner":
            return camper.details.airConditioner;

          case "kitchen":
            return camper.details.kitchen;

          case "TV":
            return camper.details.TV;

          case "shower":
            return camper.details.shower;

          default:
            return false;
        }
      });

      // return matchesLocation && matchesSpecs;
    });
  },
);
