import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";

const LayoutLandingPage = () => {
  return (
    <>
      <NavbarComponent/>
      <Outlet/>
      <FooterComponent/>
    </>
  );
};

export default LayoutLandingPage;
