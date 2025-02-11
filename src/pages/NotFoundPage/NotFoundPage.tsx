import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Bg from "../../assets/bgNotFound.jpg";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full relative flex items-center justify-center">
      <div className="flex items-center flex-col">
        <img
          src={Bg}
          alt="bg notfound"
          className="object-cover h-screen z-0 lg:w-screen lg:object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-5"></div>

        <div className="text-center absolute z-10 top-[40%] flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl text-white animate-fadeIn transition-all">
            {" "}
            <span className="text-red-500">404</span> | Not Found!
          </h1>

          <h2
            className="text-white flex items-center duration-300 hover:underline hover:scale-105 cursor-pointer mt-10 italic"
            //   agar back ke halaman sebelumnya
            onClick={() => navigate(-1)}
          >
            {" "}
            <span className="mr-3">
              <FaArrowLeft />
            </span>
            Back to Previous Page
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
