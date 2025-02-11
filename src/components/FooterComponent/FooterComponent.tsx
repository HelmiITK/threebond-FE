import logoThreebond from "../../assets/Logo_threebond.png";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <footer className="my-12 mx-6 flex flex-col gap-6">
        {/* logo */}
        <img src={logoThreebond} alt="logo threebond" className="w-[40%]" />
        {/* link */}
        <div className="flex flex-row gap-2 justify-between">
          {/* info1 */}
          <div className="flex flex-col gap-1">
            <h1 className="text-base font-medium capitalize text-black">
              product information
            </h1>
            <ul className="text-sm flex flex-col gap-2 font-light text-black">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
              <li>Ayam</li>
            </ul>
          </div>
          {/* info2 */}
          <div className="flex flex-col gap-1">
            <h1 className="text-base font-medium capitalize text-black">
              product information
            </h1>
            <ul className="text-sm flex flex-col gap-2 font-light text-black">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
              <li>Ayam</li>
            </ul>
          </div>
        </div>
        {/* media */}
        <div className="flex items-center justify-around">
          <h1 className="text-base font-normal text-black">
            Official accounts
          </h1>
          <div className="w-[1px] h-[20px] bg-black"></div>
          <div className="flex items-center gap-4">
            <RiTwitterXLine className="w-6 h-6 text-[#0A0A0A]" />
            <FaInstagram className="w-6 h-6 text-[#DD2A7B]" />
            <BiLogoFacebookCircle className="w-6 h-6 text-[#0866FF]" />
            <FaYoutube className="w-6 h-6 text-[#FF0000]" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-300"></div>
        {/* copy right */}
        <div className="text-center text-sm">
          Copyright© ThreeBond Holdings Co., Ltd. All rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
