import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const LoginPage = () => {
  const [openedPass, setOpenedPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOpened = () => {
    setOpenedPass(!openedPass);
  };

  return (
    <div className="my-6 mx-4 h-96 justify-center items-center flex flex-col gap-8 mb-36 lg:items-center lg:mt-14 lg:mb-48">
      {/* head */}
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-lg font-medium capitalize text-black lg:text-xl">
          welcome back
        </h1>
        <p className="text-sm font-light text-black w-[70%] text-center lg:text-base">
          Sign in to access an enhanced viewing product experience.
        </p>
      </div>
      {/* form  */}
      <form
        action=""
        className="flex flex-col justify-center mx-4 gap-2 w-full md:w-[50%] lg:w-[29%]"
      >
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
          sign in
        </button>
        {/* link to regis */}
        <div className="flex justify-center gap-2 mt-2">
          <h1 className="capitalize text-sm font-light text-black">
            not a member?
          </h1>
          <Link to={"/register"} className="text-black text-sm underline">
            Join us
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
