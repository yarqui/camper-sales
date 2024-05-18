import { FC, MouseEvent, useEffect, useState } from "react";
import { fetchCampersAll } from "../../redux/operations/campersOperations";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Camper } from "../../redux/types";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import Button from "../../components/Button/Button";
import { Notify } from "notiflix";

import VehicleEquipmentFilter from "../../components/VehicleEquipmentFilter/VehicleEquipmentFilter";
import VehicleTypeFilter from "../../components/VehicleTypeFilter/VehicleTypeFilter";
import VehicleLocationFilter from "../../components/VehicleLocationFilter/VehicleLocationFilter";
import { selectFilteredCampers } from "../../redux/selectors/selectors";
import { toggleSpecFilter } from "../../redux/slices/filterSlice";

// const initialOptions: Options | null = null;

const Catalog: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [endOfResults, setEndOfResults] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const filteredCampers = useAppSelector(selectFilteredCampers);

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
        <ul className="flex flex-col gap-8">
          {filteredCampers.map((camper: Partial<Camper>) => (
            <CatalogItem key={camper._id} camper={camper} />
          ))}
        </ul>

        {!filteredCampers.length && (
          <p>There are no results with this set of filters</p>
        )}

        {!endOfResults && (
          <Button
            type="button"
            className="mt-[50px] border border-primaryColor border-opacity-20 px-8 focus:outline-none hocus:border-carmineColor"
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default Catalog;
