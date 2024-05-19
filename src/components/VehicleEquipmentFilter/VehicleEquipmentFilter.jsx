import EquipmentItem from "../EquipmentItem/EquipmentItem";

const VehicleEquipmentFilter = () => {
  return (
    <>
      <h3 className="mt-[14px] border-b border-primaryColor border-opacity-10 pb-6 text-xl font-semibold leading-6">
        Vehicle equipment
      </h3>
      <ul className="flex flex-wrap gap-[10px] pt-6">
        <EquipmentItem
          dataId="airConditioner"
          iconId="icon-airConditioner"
          iconStyle="size-8"
          text="AC"
        />
        <EquipmentItem
          dataId="automatic"
          iconId="icon-transmission"
          iconStyle="size-8"
          text="Automatic"
        />
        <EquipmentItem
          dataId="kitchen"
          iconId="icon-kitchen"
          iconStyle="size-8"
          text="Kitchen"
        />
        <EquipmentItem
          dataId="TV"
          iconId="icon-TV"
          iconStyle="size-8"
          text="TV"
        />
        <EquipmentItem
          dataId="shower"
          iconId="icon-shower"
          iconStyle="size-8"
          text="Shower/WC"
        />
      </ul>
    </>
  );
};

export default VehicleEquipmentFilter;
