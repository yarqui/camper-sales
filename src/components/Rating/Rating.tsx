import { FC } from "react";
import { Camper } from "../../redux/types";
import Icon from "../Icon/Icon";

type Props = Partial<Pick<Camper, "rating" | "reviews">>;

const Rating: FC<Props> = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-1">
      <Icon iconId="icon-star" className="size-4 fill-sunglowColor" />
      <span className="underline underline-offset-4">
        {rating && rating} ({reviews?.length}
        {reviews && reviews?.length < 2 ? " Review" : " Reviews"})
      </span>
    </div>
  );
};

export default Rating;
