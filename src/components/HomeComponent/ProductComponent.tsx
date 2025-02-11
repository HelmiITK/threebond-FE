import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import p1 from "../../assets/product1.jpg";
import p2 from "../../assets/product2.jpg";
import p3 from "../../assets/product3.jpg";
import p4 from "../../assets/product4.jpg";

const ProductComponent = () => {
  const product = [
    {
      code_product: "ThreeBond 1401D",
      name_product: "Screw loosening prevention; leakage and rust inhibitor",
      image: p1,
    },
    {
      code_product: "ThreeBond 1167",
      name_product: "Non-silicone Sealant for Automotive Electrical Components",
      image: p2,
    },
    {
      code_product: "ThreeBond 1927F",
      name_product:
        "(Engine Oil Additive for Hybrid Vehicles and Fuel Efficient Vehicles)",
      image: p3,
    },
    {
      code_product: "ThreeBond 1927E",
      name_product: "Engine oil supplement",
      image: p4,
    },
  ];
  return (
    <div className="mt-6 mx-4 flex flex-col gap-8">
      {/* head */}
      <div className="flex justify-between">
        <h1 className="text-base font-normal capitalize text-black">
          our product
        </h1>
        <Link
          to={"#"}
          className="flex items-center text-sm capitalize font-normal"
        >
          <span className="text-blue-500">view all</span>
          <GoArrowUpRight className="w-4 h-4 text-blue-500" />
        </Link>
      </div>
      {/* card product */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-10">
        {product.map((itemProduct, index) => (
          <div key={index} className="flex flex-col gap-4">
            <img
              src={itemProduct?.image}
              alt="product 1"
              className="rounded-lg h-56 object-cover shadow-md shadow-slate-300"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-secondary font-light text-base">
                {itemProduct?.code_product}
              </h1>
              <h2 className="text-slate-800 text-base">
                {itemProduct?.name_product}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
