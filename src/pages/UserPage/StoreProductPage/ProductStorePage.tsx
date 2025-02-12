import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Segmented, ConfigProvider } from "antd";
import { LiaWindowClose } from "react-icons/lia";

import p1 from "../../../assets/product1.jpg";
import p2 from "../../../assets/product2.jpg";
import p3 from "../../../assets/product3.jpg";
import p4 from "../../../assets/product4.jpg";
import p5 from "../../../assets/product5.jpg";
import p6 from "../../../assets/product6.jpg";
import p7 from "../../../assets/product7.jpg";
import { useEffect, useState } from "react";

const ProductStorePage: React.FC = () => {
  // set carousel
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  });

  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);
  const [selectedCategorie, setSelectedCategorie] = useState<string | null>(
    null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  // kondisi if item carousel mode lg
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 5,
        }));
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 4,
        }));
      } else {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 3,
        }));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // clear filtering with button deselected
  const clearFilters = () => {
    setSelectedMarket(null);
    setSelectedCategorie(null);
    setSelectedPrice(null);
    console.log('gua diklik')
  };

  return (
    <div className="flex flex-col gap-4 mx-4">
      {/* Carousel product  */}
      <div className="mt-4 flex justify-center overflow-x-auto lg:overflow-hidden">
        <div className="slider-container w-full lg:w-[90%]">
          <Slider {...settings}>
            <div className="p-2">
              <img src={p1} alt="product example 1" />
            </div>
            <div className="p-2">
              <img src={p2} alt="product example 2" />
            </div>
            <div className="p-2">
              <img src={p3} alt="product example 3" />
            </div>
            <div className="p-2">
              <img src={p4} alt="product example 4" />
            </div>
            <div className="p-2">
              <img src={p5} alt="product example 4" />
            </div>
            <div className="p-2">
              <img src={p6} alt="product example 4" />
            </div>
            <div className="p-2">
              <img src={p7} alt="product example 4" />
            </div>
          </Slider>
        </div>
      </div>
      {/*  filtering */}
      <div className="flex flex-col gap-2 lg:mx-8">
        {/* market */}
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-light text-black capitalize">
            market :
          </h1>
          <div className="overflow-x-auto">
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {
                    itemSelectedBg: "#E8380D",
                    itemSelectedColor: "#ffff",
                  },
                },
              }}
            >
              <div className="overflow-x-auto">
                <Segmented
                  options={[
                    "Automotive Market",
                    "Electronics Market",
                    "Public Industrial Material Market",
                    "Auto Aftermarket",
                    "Ayam",
                  ]}
                  value={selectedMarket}
                  onChange={(value) => {
                    setSelectedMarket(value);
                    console.log(value); // string
                  }}
                  className="text-xs tracking-wider"
                />
              </div>
            </ConfigProvider>
          </div>
        </div>
        {/* categories */}
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-light text-black capitalize">
            categories :
          </h1>
          <div className="overflow-x-auto">
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {
                    itemSelectedBg: "#E8380D",
                    itemSelectedColor: "#ffff",
                  },
                },
              }}
            >
              <div className="overflow-x-auto">
                <Segmented
                  options={["Ayam", "Kambing", "Bebek", "Kucing", "Kuda"]}
                  value={selectedCategorie}
                  onChange={(value) => {
                    setSelectedCategorie(value);
                    console.log(value); // string
                  }}
                  className="text-xs tracking-wider"
                />
              </div>
            </ConfigProvider>
          </div>
        </div>
        {/* Price */}
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-light text-black capitalize">
            prices :
          </h1>
          <div className="overflow-x-auto">
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {
                    itemSelectedBg: "#E8380D",
                    itemSelectedColor: "#ffff",
                  },
                },
              }}
            >
              <div className="overflow-x-auto">
                <Segmented
                  options={[
                    "USD.10.000",
                    "USD.15.000",
                    "USD.20.000",
                    "USD.25.000",
                    "USD.30.000",
                  ]}
                  value={selectedPrice}
                  onChange={(value) => {
                    setSelectedPrice(value);
                    console.log(value); // string
                  }}
                  className="text-xs tracking-wider"
                />
              </div>
            </ConfigProvider>
          </div>
        </div>
        {/* clear filter */}
        <div
          typeof="button"
          onClick={clearFilters}
          className={`${
            selectedMarket || selectedCategorie || selectedPrice
              ? "flex items-center gap-1 mt-2 justify-center cursor-pointer py-1 px-2 border border-primary rounded-md lg:py-[6px] group hover:shadow-md hover:shadow-gray-400 hover:bg-primary duration-200 ease-in-out"
              : "cursor-not-allowed flex items-center gap-1 mt-2 justify-center py-1 px-2 border border-gray-300 rounded-md lg:py-[6px] bg-gray-100 bg-opacity-50"
          } `}
        >
          <LiaWindowClose
            size={20}
            className={`${
              selectedMarket || selectedCategorie || selectedPrice
                ? "text-primary group-hover:text-white duration-200 ease-in-out"
                : "text-gray-300"
            }`}
          />
          <h1
            className={`${
              selectedMarket || selectedCategorie || selectedPrice
                ? "text-base font-normal capitalize text-primary tracking-wide group-hover:text-white duration-200 ease-in-out"
                : "text-gray-300"
            }`}
          >
            deselected
          </h1>
        </div>
        {/* result data count */}
        <div className="flex flex-col items-center gap-1 mt-3">
          <div className="flex  items-end gap-1">
            <h1 className="text-lg font-medium text-primary lg:text-3xl">73</h1>
            <p className="text-sm font-medium text-secondary lg:text-base">
              hits
            </p>
          </div>
        </div>
      </div>
      {/* main content */}
    </div>
  );
};

export default ProductStorePage;
