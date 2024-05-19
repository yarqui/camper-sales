import { Notify } from "notiflix";
import Button from "../Button/Button";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);

    e.currentTarget.reset();
    Notify.success("Thank you for your request. We'll contact with you soon");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex w-[448px] shrink-0 flex-col gap-6 rounded-[10px] border border-primaryColor border-opacity-20 p-6"
    >
      <div>
        <h3 className="text-xl font-semibold leading-6">
          Book your campervan now
        </h3>
        <p className="mt-2 text-secondaryColor">
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div className="flex flex-col gap-[14px] leading-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full rounded-[10px] bg-almostWhiteColor p-[18px]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-[10px] bg-almostWhiteColor p-[18px]"
          required
        />

        <input
          type="date"
          name="bookingDate"
          placeholder="Booking date"
          className="w-full rounded-[10px] bg-almostWhiteColor p-[18px]"
          required
        />
        <textarea
          name="comment"
          placeholder="Comment"
          className="w-full resize-none rounded-[10px] bg-almostWhiteColor p-[18px]"
        ></textarea>
      </div>

      <Button
        type="submit"
        className="w-fit rounded-full bg-carmineColor px-15 py-4 text-white hover:bg-carmineAccentColor"
      >
        Send
      </Button>
    </form>
  );
};

export default Form;
