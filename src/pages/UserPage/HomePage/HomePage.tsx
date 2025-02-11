import NavbarComponent from "../../../components/NavbarComponent/NavbarComponent";
import MainSectionComponent from "../../../components/HomeComponent/MainSectionComponent";
import ProductComponent from "../../../components/HomeComponent/ProductComponent";
import ContactComponent from "../../../components/HomeComponent/ContactComponent";
import FooterComponent from "../../../components/FooterComponent/FooterComponent";

const HomePage = () => {
  return (
    <>
      <NavbarComponent />

      {/* main section */}
      <MainSectionComponent />
      {/* product section */}
      <ProductComponent />
      {/* Contact */}
      <ContactComponent />

      <FooterComponent />
    </>
  );
};

export default HomePage;
