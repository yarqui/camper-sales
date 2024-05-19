import { GiCartwheel } from "react-icons/gi";

const Spinner = ({ className = "" }) => {
  const classes = `animate-spin ${className}`;

  return <GiCartwheel className={classes} />;
};

export default Spinner;
