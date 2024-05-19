import EquipmentItem from "../EquipmentItem/EquipmentItem";

const VehicleTypeFilter = () => {
  return (
    <div>
      <h3 className="mt-8 border-b border-primaryColor border-opacity-10 pb-6 text-xl font-semibold leading-6">
        Vehicle type
      </h3>

      <ul className="flex flex-wrap gap-[10px] pt-6">
        <EquipmentItem
          dataId="panelTruck"
          iconId="icon-van"
          iconStyle="w-10 h-7"
          text="Van"
        />
        <EquipmentItem
          dataId="fullyIntegrated"
          iconId="icon-fully-integrated"
          iconStyle="size-8"
          text="Fully Integrated"
        />
        <EquipmentItem
          dataId="alcove"
          iconId="icon-alcove"
          iconStyle="size-8"
          text="Alcove"
        />
      </ul>
    </div>
  );
};

export default VehicleTypeFilter;
