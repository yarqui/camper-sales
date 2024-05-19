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

    case "radio":
      keyProp = "Radio";
      valueProp = "";
      break;

    case "CD":
      valueProp = "";
      break;

    case "TV":
      valueProp = "";
      break;

    case "shower":
      keyProp = "Shower";
      valueProp = "";
      break;

    case "toilet":
      keyProp = "Toilet";
      valueProp = "";
      break;

    case "freezer":
      keyProp = "Freezer";
      valueProp = "";
      break;

    case "hob":
      keyProp = "Hob";
      valueProp = "";
      break;

    case "microwave":
      keyProp = "Microwave";
      valueProp = "";
      break;

    case "gas":
      keyProp = "Gas";
      valueProp = "";
      break;

    case "water":
      keyProp = "Water";
      valueProp = "";
      break;

    case "bathroom":
      keyProp = "Bathroom";
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
