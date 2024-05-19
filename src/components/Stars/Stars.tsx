import React from "react";
import Icon from "../Icon/Icon";

type StarsProps = {
  rating: number;
};

const Stars: React.FC<StarsProps> = ({ rating }) => {
  const fullStars = Math.round(rating);

  const emptyStars = 5 - fullStars;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i += 1) {
      stars.push(
        <Icon
          key={`full-${i}`}
          iconId="icon-star"
          className="size-4 fill-sunglowColor"
        />,
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Icon
          key={`empty-${i}`}
          iconId="icon-star"
          className="size-4 fill-almostWhiteColor"
        />,
      );
    }

    return stars;
  };

  return <div className="flex gap-1">{renderStars()}</div>;
};

export default Stars;
