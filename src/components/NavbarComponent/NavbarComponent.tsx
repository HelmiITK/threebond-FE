import logoThreebond from "../../assets/Logo_threebond.png";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <nav className="flex justify-between items-center mx-5 my-4">
      {/* menu */}
      <div>
        <h1 className="capitalize text-sm font-light">menu</h1>
      </div>
      {/* head */}
      <img src={logoThreebond} alt="logo-threebond" className="max-w-32" />
      {/* login */}
      <Link
        to={"/login"}
        className="cursor-pointer capitalize text-sm font-light"
      >
        login
      </Link>
    </nav>
  );
};

export default NavbarComponent;
