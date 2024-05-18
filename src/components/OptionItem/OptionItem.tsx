import { FC } from "react";
import Icon from "../Icon/Icon";

export type Option = [string, number | string];

type Props = {
  option: Option;
};

const OptionItem: FC<Props> = ({ option }) => {
  const [key, value] = option;

  let keyProp = key;
  let valueProp = value;

  switch (key) {
    case "engine":
      keyProp = "";
      break;

    case "transmission":
      keyProp = "";
      break;

    case "airConditioner":
      keyProp = "AC";
      valueProp = "";
      break;

    case "kitchen":
      keyProp = "Kitchen";
      valueProp = "";
      break;

    default:
      break;
  }

  return (
    <li className="flex w-fit select-none items-center gap-2 rounded-full bg-culturedGreyColor px-[18px] py-3 leading-5">
      <Icon iconId={`icon-${key}`} className="size-5" />
      <div>
        <span>{valueProp} </span>
        <span>{keyProp}</span>
      </div>
    </li>
  );
};

export default OptionItem;
