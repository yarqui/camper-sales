import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";
import { debounce } from "../../helpers/helpers";
import { setLocationFilter } from "../../redux/slices/filterSlice";

const VehicleLocationFilter = () => {
  const dispatch = useDispatch();

  const debouncedSetLocationFilter = debounce((val) => {
    dispatch(setLocationFilter(val));
  }, 500);

  const handleChange = (e) => {
    debouncedSetLocationFilter(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="location" className="font-medium text-secondaryColor">
        Location
      </label>

      <div className="relative flex flex-col justify-center">
        <Icon
          iconId="icon-pin"
          className=" absolute left-[18px] top-[18px] h-5 w-[18px]"
        />
        <input
          id="location"
          type="text"
          className="w-full rounded-[10px] bg-almostWhiteColor p-[18px] ps-11 leading-5"
          placeholder="Type location to filter"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default VehicleLocationFilter;
