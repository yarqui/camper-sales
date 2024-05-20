import { FC, MouseEvent, useEffect, useState } from "react";
import { fetchCampersAll } from "../../redux/operations/campersOperations";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Button from "../../components/Button/Button";
import { Notify } from "notiflix";

import VehicleEquipmentFilter from "../../components/VehicleEquipmentFilter/VehicleEquipmentFilter";
import VehicleTypeFilter from "../../components/VehicleTypeFilter/VehicleTypeFilter";
import VehicleLocationFilter from "../../components/VehicleLocationFilter/VehicleLocationFilter";
import {
  selectError,
  selectFilteredCampers,
  selectIsLoading,
} from "../../redux/selectors/selectors";
import { resetFilter, toggleSpecFilter } from "../../redux/slices/filterSlice";
import CatalogList from "../../components/CatalogList/CatalogList";
import { resetCampers } from "../../redux/slices/campersSlice";

const Catalog: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [endOfResults, setEndOfResults] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);
  const filteredCampers = useAppSelector(selectFilteredCampers);

  const showLoading = isLoading && !error;
  const showError = error && !isLoading;

  const handleLoadMore = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.blur();
    setPage((prev) => prev + 1);
  };

  const handleEquipmentSelect = (e: MouseEvent<HTMLDivElement>) => {
    const liElement = (e.target as HTMLDivElement).closest(
      "li[data-id]",
    ) as HTMLLIElement;

    liElement?.classList.toggle("border-carmineColor");

    const dataId = liElement?.getAttribute("data-id");

    dispatch(toggleSpecFilter(dataId));
  };

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchCampersAll(page));

    if (page === 4) {
      Notify.warning("You've reached the end of results");
      setEndOfResults(true);
    }

    return () => {
      controller.abort();
    };
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(resetFilter());
      dispatch(resetCampers());
    };
  }, [dispatch]);

  return (
    <div className="mt-16 flex gap-[64px] pb-25">
      <aside className="flex w-[360px] flex-col gap-8">
        <VehicleLocationFilter />

        <div>
          <p className="font-medium text-secondaryColor">Filter</p>

          <div onClick={handleEquipmentSelect}>
            <VehicleEquipmentFilter />
            <VehicleTypeFilter />
          </div>
        </div>
      </aside>

      <div className="flex flex-col items-center">
        {showError && (
          <div className="rounded-md bg-red-100 p-2">
            <p className="text-red-600">Something went wrong.</p>
            <p className="text-xs text-red-900">{error.payload}</p>
          </div>
        )}
        <CatalogList campers={filteredCampers} />

        {!filteredCampers.length && !error && !isLoading && (
          <p>There are no results with this combination of filters</p>
        )}

        {!endOfResults && !error && (
          <Button
            type="button"
            className={`mt-[50px] border border-primaryColor border-opacity-20 px-8 focus:outline-none hocus:border-carmineColor ${showLoading && "pointer-events-none animate-pulse bg-almostWhiteColor text-gray-400"}`}
            onClick={handleLoadMore}
          >
            {showLoading ? "Loading..." : "Load more"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Catalog;
