import CleaningLadyImage from "@/assets/images/cleaning-lady.png";
import { ContactUs } from "@/components/common";
import { CheckBadgeIcon, StopIcon } from "@heroicons/react/16/solid";

const Services = () => {
  const services = ["Full Cleaning", "Garden Cleaning", "Driveway Cleaning"];
  return (
    <div className="h-[calc(100vh-80px)] md:px-20 px-5 text-black md:m-0 bg-white bg-[#fdf3ec] py-8" id="our-services">
      <div className="h-full flex md:gap-6 items-center flex-wrap md:flex-nowrap">
        <div className="md:w-1/2">
          <p className="md:text-4xl text-2xl font-bold">
            We are providing Best Cleaning Services
          </p>
          <img
            src={CleaningLadyImage}
            className="relative md:h-[600px] h-[300px] aspect-square object-contain mx-auto"
          />
        </div>
        <div className="flex flex-col items-start md:w-1/2">
          <div className="text-orange-600 bg-orange-100 px-3 py-1 rounded-full text-xs my-4">
            About us
          </div>
          <p className="text-gray-500">
            We provide top-notch cleaning services for residential and
            commercial properties in Sydney, NSW. Our expert team ensures every
            detail is taken care of, from outdoor cleaning to interior
            detailing.
          </p>
          <ol
            className="flex flex-col gap-2 my-4 list-decimal text-[#242424]"
            type="i"
          >
            {services.map((service) => (
              <li key={service} className="flex gap-2 items-center">
                <StopIcon className="h-4 w-4" /> {service}{" "}
                <CheckBadgeIcon className="h-4 w-4 text-green-500" />
              </li>
            ))}
          </ol>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Services;
