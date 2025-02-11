import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const RegisterPage = () => {
  const [openedPass, setOpenedPass] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOpened = () => {
    setOpenedPass(!openedPass);
  };

  return (
    <div className="my-8 mx-4 h-full justify-center flex flex-col gap-8 mb-16 items-center lg:items-center lg:mt-14 lg:mb-48">
      {/* head */}
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-lg font-medium capitalize text-black lg:text-xl">
          Become a Threebond Member
        </h1>
        <p className="text-sm font-light text-black w-[70%] text-center lg:text-base">
          Create your Threebond Member profile, and get access to an enhanced
          viewing experience.
        </p>
      </div>
      {/* form  */}
      <form
        action=""
        className="flex flex-col justify-center mx-4 gap-2 w-full md:w-[50%] lg:w-[29%]"
      >
        {/* first name */}
        <div className="relative">
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="peer rounded-md py-3 px-4 bg-gray-50 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 hover:bg-gray-100 cursor-text"
          />
          {firstName === "" && (
            <label
              htmlFor="firstname"
              className="absolute after:content-['*'] after:ml-1 after:text-pink-500 left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              First name
            </label>
          )}
        </div>
        {/* last name */}
        <div className="relative">
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="peer rounded-md py-3 px-4 bg-gray-50 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 hover:bg-gray-100 cursor-text"
          />
          {lastName === "" && (
            <label
              htmlFor="lastname"
              className="absolute after:content-['*'] after:ml-1 after:text-pink-500 left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Last name
            </label>
          )}
        </div>
        {/* phone */}
        <div className="relative">
          <input
            type="number"
            name="phone"
            id="phone"
            min="1"
            max="15"
            step="5"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="peer rounded-md py-3 px-4 bg-gray-50 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 hover:bg-gray-100 cursor-text"
          />
          {phone === "" && (
            <label
              htmlFor="Phone"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Phone
            </label>
          )}
        </div>
        {/* email */}
        <div className="relative">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="peer rounded-md py-3 px-4 bg-gray-50 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 hover:bg-gray-100 cursor-text"
          />
          {email === "" && (
            <label
              htmlFor="email"
              className="absolute after:content-['*'] after:ml-1 after:text-pink-500 left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Email
            </label>
          )}
        </div>
        {/* password */}
        <div className="relative">
          <input
            type={openedPass ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="peer rounded-md py-3 px-4 bg-gray-50 w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 hover:bg-gray-100 cursor-text"
          />
          {password === "" && (
            <label
              htmlFor="password"
              className="absolute after:content-['*'] after:ml-1 after:text-pink-500 left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Password
            </label>
          )}
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleOpened}
          >
            {openedPass ? <FiEye /> : <FiEyeOff />}
          </div>
        </div>
        {/* submit */}
        <button className="capitalize bg-primary text-white py-3 rounded-md mt-4 hover:shadow-lg hover:shadow-gray-300 duration-200 ease-in-out">
          Join
        </button>
        {/* link to regis */}
        <div className="flex justify-center gap-2 mt-2">
          <h1 className="capitalize text-sm font-light text-black">
            Already a member?
          </h1>
          <Link to={"/login"} className="text-black text-sm underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
