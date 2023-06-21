import React from "react";
import Container from "../../Shared/Container";
import image1 from "../../../assets/icons/group.svg";
import image3 from "../../../assets/icons/person.svg";
import image4 from "../../../assets/icons/Wrench.svg";
import image5 from "../../../assets/icons/check.svg";
import image6 from "../../../assets/icons/deliveryt.svg";

function Feature() {
  return (
    <div className="py-5">
      <Container>
        <div>
          <div className="text-center">
            <h4 className="text-[#FF3811] text-[20px] font-semibold">
              Core Features
            </h4>
            <h2 className="text-[36px] font-bold">Why Choose Us</h2>
            <p className="text-[15px] font-light text-[#737373]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised <br /> words which don't look even slightly
              believable
            </p>
          </div>
          <div className="lg:grid grid-cols-5 gap-5 py-5">
            <div className="border p-5 rounded-md lg:mb-0 mb-5 text-center transition-all duration-300 hover:bg-[#1125ff] hover:text-white">
              <img className="inline-block" src={image1} alt="" />
              <p className="text-[16px] font-inter font-semibold pt-2">Expert Team</p>
            </div>
            <div className="border p-5 rounded-md lg:mb-0 mb-5 text-center transition-all duration-300 hover:bg-[#1125ff] hover:text-white">
              <img className="inline-block" src={image3} alt="" />
              <p className="text-[16px] font-inter font-semibold pt-2">24/7 Support</p>
            </div>
            <div className="border p-5 rounded-md lg:mb-0 mb-5 text-center transition-all duration-300 hover:bg-[#1125ff] hover:text-white">
              <img className="inline-block" src={image4} alt="" />
              <p className="text-[16px] font-inter font-semibold pt-2">Best Equipment</p>
            </div>
            <div className="border p-5 rounded-md lg:mb-0 mb-5 text-center transition-all duration-300 hover:bg-[#1125ff] hover:text-white">
              <img className="inline-block" src={image5} alt="" />
              <p className="text-[16px] font-inter font-semibold pt-2">100% Guranty</p>
            </div>
            <div className="border p-5 rounded-md lg:mb-0 mb-5 text-center transition-all duration-300 hover:bg-[#1125ff] hover:text-white">
              <img className="inline-block" src={image6} alt="" />
              <p className="text-[16px] font-inter font-semibold pt-2">Timely Delivery</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feature;
