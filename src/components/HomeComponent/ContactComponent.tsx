import { AiOutlineMail } from "react-icons/ai";
import { LuMoveRight } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";

const ContactComponent = () => {
  return (
    <div className="p-6 bg-primary mt-12 mb-16 flex flex-col gap-7 lg:mt-16 lg:px-10 lg:py-14 lg:flex lg:flex-row lg:justify-around lg:gap-10">
      {/* top */}
      <div className="flex items-center justify-around lg:flex lg:flex-col lg:items-start lg:gap-3 lg:w-1/4">
        <h1 className="capitalize text-2xl font-semibold text-white lg:text-4xl lg:font-extrabold lg:tracking-widest">
          contact
        </h1>
        <div className="flex flex-col w-[60%] gap-1 text-white text-sm font-light lg:text-base lg:gap-0 lg:tracking-wider lg:font-normal lg:w-full">
          <h2>Please feel free to contact us</h2>
          <p>
            with any inquiries such as product questions or business issues.
          </p>
        </div>
      </div>
      {/* bottom  */}

      <div className="hidden lg:block w-[0.8px] bg-white"></div>

      <div className="flex flex-col gap-3 justify-center items-center lg:gap-6 ">
        {/* form button */}
        <button className="flex items-center justify-center gap-1 border-2 border-white bg-white rounded-sm py-2 px-4 w-full shadow-md lg:gap-2 lg:py-3 group lg:hover:shadow-lg lg:hover:bg-primary lg:hover:border-2 lg:border-white lg:shadow-sm lg:hover:shadow-slate-200 duration-200 ease-in-out ">
          <AiOutlineMail className="w-6 h-6 text-primary lg:group-hover:text-white duration-200 ease-in-out" />
          <span className="text-primary text-base font-medium lg:group-hover:text-white  duration-200 ease-in-out">
            Inquiry form
          </span>
          <LuMoveRight className="w-6 h-6 text-primary lg:group-hover:text-white duration-200 ease-in-out lg:group-hover:translate-x-4" />
        </button>
        {/* customer service phone */}
        <div className="flex flex-col items-center gap-1 lg:gap-2">
          {/* no telp */}
          <div className="flex items-center gap-1 lg:gap-2">
            <BsTelephone className="w-5 h-5 text-white" />
            <span className="capitalize text-white text-base font-medium lg:text-lg lg:tracking-wide">
              customer service office :
            </span>
            <h2 className="font-medium text-lg text-white lg:text-2xl lg:tracking-wider">0120-56-1456</h2>
          </div>
          {/* time oprational */}
          <div className="text-sm font-light text-white text-center lg:text-base">
            Contact hours: 9:30 to 12:00, 13:00 to 17:00 (Excluding Sat., Sun.,
            public holidays, and regular holidays)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
