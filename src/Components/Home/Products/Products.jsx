import React from "react";
import Container from "../../Shared/Container";
import image1 from "../../../assets/products/1.png";
import image2 from "../../../assets/products/2.png";
import image3 from "../../../assets/products/3.png";
import image4 from "../../../assets/products/4.png";
import image5 from "../../../assets/products/5.png";
import image6 from "../../../assets/products/6.png";

function Products() {
  return (
    <div className="py-10">
      <Container>
        <div>
          <div className="text-center">
            <h4 className="text-[#FF3811] text-[20px] font-semibold">
              Popular Products
            </h4>
            <h2 className="text-[36px] font-bold">Browse Our Products</h2>
            <p className="text-[15px] font-light text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised <br /> words which don't look even slightly
              believable
            </p>
          </div>
          <div className="pt-5 lg:grid grid-cols-3 gap-8">
            <div className="border rounded-lg p-5 shadow-lg text-center">
              <div className="bg-[#F3F3F3] rounded-md flex items-center justify-center p-5">
                <img className="w-[220px] h-[180px]" src={image6} alt="" />
              </div>
              <h2 className="text-[22px] font-semibold pt-3">
                Car Engine Plug
              </h2>
              <p className="text-[16px] font-semibold text-[#FF3811]">$20.00</p>
            </div>
            <div className="border rounded-lg p-5 shadow-lg text-center">
              <div className="bg-[#F3F3F3] rounded-md flex items-center justify-center p-5">
                <img className="w-[220px] h-[180px]" src={image3} alt="" />
              </div>
              <h2 className="text-[22px] font-semibold pt-3">Car Air Filter</h2>
              <p className="text-[16px] font-semibold text-[#FF3811]">$20.00</p>
            </div>
            <div className="border rounded-lg p-5 shadow-lg text-center">
              <div className="bg-[#F3F3F3] rounded-md flex items-center justify-center p-5">
                <img className="w-[220px] h-[180px]" src={image1} alt="" />
              </div>
              <h2 className="text-[22px] font-semibold pt-3">
                Cools Led Light
              </h2>
              <p className="text-[16px] font-semibold text-[#FF3811]">$20.00</p>
            </div>
            <div className="border rounded-lg p-5 shadow-lg text-center">
              <div className="bg-[#F3F3F3] rounded-md flex items-center justify-center p-5">
                <img className="w-[220px] h-[180px]" src={image2} alt="" />
              </div>
              <h2 className="text-[22px] font-semibold pt-3">
                Cools Led Light
              </h2>
              <p className="text-[16px] font-semibold text-[#FF3811]">$20.00</p>
            </div>
            <div className="border rounded-lg p-5 shadow-lg text-center">
              <div className="bg-[#F3F3F3] rounded-md flex items-center justify-center p-5">
                <img className="w-[220px] h-[180px]" src={image5} alt="" />
              </div>
              <h2 className="text-[22px] font-semibold pt-3">
                Cools Led Light
              </h2>
              <p className="text-[16px] font-semibold text-[#FF3811]">$20.00</p>
            </div>
            <div className="border rounded-lg p-5 shadow-lg text-center">
              <div className="bg-[#F3F3F3] rounded-md flex items-center justify-center p-5">
                <img className="w-[220px] h-[180px]" src={image4} alt="" />
              </div>
              <h2 className="text-[22px] font-semibold pt-3">
                Cools Led Light
              </h2>
              <p className="text-[16px] font-semibold text-[#FF3811]">$20.00</p>
            </div>
          </div>
          <div className="text-center pt-5">
            <button className="px-5 text-[#FF3811] border border-b-[#FF3811] py-2 rounded-md">More Products</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Products;
