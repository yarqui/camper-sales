import { FC } from "react";
import sprite from "../../assets/icons/sprite.svg";

type Props = {
  className?: string;
  iconId: string; // id from sprite.svg
};

const Icon: FC<Props> = ({ className = "", iconId }) => {
  const css: string = `${className}`;

  return (
    <svg className={css}>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};

// Usage:
// <Icon className="size-5 fill-violet-600" iconId="icon-calendar" />

export default Icon;
