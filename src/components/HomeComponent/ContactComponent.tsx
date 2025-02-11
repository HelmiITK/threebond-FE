import { AiOutlineMail } from "react-icons/ai";
import { LuMoveRight } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";

const ContactComponent = () => {
  return (
    <div className="p-6 bg-primary mt-9 flex flex-col gap-7">
      {/* top */}
      <div className="flex items-center justify-around">
        <h1 className="capitalize text-2xl font-semibold text-white">
          contact
        </h1>
        <div className="flex flex-col w-[60%] gap-1 text-white text-sm font-light">
          <h2>Please feel free to contact us</h2>
          <p>
            with any inquiries such as product questions or business issues.
          </p>
        </div>
      </div>
      {/* bottom  */}
      <div className="flex flex-col gap-3 justify-center items-center">
        {/* form button */}
        <button className="flex items-center justify-center gap-1 bg-white rounded-sm py-2 px-4 w-full shadow-md">
          <AiOutlineMail className="w-6 h-6 text-primary" />
          <span className="text-primary text-base font-medium">
            Inquiry form
          </span>
          <LuMoveRight className="w-6 h-6 text-primary" />
        </button>
        {/* customer service phone */}
        <div className="flex flex-col items-center gap-1">
          {/* no telp */}
          <div className="flex items-center gap-1">
            <BsTelephone className="w-5 h-5 text-white" />
            <span className="capitalize text-white text-base font-medium">
              customer service office :
            </span>
            <h2 className="font-medium text-lg text-white">0120-56-1456</h2>
          </div>
          {/* time oprational */}
          <div className="text-sm font-light text-white text-center">
            Contact hours: 9:30 to 12:00, 13:00 to 17:00 (Excluding Sat., Sun.,
            public holidays, and regular holidays)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
