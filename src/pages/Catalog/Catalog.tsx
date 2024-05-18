import { FC, useEffect, useState } from "react";
import { fetchCampersAll } from "../../redux/operations/campersOperations";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectFilteredCampersByLocation } from "../../redux/selectors/selectors";
import { Camper, Details, Options } from "../../redux/types";
import CatalogItem from "../../components/CatalogItem/CatalogItem";

const initialOptions: Options | null = null;

const Catalog: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [options, setOptions] = useState<Options | null>(initialOptions);

  const dispatch = useAppDispatch();
  const campers = useAppSelector(selectFilteredCampersByLocation);

  useEffect(() => {
    const controller = new AbortController();

    // TODO: implement client side filtering

    dispatch(fetchCampersAll(page));

    return () => {
      controller.abort();
    };
  }, [dispatch, page]);

  return (
    <div className="flex gap-[64px]">
      <aside className="w-[360px] border border-red-500">sidebar</aside>
      <div>
        <ul className="flex flex-col gap-8">
          {campers.map((camper: Partial<Camper>) => (
            <CatalogItem key={camper._id} camper={camper} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
