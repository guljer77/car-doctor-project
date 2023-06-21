import React from "react";
import Container from "../Container";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../../assets/logo2.png";

function Footer() {
  return (
    <div className="bg-[#151515] py-20 font-inter">
      <Container>
        <div className="lg:flex gap-10">
          <div className="text-white lg:w-2/5 w-full lg:mb-0 mb-5">
            <img src={Logo} alt="" />
            <p className="text-[#E8E8E8] text-[16px] font-light py-4">
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial
            </p>
            <div className="flex items-center justify-start space-x-5">
              <span className="text-[20px] bg-white/40 py-[6px] px-[11px] rounded-full">
                <FaGoogle className="inline-block" />
              </span>
              <span className="text-[20px] bg-white/40 py-[6px] px-[11px] rounded-full">
                <FaTwitter className="inline-block" />
              </span>
              <span className="text-[20px] bg-white/40 py-[6px] px-[11px] rounded-full">
                <FaInstagram className="inline-block" />
              </span>
              <span className="text-[20px] bg-white/40 py-[6px] px-[11px] rounded-full">
                <FaLinkedin className="inline-block" />
              </span>
            </div>
          </div>
          <div className="text-white lg:w-1/5 w-full lg:mb-0 mb-5">
            <h2 className="text-[20px] font-semibold inline-block border-b border-b-red-600">About</h2>
            <ul className="pt-[50px]">
              <li className="pb-4 text-[15px] font-light">Home</li>
              <li className="pb-4 text-[15px] font-light">Service</li>
              <li className="pb-4 text-[15px] font-light">Contact</li>
            </ul>
          </div>
          <div className="text-white lg:w-1/5 w-full lg:mb-0 mb-5">
            <h2 className="text-[20px] font-semibold inline-block border-b border-b-red-600">Company</h2>
            <ul className="pt-[50px]">
              <li className="pb-4 text-[15px] font-light">Why Car Doctor</li>
              <li className="pb-4 text-[15px] font-light">About</li>
            </ul>
          </div>
          <div className="text-white lg:w-1/5 w-full">
            <h2 className="text-[20px] font-semibold inline-block border-b border-b-red-600">Support</h2>
            <ul className="pt-[50px]">
              <li className="pb-4 text-[15px] font-light">Support Center</li>
              <li className="pb-4 text-[15px] font-light">Feedback</li>
              <li className="pb-4 text-[15px] font-light">Accesbility</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
