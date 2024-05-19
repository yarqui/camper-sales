import { useAppSelector } from "../../hooks/hooks";
import { selectFavorites } from "../../redux/selectors/selectors";
import CatalogList from "../../components/CatalogList/CatalogList";

const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);
  return (
    <div className="mt-16 flex justify-center pb-25">
      <CatalogList campers={favorites} />
      {!favorites.length && <p>You haven't added anything yet</p>}
    </div>
  );
};

export default Favorites;
