import { LuLoader } from "react-icons/lu";

// TODO: change spinner to the car wheel
const Spinner = ({ className = "" }) => {
  const classes = `animate-spin ${className}`;

  return <LuLoader className={classes} />;
};

export default Spinner;

// Spinner.propTypes = {
//   css: PropTypes.string,
// };
