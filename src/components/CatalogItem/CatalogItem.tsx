import { FC, MouseEvent } from "react";
import { Camper } from "../../redux/types";
import Icon from "../Icon/Icon";
import OptionItem, { Option } from "../OptionItem/OptionItem";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";
import { selectFavorites } from "../../redux/selectors/selectors";
import Rating from "../Rating/Rating";
import Location from "../Location/Location";

type Props = {
  camper: Partial<Camper>;
  handleShowMore: (camper: Partial<Camper>) => void;
};

const CatalogItem: FC<Props> = ({ camper, handleShowMore }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.some(
    (favCamper) => favCamper._id === camper._id,
  );

  const {
    name,
    price = 0,
    rating = 0,
    location,
    adults,
    engine,
    transmission,
    details,
    gallery,
    reviews,
    description,
  } = camper;

  const { airConditioner, kitchen, beds } = details || {};

  const optionEntries = Object.entries({
    adults,
    engine,
    transmission,
    airConditioner,
    kitchen,
    beds,
  });

  const optionList: Option[] = optionEntries.filter(
    ([, value]) => value !== undefined,
  ) as Option[];

  const handleToggleFavorites = () => {
    dispatch(toggleFavorite(camper));
  };

  const handleShowMoreClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    handleShowMore(camper);
  };

  return (
    <li className="flex h-[358px] w-[888px] max-w-[888px] gap-6 rounded-[20px] border border-primaryColor border-opacity-20 p-6">
      {/* image wrapper */}
      <div className="flex h-[310px] w-[290px] shrink-0 overflow-hidden rounded-[10px]">
        {gallery && (
          <img
            className="h-full basis-full object-cover"
            src={gallery[0]}
            alt={`camper ${name}`}
            loading="lazy"
          />
        )}
      </div>

      {/* details */}
      <div className="flex w-[526px] flex-col gap-6">
        <div className="flex flex-col gap-2">
          {/* name & price */}
          <div className="flex justify-between text-2xl font-semibold leading-[30px]">
            <h2 className="truncate">{name}</h2>

            <div className="flex items-center gap-3">
              <p className="max-w-52 truncate">€{price}.00</p>

              {/* favorites button */}
              <button type="button" onClick={handleToggleFavorites}>
                <Icon
                  iconId={isFavorite ? "icon-heart-pressed" : "icon-heart"}
                  className={`size-6 ${isFavorite && "fill-carmineColor"}`}
                />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <Rating rating={rating} reviews={reviews} />
            <Location location={location} />
          </div>
        </div>

        {/* description */}
        <div>
          <p className="truncate text-secondaryColor">{description}</p>
        </div>

        {/* options */}
        <div>
          <ul className="flex flex-wrap gap-2">
            {optionList?.map((option, idx) => (
              <OptionItem key={idx} option={option} />
            ))}
          </ul>
        </div>
        <Button
          className="w-fit bg-carmineColor px-10 py-4 text-almostWhiteColor hocus:bg-carmineAccentColor"
          onClick={handleShowMoreClick}
        >
          Show more
        </Button>
      </div>
    </li>
  );
};

export default CatalogItem;
