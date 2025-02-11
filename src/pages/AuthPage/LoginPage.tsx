import {Link} from "react-router-dom"
const LoginPage = () => {
  return (
    <div className="my-6 mx-4 flex flex-col gap-6 mb-36">
      {/* head */}
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-lg font-medium capitalize text-black">
          welcome back
        </h1>
        <p className="text-sm font-light text-black w-[70%] text-center">
          Sign in to access an enhanced viewing product experience.
        </p>
      </div>
      {/* form  */}
      <form action="" className="flex flex-col justify-center mx-4 gap-4">
        {/* email */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="capitalize text-base font-medium text-black"
          >
            email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            required
            className="rounded-md py-3 px-4 bg-gray-100"
          />
        </div>
        {/* password */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="capitalize text-base font-medium text-black"
          >
            password
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="password"
            required
            className="rounded-md py-3 px-4 bg-gray-100"
          />
        </div>
        <button className="capitalize bg-primary text-white py-3 rounded-md mt-4">
          sign in
        </button>
        {/* link to regis */}
        <div className="flex justify-center gap-2">
          <h1 className="capitalize text-sm font-light text-black">not a member?</h1>
          <Link to={'/register'} className="text-black text-sm underline">
          Join us
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
