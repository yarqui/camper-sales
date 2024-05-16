import { FC } from "react";
import Section from "../../components/Section/Section";

const HomePage: FC = () => {
  return (
    <Section>
      <h1 className="text-center text-xl font-normal text-secondaryColor">
        <span className="relative mb-4 inline-block px-14 py-4 text-5xl font-black uppercase text-primaryColor before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-carmineColor">
          <span className="relative text-white">Camper Quest</span>
        </span>{" "}
        <span className="mt-8 block  font-light">
          The largest camper marketplace nationwide.
        </span>
      </h1>

      <div className="mt-14 flex flex-col gap-8 px-28 text-sm">
        <p>
          Welcome to Camper Quest, your ultimate destination for premium camper
          RVs that transform your travel dreams into reality. At Camper Quest,
          we understand the allure of the open road and the thrill of
          exploration. Our meticulously designed campers offer the perfect blend
          of comfort, convenience, and reliability, making every journey an
          unforgettable adventure.
        </p>
        <p>
          We pride ourselves on providing a diverse range of camper models to
          suit every need and preference. From compact and nimble options for
          solo travelers and couples to spacious and luxurious models for
          families and groups, Camper Quest has something for everyone. Each
          camper is equipped with modern amenities, including fully functional
          kitchens, cozy sleeping areas, and advanced safety features, ensuring
          you have everything you need for a comfortable and secure journey.
        </p>
        <p>
          Our commitment to quality and customer satisfaction sets us apart. We
          offer personalized service to help you find the ideal camper that
          meets your specific requirements. With Camper Quest, you can embark on
          your travels with peace of mind, knowing that you have a reliable and
          well-equipped vehicle at your disposal.
        </p>
        <p>
          Experience the freedom to explore scenic landscapes, hidden gems, and
          breathtaking destinations with Camper Quest. Join our community of
          passionate travelers and start your next adventure with us. Discover
          the world on your terms and create lasting memories with Camper Quest.
        </p>
      </div>
    </Section>
  );
};

export default HomePage;
