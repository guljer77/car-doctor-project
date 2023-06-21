import React from "react";
import image1 from "../../../assets/Banner/3.jpg";
import image2 from "../../../assets/Banner/1.jpg";
import image3 from "../../../assets/Banner/2.jpg";
import image4 from "../../../assets/Banner/5.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Banner() {
  return (
    <div>
      <div className="carousel w-full font-inter h-[360px] lg:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image1} className="w-full" />
          <div className="text-white absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0 h-full">
            <div className="hidden lg:block">
              <h2 className="text-[48px] font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p className="text-[16px] font-light py-5">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex space-x-5">
                <button className="px-5 py-3 border border-b-[#FF3811] rounded-md bg-[#FF3811]">
                  Discover More
                </button>
                <button className="px-5 py-3 border border-b-white rounded-md ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform justify-end gap-5 -translate-y-1/2 left-5 right-0 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              <BsArrowLeft className="inline-block" />
            </a>
            <a href="#slide2" className="btn btn-circle">
              <BsArrowRight className="inline-block" />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={image2} className="w-full" />
          <div className="text-white absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0 h-full">
            <div className="top-1/2">
              <h2 className="text-[48px] font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p className="text-[16px] font-light py-5">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex space-x-5">
                <button className="px-5 py-3 border border-b-[#FF3811] rounded-md bg-[#FF3811]">
                  Discover More
                </button>
                <button className="px-5 py-3 border border-b-white rounded-md ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform justify-end gap-5 -translate-y-1/2 left-5 right-0 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              <BsArrowLeft className="inline-block" />
            </a>
            <a href="#slide3" className="btn btn-circle">
              <BsArrowRight className="inline-block" />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image3} className="w-full" />
          <div className="text-white absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0 h-full">
            <div className="top-1/2">
              <h2 className="text-[48px] font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p className="text-[16px] font-light py-5">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex space-x-5">
                <button className="px-5 py-3 border border-b-[#FF3811] rounded-md bg-[#FF3811]">
                  Discover More
                </button>
                <button className="px-5 py-3 border border-b-white rounded-md ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform justify-end gap-5 -translate-y-1/2 left-5 right-0 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              <BsArrowLeft className="inline-block" />
            </a>
            <a href="#slide4" className="btn btn-circle">
              <BsArrowRight className="inline-block" />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image4} className="w-full" />
          <div className="text-white absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0 h-full">
            <div className="top-1/2">
              <h2 className="text-[48px] font-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p className="text-[16px] font-light py-5">
                There are many variations of passages of available, but <br />{" "}
                the majority have suffered alteration in some form
              </p>
              <div className="flex space-x-5">
                <button className="px-5 py-3 border border-b-[#FF3811] rounded-md bg-[#FF3811]">
                  Discover More
                </button>
                <button className="px-5 py-3 border border-b-white rounded-md ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex transform justify-end gap-5 -translate-y-1/2 left-5 right-0 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              <BsArrowLeft className="inline-block" />
            </a>
            <a href="#slide1" className="btn btn-circle">
              <BsArrowRight className="inline-block" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
