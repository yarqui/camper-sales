import { useState } from "react";
import { Camper } from "../../redux/types";
import CatalogItem from "../CatalogItem/CatalogItem";
import ModalCamper from "../ModalCamper/ModalCamper";

type Props = {
  campers: Camper[];
};

const CatalogList = ({ campers }: Props) => {
  const [selectedCamper, setSelectedCamper] = useState<Partial<Camper> | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleShowMore = (camper: Partial<Camper>): void => {
    setSelectedCamper(camper);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setSelectedCamper(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <ul className="flex flex-col gap-8">
        {campers.map((camper: Partial<Camper>) => (
          <CatalogItem
            key={camper._id}
            camper={camper}
            handleShowMore={handleShowMore}
          />
        ))}
      </ul>

      {isModalOpen && selectedCamper && (
        <ModalCamper
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          camper={selectedCamper}
        />
      )}
    </>
  );
};

export default CatalogList;
