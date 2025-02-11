import bgMain from "../../assets/bg_main_section.jpg";
import { Link } from "react-router-dom";

const MainSectionComponent = () => {
  return (
    <div className="relative">
    <img
      src={bgMain}
      alt="background main section"
      className="w-full h-80 object-cover z-0"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 z-5"></div>
    <div className="absolute z-10 top-10 mx-4 flex flex-col gap-2 items-center">
      <h1 className="text-lg font-medium text-black">
        ThreeBond is always by your side.
      </h1>
      <p className="w-[80%] text-sm font-normal text-center text-black">
        ThreeBond has been in business for 69 years. Although it does not
        stand out, it is used in various products around us. We will
        continue to move forward together with the development of Japan
        industry.
      </p>
      <Link
        to={"#"}
        className="text-sm mt-4 font-semibold capitalize py-2 px-4 bg-primary text-white shadow-md"
      >
        view catalog
      </Link>
    </div>
  </div>
  )
}

export default MainSectionComponent