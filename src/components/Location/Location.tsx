import { FC } from "react";
import { reverseLocation } from "../../helpers/helpers";
import { Camper } from "../../redux/types";
import Icon from "../Icon/Icon";

type Props = Partial<Pick<Camper, "location">>;

const Location: FC<Props> = ({ location }) => {
  const reversedLocation = reverseLocation(location);

  return (
    <div className="flex items-center gap-1">
      <Icon iconId="icon-pin" className="size-4" />
      <span>{reversedLocation}</span>
    </div>
  );
};

export default Location;
