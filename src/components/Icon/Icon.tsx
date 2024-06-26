import { FC } from "react";
import sprite from "../../assets/icons/sprite.svg";

type Props = {
  className?: string;
  iconId: string; // id from sprite.svg
};

const Icon: FC<Props> = ({ className = "", iconId }) => {
  const css: string = `transition-all duration-250 ${className}`;

  return (
    <svg className={css}>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};

export default Icon;
