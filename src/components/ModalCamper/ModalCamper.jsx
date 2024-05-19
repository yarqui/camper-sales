import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import Rating from "../Rating/Rating";
import Location from "../Location/Location";
import TabsLabel from "../TabsLabel/TabsLabel";
import Tabs from "../Tabs/Tabs";
import Form from "../Form/Form";

const ModalCamper = ({ isOpen, onClose, camper }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    const bodyEl = document.body;
    bodyEl.classList.add("overflow-hidden");

    return () => {
      bodyEl.classList.remove("overflow-hidden");
    };
  }, []);

  if (!isOpen) return null;

  const { name, price, rating, location, description, gallery, reviews } =
    camper;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primaryColor bg-opacity-50"
      onClick={onClose}
    >
      <dialog
        open
        className="relative h-[720px] w-[982px] overflow-y-auto rounded-[20px] p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="truncate text-2xl font-semibold leading-[30px]">
            {name}
          </h2>
          <button type="button" onClick={onClose}>
            <Icon
              iconId="icon-cross"
              className="size-8 transition-colors duration-250 hover:fill-carmineColor"
            />
          </button>
        </div>
        <div className="mt-2 flex gap-4">
          <Rating rating={rating} reviews={reviews} />
          <Location location={location} />
        </div>
        <div className="mt-4 max-w-52 truncate text-2xl font-semibold leading-[30px]">
          €{price}.00
        </div>
        <ul className="mt-6 flex w-full gap-4">
          {gallery &&
            gallery.map((image, index) => (
              <div
                key={index}
                className="flex h-[310px] w-[290px] shrink-0 overflow-hidden rounded-[10px]"
              >
                <img
                  src={image}
                  alt={`camper ${name}`}
                  className="h-full basis-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
        </ul>
        <p className="mt-6 text-secondaryColor">{description}</p>

        {/* tabs */}
        <TabsLabel activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-11 flex gap-6">
          <Tabs activeTab={activeTab} camper={camper} />
          <Form />
        </div>
      </dialog>
    </div>
  );
};

export default ModalCamper;
