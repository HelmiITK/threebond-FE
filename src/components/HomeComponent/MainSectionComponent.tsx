import bgMain from "../../assets/bg_main_section.jpg";
import bgMainLg from "../../assets/bg_mode_lg.png";
import { Link } from "react-router-dom";

const MainSectionComponent = () => {
  return (
    <div className="relative">
      {/* mode hp img */}
      <img
        src={bgMain}
        alt="background main section"
        className="w-full h-80 object-cover lg:hidden"
      />
      {/* mode laptop > img */}
      <img
        src={bgMainLg}
        alt="background main section"
        className="hidden lg:block lg:w-full lg:object-cover lg:h-[600px] lg:object-right-top"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 lg:bg-gradient-to-r lg:from-white lg:via-transparent lg:bg-opacity-0"></div>
      <div className="absolute top-10 mx-4 flex flex-col gap-2 items-center lg:mx-10 lg:top-1/3 lg:flex lg:flex-col lg:items-start">
        <h1 className="text-xl font-medium text-black lg:text-2xl lg:font-bold lg:text-gray-900">
          ThreeBond is always by your side.
        </h1>
        <p className="w-[80%] text-base font-normal text-center text-black lg:text-start lg:w-1/3 lg:font-light">
          ThreeBond has been in business for 69 years. Although it does not
          stand out, it is used in various products around us. We will continue
          to move forward together with the development of Japan industry.
        </p>
        <Link
          to={"/login"}
          className="text-sm mt-3 font-semibold capitalize py-2 px-4 bg-primary text-white shadow-md rounded-sm lg:text-base hover:scale-105 duration-150 ease-in-out hover:shadow-lg hover:shadow-slate-400"
        >
          view catalog
        </Link>
      </div>
    </div>
  );
};

export default MainSectionComponent;
