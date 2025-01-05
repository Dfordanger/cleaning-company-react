import CleaningImage from "@/assets/images/cleaning-man.png";
import { ContactUs } from "@/components/common";

const Home = () => {
  return (
    <div className="h-[calc(100vh-80px)] relative md:px-20 px-5 text-black md:m-0 py-8">
      <div className="md:flex md:gap-6 justify-around items-center bg-right bg-cover flex-wrap md:flex-nowrap h-full">
        <div className="md:w-1/2">
          <p className="font-bold md:text-5xl text-4xl md:leading-normal">
            <div className="text-green-800 pr-2">Professional</div>Cleaning
            service for your home
          </p>
          <p className="py-4">
            with Reliable, Friendly and Trustful being our company values, we
            represent ourselves with most complete and up to date cleaning
            services.
          </p>
          <ContactUs />
        </div>
        <div className="mx-auto">
          <img
            src={CleaningImage}
            className="relative md:h-[600px] h-[300px] aspect-square object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
