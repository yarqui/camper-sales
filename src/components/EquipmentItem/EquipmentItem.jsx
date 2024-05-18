import Icon from "../Icon/Icon";

const EquipmentItem = ({ dataId, iconId, text, iconStyle }) => {
  return (
    <li
      data-id={dataId}
      className="flex h-24 w-28 select-none flex-col items-center justify-center gap-2 rounded-[10px] border border-primaryColor border-opacity-20 p-2 font-medium leading-5 transition-all duration-250 hover:cursor-pointer"
    >
      <Icon iconId={iconId} className={iconStyle} />
      <span className="text-center">{text}</span>
    </li>
  );
};

export default EquipmentItem;
