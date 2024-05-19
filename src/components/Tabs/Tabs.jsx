import OptionItem from "../OptionItem/OptionItem";
import Stars from "../Stars/Stars";

const Tabs = ({ activeTab, camper }) => {
  const {
    engine,
    adults,
    transmission,
    details,
    reviews,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  const {
    airConditioner,
    bathroom,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    shower,
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    water,
  } = details || {};

  const specsEntries = Object.entries({
    form,
    length,
    width,
    height,
    tank,
    consumption,
  });

  const optionEntries = Object.entries({
    adults,
    engine,
    transmission,
    airConditioner,
    kitchen,
    beds,
    CD,
    TV,
    radio,
    shower,
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    water,
    bathroom,
  });

  return (
    <div className="">
      {activeTab === "features" && (
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {optionEntries.map((option, idx) => (
              <OptionItem key={idx} option={option} />
            ))}
          </div>

          <div className="mt-11">
            <h3 className="border-b border-b-primaryColor border-opacity-10 pb-6 text-xl font-semibold leading-6">
              Vehicle details
            </h3>
            <ul className="mt-6 flex flex-col gap-[14px]">
              {specsEntries.map(([key, value]) => (
                <li
                  key={key}
                  className="flex justify-between text-lg font-medium capitalize leading-6"
                >
                  <span>{key}:</span> <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="flex flex-col gap-4">
          {reviews.map((review, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 ">
                {/* avatar */}
                <div className="flex size-[60px] items-center justify-center rounded-full bg-culturedGreyColor text-2xl font-semibold leading-[30px] text-carmineColor">
                  {review.reviewer_name.slice(0, 1)}
                </div>

                {/* name */}
                <div>
                  <span className="text-lg font-semibold">
                    {review.reviewer_name}
                  </span>

                  <Stars rating={review.reviewer_rating} />
                </div>
              </div>

              <p className="mt-4 text-secondaryColor">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
