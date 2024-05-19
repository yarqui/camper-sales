import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";
// import { debounce } from "../../helpers/helpers";
import { setLocationFilter } from "../../redux/slices/filterSlice";

const VehicleLocationFilter = () => {
  const dispatch = useDispatch();

  // const debouncedSetLocationFilter = debounce((val) => {
  //   dispatch(setLocationFilter(val));
  // }, 500);

  const handleChange = (e) => {
    // debouncedSetLocationFilter(e.target.value);
    dispatch(setLocationFilter(e.target.value));
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="location" className="font-medium text-secondaryColor">
        Location
      </label>

      <div className="relative flex flex-col-reverse justify-center">
        <input
          id="location"
          type="text"
          className="peer w-full rounded-[10px] bg-almostWhiteColor p-[18px] ps-11 leading-5"
          placeholder="City"
          onChange={handleChange}
        />
        <Icon
          iconId="icon-pin"
          className="absolute left-[18px] top-[18px] h-5 w-[18px] peer-placeholder-shown:fill-gray-400"
        />
      </div>
    </div>
  );
};

export default VehicleLocationFilter;
